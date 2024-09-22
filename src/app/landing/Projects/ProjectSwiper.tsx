import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

export default function ProjectSwiper() {
  return (
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
            <img src="/photos/FORAS-1.jpg" className="rounded-md" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative cursor-pointer rounded-md h-full">
            <img
              src="/photos/wrap.jpg"
              className="absolute h-full hover:ease-in-out rounded-md transition duration-700 hover:opacity-0 top-0 hidden md:block"
            />
            <img src="/photos/FORAS-2.jpg" className="rounded-md" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative cursor-pointer rounded-md">
            <img
              src="/photos/wrap.jpg"
              className="absolute h-full hover:ease-in-out rounded-md transition duration-700 hover:opacity-0 top-0 hidden md:block"
            />
            <img src="/photos/FORAS-4.jpg" className="rounded-md" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
