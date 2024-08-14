"use client";

export default function Header() {
    return (
        <div className="w-full h-screen bg-brown-100 flex">
            <div className="m-auto">
                <div className="block relative">
                    <h1 className="text-9xl text-primary">
                        MUN TA NYA <br/>LAB
                    </h1>
                    <div className="flex absolute top-1/2 left-1/2 w-[40vh]">
                        <span className="table-caption text-sm text-primary w-14 h-24">Estudio de diseño circular</span>
                        <span className="text-sm text-primary ml-auto">est. 2024</span>
                    </div>
                </div>
            </div>
        </div>
    )
}