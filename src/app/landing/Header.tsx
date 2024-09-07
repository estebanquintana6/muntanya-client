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
  const imgRefs = useRef<HTMLImageElement[]>([]);

  let x_icon = 0;
  let y_icon = 0;
  let stepX = 0.3;
  let stepY = 0.3;
  

  const draw = () => {
    const images = imgRefs.current;

    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        img.onload = function () {
            setInterval(() => myAnimation(i), 10);
        };
        if (i !== 0) {
            img.style.visibility = 'hidden';
        }
        img.style.position = 'absolute';
        img.src = IMAGES[i];
        img.style.width = "6rem";
    }
  };

  const myAnimation = (index: number) => {
    let img = imgRefs.current[index];
    let bounced = false;
    let isCurrentlyDisplaying = img.style.visibility !== 'hidden';
    
      if (
        x_icon < 0 ||
        x_icon > (headerRef.current?.offsetHeight ?? 0) - img.offsetHeight
      ) {
        stepX = -stepX;
        if (isCurrentlyDisplaying) {
            bounced = true;
        }
      }

      if (
        y_icon < 0 ||
        y_icon > (headerRef.current?.offsetWidth ?? 0) - img.offsetWidth
      ) {
        stepY = -stepY;
        if (isCurrentlyDisplaying) {
            bounced = true;
        }
      }
      
      x_icon += stepX;
      y_icon += stepY;

      img.style.top = x_icon + "px";
      img.style.left = y_icon + "px";
      
      if (bounced) {
        console.log("BOUNCED");
        bounced = false;
        img.style.visibility = "hidden";
        imgRefs.current[(index + 1) % IMAGES.length].style.visibility = "visible";
      }
  };

  useEffect(() => {
    draw();
  }, []);


  return (
    <div
      ref={headerRef}
      className="w-full relative h-screen bg-primary flex px-6 sm:px-0 dvd-box overflow-hidden"
    >
      { IMAGES.map((url, i) => <img key={url} src={url} className="h-20" ref={(r) => imgRefs.current[i] = r}/>)
      }
      <div className="m-auto">
        <div className="flex flex-col sm:relative">
          <h1 className="text-6xl sm:text-9xl text-brown-100 font-zodiak-light text-center">
            ESTUDIO <br /> DE DISEÑO <br /> CIRCULAR
          </h1>
          <h3 className="text-lg sm:text-xl text-brown-100 font-zodiak-regular text-center mt-5">
            EL PLANETA ESTÁ CAMBIANDO. EL DISEÑO DEBE CAMBIAR
          </h3>
        </div>
      </div>
    </div>
  );
}
