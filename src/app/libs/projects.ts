import axios from "axios";
import { cookies } from "next/headers";

import { Product } from "../utils/interfaces/product";

export async function getProducts(): Promise<Product[]> {
  try {
    const { data } = await axios.get(`${process.env.SERVER_URL}/products`, {
      // query URL without using browser cache
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
    return data;
  } catch {
    console.error("Error al obtener los productos");
    return [];
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const { data } = await axios.get(`${process.env.SERVER_URL}/products/${id}`);
    return data;
  } catch (e) {
    return null;
  }
}

export async function getFavoriteProducts(): Promise<Product[]> {
  try {
    const { data } = await axios.get(`${process.env.SERVER_URL}/products/favorite`);
    return data;
  } catch {
    console.error("Error al obtener los productos");
    return [];
  }
}

export async function getRelatedById(id: string): Promise<Product[]> {
  try {
    const { data } = await axios.get(`${process.env.SERVER_URL}/products/related/${id}`);
    return data;
  } catch (e) {
    return [];
  }
}

export async function deleteProduct(_id: string) {
  try {
    const { data } = await axios.delete(
      `${process.env.SERVER_URL}/products/delete`,
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
