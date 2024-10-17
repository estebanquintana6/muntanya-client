import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

export default function ProjectSwiper() {
  return (
    <div className="max-w-6xl mx-[1.5em] md:mx-auto mt-8 sm:mt-0 sm:w-2/3">
      <Swiper
        modules={[Scrollbar, Navigation]}
        loop={false}
        navigation={true}
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
              className="absolute z-10 h-full hover:ease-in-out rounded-md transition duration-700 hover:opacity-0 top-0 hidden md:block"
            />
            <div className="relative rounded-md">
              <div className="absolute flex flex-col top-0 bg-black bg-opacity-50 h-full w-full rounded-md py-12 px-8 md:px-2">
                <h1 className="text-primary font-zodiak-light text-4xl text-center mt-auto md:text-3xl">
                  MISIÓN
                </h1>
                <p className="text-primary text-lg font-zodiak-regular text-center mb-auto md:text-sm">
                  Revolucionar la produccción industrial adaptando sistemas
                  circulares que respeten y emulen ciclos naturales
                </p>
              </div>
              <img src="/photos/FORAS-1.jpg" className="rounded-md" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative cursor-pointer rounded-md h-full">
            <img
              src="/photos/wrap.jpg"
              className="absolute z-10 h-full hover:ease-in-out rounded-md transition duration-700 hover:opacity-0 top-0 hidden md:block"
            />
            <div className="relative rounded-md">
              <div className="absolute flex flex-col top-0 bg-black bg-opacity-50 h-full w-full rounded-md py-12 px-8 md:px-2">
                <h1 className="text-primary font-zodiak-light text-4xl text-center mt-auto md:text-3xl">
                  VISIÓN
                </h1>
                <p className="text-primary text-lg font-zodiak-regular text-center mb-auto md:text-sm">
                  Ser líderes en soluciones de diseño (industrial, grafico y de
                  interiores) que transformen los residuos industriales en
                  productos sostenibles de alto valor.
                </p>
              </div>
              <img src="/photos/FORAS-2.jpg" className="rounded-md" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative cursor-pointer rounded-md">
            <img
              src="/photos/wrap.jpg"
              className="absolute z-10 h-full hover:ease-in-out rounded-md transition duration-700 hover:opacity-0 top-0 hidden md:block"
            />
            <div className="relative rounded-md">
              <div className="absolute flex flex-col top-0 bg-black bg-opacity-50 h-full w-full rounded-md py-12"></div>
              <img src="/photos/FORAS-4.jpg" className="rounded-md" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
