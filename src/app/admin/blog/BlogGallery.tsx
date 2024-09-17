"use client";
import BlogGalleryItem from "./BlogGalleryItem";
import { BlogEntry } from "@/app/utils/interfaces/blogEntry";

interface OwnProps {
  blogEntries: BlogEntry[];
  onDelete: (id: string) => Promise<void>;
  refreshBlogEntries: () => Promise<void>;
}

export default function BlogGallery({
    blogEntries,
  onDelete,
  refreshBlogEntries,
}: OwnProps) {
  return (
    <section className="flex flex-col px-4 py-16">
      <div className="grid grid-cols-3 gap-6">
        {blogEntries.map((blogEntry) => (
          <BlogGalleryItem
            key={blogEntry._id}
            blogEntry={blogEntry}
            onDelete={onDelete}
            refreshBlogEntries={refreshBlogEntries}
          />
        ))}
      </div>
    </section>
  );
}
