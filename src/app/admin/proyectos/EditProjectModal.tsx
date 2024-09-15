"use client";
import { useState, useCallback, ChangeEvent } from "react";
import { TagsInput } from "react-tag-input-component";

import { Product } from "@/app/utils/interfaces/product";
import Modal from "@/app/common/Modal";

import { successModal, errorModal } from "@/app/utils/alerts";
import LoadingDots from "@/app/common/FileUploader/loading-dots";

interface OwnProps {
  product: Product;
  onClose: () => void;
  refreshProducts: () => Promise<void>;
}

export default function EditProjectModal({
  product,
  onClose,
  refreshProducts,
}: OwnProps) {
  const {
    _id,
    title: o_title,
    description: o_desc,
    photo_urls: o_photo_urls,
    tags: o_tags,
  } = product;

  const [title, setTitle] = useState<string>(o_title);
  const [description, setDescription] = useState<string>(o_desc);
  const [tags, setTags] = useState<string[]>(o_tags);
  const [data, setData] = useState<string[]>([]);
  const [files, setFiles] = useState<File[] | null>(null);
  const [toDeletePhotos, setToDeletePhotos] = useState<string[]>([]);

  const [saving, setSaving] = useState<boolean>(false);

  const onChangePicture = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.currentTarget.files && event.currentTarget.files;
      const newFilesArr: File[] = [];
      setData([]);

      Array.from(files ?? []).forEach((file) => {
        if (file.size / 1024 / 1024 > 2) {
          return;
        } else {
          newFilesArr.push(file);
          const reader = new FileReader();
          reader.onload = (e) => {
            setData((prev) => [...prev, e.target?.result as string]);
          };
          reader.readAsDataURL(file);
        }
      });

      setFiles(newFilesArr);
    },
    [setData],
  );

  const onSave = async () => {
    setSaving(true);
    const formData = new FormData();

    files?.forEach((file) => {
      formData.append("photos", file); // 'file${index}' is the field name for each file
    });

    formData.append("id", _id);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("toDeletePhotos", JSON.stringify(toDeletePhotos));
    formData.append("tags", JSON.stringify(tags));

    try {
      const { status } = await fetch("/api/product/update", {
        method: "POST",
        body: formData,
      });

      if (status === 200) {
        successModal("El producto se ha creado");
        await refreshProducts();
        onClose();
      } else {
        errorModal("El producto no se pudo crear");
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
              className="group relative cursor-auto mt-2 flex h-60 flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50"
              key={url}
            >
              <img
                src={url}
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
            className="text-black mx-auto inline-flex border-brown-100 border-2 items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
