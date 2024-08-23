export default function VerticalAbout() {
    return (
        <section className="flex">
            <div className="w-full h-screen overflow-hidden relative">
                <video muted loop autoPlay={true} className="absolute min-h-full min-w-full object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-1">
                    <source src="/videos/about.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="bg-black bg-opacity-60 backdrop-blur-sm h-full w-full sm:w-1/2 flex flex-col">
                    <div className="mt-auto mx-auto flex">
                        <h1 className="text-6xl font-zodiak-bold text-primary">Muntanya</h1>
                    </div>
                    <div className="flex w-full mb-auto mt-8 p-8 sm:p-0">
                        <div className="w-1/2 sm:w-52 ml-auto mr-4">
                            <h2 className="text-2xl sm:text-3xl text-primary ">Un estudio independiente de diseño</h2>
                        </div>
                        <div className="h-full border-l-4 border-primary" />
                        <h3 className="w-1/2 text-md sm:text-xl text-primary ml-4 mr-auto">Somos un estudio que hace x y z</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}