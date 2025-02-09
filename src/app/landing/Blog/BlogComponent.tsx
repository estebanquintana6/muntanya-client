import Link from "next/link";
import { BlogEntry } from "@/app/utils/interfaces/blogEntry";

interface OwnProps {
  blogEntry: BlogEntry;
}

export default function BlogComponent({ blogEntry }: OwnProps) {
  const { _id, title, description, tags, photo_urls } = blogEntry;
  return (
    <div className="h-[28rem] sm:h-[32rem] flex flex-col">
      <div className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4 bg-blog-default-1 bg-cover">
        <div className="absolute top-5 left-5 z-20 bg-primary bg-opacity-40 p-2 rounded-lg">
          <p className="font-zodiak-light text-primary text-xs">
            {tags[0] ?? ''}
          </p>
        </div>
        <img
          src={photo_urls[0]}
          className="h-full w-full object-cover absolute top-0"
        />
        <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-50"></div>
        <Link
          href={`/blog/${_id}`}
          className="z-50 block absolute top-0 lef-0 w-full bg-center bg-cover h-96 hover:scale-110"
        ></Link>
      </div>
      <div className="w-full h-auto mt-2 text-brown-100 border-t-0 border-brown-100">
        <h2 className="mb-5 text-xl overflow-clip text-brown-100 border-b-2 border-brown-100 font-zodiak-bold uppercase">
          <a href="#_" className="overflow-ellipsis">{title}</a>
        </h2>
        <p className="mb-2 text-sm sm:text-md font-normal text-brown-100 opacity-100 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
