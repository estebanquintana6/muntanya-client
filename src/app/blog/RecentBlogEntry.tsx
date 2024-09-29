"use client";
import Link from "next/link";
import { BlogEntry } from "../utils/interfaces/blogEntry";

interface OwnProps {
  blogEntry: BlogEntry;
}

export default function RecentBlogEntry({ blogEntry }: OwnProps) {
  const { _id, photo_urls, tags, description, title } = blogEntry;

  const mainPhoto = photo_urls[0];

  return (
    <div className="w-full h-96 sm:h-full flex items-center justify-center">
      <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4 max-h-96 sm:max-h-none">
        <Link
          href={`/blog/${_id}`}
          className="z-50 absolute top-0 lef-0 h-full w-full"
        ></Link>
        <img
          src={mainPhoto}
          className="h-full w-full object-cover absolute top-0"
        />

        <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-50"></div>
        <div className="relative z-20 w-full h-auto py-8 text-white border-t-0 border-indigo-200 px-7">
          {tags.map((tag) => (
            <a
              href="#_"
              key={`_id-${tag}`}
              className="inline-block text-xs font-zodiak-bold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-black bg-white"
            >
              {tag}
            </a>
          ))}
          <h2 className="mb-5 text-3xl font-zodiak-bold sm:text-5xl">
            {title}
          </h2>
          <p className="mb-2 text-md font-zodiak-regular text-purple-100 opacity-100 line-clamp-2 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
