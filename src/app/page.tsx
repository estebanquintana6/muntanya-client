import Navbar from "./landing/shared/Navbar";
import Header from "./landing/Header";
import About from "./landing/About";
import ProjectsSection from "./landing/Projects/ProjectsSection";
import BlogSection from "./landing/Blog/BlogSection";
import Footer from "./landing/shared/Footer";

import { getRecentBlogEntries } from "./libs/blog";

export default function Home() {
  const fetchRecentBlogEntries = async () => {
    "use server";
    return await getRecentBlogEntries();
  };

  return (
    <>
      <main className="flex flex-col">
        <Navbar />
        <Header />
        <About />
        <ProjectsSection />
        <BlogSection fetchRecentBlogEntries={fetchRecentBlogEntries} />
      </main>
      <Footer />
    </>
  );
}
