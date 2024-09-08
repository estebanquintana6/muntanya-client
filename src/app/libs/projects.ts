import axios from "axios";

export async function getProducts() {
    try {
        const { data } = await axios.get(`${process.env.SERVER_URL}/products`);
        return data;
    } catch {
        console.error("Error al obtener los productos");
        return [];
    }

}