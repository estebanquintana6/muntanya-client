"use client";

import { Product } from "@/app/utils/interfaces/product";

interface OwnProps {
  product: Product;
}

export default function ProductView({ product }: OwnProps) {
  const { title, tags, photo_urls, description } = product;

  return (
    <section className="min-h-screen">
      <div className="px-4 sm:px-10 py-10 sm:py-20">
        <h1 className="text-5xl sm:text-6xl smd:text-7xl lg:text-8xl font-zodiak-bold text-brown-100">
          { title }
        </h1>
        <div className="flex flex-row flex-wrap w-full mt-6 gap-4">
            {tags.map((tag) => <span className="p-2 bg-brick text-primary font-zodiak-regular rounded-full">{tag}</span>)}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 mt-4 gap-4 px-12 pb-12">
        { photo_urls.map((url) => <img src={url} className="col-span-1" key={url} />)}
      </div>
      <div className="mt-4 w-full sm:w-2/3 px-8 sm:px-12 py-12">
        <h1 className="text-3xl font-zodiak-bold text-brown-100 mb-2">Ejemplo de subtitulo</h1>
        <p className="text-lg text-brown-100 font-zodiak-regular whitespace-pre-wrap">{ description }</p>
      </div>
    </section>
  );
}
