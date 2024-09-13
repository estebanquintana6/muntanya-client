"use client";
import ProjectGalleryItem from "./ProjectGalleryItem";
import { Product } from "@/app/utils/interfaces/product";

interface OwnProps {
  products: Product[];
  onDelete: (id: string) => Promise<void>;
  refreshProducts: () => Promise<void>;
}

export default function ProjectGallery({
  products,
  onDelete,
  refreshProducts,
}: OwnProps) {
  return (
    <section className="flex flex-col px-4 py-16">
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProjectGalleryItem
            product={product}
            onDelete={onDelete}
            refreshProducts={refreshProducts}
          />
        ))}
      </div>
    </section>
  );
}
