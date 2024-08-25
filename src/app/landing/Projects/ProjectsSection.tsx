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
              Aquí debe de ir una breve explicación de lo que trata este
              proyecto,
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
      <div className="flex justify-center text-center">
        <button className="group flex justify-center items-center gap-6 px-12 py-4 bg-primary text-black font-mono font-semibold text-xl relative overflow-hidden rounded-xl border-4 border-black hover:shadow-[0px_0px_0px_#000] transition-all duration-200">
          <div className="relative overflow-hidden z-[1] transition-all duration-200">
            <span className="group-hover:translate-y-full font-zodiak-bold inline-block transition-all duration-200">
              Ver más proyectos
            </span>
            <span className="absolute inset-0 font-zodiak-bold text-primary -translate-y-full group-hover:translate-y-0 inline-block transition-all duration-200">
              Ver más proyectos
            </span>
          </div>
          <div className="w-12 aspect-square rounded-full border-2 border-brown-100 flex justify-center items-center bg-primary z-[1] transition-all duration-200 relative overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14"
              id="arrow"
              className="z-[1] stroke-brown-100 hover:stroke-brown-100 transition-all duration-200"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M1 7h16M11 1l6 6-6 6"></path>
              </g>
            </svg>
            <div className="absolute inset-0 bg-primary rounded-full translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-0"></div>
          </div>
          <div className="absolute inset-0 bg-brown-100 -translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-0"></div>
        </button>
      </div>
    </section>
  );
}
