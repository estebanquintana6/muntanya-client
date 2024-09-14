"use client";
import { Fragment, useState } from "react";
import CreateProjectModal from "./CreateProjectModal";

interface OwnProps {
  refreshProducts: () => Promise<void>;
}

export default function CreateProjectBtn({ refreshProducts }: OwnProps) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <button
        onClick={() => setShowModal(true)}
        className="group flex justify-center items-center gap-6 px-12 py-4 bg-primary text-black font-mono font-semibold text-xl relative overflow-hidden rounded-xl border-4 border-black hover:shadow-[0px_0px_0px_#000] transition-all duration-200"
      >
        <div className="relative overflow-hidden z-[1] transition-all duration-200">
          <span className="group-hover:translate-y-full font-zodiak-bold inline-block transition-all duration-200">
            Crear nuevo
          </span>
          <span className="absolute inset-0 font-zodiak-bold text-primary -translate-y-full group-hover:translate-y-0 inline-block transition-all duration-200">
            Crear nuevo
          </span>
        </div>
        <div className="w-8 aspect-square rounded-full border-2 border-brown-100 flex justify-center items-center bg-primary z-[1] transition-all duration-200 relative overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="z-[1] stroke-brown-100 hover:stroke-brown-100 transition-all duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <div className="absolute inset-0 bg-primary rounded-full translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-0"></div>
        </div>
        <div className="absolute inset-0 bg-brown-100 -translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-0"></div>
      </button>
      {showModal && (
        <CreateProjectModal
          onClose={() => setShowModal(false)}
          refreshProducts={refreshProducts}
        />
      )}
    </Fragment>
  );
}
