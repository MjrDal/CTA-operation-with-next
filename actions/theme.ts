"use server";

import { db } from "@/lib/db";
import { ThemeSchema } from "@/schemas";
import { z } from "zod";

export const themeAction = async (values: z.infer<typeof ThemeSchema>) => {
  console.log(values);
  const validateFields = ThemeSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { theme } = validateFields.data;

  await db.themes.create({
    data: {
      theme,
    },
  });

  return { success: "Groupement created" };
};
