"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import { BlogEntry } from "@/app/utils/interfaces/blogEntry";

import "swiper/css";
import "swiper/css/pagination";

interface OwnProps {
  blogEntry: BlogEntry;
}

export default function BlogEntryPage({ blogEntry }: OwnProps) {
  const { title, subtitle, description, photo_urls, created_at } = blogEntry;

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <section className="gap-8 w-full md:h-screen sm:pl-12 pb-12 sm:blog-grid">
      <div className="flex flex-col mb-12 sm:mb-0 px-6 sm:px-4">
        <h1 className="uppercase text-5xl sm:blog-entry-title block break-words hyphens-auto pb-4 text-brown-100 font-zodiak-light">
          {title}
        </h1>
        <div className="flex border-b-2 border-brown-50 text-brown-100">
          <h2 className="text-sm block mt-2 break-words hyphens-auto font-zodiak-bold">
            {new Date(created_at).toLocaleDateString("es-MX", dateOptions)}
          </h2>
        </div>
        <h3 className="text-sm mt-4 break-words hyphens-auto font-zodiak-bold">
          {subtitle}
        </h3>
      </div>
      <div className="overflow-y-scroll flex flex-col px-6 sm:pr-24">
        {photo_urls.length > 1 ? (
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            scrollbar={{ draggable: true }}
            modules={[Scrollbar]}
            pagination={{
              clickable: true,
            }}
            className="min-h-[60vh] h-[60vh] w-full"
          >
            {photo_urls.map((url) => (
              <SwiperSlide className="blog-swiper-slide w-auto">
                <img src={url} className="h-full rounded-2xl" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="w-full h-[60vh]">
            <img
              src={photo_urls[0]}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        )}

        <p className="text-md font-zodiak-regular text-justify text-brown-150 whitespace-pre-wrap flex-wrap mt-4">
          {description}
        </p>
      </div>
    </section>
  );
}
