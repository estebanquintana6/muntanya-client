import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export const runtime = "edge";

interface RequestData {
  name: string;
  username: string;
  password: string;
  password2: string;
}

export async function POST(req: Request) {
  const requestData: RequestData = await req.json();

  try {
    const { data } = await axios({
      url: `${process.env.SERVER_URL}/users/create`,
      method: "POST",
      headers: {
        Authorization: cookies().get("session")?.value,
        "Content-Type": "application/json",
      },
      data: requestData,
    });
    return NextResponse.json(data);
  } catch (e) {
    const { response } = e as { response: any };
    return NextResponse.json(response);
  }
}
