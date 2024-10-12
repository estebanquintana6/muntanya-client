"use client";

import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "/animation/animacion-avena.png",
  "/animation/animacion-cafe.png",
  "/animation/animacion-hongo.png",
  "/animation/animacion-ladrillo.png",
  "/animation/animacion-naranja.png",
  "/animation/animacion-platano.png",
];

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgSrc, setImgSrc] = useState("/animation/animacion-avena.png");

  let x_icon = 0;
  let y_icon = 0;
  let stepX = 1;
  let stepY = 1;

  const myAnimation = () => {
    if (imgRef.current) {
      if (
        x_icon < 0 ||
        x_icon >
          (headerRef.current?.offsetHeight ?? 0) - imgRef.current.offsetHeight
      ) {
        stepX = -stepX;
        setImgSrc(IMAGES[Math.floor(Math.random() * IMAGES.length)]);
      }

      if (
        y_icon < 0 ||
        y_icon >
          (headerRef.current?.offsetWidth ?? 0) - imgRef.current.offsetWidth
      ) {
        stepY = -stepY;
        setImgSrc(IMAGES[Math.floor(Math.random() * IMAGES.length)]);
      }

      x_icon += stepX;
      y_icon += stepY;

      imgRef.current.style.top = x_icon + "px";
      imgRef.current.style.left = y_icon + "px";
    }
  };

  useEffect(() => {
    setInterval(() => myAnimation(), 10);
  }, []);

  return (
    <div
      ref={headerRef}
      className="w-full relative h-[90vh] bg-primary flex px-6 sm:px-0 dvd-box overflow-hidden"
    >
      <img
        key={imgSrc}
        id="ball"
        src={imgSrc}
        className="w-32 absolute sm:w-52"
        ref={imgRef}
      />
      <div className="m-auto">
        <div className="flex flex-col sm:relative">
          <h1 className="text-5xl sm:text-9xl text-brown-100 font-zodiak-light text-center">
            ESTUDIO <br /> DE DISEÑO <br /> CIRCULAR
          </h1>
          <h3 className="text-md sm:text-xl text-brown-100 font-zodiak-regular text-center mt-5">
            EL PLANETA ESTÁ CAMBIANDO. EL DISEÑO DEBE CAMBIAR
          </h3>
        </div>
      </div>
    </div>
  );
}
