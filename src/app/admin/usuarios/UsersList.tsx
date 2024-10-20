"use client";
import { User } from "@/app/utils/interfaces/user";
import { useEffect, useState } from "react";
import { deleteWarningModal } from "@/app/utils/alerts";

import CreateUserBtn from "./CreateUserBtn";

interface OwnProps {
  currentUser: string;
  isSuperAdmin: boolean;
  getUsers: () => Promise<User[]>;
  deleteUser: (id: string) => Promise<void>;
}

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function UsersList({
  getUsers,
  deleteUser,
  currentUser,
  isSuperAdmin,
}: OwnProps) {
  const [users, setUsers] = useState<User[]>([]);

  const fetchData = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteUser = async (id: string) => {
    deleteWarningModal({
      title: "este usuario",
      confirmCb: async () => {
        await deleteUser(id);
      },
      finallyCb: async () => {
        await fetchData();
      },
    });
  };

  return (
    <div className="w-full sm:w-[70vw] mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium">Lista de usuarios</h1>
        </div>
      </div>
      <p className="text-slate-500 mt-4">
        Estos son los administradores de la página
      </p>

      {isSuperAdmin && (
        <div className="flex flex-row-reverse mx-4">
          <CreateUserBtn refreshUsers={fetchData} />
        </div>
      )}
      <div id="tasks" className="my-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Usuario
                </th>
                <th scope="col" className="px-6 py-3">
                  Rol
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha de registro
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Eliminar</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ _id, username, name, role, created_at }) => (
                <tr className="bg-white border-b hover:bg-gray-50" key={_id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {name}
                  </th>
                  <td className="px-6 py-4">{username}</td>
                  <td className="px-6 py-4">{role}</td>
                  <td className="px-6 py-4">
                    {" "}
                    {new Date(created_at).toLocaleDateString(
                      "es-MX",
                      dateOptions,
                    )}
                  </td>
                  {currentUser !== username && (
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDeleteUser(_id)}
                        className="font-medium text-red-600 hover:underline"
                      >
                        Eliminar
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
