export default function ProjectsSection() {
  return (
    <section className="w-full min-h-screen bg-primary py-12">
      <div className="w-full text-center mb-4">
        <h1 className="text-5xl sm:text-6xl font-zodiak-bold">Our craft</h1>
      </div>
      <div className="grid grid-flow-dense lg:grid-flow-row grid-cols-12 py-8 border-t-grid border-grid-color">
        <div className="col-span-6 lg:col-span-6 lg:flex mt-8 lg:mt-0 pl-4 lg:pl-8 justify-center">
          <img src="/photos/UAQ-1.jpg"></img>
        </div>
        <div className="col-span-6 lg:col-span-3 lg:flex mt-8 lg:mt-0 px-4 lg:px-8 justify-center">
          <img src="/photos/UAQ-2.jpg"></img>
        </div>
        <div className="-order-1 lg:order-3 col-span-12 lg:col-span-3 text-primary-text relative px-4 lg:flex flex-col justify-top">
          <div className="text-left break-words w-full">
            <h4 className="capitalize text-2xl pb-4 font-zodiak-bold text-brown-50">
              Making Space From Waste
            </h4>
            <p className="pb-2 font-zodiak-regular">
              We reclaim and recycle plastic waste from landfills, oceans and
              rivers to craft elevated design objects and spaces.
            </p>
            <div className="text-0">
              <a
                className=" inline-block text-primary-accent font-heading text-base items-center justify-center border-b-text-2 hover:text-primary-accent border-transparent hover:border-primary-accent transition"
                href="https://spaceavailable.tv/pages/studio"
              ></a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 py-16">
        <div className="lg:col-span-3 lg:flex pl-8 flex-col justify-center lg:border-r-8 border-brown-100">
          <div className="text-left break-words w-full">
            <h4 className="capitalize text-2xl pb-4 font-zodiak-bold text-brown-50">
              explora, aprende, protege
            </h4>
            <p className="pb-2 font-zodiak-regular">
              Aquí debe de ir una breve explicación de lo que trata este proyecto,
            </p>
            <div className="text-0">
              <a
                className=" inline-block text-primary-accent font-heading text-base items-center justify-center border-b-text-2 hover:text-primary-accent border-transparent hover:border-primary-accent transition"
                href="https://spaceavailable.tv/pages/studio"
              >
                <span className="inline-flex font-zodiak-italic text-blue">
                  Aprende más
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-9 lg:flex mt-8 lg:mt-0 lg:pl-8 justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 lg:mr-6">
            <img src="/photos/FORAS-1.jpg"></img>
            <img src="/photos/FORAS-2.jpg"></img>
            <img src="/photos/FORAS-4.jpg"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
