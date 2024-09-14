import Navbar from "../landing/shared/Navbar";
import ProjectGallery from "./ProjectGallery";

import { Product } from "../utils/interfaces/product";

import { getProducts } from "../libs/projects";

export default async function Proyectos() {

  const products : Product[] = await getProducts();

  return (
    <main className="flex flex-col min-h-screen bg-brown-100 pt-12">
      <div className="py-10 sm:py-20 mx-auto">
        <h1 className="text-6xl smd:text-7xl lg:text-8xl font-zodiak-bold text-primary">
          Productos
        </h1>
      </div>
      <ProjectGallery products={products} />
      <Navbar variant="dark" />
    </main>
  );
}
