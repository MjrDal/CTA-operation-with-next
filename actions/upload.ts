"use server";

import { db } from "@/lib/db";
import { mkdir, stat, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { join } from "path";

interface Props {
  blob: FormData;
  id: string;
  radio: string | null;
}

export const uploadAction = async (
  blob: FormData,
  id: string,
  radio: string | null
) => {
  const formData = blob;
  const file = formData.get("audio") as Blob | null;

  if (!file) {
    return NextResponse.json(
      { error: "File blob is required" },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const relativeUploadDir = `/uploads/audio`;
  const uploadDir = join(process.cwd(), "public", relativeUploadDir);

  try {
    await stat(uploadDir);
  } catch (e: any) {
    if (e.code === "ENOENT") {
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        e
      );
      return NextResponse.json(
        { error: "Something went wrong ." },
        { status: 500 }
      );
    }
  }

  try {
    const uniqueSuffix = `${id}-${radio}`;
    const filename = `${(file as File).name.replace(
      /\.[^/.]+$/,
      ""
    )}-${uniqueSuffix}.mp3`;
    await writeFile(`${uploadDir}/${filename}`, buffer);
    await db.intervention.update({
      where: {
        id: id,
      },
      data: { [radio!]: filename },
    });

    return NextResponse.json({ fileUrl: `${relativeUploadDir}/${filename}` });
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json(
      { error: "Something went wrong ." },
      { status: 500 }
    );
  }
};
