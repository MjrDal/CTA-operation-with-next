"use server";

import { db } from "@/lib/db";
import { promises as fs } from "fs";
import path from "path";

export const deletAudioAction = async (
  values: string,
  radio: string,
  audioName: string
) => {
  if (!values) {
    return { error: "Invalid fields!" };
  }

  const filePath = path.join(
    process.cwd(),
    "public/uploads/audio",
    `${audioName}`
  );

  try {
    await fs.unlink(filePath);
  } catch (error) {
    console.error("Error deleting file:", error);
  }

  await db.intervention.update({
    where: {
      id: values,
    },
    data: { [radio!]: "" },
  });
  return { success: "Groupement created" };
};
