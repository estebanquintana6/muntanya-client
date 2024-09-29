"use client";

import Link from "next/link";
import { BlogEntry } from "../utils/interfaces/blogEntry";
import RecentBlogEntry from "./RecentBlogEntry";
import BlogEntryGrid from "./BlogEntryGrid";

interface OwnProps {
  blogEntries: BlogEntry[];
}

export default function BlogGallery({ blogEntries }: OwnProps) {
  const [mostRecent, ...rest] = blogEntries;

  const entryGridEntries = rest.slice(0, 4);

  //const olderEntries = rest.slice(4, rest.length - 1);

  return (
    <section className="grid grid-cols-2 gap-8 w-full px-4 sm:px-12 pb-12">
      <div className="col-span-2 sm:col-span-1 sm:py-12">
        <RecentBlogEntry blogEntry={mostRecent} />
      </div>
      <div className="col-span-2 sm:col-span-1 sm:py-12">
        <BlogEntryGrid blogEntries={entryGridEntries} />
      </div>
    </section>
  );
}
