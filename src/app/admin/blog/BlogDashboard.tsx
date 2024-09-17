"use client";
import { useEffect, useState } from "react";
import Actionbar from "./ActionBar";
import BlogGallery from "./BlogGallery";

import { BlogEntry } from "@/app/utils/interfaces/blogEntry";

interface OwnProps {
  fetchBlogEntries: () => Promise<BlogEntry[]>;
  onDelete: (id: string) => Promise<void>;
}

export default function BlogDashboard({
  fetchBlogEntries,
  onDelete,
}: OwnProps) {
  const [blogEntries, setBlogEntries] = useState<BlogEntry[]>([]);

  const refreshBlogEntries = async () => {
    const res = await fetchBlogEntries();
    setBlogEntries(res);
  };

  useEffect(() => {
    const fetch = async () => refreshBlogEntries();
    fetch();
  }, []);

  return (
    <section className="w-full p-12">
      <h2 className="text-5xl font-zodiak-bold">Entradas de blog</h2>
      <Actionbar refreshBlogEntries={refreshBlogEntries} />
      <BlogGallery
        blogEntries={blogEntries}
        refreshBlogEntries={refreshBlogEntries}
        onDelete={onDelete}
      />
    </section>
  );
}
