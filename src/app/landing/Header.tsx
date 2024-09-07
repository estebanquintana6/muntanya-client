"use client";

import { useEffect, useRef } from "react";


export default function Header() {
    const headerRef = useRef<HTMLDivElement>(null);

    let ctx = null;
    let x_icon = 0;
    let y_icon = 0;
    let stepX = 1;
    let stepY = 1;
    let size_x = 23;
    let size_y = 22;
    let anim_img : HTMLImageElement;
    
    const draw = () => {
      anim_img = new Image(size_x, size_y);
      anim_img.onload = function() { setInterval(() => myAnimation(), 10); }
      anim_img.src = 'https://pbs.twimg.com/profile_images/3352183391/a16302aab7bd8742ad3e39a75454008a_normal.jpeg';
      anim_img.style.position = 'absolute';
      headerRef.current?.append(anim_img);
    }

    const myAnimation = () => {
      if (x_icon < 0 || x_icon > (headerRef.current?.offsetHeight ?? 0) - size_x) {
        stepX = -stepX; 
      }
      
      if (y_icon < 0 || y_icon > (headerRef.current?.offsetWidth ?? 0) - size_y) {
        stepY = -stepY; 
      }

      x_icon += stepX;
      y_icon += stepY;
      anim_img.style.top = x_icon + 'px';
      anim_img.style.left = y_icon + 'px';
    }
    
    useEffect(() => {
        draw();
    }, [])

    return (
        <div ref={headerRef} className="w-full relative h-screen bg-primary flex px-6 sm:px-0 dvd-box overflow-hidden">
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
    )
}