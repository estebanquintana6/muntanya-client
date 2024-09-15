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

  const files = form.getAll('photos') as File[];
  const title = form.get('title');
  const subtitle = form.get('subtitle');
  const description = form.get('description');
  const tags = form.get('tags');
  

  const photo_urls = [];

  try {
    for (const file of files) {
      const contentType = file.type;
      const filename = `${nanoid()}.${contentType.split('/')[1]}`;
      const blob = await put(filename, file, {
        contentType,
        access: 'public',
      });
      photo_urls.push(blob.url);
    }

    const { data } = await axios({
      url: `${process.env.SERVER_URL}/products/create`,
      method: "POST",
      headers: {
        Authorization: cookies().get("session")?.value,
        "Content-Type": "application/json"
      },
      data: {
        title,
        subtitle,
        description,
        photo_urls,
        tags
      }
    });

    return NextResponse.json(data);

  } catch (e) {
    if (photo_urls.length > 0) await del(photo_urls);
    return NextResponse.error();
  }
}