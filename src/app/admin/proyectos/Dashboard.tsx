"use client";

import Actionbar from "./ActionBar";
import ProjectGallery from "./ProjectGallery";

import { Product } from "@/app/utils/interfaces/product";

interface OwnProps {
    products: Product[];
}

export default function ProjectDashboard({ products } : OwnProps) {
    return (
        <section className="w-full p-12">
            <h2 className="text-5xl font-zodiak-bold">Productos</h2>
            <Actionbar />
            <ProjectGallery products={products} />
        </section>
    );
}