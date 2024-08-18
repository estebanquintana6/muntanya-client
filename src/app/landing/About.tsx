export default function About() {
    return (
        <section className="h-screen bg-primary p-11 flex flex-col">
            <div className="w-full h-1/3 overflow-hidden relative">
                <video muted loop autoPlay={true} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <source src="/videos/about_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="grid gap-1 grid-cols-12 font-zodiak-regular mt-4">
                <h2 className="text-xl col-span-12 font-zodiak-bold">About</h2>
                <h3 className="text-lg col-start-3 col-end-7">This is Muntanya</h3>
                <h3 className="text-lg col-start-4 col-end-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus sed ligula at egestas. Curabitur tristique faucibus tellus, quis lobortis tortor tristique eget. Nulla fringilla tincidunt semper. In imperdiet nibh neque. Aliquam ac erat hendrerit, aliquet sem id, accumsan felis. Nullam tincidunt urna vitae arcu posuere, vitae gravida urna suscipit. Quisque condimentum augue ut ex laoreet tincidunt. Nulla facilisi. In egestas porttitor felis, non scelerisque urna facilisis a. Mauris quis maximus massa. Aliquam finibus mauris egestas quam pulvinar, in vehicula ante congue.
                </h3>
                <h3 className="text-lg col-start-6 col-end-10 font-zodiak-italic mt-2">Otra frase extra</h3>

            </div>
        </section>
    )
}