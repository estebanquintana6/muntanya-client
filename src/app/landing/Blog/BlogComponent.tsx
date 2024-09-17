import Link from "next/link";
import { BlogEntry } from "@/app/utils/interfaces/blogEntry";

interface OwnProps {
  blogEntry: BlogEntry;
}

export default function BlogComponent({ blogEntry }: OwnProps) {
  const { _id, title, description, tags } = blogEntry;

  return (
    <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4 bg-blog-default-1 bg-cover">
      <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-50"></div>
      <Link
        href={`/blog/${_id}`}
        className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
      ></Link>
      <div className="relative z-20 w-full h-auto py-8 text-white border-t-0 border-indigo-200 px-7">
        {tags.map((tag) => (
          <a
            href="#_"
            className="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-black bg-white"
          >
            {tag}
          </a>
        ))}
        <h2 className="mb-5 text-5xl font-bold">
          <a href="#_">{title}</a>
        </h2>
        <p className="mb-2 text-lg font-normal text-purple-100 opacity-100 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}