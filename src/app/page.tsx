import Header from "./landing/Header";
import About from "./landing/About";
import ProjectsSection from "./landing/Projects/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <About />
      <ProjectsSection />
    </main>
  );
}
