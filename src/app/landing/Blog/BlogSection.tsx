"use client";
import { useEffect, useState } from "react";
import { BlogEntry } from "@/app/utils/interfaces/blogEntry";
import BlogSwiper from "./BlogSwiper";

import LandingPageButton from "../shared/LandingPageBtn";

interface OwnProps {
  fetchRecentBlogEntries: () => Promise<BlogEntry[]>;
}

export default function BlogSection({ fetchRecentBlogEntries } : OwnProps) {
  const [blogEntries, setBlogEntries] = useState<BlogEntry[]>([]);

  useEffect(() => {
    const getBlogEntries = async () => {
      const data = await fetchRecentBlogEntries();
      setBlogEntries(data);
    }
    getBlogEntries();
  }, []);

  return (
    <section className="min-h-screen bg-secondary py-12 px-7 sm:px-9 flex flex-col">
      <div className="text-3xl text-left font-zodiak-light uppercase mb-10 text-brown-100 border-b-2 border-brown-100">
        Blog
      </div>
      <div className="hidden sm:flex sm:pl-8 flex-col lg:mr-auto justify-center sm:border-l-8 border-brown-100 text-brown-100 lg:w-1/3">
          <div className="text-left break-words w-full justify-center my-auto">
            <h4 className="text-lg sm:text-xl pb-2 sm:pb-4 font-zodiak-bold text-brown-100">
              Encuentra un mundo de contenidos
            </h4>
            <p className="text-md sm:text-md pb-2 font-zodiak-regular text-brown-100">
              Aquí debe de ir una breve explicación de lo que trata este
              blog,
            </p>
          </div>
        </div>
      <div className="font-zodiak-regular">
        <BlogSwiper blogEntries={blogEntries} />
      </div>
      <div className="flex justify-center mt-8 text-center">
        <LandingPageButton title="Visita el blog" href="/blog" />
      </div>
    </section>
  );
}
