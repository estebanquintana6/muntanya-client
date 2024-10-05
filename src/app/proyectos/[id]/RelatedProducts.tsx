import { Product } from "@/app/utils/interfaces/product";
import Link from "next/link";

interface OwnProps {
  related: Product[];
}

export default function RelatedProducts({ related }: OwnProps) {
  if (!related.length) return;

  return (
    <section className="w-full px-6 py-12 sm:px-12  bg-brown-25">
      <h1 className="text-2xl text-primary font-zodiak-bold mb-6 sm:text-3xl">
        Proyectos relacionados
      </h1>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {related.map((product) => {
          const { _id, title, photo_urls } = product;
          return (
            <div className="col-span-1 relative" key={`project-${_id}`}>
              <Link href={`/proyectos/${_id}`}>
                <div className="bg-black bg-opacity-50 absolute top-0 w-full h-full rounded-2xl flex">
                  <h2 className="text-xl text-primary m-auto font-zodiak-light uppercase sm:text-2xl">
                    {title}
                  </h2>
                </div>
                <img
                  src={photo_urls[0]}
                  alt={title}
                  className="h-full object-cover rounded-2xl"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
