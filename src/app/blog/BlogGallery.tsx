"use client";

import { BlogEntry } from "../utils/interfaces/blogEntry";
import RecentBlogEntry from "./RecentBlogEntry";
import BlogEntryGrid from "./BlogEntryGrid";

import BlogSwiper from "../landing/Blog/BlogSwiper";

interface OwnProps {
  blogEntries: BlogEntry[];
}

export default function BlogGallery({ blogEntries }: OwnProps) {
  const recentEntries = blogEntries.slice(0, 4);

  const olderEntries = blogEntries.slice(4, blogEntries.length - 1);

  return (
    <section className="w-full px-4 sm:px-12 pb-12">
      <div className="sm:py-12">
        <BlogSwiper blogEntries={recentEntries} />
      </div>
      <div className="sm:py-12">
        <BlogEntryGrid blogEntries={olderEntries} />
      </div>
    </section>
  );
}
