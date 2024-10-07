export enum Services {
    laminas = "laminas",
    desarrollo = "desarrollo",
    producto = "producto-personalizado",
    colaboracion = "colaboracion",
}

export interface Quote {
    _id: string;
    name: string;
    lastname: string;
    email: string;
    phone: string;
    instagram: string;
    knowMethod: string;
    services: Services[];
    description: string;
    created_at: string;
    attended: boolean;
}

export const quoteKeyMap = {
    laminas: "Compra de láminas biomateriales",
    desarrollo: "Desarrollo y diseño de proyecto",
    "producto-personalizado": "Producto personalizado",
    colaboracion: "Colaboración",
  };
  