"use client";

import Actionbar from "./ActionBar";
import ProjectGallery from "./ProjectGallery";

export default function ProjectDashboard() {
    return (
        <section className="w-full p-12">
            <h2 className="text-5xl font-zodiak-bold">Productos</h2>
            <Actionbar />
            <ProjectGallery />
        </section>
    );
}