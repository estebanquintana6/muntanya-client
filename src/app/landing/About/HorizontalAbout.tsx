export default function HorizontalAbout() {
    return (
        <section className="min-h-[80vh] bg-primary grid grid-cols-2">
            <div className="w-full h-full overflow-hidden relative col-start-1 col-end-2">
                <video muted loop autoPlay={true} className="min-h-full min-w-full h-auto w-auto object-cover absolute overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <source src="/videos/about_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="w-full grid gap-1 grid-cols-12 font-zodiak-regular mt-4 p-11 col-start-2 col-end-3">
                <h1 className="text-3xl col-start-2 col-end-12 font-zodiak-bold">About</h1>
                <h3 className="text-xl col-start-3 col-end-9">This is Muntanya</h3>
                <h3 className="text-lg col-start-4 col-end-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus sed ligula at egestas. Curabitur tristique faucibus tellus, quis lobortis tortor tristique eget. Nulla fringilla tincidunt semper. In imperdiet nibh neque. Aliquam ac erat hendrerit, aliquet sem id, accumsan felis.
                </h3>
                <h3 className="text-xs sm:text-lg col-start-6 col-end-10 font-zodiak-italic mt-2">Otra frase extra</h3>
            </div>
        </section>
    )
}