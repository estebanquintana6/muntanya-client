"use client";
import { useState, useCallback, useMemo, ChangeEvent } from "react";
import { TagsInput } from "react-tag-input-component";

import Modal from "@/app/common/Modal";

import { successModal, errorModal } from "@/app/utils/alerts";
import LoadingDots from "@/app/common/FileUploader/loading-dots";
import { BlogEntry } from "@/app/utils/interfaces/blogEntry";

interface OwnProps {
  blogEntry: BlogEntry;
  onClose: () => void;
  refreshBlogEntries: () => Promise<void>;
}

export default function EditBlogEntryModal({
  blogEntry,
  onClose,
  refreshBlogEntries,
}: OwnProps) {
  const {
    _id,
    title: o_title,
    subtitle: o_subtitle,
    description: o_desc,
    photo_urls: o_photo_urls,
    tags: o_tags,
  } = blogEntry;

  const [title, setTitle] = useState<string>(o_title);
  const [subTitle, setSubTitle] = useState<string>(o_subtitle);
  const [description, setDescription] = useState<string>(o_desc);
  const [tags, setTags] = useState<string[]>(o_tags);
  const [data, setData] = useState<{ blob: string; url: string }[]>([]);
  const [files, setFiles] = useState<File[] | null>(null);
  const [toDeletePhotos, setToDeletePhotos] = useState<string[]>([]);

  const [saving, setSaving] = useState<boolean>(false);

  const saveDisabled = useMemo(() => {
    return title.length < 1 || description.length < 1 || saving;
  }, [saving, title, description]);

  const onChangePicture = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.currentTarget.files && event.currentTarget.files;
      const newFilesArr: File[] = [];
      setData([]);

      Array.from(files ?? []).forEach((file) => {
        if (file.size / 1024 / 1024 > 2) {
          errorModal("Hay una foto que pesa más de 2MB");
          return;
        } else {
          newFilesArr.push(file);
          const reader = new FileReader();
          reader.onload = (e) => {
            setData((prev) => [
              ...prev,
              { blob: e.target?.result as string, url: file.name },
            ]);
          };
          reader.readAsDataURL(file);
        }
      });

      setFiles(newFilesArr);
    },
    [setData],
  );

  const handleServerPhotoDelete = (url: string) => {
    setToDeletePhotos((prev) => Array.from(new Set([...prev, url])));
  };

  const handleLocalPhotoDelete = (url: string) => {
    setFiles((prev) => (prev || []).filter(({ name }) => name !== url));
    setData((prev) =>
      (prev || []).filter(({ url: dataUrl }) => dataUrl !== url),
    );
  };

  const onSave = async () => {
    setSaving(true);
    const formData = new FormData();

    files?.forEach((file) => {
      formData.append("photos", file); // 'file${index}' is the field name for each file
    });

    formData.append("id", _id);
    formData.append("title", title);
    formData.append("subtitle", subTitle);
    formData.append("description", description);
    formData.append("toDeletePhotos", JSON.stringify(toDeletePhotos));
    formData.append("tags", JSON.stringify(tags));

    try {
      const { status } = await fetch("/api/blog/update", {
        method: "POST",
        body: formData,
      });

      if (status === 200) {
        successModal("La entrada de blog se ha actualizado");
        await refreshBlogEntries();
        onClose();
      } else {
        errorModal("La entrada de blog no se pudo crear");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal title={title} onClose={onClose}>
      <form className="p-4 md:p-5">
        <div>
          <div className="space-y-1 mb-4">
            <p className="text-sm text-gray-500">
              Sube una foto. Formatos aceptados: .png, .jpg, .gif, .mp4
            </p>
          </div>
          <div className="mt-1 flex flex-col rounded-md shadow-sm">
            <label
              htmlFor="image-upload"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Fotos
            </label>
            <input
              id="image-upload"
              name="image"
              multiple={true}
              placeholder="Elige varias fotos"
              title="Elige varias fotos"
              type="file"
              accept="image/*"
              className="ml-2 justify-center align-middle"
              onChange={onChangePicture}
            />
          </div>
        </div>
        {o_photo_urls.length > 0 &&
          o_photo_urls.map((url) => (
            <div
              className={`${toDeletePhotos.includes(url) && "hidden "}group relative cursor-auto mt-2 flex h-60 flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50`}
              key={url}
            >
              <div className="absolute top-0">
                <button
                  className="mr-auto ml-2 w-12 h-12 bg-red-600 mt-2 rounded-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    handleServerPhotoDelete(url);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
              <img
                src={url}
                alt="Preview"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          ))}

        {data.length > 0 &&
          data.map(({ url, blob }) => (
            <div
              className="group relative cursor-auto mt-2 flex h-60 flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50"
              key={url}
            >
              <div className="absolute top-0">
                <button
                  className="mr-auto ml-2 w-12 h-12 bg-red-600 mt-2 rounded-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLocalPhotoDelete(url);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 m-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
              <img
                src={blob}
                alt="Preview"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          ))}
        <div className="w-full mt-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Escribe el nombre del producto"
            required={true}
          />
        </div>
        <div className="w-full mt-4">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tags
          </label>
          <TagsInput
            value={tags}
            onChange={setTags}
            name="tags"
            classNames={{
              input:
                "block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500",
            }}
            placeHolder="Introduce los tags"
          />
        </div>
        <div className="w-full mt-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Subtítulo de descripción
          </label>
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Escribe el nombre del producto"
            required={true}
          />
        </div>
        <div className="w-full mt-4">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Descripción de producto
          </label>
          <textarea
            id="description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Escribe la descripción del producto"
          ></textarea>
        </div>
        <div className="flex mt-4">
          <button
            type="submit"
            className={`${saveDisabled && "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400 "}text-black mx-auto inline-flex border-brown-100 border-2 items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
            disabled={saveDisabled}
            onClick={(e) => {
              e.preventDefault();
              onSave();
            }}
          >
            {saving ? (
              <LoadingDots color="#808080" />
            ) : (
              <>
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Guardar
              </>
            )}
          </button>
        </div>
      </form>
    </Modal>
  );
}
