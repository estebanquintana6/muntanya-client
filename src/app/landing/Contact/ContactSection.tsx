"use client";

import ContactButton from "./ContactButton";

export default function ContactSection() {
  return (
    <section className="sm:h-[55vh] bg-brown-25 py-12">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="w-full col-span-2 sm:col-span-1">
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl text-primary text-center font-zodiak-light uppercase">
              Cotiza tu proyecto
            </h1>
          </div>
          <div className="p-12 flex items-center justify-center">
            <ContactButton title="Ir al cotizador" href="/cotizador">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </ContactButton>
          </div>
        </div>
        <div className="w-full col-span-2 sm:col-span-1">
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl text-primary text-center font-zodiak-light uppercase">
              Contacta con nosotros
            </h1>
          </div>
          <div className="flex flex-col p-8 gap-4 sm:gap-8 sm:items-center sm:justify-center sm:p-12 sm:flex-row">
            {/*<ContactButton title="Whatsapp">
              <img src="/icons/whatsapp.svg" className="h-12" />
  </ContactButton>*/}
            <ContactButton title="Email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </ContactButton>
            <ContactButton title="Instagram" href="https://www.instagram.com/muntanyalab/">
              <img src="/icons/instagram.svg" className="h-12" />
            </ContactButton>
          </div>
        </div>
      </div>
    </section>
  );
}
