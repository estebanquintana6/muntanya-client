import Navbar from "../landing/shared/Navbar";
import { getBlogEntries } from "../libs/blog";
import BlogGallery from "./BlogGallery";

export default async function BlogPage() {

  const blogEntries = await getBlogEntries();

  return (
    <main className="flex flex-col min-h-screen bg-primary pt-12">
      <Navbar />
      <div className="py-10 mx-auto sm:mx-0 sm:py-12 sm:pl-12">
        <h1 className="text-5xl smd:text-6xl lg:text-8xl font-zodiak-light text-brown-100">
          BLOG
        </h1>
      </div>
      <BlogGallery blogEntries={blogEntries} />
    </main>
  );
}
