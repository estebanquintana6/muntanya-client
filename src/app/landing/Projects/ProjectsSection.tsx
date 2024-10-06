"use client";

import Link from "next/link";
import LandingPageButton from "../shared/LandingPageBtn";
import ProjectSwiper from "./ProjectSwiper";

import { Product } from "@/app/utils/interfaces/product";

interface OwnProps {
  favorites: Product[];
}

export default function ProjectsSection({ favorites }: OwnProps) {
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
      <div className="px-10 mt-8 sm:px-16">
        {favorites.map(
          ({ _id, title, subtitle, description, photo_urls }, index) => (
            <div
              className={`w-full flex flex-col-reverse ${index % 2 ? "sm:flex-row" : "sm:flex-row-reverse"} gap-x-8 my-12 sm:h-[70vh]`}
              key={_id}
            >
              <div className="h-full w-full relative sm:w-1/2">
                <Link href={`/proyectos/${_id}`} className="absolute w-full h-full top-0" />
                <img
                  src={photo_urls[0]}
                  className="object-cover h-full w-full rounded-2xl"
                />
              </div>
              <div
                className={`h-full w-full py-8 ${index % 2 ? "sm:border-l-4" : "sm:border-r-4"} sm:border-brown-100 sm:w-1/2 sm:p-8`}
              >
                <h1 className="text-3xl text-brown-50 font-zodiak-light uppercase">
                  {title}
                </h1>
                <h2 className="text-xl text-brown-25 font-zodiak-bold mt-8">
                  {subtitle}
                </h2>
                <p className="text-md text-brown-100 text-justify font-zodiak-regular whitespace-pre text-wrap line-clamp-[12] sm:line-clamp-[20]">
                  {description}
                </p>
              </div>
            </div>
          ),
        )}
      </div>
      <div className="flex justify-center text-center mt-8">
        <LandingPageButton title="Más proyectos" href="/proyectos" />
      </div>
    </section>
  );
}
