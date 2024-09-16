"use client";

import GalleryItem from "./GalleryItem";
import { Product } from "../utils/interfaces/product";

interface OwnProps {
  products: Product[];
}

export default function Gallery({ products }: OwnProps) {
  return (
    <section className="flex relative w-full flex-col">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src="/split.svg" className="w-6 hidden sm:block" />
      </div>
      <div className="grid grid-col-1 sm:grid-cols-2 gap-x-[10vw] sm:gap-x-[20vw] gap-y-20 sm:gap-y-32 sm:mx-auto pb-12">
        {products.map((product) => (
          <GalleryItem product={product} key={product._id} />
        ))}
      </div>
    </section>
  );
}
