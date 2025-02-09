import Navbar from "../landing/shared/Navbar";
import ProjectGallery from "./ProjectGallery";
import Footer from "../landing/shared/Footer";

import { Product } from "../utils/interfaces/product";

import { getProducts } from "../libs/projects";

export default async function Proyectos() {
  const products: Product[] = await getProducts();

  return (
    <>
      <main className="flex flex-col min-h-screen bg-brown-100 pt-12">
        <Navbar variant="dark" />
        <div className="py-4 mx-auto sm:py-8 sm:mx-48 border-b-2 border-primary">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-zodiak-light text-primary">
            PRODUCTOS
          </h1>
        </div>
        <ProjectGallery products={products} />
      </main>
      <Footer />
    </>
  );
}
