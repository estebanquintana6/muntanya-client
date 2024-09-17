import { getBlogEntryById } from "@/app/libs/blog";
import BlogEntry from "./BlogEntry";
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
      <BlogEntry blogEntry={blogEntry} />
    </main>
  );
}
