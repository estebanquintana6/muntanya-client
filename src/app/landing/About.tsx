"use client";

import HorizontalAbout from "./About/HorizontalAbout";
import VerticalAbout from "./About/VerticalAbout";

import { useScreenDetector } from "../utils/useScreenDetector";

export default function About() {
  const { isMobile } = useScreenDetector();

  if (isMobile) {
    return <VerticalAbout />;
  }

  return <HorizontalAbout />;
}
