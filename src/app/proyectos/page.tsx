import Navbar from "../landing/shared/Navbar";
import ProjectGallery from "./ProjectGallery";

export default function Proyectos() {
  return (
    <main className="flex flex-col min-h-screen bg-primary pt-12">
      <div className="p-6">
        <h1 className="text-6xl lg:text-8xl sm:text-9xl text-black font-zodiak-light">
          Productos
        </h1>
      </div>
      <ProjectGallery />
      <Navbar />
    </main>
  );
}
