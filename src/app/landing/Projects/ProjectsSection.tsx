"use client";

import LandingPageButton from "../shared/LandingPageBtn";
import ProjectSwiper from "./ProjectSwiper";

import { Product } from "@/app/utils/interfaces/product";

interface OwnProps {
  favorites: Product[];
}

export default function ProjectsSection({ favorites }: OwnProps) {
  console.log(favorites);

  return (
    <section className="w-full min-h-screen bg-primary py-12">
      <div className="w-full relative flex flex-col sm:flex-row">
        <div className="w-full md:w-1/4 lg:flex pl-8 flex-col justify-center lg:border-r-8 border-brown-100">
          <div className="text-left break-words">
            <h4 className="capitalize text-2xl pb-4 font-zodiak-bold text-brown-50">
              explora, aprende, protege
            </h4>
            <p className="pb-2 font-zodiak-regular">
              Aquí debe de ir una breve explicación de lo que trata este
              proyecto,
            </p>
            <div className="text-0">
              <a
                className=" inline-block text-primary-accent font-heading text-base items-center justify-center border-b-text-2 hover:text-primary-accent border-transparent hover:border-primary-accent transition"
                href="https://spaceavailable.tv/pages/studio"
              >
                <span className="inline-flex font-zodiak-italic text-blue">
                  Aprende más
                </span>
              </a>
            </div>
          </div>
        </div>
        <ProjectSwiper />
      </div>
      <div className="px-16 mt-8">
        {favorites.map(({ _id, title, subtitle, description, photo_urls }) => (
          <div className="w-full h-[70vh] flex gap-x-8" key={_id}>
            <div className="h-full w-1/2">
              <img
                src={photo_urls[0]}
                className="object-cover h-full w-full rounded-2xl"
              />
            </div>
            <div className="h-full w-1/2 border-l-4 border-brown-100 p-8">
              <h1 className="text-3xl text-brown-50 font-zodiak-bold">
                {title}
              </h1>
              <h2 className="text-xl text-brown-25 font-zodiak-bold mt-8">
                {subtitle}
              </h2>
              <p className="text-md text-brown-100 font-zodiak-regular whitespace-pre text-wrap">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center text-center mt-8">
        <LandingPageButton title="Ver más proyectos" href="/proyectos" />
      </div>
    </section>
  );
}
