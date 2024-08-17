import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/app/libs/session";
import { logout } from "@/app/libs/session";

import Sidebar from "./Sidebar";

export const metadata: Metadata = {
  title: "Muntanya - Admin",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  const onLogout = async () => {
    "use server";
    await logout();
    redirect("/login");
  };

  return (
    <div>
      <Sidebar logout={onLogout} />
      <div className="p-4 sm:ml-64">{children}</div>
    </div>
  );
}
