import ProjectDashboard from "./Dashboard";

import { getProducts } from "@/app/libs/projects";
import { Product } from "@/app/utils/interfaces/product";

export default async function ProjectsPanel() {

  const products : Product[] = await getProducts();
  
  return (
    <div>
      <ProjectDashboard products={products} />
    </div>
  );
}
