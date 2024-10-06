"use client";
import { useState } from "react";
import Link from "next/link";

interface OwnProps {
  title: string;
  href?: string;
  children?: React.ReactNode;
}

export default function ContactButton({
  children,
  title = "",
  href = "#",
}: OwnProps) {

  const [isHover, setIsHover] = useState(false);

  const onHover = () => setIsHover(true);

  const onHoverOut = () => setIsHover(false);

  return (
    <Link href={href} onMouseEnter={onHover} onMouseLeave={onHoverOut} className="w-full">
      <button className="group flex-col w-full h-36 sm:w-72 sm:h-72 flex justify-center items-center gap-2 sm:gap-6 px-4 py-2 bg-primary text-black font-mono font-semibold text-xl relative overflow-hidden rounded-xl border-4 border-black hover:shadow-[0px_0px_0px_#000] transition-all duration-200 sm:px-6 sm:py-2">
        <div className={`${isHover ? 'text-primary' : 'text-brown-150'} w-8 sm:w-12 border-brown-100 flex justify-center items-center z-[1] transition-all duration-200 relative overflow-hidden`}>
          {children}
        </div>
        <div className="relative overflow-hidden z-[1] transition-all duration-200">
          <span className="group-hover:translate-y-full font-zodiak-regular uppercase inline-block transition-all duration-200">
            {title}
          </span>
          <span className="absolute inset-0 font-zodiak-regular uppercase text-primary -translate-y-full group-hover:translate-y-0 inline-block transition-all duration-200">
            {title}
          </span>
        </div>
        <div className="absolute inset-0 bg-brown-100 -translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-0"></div>
      </button>
    </Link>
  );
}
