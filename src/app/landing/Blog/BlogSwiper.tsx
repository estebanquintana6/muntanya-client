import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import BlogComponent from "./BlogComponent";

import "swiper/css";
import "swiper/css/navigation";
import { BlogEntry } from "@/app/utils/interfaces/blogEntry";

interface OwnProps {
  blogEntries: BlogEntry[];
}

const BlogSwiper = ({ blogEntries }: OwnProps) => {
  return (
    <div className="mt-8 w-full">
      <Swiper
        modules={[Scrollbar]}
        loop={false}
        pagination={{ clickable: true }}
        centeredSlides={false}
        grabCursor={true}
        mousewheel={{
          invert: false,
        }}
        breakpoints={{
          0: {
            spaceBetween: 20,
            slidesPerView: 1.5,
          },
          468: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          713: {
            spaceBetween: 10,
            slidesPerView: 3,    
          },
          1200: {
            spaceBetween: 30,
            slidesPerView: 5,
          },
        }}
        className="breakpoint"
      >
        {blogEntries.map((blogEntry) => (
          <SwiperSlide>
            <BlogComponent blogEntry={blogEntry} key={blogEntry._id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSwiper;
