import Navbar from "../landing/shared/Navbar";
import ProjectGallery from "./ProjectGallery";

import { Product } from "../utils/interfaces/product";

import { getProducts } from "../libs/projects";

export default async function Proyectos() {

  const products : Product[] = await getProducts();

  return (
    <main className="flex flex-col min-h-screen bg-primary pt-12">
      <div className="p-6">
        <h1 className="text-6xl lg:text-8xl sm:text-9xl text-black font-zodiak-light">
          Productos
        </h1>
      </div>
      <ProjectGallery products={products} />
      <Navbar />
    </main>
  );
}
