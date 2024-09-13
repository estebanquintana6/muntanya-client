import axios from "axios";
import { cookies } from "next/headers";

import { Product } from "../utils/interfaces/product";

export async function getProducts() : Promise<Product[]> {
    try {
        const { data } = await axios.get(`${process.env.SERVER_URL}/products`);
        return data;
    } catch {
        console.error("Error al obtener los productos");
        return [];
    }
}

export async function deleteProduct(_id: string) {
    try {
        const { data } = await axios.delete(`${process.env.SERVER_URL}/products/delete`, {
            data: { _id },
            headers: {
                Authorization: cookies().get("session")?.value
            }
        });
        return data;
    } catch(e) {
        console.error("Error al eliminar el producto", e);
        return null;
    }
}