import { redirect } from "next/navigation";

import { getSession } from "@/app/libs/session";
import { login } from "@/app/libs/session";

import LoginForm from "./LoginForm";

export default async function Page() {
  const session = await getSession();

  if (session) {
    redirect('/admin');
  }

  const handleLogin = async (email: string, password: string) => {
    "use server";
    await login(email, password);
    redirect("/admin");
  }

  
  return (
    <section className="h-screen bg-brown-100 flex">
      <LoginForm onLogin={handleLogin} />
    </section>
  );
}