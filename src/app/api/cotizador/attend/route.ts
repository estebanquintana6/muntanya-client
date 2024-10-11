import { NextResponse } from 'next/server';
import axios from "axios";
import { cookies } from "next/headers";

export const runtime = 'edge'

interface RequestData {
    id: string;
    attend: boolean;
}

export async function POST(req: Request) {
  const requestData : RequestData = await req.json();

  console.log(requestData);

  try {
    const { data } = await axios({
        url: `${process.env.SERVER_URL}/quoter/attend`,
        method: "POST",
        headers: {
          Authorization: cookies().get("session")?.value,
          "Content-Type": "application/json"
        },
        data: requestData
    });
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.error();
  }
}