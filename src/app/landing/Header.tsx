"use client";

export default function Header() {
    return (
        <div className="w-full h-screen bg-primary flex px-6 sm:px-0">
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