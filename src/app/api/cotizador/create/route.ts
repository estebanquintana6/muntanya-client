import { NextResponse } from 'next/server';
import axios from "axios";

export const runtime = 'edge'

interface RequestData {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    instagram: string;
    knowMethod: string;
    services: string[];
    description: string;
}

export async function POST(req: Request) {
  const requestData : RequestData = await req.json();

  try {
    const { data } = await axios({
        url: `${process.env.SERVER_URL}/quoter/create`,
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        data: requestData
    });
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.error();
  }
}