"use client";
import ProjectGalleryItem from "./ProjectGalleryItem";

export default function ProjectGallery() {
  return (
    <section className="flex flex-col px-4 py-16">
      <div className="grid grid-cols-3 gap-6">
        <ProjectGalleryItem />
        <ProjectGalleryItem />
        <ProjectGalleryItem />
        <ProjectGalleryItem />
        <ProjectGalleryItem />
        <ProjectGalleryItem />
      </div>
    </section>
  );
}
