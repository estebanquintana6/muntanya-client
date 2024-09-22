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
        <div className="py-10 sm:py-20 mx-auto">
          <h1 className="text-5xl smd:text-6xl lg:text-8xl font-zodiak-light text-primary">
            PRODUCTOS
          </h1>
        </div>
        <ProjectGallery products={products} />
        <Navbar variant="dark" />
      </main>
      <Footer />
    </>
  );
}
