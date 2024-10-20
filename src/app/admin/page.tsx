import { redirect } from "next/navigation";

export default async function AdminPanel() {
  redirect("/admin/proyectos");
}
