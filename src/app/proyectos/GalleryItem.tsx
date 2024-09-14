"use client";

import { Product } from "../utils/interfaces/product";

interface OwnProps {
  product: Product;
}

export default function GalleryItem({ product }: OwnProps) {
  const { title, photo_urls, tags = [] } = product;
  return (
    <article className="col-span-1 p-4 sm:p-0 w-full sm:w-[25vw]">
      <img src={photo_urls[0]} className="w-full" />
      <div className="mt-4 w-full">
        <div className="my-4 flex flex-row flex-wrap w-full gap-2">
          {tags.map((tag) => (
            <span
              className="text-sm text-nowrap text-primary font-zodiak-regular p-2 border-2 border-primary rounded-2xl"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-zodiak-bold text-primary">{title}</h1>
      </div>
    </article>
  );
}
