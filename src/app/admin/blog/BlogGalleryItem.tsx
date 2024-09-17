"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { BlogEntry } from "@/app/utils/interfaces/blogEntry";
import { deleteWarningModal } from "@/app/utils/alerts";

import EditBlogEntryModal from "./EditBlogEntryModal";

interface OwnProps {
  blogEntry: BlogEntry;
  onDelete: (id: string) => Promise<void>;
  refreshBlogEntries: () => Promise<void>;
}

export default function BlogGalleryItem({
  blogEntry,
  onDelete,
  refreshBlogEntries,
}: OwnProps) {
  const [showEditModal, setShowEditModal] = useState(false);

  const router = useRouter();

  const { _id, title, photo_urls } = blogEntry;

  const confirmDelete = async () => {
    const { _id } = blogEntry;
    await onDelete(_id);
  };

  const handleDelete = async () => {
    deleteWarningModal({
      title,
      confirmCb: confirmDelete,
      finallyCb: refreshBlogEntries,
    });
  };

  const handleSeeBlogEntry = () => {
    router.push(`/blog/${_id}`);
  };

  return (
    <div className="relative flex w-full">
      <a href="#" className="w-full h-64">
        <img
          className="h-full w-full rounded-lg object-contain"
          src={photo_urls[0]}
          alt=""
        />
        <div className="absolute rounded-lg top-0 flex w-full h-full bg-slate-600 bg-opacity-50">
          <span className="m-auto text-center inline-block xs:text-md xl:text-2xl text-white sm:text-3xl">
            {title}
          </span>
        </div>
      </a>
      <div className="absolute z-1 t-0 bottom-0 flex w-full h-full">
        <button
          className="ml-auto mr-2 w-12 h-12 mt-2 bg-blue rounded-lg"
          onClick={handleSeeBlogEntry}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 m-auto"
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
        </button>
        <button
          className="mx-2 w-12 h-12 mt-2 bg-green rounded-lg"
          onClick={() => setShowEditModal(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 m-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </button>
        <button
          className="mr-auto ml-2 w-12 h-12 bg-red-600 mt-2 rounded-lg"
          color="failure"
          onClick={handleDelete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 m-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
      {showEditModal && (
        <EditBlogEntryModal
          blogEntry={blogEntry}
          onClose={() => setShowEditModal(false)}
          refreshBlogEntries={refreshBlogEntries}
        />
      )}
    </div>
  );
}
