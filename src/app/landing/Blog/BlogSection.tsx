"use client";

import LandingPageButton from "../shared/LandingPageBtn";

export default function BlogSection() {
  return (
    <section className="min-h-screen bg-brown-50 py-12 px-9 flex flex-col">
      <div className="text-6xl text-center font-zodiak-bold mb-10 text-white">
        Blog
      </div>
      <div className="flex pl-8 flex-col lg:ml-auto justify-center border-l-8 border-brown-100 text-primary lg:w-1/3">
          <div className="text-left break-words w-full justify-center my-auto">
            <h4 className="text-2xl pb-4 font-zodiak-bold">
              Encuentra un mundo de contenidos
            </h4>
            <p className="pb-2 font-zodiak-regular">
              Aquí debe de ir una breve explicación de lo que trata este
              blog,
            </p>
          </div>
        </div>
      <div className="container font-zodiak-regular mx-auto">
        <div className="grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
          <div className="relative flex flex-col items-start justify-end h-full col-span-9 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4 bg-blog-default-1 bg-cover">
            <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-50"></div>
            <a
              href="#_"
              className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
            ></a>
            <div className="relative z-20 w-full h-auto py-8 text-white border-t-0 border-indigo-200 px-7">
              <a
                href="#_"
                className="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-black bg-white"
              >
                Materiales
              </a>
              <h2 className="mb-5 text-5xl font-bold">
                <a href="#_">Ejemplo 1</a>
              </h2>
              <p className="mb-2 text-lg font-normal text-purple-100 opacity-100">
                Quench satisfying designs to help you stir up emotion and tell a
                story.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-end h-full col-span-9 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4 bg-blog-default-2 bg-cover">
            <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-50"></div>
            <a
              href="#_"
              className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
            ></a>
            <div className="relative z-20 w-full h-auto py-8 text-white bg-blue-400 border-t-0 border-indigo-200 px-7">
              <a
                href="#_"
                className="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-black bg-white"
              >
                Materiales
              </a>
              <h2 className="mb-5 text-5xl font-bold">
                <a href="#_">Ejemplo 2</a>
              </h2>
              <p className="mb-2 text-lg font-normal text-blue-100 opacity-100">
                Living a healthier lifestyle will help with your productivity
                and your mind-set.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-start justify-end h-full col-span-9 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col bg-blog-default-3 bg-cover">
            <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-50"></div>
            <a
              href="#_"
              className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
            ></a>
            <div className="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white border-t-0 border-indigo-200 sm:h-full xl:h-auto px-7">
              <a
                href="#_"
                className="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-black bg-white"
              >
                Materiales
              </a>
              <h2 className="mb-5 text-5xl font-bold">
                <a href="#_">Ejemplo 3</a>
              </h2>
              <p className="mb-2 text-lg font-normal opacity-100 text-indigo-50">
                Learn about the evolution of gaming and how it started a
                revolution.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center">
        <LandingPageButton title="Visita el blog" />
      </div>
    </section>
  );
}
