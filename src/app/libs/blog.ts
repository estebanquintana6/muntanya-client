import axios from "axios";
import { cookies } from "next/headers";

import { BlogEntry } from "../utils/interfaces/blogEntry";

export async function getBlogEntries(): Promise<BlogEntry[]> {
  try {
    const { data } = await axios.get(`${process.env.SERVER_URL}/blog`);
    return data;
  } catch {
    console.error("Error al obtener las entradas de blog");
    return [];
  }
}

export async function getRecentBlogEntries(): Promise<BlogEntry[]> {
  try {
    const { data } = await axios.get(`${process.env.SERVER_URL}/blog/recent`);
    return data;
  } catch {
    console.error("Error al obtener las entradas de blog");
    return [];
  }
}

export async function getProductById(id: string): Promise<BlogEntry | null> {
  try {
    const { data } = await axios.get(`${process.env.SERVER_URL}/blog/${id}`);
    return data;
  } catch (e) {
    return null;
  }
}

export async function deleteBlogEntry(_id: string) {
  try {
    const { data } = await axios.delete(
      `${process.env.SERVER_URL}/blog/delete`,
      {
        data: { _id },
        headers: {
          Authorization: cookies().get("session")?.value,
        },
      },
    );
    return data;
  } catch (e) {
    console.error("Error al eliminar el producto", e);
    return null;
  }
}
