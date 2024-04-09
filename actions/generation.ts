"use server";

import { db } from "@/lib/db";
import { GenerationSchema } from "@/schemas";
import { z } from "zod";

export const generationAction = async (
  values: z.infer<typeof GenerationSchema>
) => {
  const validateFields = GenerationSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const {
    numero,
    commune,
    code,
    premier,
    deuxieme,
    troisieme,
    quatrieme,
    theme,
    denomination,
    dialogue,
    radio1,
    radio2,
    radio3,
    radio4,
    note,
  } = validateFields.data;

  await db.generation.create({
    data: {
      numero,
      commune,
      code,
      premier,
      deuxieme,
      troisieme,
      quatrieme,
      theme,
      denomination,
      dialogue,
      radio1,
      radio2,
      radio3,
      radio4,
      note,
    },
  });

  return { success: "Groupement created" };
};
