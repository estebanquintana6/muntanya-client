"use client";

import { BlogEntry } from "@/app/utils/interfaces/blogEntry";

interface OwnProps {
  blogEntry: BlogEntry;
}

export default function BlogEntry({ blogEntry }: OwnProps) {
  const { title, subtitle, description, created_at } = blogEntry;

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      <header className="bg-header flex items-center justify-center h-screen pb-12">
        <div className="font-zodiak-regular bg-primary mx-4 p-4 text-center md:p-8">
          <p className="font-zodiak-italic text-sm">
            {new Date(created_at).toLocaleDateString("es-MX", dateOptions)}
          </p>
          <h1 className="text-5xl uppercase">{title}</h1>
          <p className="text-lg">Majo Gayou</p>
        </div>
      </header>

      <div className="font-serif leading-normal mx-auto py-12 px-4 max-w-[50vw]">
        <p className="mb-6 text-xl md:text-2xl uppercase">{subtitle}</p>
        <p className="mb-4 text-lg whitespace-pre text-wrap">{description}</p>
      </div>
    </>
  );
}
