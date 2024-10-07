import Navbar from "../landing/shared/Navbar";
import ContactForm from "./ContactForm";

export default async function Cotizador() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-primary min-h-screen px-8 py-16 sm:p-24">
        <div className="w-full flex flex-col px-2 sm:px-16 sm:flex-row">
          <div className="w-full sm:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-zodiak-light uppercase text-brown-100">
              Neque porro quisquam est qui dolorem
            </h1>
          </div>
          <div className="w-full flex mt-6 sm:mt-0 sm:w-1/2">
            <p className="text-md font-zodiak-regular my-auto">
              Por favor, completa el formulario a continuación para que podamos enviarte un presupuesto personalizado.
              Te haremos llegar la información por correo electrónico, junto con el enlace para agendar una llamada.
            </p>
          </div>
        </div>
        <section className="w-full mt-12 px-4 sm:px-24">
          <ContactForm />
        </section>
      </main>
    </>
  );
}
