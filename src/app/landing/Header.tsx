"use client";

export default function Header() {
    return (
        <div className="w-full h-screen bg-brown-100 flex px-6 sm:px-0">
            <div className="m-auto">
                <div className="block sm:relative">
                    <h1 className="text-9xl text-primary font-zodiak-light">
                        MUN TA NYA <br/>LAB
                    </h1>
                    <div className="flex sm:absolute sm:top-1/2 sm:left-1/2 sm:w-[40vh]">
                        <span className="table-caption text-sm text-primary w-14 h-24">Estudio de diseño circular</span>
                        <span className="text-sm text-primary ml-auto">est. 2024</span>
                    </div>
                </div>
            </div>
        </div>
    )
}