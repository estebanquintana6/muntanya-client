"use client";
import { useEffect, useState } from "react";
import { BlogEntry } from "@/app/utils/interfaces/blogEntry";

import LandingPageButton from "../shared/LandingPageBtn";
import BlogComponent from "./BlogComponent";

interface OwnProps {
  fetchRecentBlogEntries: () => Promise<BlogEntry[]>;
}

export default function BlogSection({ fetchRecentBlogEntries } : OwnProps) {
  const [blogEntries, setBlogEntries] = useState<BlogEntry[]>([]);

  useEffect(() => {
    const getBlogEntries = async () => {
      const data = await fetchRecentBlogEntries();
      console.log(data);
      setBlogEntries(data);
    }
    getBlogEntries();
  }, []);

  return (
    <section className="min-h-screen bg-brown-100 py-12 px-9 flex flex-col">
      <div className="text-6xl text-center font-zodiak-bold mb-10 text-green">
        Blog
      </div>
      <div className="flex pl-8 flex-col lg:ml-auto justify-center border-l-8 border-primary text-primary lg:w-1/3">
          <div className="text-left break-words w-full justify-center my-auto">
            <h4 className="text-2xl pb-4 font-zodiak-bold text-green">
              Encuentra un mundo de contenidos
            </h4>
            <p className="pb-2 font-zodiak-regular text-green">
              Aquí debe de ir una breve explicación de lo que trata este
              blog,
            </p>
          </div>
        </div>
      <div className="container font-zodiak-regular mx-auto">
        <div className="grid h-full grid-cols-12 gap-5 lg:gap-10 pb-10 mt-8 sm:mt-16">
        { blogEntries.map((blogEntry) => <BlogComponent blogEntry={blogEntry} />)}
        </div>
      </div>
      <div className="flex justify-center text-center">
        <LandingPageButton title="Visita el blog" />
      </div>
    </section>
  );
}
