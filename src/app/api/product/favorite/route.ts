import { NextResponse } from 'next/server';
import axios from "axios";
import { cookies } from "next/headers";


export async function POST(req: Request) {
  const form = await req.formData();

  const id = form.get("id") as string;
  const favorite = form.get("favorite") as string;
  
  try {
    
    const { data } = await axios({
      url: `${process.env.SERVER_URL}/products/favorite`,
      method: "POST",
      headers: {
        Authorization: cookies().get("session")?.value,
        "Content-Type": "application/json"
      },
      data: {
        id,
        favorite: JSON.parse(favorite)
      }
    });

    return NextResponse.json(data);

  } catch (e) {
    return NextResponse.error();
  }
}