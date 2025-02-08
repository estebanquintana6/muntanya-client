"use client";

import { useRouter } from "next/navigation";
interface OwnProps {
  title: string;
  href?: string;
}

export default function LandingPageButton({ title, href = "#" }: OwnProps) {
  const router = useRouter();

  const toLink = () => {
    router.push(href);
  };

  return (
    <button onClick={toLink} className="px-4 font-zodiak-regular uppercase text-xl py-2 border-b-4 border-brown-100 text-brown-100 hover:text-primary hover:bg-brown-100 transition-all duration-200">{title}</button>
  );
}
