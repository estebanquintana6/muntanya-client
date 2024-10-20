import { cookies } from "next/headers";
import { decrypt } from "../libs/session";

interface SessionPayload {
  username: string;
  name: string;
  role: "SUPERADMIN" | "ADMIN";
  iat: number;
  exp: number;
}

export default async function getSession(): Promise<SessionPayload> {
  const session = cookies().get("session")?.value ?? "";

  const payload = await decrypt(session);

  return payload;
}
