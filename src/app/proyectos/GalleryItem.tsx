"use client";
import { useRef } from "react";
import { Product } from "../utils/interfaces/product";
import Link from "next/link";
import { useIsVisible } from "../utils/useIsVisible";

interface OwnProps {
  product: Product;
}

export default function GalleryItem({ product }: OwnProps) {
  const imgRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(imgRef);

  const { _id, title, photo_urls, tags = [], description } = product;

  return (
    <article className="col-span-1 p-4 sm:p-0 w-full sm:w-[25vw]">
      <div
        ref={imgRef}
        className={`transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <Link href={`proyectos/${_id}/`}>
          <img src={photo_urls[0]} className="w-full rounded-xl" />
        </Link>
        <div className="h-8 w-8 bg-blue-600 transition-opacity ease-in duration-700 opacity-100 hover:opacity-0"></div>
      </div>
      <div className="mt-4 w-full">
        <div className="my-4 flex flex-row flex-wrap w-full gap-2">
          {tags.map((tag) => (
            <span
              className="text-sm text-nowrap text-primary font-zodiak-regular p-2 border-2 border-green rounded-2xl"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-zodiak-light text-primary uppercase">{title}</h1>
        <p className="text-md font-zodiak-regular text-primary line-clamp-3">
          {description}
        </p>
      </div>
    </article>
  );
}
