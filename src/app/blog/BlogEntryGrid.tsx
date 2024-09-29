"use client";

import BlogEntryCell from "./BlogEntryCell";
import { BlogEntry } from "../utils/interfaces/blogEntry";

interface OwnProps {
  blogEntries: BlogEntry[];
}

export default function BlogEntryGrid({ blogEntries }: OwnProps) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-full grid grid-cols-2 gap-6">
        {blogEntries.map((entry) => (
          <div className="col-span-1" key={entry._id}>
            <BlogEntryCell blogEntry={entry} />
          </div>
        ))}
      </div>
    </div>
  );
}
