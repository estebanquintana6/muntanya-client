import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import axios from "axios";

const key = new TextEncoder().encode(process.env.JWT_SECRET);

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(username: string, password: string) {
  const { data } = await axios.post(`${process.env.SERVER_URL}/users/login`, {
    username,
    password,
  });
  const { encoded } = data;

  const { exp } = await decrypt(encoded);  
  // Save the session in a cookie
  //cookies().set("session", session, { expires, httpOnly: true });
  cookies().set("session", encoded, { expires: new Date(exp * 1000) });
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

