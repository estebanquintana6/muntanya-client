import ProjectDashboard from "./Dashboard";

import { getProducts, deleteProduct } from "@/app/libs/projects";

export default async function ProjectsPanel() {
  const handleDeleteProject = async (id: string) => {
    "use server";
    await deleteProduct(id);
  }

  const fetchProducts = async () => {
    "use server";
    return await getProducts();
  }
  
  return (
    <div>
      <ProjectDashboard fetchProducts={fetchProducts} onDelete={handleDeleteProject} />
    </div>
  );
}
