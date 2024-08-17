"use client";

interface OwnProps {
    logout: () => Promise<never>;
}

export default function Sidebar({ logout } : OwnProps) {
    console.log(logout);

  const onLogoutClick = async () => {
    await logout();
  }

  return (
    <aside
      id="default-sidebar"
      className="bg-brown-100 fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
        <ul className="space-y-2 font-medium text-primary">
        <li className="flex">
            <a
              href="#"
              className="flex items-center w-full h-28 border-primary border p-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:bg-brown-50 group"
            >
              <svg
                className="ml-auto w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>
              <span className="ms-3 mr-auto whitespace-nowrap">Productos</span>
            </a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="flex items-center w-full h-28 border-primary border p-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:bg-brown-50 group"
            >
              <svg
                className="ml-auto w-5 h-5 text-gray-500 transition duration-75"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="mr-auto ms-3 whitespace-nowrap">Cotizaciones</span>
            </a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="flex items-center w-full h-28 border-primary border p-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:bg-brown-50 group"
            >
              <svg
                className="ml-auto w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
              <span className="mr-auto ms-3 whitespace-nowrap">Usuarios</span>
            </a>
          </li>
          <li className="flex">
            <button
              onClick={onLogoutClick}
              className="flex items-center w-full h-28 border-primary border p-2 text-gray-900 rounded-lg hover:bg-gray-100 hover:bg-brown-50 group"
            >
              <svg
                className="ml-auto w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span className="mr-auto ms-3 whitespace-nowrap">Cerrar sesión</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
