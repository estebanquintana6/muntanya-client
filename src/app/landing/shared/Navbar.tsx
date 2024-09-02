"use client";

import { useState } from "react";

interface OwnProps {
  selected: string;
}

export default function Navbar({ selected }: OwnProps) {
  const [currentlySelected, setCurrentlySelected] = useState(selected);

  return (
    <div className="w-full flex top-[90%] justify-center fixed">
      <menu className="menu bg-brown-100 rounded-lg">
        {/*<button className="menu__item">
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M3.4,11.9l8.8,4.4l8.4-4.4" />
            <path d="M3.4,16.2l8.8,4.5l8.4-4.5" />
            <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />
          </svg>
        </button>
  */}

        <button className="menu__item before:w-20 before:h-20 home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="text-white w-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </button>

        {/*<button className="menu__item">
          <svg className="icon" viewBox="0 0 24 24">
            <path
              d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
          C3.9,4.4,4.4,3.9,5.1,3.9z"
            />
            <path d="M4.2,9.3h15.6" />
            <path d="M9.1,9.5v10.3" />
          </svg>
        </button>
*/}
        <div className="menu__border"></div>
      </menu>

      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath
            id="menu"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)"
          >
            <path
              d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"
            />
          </clipPath>
        </svg>
      </div>
    </div>
  );
}
