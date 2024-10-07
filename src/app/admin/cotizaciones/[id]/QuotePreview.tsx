"use client";

import { Quote, Services } from "@/app/utils/interfaces/quote";

interface OwnProps {
  quote: Quote;
}

export default function QuotePreview({ quote }: OwnProps) {
  const {
    name,
    lastname,
    email,
    phone,
    instagram,
    knowMethod,
    services,
    description,
  } = quote;

  return (
    <section className="p-12 w-full">
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
            disabled
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
            disabled
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
            disabled
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
            disabled
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
            disabled
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
            disabled
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
                  disabled
                  value="laminas"
                  checked={services.includes(Services.laminas)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-brown-50 opacity-0"
                />
                <label
                  htmlFor="service-checkbox-laminas"
                  className="ms-2 text-sm font-zodiak-regular text-gray-900 dark:text-gray-300"
                >
                  <span
                    className={`p-3 cursor-pointer rounded-md ${Services.laminas ? "bg-brown-100 text-primary" : "bg-primary text-brown-100"}  border-2 border-brown-100`}
                  >
                    Compra de láminas biomateriales
                  </span>
                </label>
              </div>

              <div>
                <input
                  id="service-checkbox-desarrollo"
                  type="checkbox"
                  value="desarrollo"
                  disabled
                  checked={services.includes(Services.desarrollo)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-brown-50 opacity-0"
                />
                <label
                  htmlFor="service-checkbox-desarrollo"
                  className="ms-2 text-sm font-zodiak-regular text-gray-900 dark:text-gray-300"
                >
                  <span
                    className={`p-3 cursor-pointer rounded-md ${services.includes(Services.desarrollo) ? "bg-brown-100 text-primary" : "bg-primary text-brown-100"}  border-2 border-brown-100`}
                  >
                    Desarrollo y diseño de proyecto
                  </span>
                </label>
              </div>

              <div>
                <input
                  id="service-checkbox-producto-personalizado"
                  type="checkbox"
                  disabled
                  value="producto-personalizado"
                  checked={services.includes(Services.producto)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-brown-50 opacity-0"
                />
                <label
                  htmlFor="service-checkbox-producto-personalizado"
                  className="ms-2 text-sm font-zodiak-regular text-gray-900 dark:text-gray-300"
                >
                  <span
                    className={`p-3 cursor-pointer rounded-md ${services.includes(Services.producto) ? "bg-brown-100 text-primary" : "bg-primary text-brown-100"}  border-2 border-brown-100`}
                  >
                    Producto personalizado
                  </span>
                </label>
              </div>

              <div>
                <input
                  id="service-checkbox-colaboracion"
                  disabled
                  type="checkbox"
                  value="colaboracion"
                  checked={services.includes(Services.colaboracion)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-brown-50 opacity-0"
                />
                <label
                  htmlFor="service-checkbox-colaboracion"
                  className="ms-2 text-sm font-zodiak-regular text-gray-900 dark:text-gray-300"
                >
                  <span
                    className={`p-3 cursor-pointer rounded-md ${services.includes(Services.colaboracion) ? "bg-brown-100 text-primary" : "bg-primary text-brown-100"}  border-2 border-brown-100`}
                  >
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
          disabled
          id="description"
          value={description}
          className="bg-gray-50 border border-brown-100 text-brown-150 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full sm:w-[34rem]"
          placeholder="Descripción"
          required
        />
      </div>
    </section>
  );
}
