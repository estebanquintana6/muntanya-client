import { BlogEntry } from "@/app/utils/interfaces/blogEntry";
import Link from "next/link";

interface OwnProps {
  related: BlogEntry[];
}

export default function RelatedEntries({ related }: OwnProps) {
  if (!related.length) return;

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <section className="w-full px-6 py-12 sm:px-12  bg-brown-25">
      <h1 className="text-2xl text-primary font-zodiak-bold mb-6 sm:text-3xl">
        Entradas relacionadas
      </h1>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {related.map((entry) => {
          const { _id, title, photo_urls, created_at } = entry;
          return (
            <div className="col-span-1 relative h-96" key={`project-${_id}`}>
              <Link href={`/proyectos/${_id}`}>
                <div className="bg-black bg-opacity-50 absolute top-0 w-full h-full rounded-2xl flex flex-col">
                  <h2 className="text-xl text-green mt-auto mx-auto font-zodiak-light uppercase sm:text-2xl">
                    {title}
                  </h2>
                  <h3 className="text-xl text-primary mb-auto mx-auto font-zodiak-regular uppercase sm:text-sm">
                    {new Date(created_at).toLocaleDateString(
                      "es-MX",
                      dateOptions,
                    )}
                  </h3>
                </div>
                <img
                  src={photo_urls[0]}
                  alt={title}
                  className="h-full w-full object-cover rounded-2xl"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
