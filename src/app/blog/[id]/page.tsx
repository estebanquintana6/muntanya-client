import { getBlogEntryById } from "@/app/libs/blog";
import BlogEntry from "./BlogEntry";
import Navbar from "@/app/landing/shared/Navbar";

import { notFound } from "next/navigation";

interface OwnProps {
  params: {
    id: string;
  };
}

export default async function BlogEntryPage({ params }: OwnProps) {
  const { id } = params;

  const blogEntry = await getBlogEntryById(id);

  if (!blogEntry) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <main className="py-24 bg-primary">
        <BlogEntry blogEntry={blogEntry} />
      </main>
    </main>
  );
}
