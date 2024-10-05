export default function VerticalAbout() {
    return (
        <section className="flex">
            <div className="w-full h-screen overflow-hidden relative">
                <video muted loop playsInline autoPlay={true} className="absolute min-h-full min-w-full object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-1">
                    <source src="/videos/about.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="bg-black bg-opacity-50 backdrop-blur-sm h-full w-full flex flex-col">
                    <div className="flex flex-col sm:flex-row w-full mb-auto p-8 sm:p-0 my-auto">
                        <div className="w-full border-b-4 pb-4 ml-auto sm:pb-0 sm:w-1/3 sm:mr-4 sm:border-b-0">
                            <h1 className="text-5xl sm:text-6xl font-zodiak-light text-primary text-center uppercase align-middle">¿QUIÉNES SOMOS?</h1>
                        </div>
                        <div className="h-full hidden sm:block border-l-4 border-primary" />
                        <h3 className="w-full text-xl sm:text-2xl text-md text-primary font-zodiak-regular mt-6 ml-4 mr-auto text-justify sm:w-1/2 sm:mt-0">
                            Somos un estudio de diseño circular en México, comprometido con transformar residuos orgánicos industriales en biomateriales innovadores
                            y biodegradables. Inspirados en ciclos naturales. Creamos produtos radicales que impulsan sistemas industriales más sostenibles, eliminando
                            la necesidad de extraer materias primas virgenes y reintegrando los desechos en un ciclo natural.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}