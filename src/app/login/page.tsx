import { redirect } from "next/navigation";

import { getSession } from "@/app/libs/session";
import { login, logout } from "@/app/libs/session";

import LoginForm from "./LoginForm";

export default async function Page() {
  const session = await getSession();

  const handleLogin = async (email: string, password: string) => {
    "use server";
    await login(email, password);
    redirect("/login");
  }
  
  const onLogout = async () => {
    "use server";
    await logout();
    redirect("/login");
  }

  return (
    <section>
      <LoginForm onLogin={handleLogin} onLogout={onLogout} />
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}