import { getBlogEntryById, getRelatedById } from "@/app/libs/blog";
import BlogEntry from "./BlogEntry";
import RelatedEntries from "./RelatedEntries";
import Navbar from "@/app/landing/shared/Navbar";
import Footer from "@/app/landing/shared/Footer";

import { notFound } from "next/navigation";

interface OwnProps {
  params: {
    id: string;
  };
}

export default async function BlogEntryPage({ params }: OwnProps) {
  const { id } = params;

  const blogEntry = await getBlogEntryById(id);
  const relatedBlogEntries = await getRelatedById(id);

  if (!blogEntry) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <main className="pt-24 bg-primary">
        <BlogEntry blogEntry={blogEntry} />
        <RelatedEntries related={relatedBlogEntries} />
      </main>
      <Footer />
    </main>
  );
}
