import { put, del } from "@vercel/blob";
import { NextResponse } from "next/server";
import { customAlphabet } from "nanoid";
import axios from "axios";
import { cookies } from "next/headers";

export const runtime = "edge";

const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7,
); // 7-character random string
export async function POST(req: Request) {
  const form = await req.formData();

  const id = form.get("id");
  const files = form.getAll("photos") as File[];
  const title = form.get("title");
  const subtitle = form.get("subtitle");
  const description = form.get("description");
  const tags = form.get("tags");
  const toDeletePhotos: string[] = JSON.parse(
    form.get("toDeletePhotos") as string,
  );

  const toAddPhotos = [];

  try {
    if ((toDeletePhotos || []).length > 0) {
      await del(toDeletePhotos);
    }

    for (const file of files) {
      const contentType = file.type;
      const filename = `${nanoid()}.${contentType.split("/")[1]}`;
      const blob = await put(filename, file, {
        contentType,
        access: "public",
      });
      toAddPhotos.push(blob.url);
    }

    const { data } = await axios({
      url: `${process.env.SERVER_URL}/products/update`,
      method: "POST",
      headers: {
        Authorization: cookies().get("session")?.value,
        "Content-Type": "application/json",
      },
      data: {
        id,
        title,
        subtitle,
        description,
        tags,
        toDeletePhotos,
        toAddPhotos,
      },
    });

    return NextResponse.json(data);
  } catch (e) {
    if (toAddPhotos.length > 0) await del(toAddPhotos);
    return NextResponse.error();
  }
}
