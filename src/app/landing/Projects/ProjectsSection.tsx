"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import LandingPageButton from "../shared/LandingPageBtn";

import "swiper/css";
import "swiper/css/scrollbar";

export default function ProjectsSection() {
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
        <div className="max-w-6xl mx-[1.5em] md:mx-auto mt-8 sm:mt-0 sm:w-2/3">
          <Swiper
            modules={[Scrollbar]}
            loop={false}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            centeredSlides={false}
            grabCursor={true}
            mousewheel={{
              invert: false,
            }}
            breakpoints={{
              0: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              468: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
              768: {
                spaceBetween: 30,
                slidesPerView: 3,
              },
            }}
            className="breakpoint"
          >
            <SwiperSlide>
              <div className="relative cursor-pointer rounded-md">
                <img
                  src="/photos/wrap.jpg"
                  className="absolute h-full hover:ease-in-out rounded-md transition duration-700 hover:opacity-0 top-0 hidden md:block"
                />
                <img src="/photos/FORAS-1.jpg" className="h-full rounded-md" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative cursor-pointer rounded-md">
                <img
                  src="/photos/wrap.jpg"
                  className="absolute h-full hover:ease-in-out rounded-md transition duration-700 hover:opacity-0 top-0 hidden md:block"
                />
                <img src="/photos/FORAS-2.jpg" className="h-full rounded-md" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative cursor-pointer rounded-md">
                <img
                  src="/photos/wrap.jpg"
                  className="absolute h-full hover:ease-in-out rounded-md transition duration-700 hover:opacity-0 top-0 hidden md:block"
                />
                <img src="/photos/FORAS-4.jpg" className="h-full rounded-md" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="grid grid-flow-dense lg:grid-flow-row grid-cols-12 py-8 border-t-grid border-grid-color">
        <div className="col-span-12 lg:col-span-6 lg:flex mt-8 lg:mt-0 px-4 lg:pl-8 justify-center">
          <img src="/photos/UAQ-1.jpg"></img>
        </div>
        <div className="hidden lg:col-span-3 lg:flex mt-8 lg:mt-0 px-4 lg:px-8 justify-center">
          <img src="/photos/UAQ-2.jpg"></img>
        </div>
        <div className="-order-1 lg:order-3 col-span-12 lg:col-span-3 text-primary-text relative px-4 lg:flex flex-col justify-top">
          <div className="text-left break-words w-full">
            <h4 className="capitalize text-2xl pb-4 font-zodiak-bold text-brown-50">
              Making Space From Waste
            </h4>
            <p className="pb-2 font-zodiak-regular">
              We reclaim and recycle plastic waste from landfills, oceans and
              rivers to craft elevated design objects and spaces.
            </p>
            <div className="text-0">
              <a
                className=" inline-block text-primary-accent font-heading text-base items-center justify-center border-b-text-2 hover:text-primary-accent border-transparent hover:border-primary-accent transition"
                href="https://spaceavailable.tv/pages/studio"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center">
        <LandingPageButton title="Ver más proyectos" href="/proyectos" />
      </div>
    </section>
  );
}
