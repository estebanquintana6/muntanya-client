"use client";
import Link from "next/link";
import { BlogEntry } from "../utils/interfaces/blogEntry";

interface OwnProps {
  blogEntry: BlogEntry;
}

export default function BlogEntryCell({ blogEntry }: OwnProps) {
  const { _id, photo_urls, tags, title, description } = blogEntry;

  return (
    <div className="w-full h-72 relative rounded-xl flex flex-col items-start justify-end">
      <Link
        href={`/blog/${_id}`}
        className="z-50 absolute top-0 lef-0 h-full w-full"
      ></Link>
      <img
        src={photo_urls[0]}
        className="absolute w-full h-full object-cover top-0 rounded-xl"
      />
      <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-50 rounded-xl"></div>
      <div className="relative z-20 w-full h-auto py-4 text-white border-t-0 border-indigo-200 px-7">
        {tags.map((tag) => (
          <a
            href="#_"
            key={`_id-${tag}`}
            className="inline-block text-xs font-zodiak-regular absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-2 py-1 lowercase text-black bg-white"
          >
            {tag}
          </a>
        ))}
        <h2 className="mb-1 text-xl font-zodiak-bold sm:text-3xl">{title}</h2>
        <p className="text-xs font-zodiak-regular text-purple-100 opacity-100 line-clamp-2 sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
