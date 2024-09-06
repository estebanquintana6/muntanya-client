import Navbar from "./landing/shared/Navbar";
import Header from "./landing/Header";
import About from "./landing/About";
import ProjectsSection from "./landing/Projects/ProjectsSection";
import BlogSection from "./landing/Blog/BlogSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Header />
      <About />
      <ProjectsSection />
      <BlogSection />
    </main>
  );
}
