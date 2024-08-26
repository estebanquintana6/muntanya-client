"use client";

interface OwnProps {
    title: string;
}

export default function LandingPageButton({ title } : OwnProps) {
    return (
        <button className="group flex justify-center items-center gap-6 px-12 py-4 bg-primary text-black font-mono font-semibold text-xl relative overflow-hidden rounded-xl border-4 border-black hover:shadow-[0px_0px_0px_#000] transition-all duration-200">
          <div className="relative overflow-hidden z-[1] transition-all duration-200">
            <span className="group-hover:translate-y-full font-zodiak-bold inline-block transition-all duration-200">
              { title }
            </span>
            <span className="absolute inset-0 font-zodiak-bold text-primary -translate-y-full group-hover:translate-y-0 inline-block transition-all duration-200">
              { title }
            </span>
          </div>
          <div className="w-12 aspect-square rounded-full border-2 border-brown-100 flex justify-center items-center bg-primary z-[1] transition-all duration-200 relative overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              id="arrow"
              className="z-[1] stroke-brown-100 hover:stroke-brown-100 transition-all duration-200"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M1 7h16M11 1l6 6-6 6"></path>
              </g>
            </svg>
            <div className="absolute inset-0 bg-primary rounded-full translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-0"></div>
          </div>
          <div className="absolute inset-0 bg-brown-100 -translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-0"></div>
        </button>
    );
}