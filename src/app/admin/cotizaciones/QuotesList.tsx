"use client";
import { Quote, quoteKeyMap } from "@/app/utils/interfaces/quote";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { deleteWarningModal } from "@/app/utils/alerts";

interface OwnProps {
  getQuotes: () => Promise<Quote[]>;
  deleteQuote: (id: string) => Promise<void>;
}

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function QuotesList({ getQuotes, deleteQuote }: OwnProps) {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const router = useRouter();

  const fetchData = async () => {
    const data = await getQuotes();
    setQuotes(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleViewQuote = (id: string) => {
    router.push(`/admin/cotizaciones/${id}`);
  }

  const handleAttendBtn = async (id: string, attended: boolean) => {
    const res = await fetch("/api/cotizador/attend", {
      method: "POST",
      body: JSON.stringify({
        id,
        attended
      }),
    });

    const { status } = res;

    if (status === 200) {
      await fetchData();
    }
  }

  const handleDeleteQuote = async (id: string) => {
    deleteWarningModal({
      title: 'esta cotización',
      confirmCb: async () => {
        await deleteQuote(id);
      },
      finallyCb: async () => {
        await fetchData();
      }
    })
  }

  return (
    <div className="w-full sm:w-[70vw] mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium">Lista de contactos</h1>
        </div>
      </div>
      <p className="text-slate-500">
        Estas son tus últimas solicitudes de cotización
      </p>

      <div id="tasks" className="my-5">
        {/* 
                  <div
          id="task"
          className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent"
        >
          <div className="inline-flex items-center space-x-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <div className="text-slate-500 line-through">YT Intro remix</div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
        */}
        {quotes.map(({ _id, name, lastname, created_at, services, attended }) => (
          <div
            id={`task-${_id}`}
            key={_id}
            className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150"
          >
            <div className="inline-flex items-center space-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  onClick={() => handleAttendBtn(_id, !attended)}
                  className="w-6 h-6 text-slate-500 hover:text-indigo-600 hover:cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className={`flex ${attended && 'line-through'}`}>
                <span className="text-md font-zodiak-regular text-brown-100 mr-8">{`${name} ${lastname}`}</span>
                <span className="text-md font-zodiak-regular text-brown-100 mr-8">
                  {new Date(created_at).toLocaleDateString(
                    "es-MX",
                    dateOptions,
                  )}
                </span>
                <span className="text-md font-zodiak-regular text-brown-100">
                  {services.map((s) => quoteKeyMap[s]).join(", ")}
                </span>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div onClick={() => handleViewQuote(_id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
              <div onClick={() => handleDeleteQuote(_id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-500 text-center">Última hace: </p>
    </div>
  );
}
