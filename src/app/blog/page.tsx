import Navbar from "../landing/shared/Navbar";
import { getBlogEntries } from "../libs/blog";
import BlogGallery from "./BlogGallery";

export default async function BlogPage() {

  const blogEntries = await getBlogEntries();

  return (
    <main className="flex flex-col min-h-screen bg-primary pt-12">
      <Navbar />
      <div className="py-10 px-8 mx-0 sm:pb-4 sm:pt-12 sm:px-12">
        <h1 className="text-4xl border-b-2 border-brown-100 pb-4 sm:text-5xl lg:text-6xl font-zodiak-light text-brown-100">
          BLOG
        </h1>
      </div>
      <BlogGallery blogEntries={blogEntries} />
    </main>
  );
}
