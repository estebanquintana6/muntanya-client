"use client";
import { useState, useCallback, ChangeEvent } from "react";
import toast from "react-hot-toast";

import Modal from "@/app/common/Modal";

interface OwnProps {
  onClose: () => void;
}

export default function CreateProjectModal({ onClose }: OwnProps) {
  const [data, setData] = useState<string[]>([]);
  const [files, setFiles] = useState<File[] | null>(null);

  const onChangePicture = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.currentTarget.files && event.currentTarget.files;
      const newFilesArr: File[] = [];
      setData([]);

      Array.from(files ?? []).forEach((file) => {
        if (file.size / 1024 / 1024 > 50) {
          toast.error("File size too big (max 50MB)");
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

  return (
    <Modal title={"Crear nuevo producto"} onClose={onClose}>
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
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
        {data.length > 0 &&
          data.map((url) => (
            <div className="group relative mt-2 flex h-60 cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50">
              <img
                src={url}
                alt="Preview"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          ))}

        <div className="grid gap-4 mb-4 grid-cols-2 mt-4">
          <div className="col-span-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Escribe el nombre del producto"
              required={true}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Precio
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="$2999"
              required={true}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Categoría
            </label>
            <select
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option>Selecciona una categoría</option>
              <option value="TV">TV/Monitors</option>
              <option value="PC">PC</option>
              <option value="GA">Gaming/Console</option>
              <option value="PH">Phones</option>
            </select>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Descripción de producto
            </label>
            <textarea
              id="description"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Escribe la descripción del producto"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
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
          Add new product
        </button>
      </form>
    </Modal>
  );
}
