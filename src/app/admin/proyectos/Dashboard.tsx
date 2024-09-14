"use client";
import { useEffect, useState } from "react";
import Actionbar from "./ActionBar";
import ProjectGallery from "./ProjectGallery";

import { Product } from "@/app/utils/interfaces/product";

interface OwnProps {
  fetchProducts: () => Promise<Product[]>;
  onDelete: (id: string) => Promise<void>;
}

export default function ProjectDashboard({
  fetchProducts,
  onDelete,
}: OwnProps) {
  const [products, setProducts] = useState<Product[]>([]);

  const refreshProducts = async () => {
    const res = await fetchProducts();
    setProducts(res);
  };

  useEffect(() => {
    const fetch = async () => refreshProducts();
    fetch();
  }, []);

  return (
    <section className="w-full p-12">
      <h2 className="text-5xl font-zodiak-bold">Productos</h2>
      <Actionbar refreshProducts={refreshProducts} />
      <ProjectGallery
        products={products}
        refreshProducts={refreshProducts}
        onDelete={onDelete}
      />
    </section>
  );
}
