"use client";
import { ChangeEvent, useState } from "react";


export default function ContactForm() {

  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [knowMethod, setKnowMethod] = useState<string>("");
  const [services, setServices] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");

  const handleServiceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (services.includes(value)) {
        setServices((prev) => prev.filter((v) => v !== value));
    } else {
        setServices([...services, value]);
    }
  }

  return (
    <form className="w-full">
      <h3 className="text-md text-brown-100 font-zodiak-bold mb-2">
        Nombre (obligatorio)
      </h3>
      <div className="flex flex-col gap-x-8 mb-2 sm:flex-row">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-zodiak-regular text-brown-100"
          >
            Nombre(*)
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="name"
            id="name"
            className="bg-gray-50 border border-brown-100 text-brown-150 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full sm:w-96"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-zodiak-regular text-brown-100"
          >
            Apellido(*)
          </label>
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            type="last_name"
            id="last_name"
            className="bg-gray-50 border border-brown-100 text-brown-150 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full sm:w-96"
            placeholder="Apellido(s)"
            required
          />
        </div>
      </div>

      <h3 className="text-brown-100 font-zodiak-bold mb-2">
        Contacto (obligatorio)
      </h3>
      <div className="flex flex-col gap-x-8 sm:flex-row">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-zodiak-regular text-brown-100"
          >
            Correo(*)
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            className="bg-gray-50 border border-brown-100 text-brown-150 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full sm:w-96"
            placeholder="name@ejemplo.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-zodiak-regular text-brown-100"
          >
            Teléfono(*)
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="phone"
            id="phone"
            className="bg-gray-50 border border-brown-100 text-brown-150 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full sm:w-96"
            placeholder="XXX-XXXX-XXX"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="instagram"
            className="block mb-2 text-sm font-zodiak-regular text-brown-100"
          >
            Instagram
          </label>
          <input
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            type="instagram"
            id="instagram"
            className="bg-gray-50 border border-brown-100 text-brown-150 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full sm:w-96"
            placeholder="@"
          />
        </div>
      </div>

      <h3 className="text-brown-100 font-zodiak-bold mb-2">
        ¿Cómo descubriste Muntanya?
      </h3>
      <div className="flex flex-col gap-x-8 sm:flex-row">
        <div className="mb-5">
          <select
            id="email"
            value={knowMethod}
            onChange={(e) => setKnowMethod(e.target.value)}
            className="bg-gray-50 border border-brown-100 text-brown-150 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full sm:w-96"
          >
            <option></option>
            <option value="google">Google</option>
            <option value="instagram">Instagram</option>
            <option value="recommendation">Recomendación</option>
            <option value="other">Otro</option>
          </select>
        </div>
      </div>

      <h3 className="text-brown-100 font-zodiak-bold mb-2">
        Selecciona el servicio que te interesa
      </h3>
      <fieldset id="service">
        <div className="flex flex-col gap-x-8 sm:flex-row">
          <div className="my-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center mb-4 gap-y-12 gap-x-8">
              <div>
                <input
                  id="service-checkbox-laminas"
                  type="checkbox"
                  value="laminas"
                  onChange={(e) => handleServiceChange(e)}
                  checked={services.includes("laminas")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-brown-50 opacity-0"
                />
                <label
                  htmlFor="service-checkbox-laminas"
                  className="ms-2 text-sm font-zodiak-regular text-gray-900 dark:text-gray-300"
                >
                  <span className={`p-3 cursor-pointer rounded-md ${services.includes("laminas") ? 'bg-brown-100 text-primary' : 'bg-primary text-brown-100'}  border-2 border-brown-100`}>
                    Compra de láminas biomateriales
                  </span>
                </label>
              </div>

              <div>
                <input
                  id="service-checkbox-desarrollo"
                  type="checkbox"
                  value="desarrollo"
                  checked={services.includes("desarrollo")}
                  onChange={(e) => handleServiceChange(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-brown-50 opacity-0"
                />
                <label
                  htmlFor="service-checkbox-desarrollo"
                  className="ms-2 text-sm font-zodiak-regular text-gray-900 dark:text-gray-300"
                >
                  <span className={`p-3 cursor-pointer rounded-md ${services.includes("desarrollo") ? 'bg-brown-100 text-primary' : 'bg-primary text-brown-100'}  border-2 border-brown-100`}>
                    Desarrollo y diseño de proyecto
                  </span>
                </label>
              </div>

              <div>
                <input
                  id="service-checkbox-producto-personalizado"
                  type="checkbox"
                  value="producto-personalizado"
                  checked={services.includes("producto-personalizado")}
                  onChange={(e) => handleServiceChange(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-brown-50 opacity-0"
                />
                <label
                  htmlFor="service-checkbox-producto-personalizado"
                  className="ms-2 text-sm font-zodiak-regular text-gray-900 dark:text-gray-300"
                >
                  <span className={`p-3 cursor-pointer rounded-md ${services.includes("producto-personalizado") ? 'bg-brown-100 text-primary' : 'bg-primary text-brown-100'}  border-2 border-brown-100`}>
                    Producto personalizado
                  </span>
                </label>
              </div>

              <div>
                <input
                  id="service-checkbox-colaboracion"
                  type="checkbox"
                  value="colaboracion"
                  checked={services.includes("colaboracion")}
                  onChange={(e) => handleServiceChange(e)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-brown-50 opacity-0"
                />
                <label
                  htmlFor="service-checkbox-colaboracion"
                  className="ms-2 text-sm font-zodiak-regular text-gray-900 dark:text-gray-300"
                >
                  <span className={`p-3 cursor-pointer rounded-md ${services.includes("colaboracion") ? 'bg-brown-100 text-primary' : 'bg-primary text-brown-100'}  border-2 border-brown-100`}>
                    Colaboración
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </fieldset>

      <h3 className="text-brown-100 font-zodiak-bold mb-2">
        Describe brevemente tu proyecto(*)
      </h3>

      <div className="mb-5">
        <textarea
          rows={6}
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-gray-50 border border-brown-100 text-brown-150 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full sm:w-[34rem]"
          placeholder="Descripción"
          required
        />
      </div>

      <div>
      <button className="group flex-col h-12 w-full sm:w-96 flex justify-center items-center gap-2 sm:gap-6 px-4 py-2 bg-primary text-black font-mono font-semibold text-xl relative overflow-hidden rounded-xl border-2 border-black hover:shadow-[0px_0px_0px_#000] transition-all duration-200 sm:px-6 sm:py-2">
        <div className="relative overflow-hidden z-[1] transition-all duration-200">
          <span className="group-hover:translate-y-full text-md font-zodiak-regular inline-block transition-all duration-200">
            Solicitar información
          </span>
          <span className="absolute inset-0 text-md font-zodiak-regular text-primary -translate-y-full group-hover:translate-y-0 inline-block transition-all duration-200">
          Solicitar información
          </span>
        </div>
        <div className="absolute inset-0 bg-brown-100 -translate-y-full group-hover:translate-y-0 transition-transform duration-200 z-0"></div>
      </button>
      </div>
    </form>
  );
}
