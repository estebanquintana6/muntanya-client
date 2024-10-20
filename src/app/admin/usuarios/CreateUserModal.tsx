"use client";
import { useState, useMemo } from "react";
import Modal from "@/app/common/Modal";
import LoadingDots from "@/app/common/FileUploader/loading-dots";
import { errorModal, successModal } from "@/app/utils/alerts";

interface OwnProps {
  onClose: () => void;
  refreshUsers: () => Promise<void>;
}

export default function CreateUserModal({ onClose, refreshUsers }: OwnProps) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [saving, setSaving] = useState<boolean>(false);

  const saveDisabled = useMemo(() => {
    return (
      name.length < 1 ||
      username.length < 1 ||
      password.length < 6 ||
      password2.length < 6 ||
      password !== password2 ||
      saving
    );
  }, [saving, name, username, password, password2]);

  const onSave = async () => {
    setSaving(true);
    const formData = new FormData();
    
    const data = {
        name,
        username,
        password,
        password2
    }
    
    try {
      const response = await fetch("/api/users/create", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const res = await response.json();

      const { status } = res;

      if (status === 200) {
        successModal("El administrador se ha creado");
        onClose();
        await refreshUsers();
      } else {
        const { data: { error } } = res;
        errorModal(error);
      }
    }
    finally {
        setSaving(false);
    }
  };

  return (
    <Modal title={"Crear nuevo admin"} onClose={onClose}>
      <form className="px-4 md:px-5">
        <div className="w-full">
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Escribe el nombre del administrador"
            required={true}
          />
        </div>
        <div className="w-full my-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Usuario
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Escribe el nombre del administrador"
            required={true}
          />
        </div>
        <div className="w-full my-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Escribe el nombre del administrador"
            required={true}
          />
        </div>

        <div className="w-full my-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Confirma contraseña
          </label>
          <input
            type="password"
            name="password2"
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Escribe el nombre del administrador"
            required={true}
          />
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
