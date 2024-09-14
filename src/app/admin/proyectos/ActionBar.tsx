"use client";
import CreateProjectBtn from "./CreateProjectBtn";

interface OwnProps {
    refreshProducts: () => Promise<void>;
}

export default function ActionBar({ refreshProducts } : OwnProps) {
    return (
        <div className="flex flex-row-reverse w-full mt-6">
            <CreateProjectBtn refreshProducts={refreshProducts} />
        </div>
    )
}