import { mkdir, stat, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
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
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${(file as File).name.replace(
      /\.[^/.]+$/,
      ""
    )}-${uniqueSuffix}.mp3`;
    await writeFile(`${uploadDir}/${filename}`, buffer);
    return NextResponse.json({ fileUrl: `${relativeUploadDir}/${filename}` });
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json(
      { error: "Something went wrong ." },
      { status: 500 }
    );
  }
}
