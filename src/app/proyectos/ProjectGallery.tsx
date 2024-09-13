"use client";

import { Product } from "../utils/interfaces/product";

import Gallery from "./Gallery";

interface OwnProps {
  products: Product[];
}

export default function ProjectGallery({ products } : OwnProps) {
  return (
    <div className="p-6 sm:p-12 mt-6 w-full">
      <Gallery products={products} />
    </div>
  );
}
