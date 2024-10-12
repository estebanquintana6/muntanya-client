import axios from "axios";
import { cookies } from "next/headers";

import { Quote } from "../utils/interfaces/quote";

export async function getQuotes(): Promise<Quote[]> {
  try {
    const { data } = await axios.get(`${process.env.SERVER_URL}/quoter`, {
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
    console.error("Error al obtener los contactos");
    return [];
  }
}

export async function getQuoteById(id: string): Promise<Quote | null> {
  try {
    const { data } = await axios.get(`${process.env.SERVER_URL}/quoter/${id}`, {
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
    console.error("Error al obtener los contactos");
    return null;
  }
}

export async function deleteQuote(_id: string) {
  try {
    const { data } = await axios.delete(
      `${process.env.SERVER_URL}/quoter/delete`,
      {
        data: { _id },
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
