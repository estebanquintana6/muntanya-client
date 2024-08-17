import { redirect } from "next/navigation";
import { getSession } from "@/app/libs/session";
import { logout } from "@/app/libs/session";

import Sidebar from "./Sidebar";

export default async function AdminPanel() {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  const onLogout = async () => {
    "use server";
    await logout();
    redirect("/login");
  }

  return (
    <div>
      <Sidebar logout={onLogout} />
      <div className="p-4 sm:ml-64">
        <h2>Admin</h2>
      </div>
    </div>
  );
}
