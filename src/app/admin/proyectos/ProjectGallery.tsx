"use client";
import ProjectGalleryItem from "./ProjectGalleryItem";
import { Product } from "@/app/utils/interfaces/product";

interface OwnProps {
  products: Product[];
}

export default function ProjectGallery({ products } : OwnProps) {
  return (
    <section className="flex flex-col px-4 py-16">
      <div className="grid grid-cols-3 gap-6">
        <ProjectGalleryItem />
        <ProjectGalleryItem />
        <ProjectGalleryItem />
        <ProjectGalleryItem />
        <ProjectGalleryItem />
        <ProjectGalleryItem />
      </div>
    </section>
  );
}
