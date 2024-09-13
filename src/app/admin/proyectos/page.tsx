import ProjectDashboard from "./Dashboard";

import { Product } from "@/app/utils/interfaces/product";

import { getProducts, deleteProduct } from "@/app/libs/projects";

export default async function ProjectsPanel() {

  const products : Product[] = await getProducts();

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
