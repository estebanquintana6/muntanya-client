import { getBlogEntries, deleteBlogEntry } from "@/app/libs/blog";

import BlogDashboard from "./BlogDashboard";

export default async function BlogPanel() {
  const handleDeleteBlogEntry = async (id: string) => {
    "use server";
    await deleteBlogEntry(id);
  }

  const fetchBlogEntries = async () => {
    "use server";
    return await getBlogEntries();
  }
  
  return (
    <div>
      <BlogDashboard fetchBlogEntries={fetchBlogEntries} onDelete={handleDeleteBlogEntry} />
    </div>
  );
}
