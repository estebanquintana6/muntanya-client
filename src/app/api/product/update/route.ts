import { put, del } from '@vercel/blob'
import { NextResponse } from 'next/server'
import { customAlphabet } from 'nanoid'
import axios from "axios";
import { cookies } from "next/headers";

export const runtime = 'edge'

const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  7
) // 7-character random string
export async function POST(req: Request) {
  const form = await req.formData();

  const id = form.get("id");
  const files = form.getAll('photos') as File[];
  const title = form.get('title');
  const description = form.get('description');
  const tags = form.get('tags');
  const toDeletePhotos = form.get('toDeletePhotos');


  try {
    const { data } = await axios({
      url: `${process.env.SERVER_URL}/products/update`,
      method: "POST",
      headers: {
        Authorization: cookies().get("session")?.value,
        "Content-Type": "application/json"
      },
      data: {
        id,
        title,
        description,
        tags
      }
    });

    return NextResponse.json(data);

  } catch (e) {
    del(photo_urls);
    return NextResponse.error();
  }
}