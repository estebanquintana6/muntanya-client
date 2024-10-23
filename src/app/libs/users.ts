import axios from "axios";
import { cookies } from "next/headers";

import { User } from "../utils/interfaces/user";

export async function getUsers(): Promise<User[]> {
  try {
    const { data } = await axios.get(`${process.env.SERVER_URL}/users`, {
      // query URL without using browser cache
      headers: {
        Authorization: cookies().get("session")?.value,
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
    return data;
  } catch {
    console.error("Error al obtener los usuarios");
    return [];
  }
}

export async function deleteUser(_id: string) {
    try {
      const { data } = await axios.delete(
        `${process.env.SERVER_URL}/users/delete`,
        {
          data: { id: _id },
          headers: {
            Authorization: cookies().get("session")?.value,
          },
        },
      );
      return data;
    } catch (e) {
      console.error("Error al eliminar cotizacion", e);
      return null;
    }
  }
  