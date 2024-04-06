"use server";

import { db } from "@/lib/db";
import { CommuneSchema } from "@/schemas";
import { z } from "zod";

export const communeAction = async (values: z.infer<typeof CommuneSchema>) => {
  const validateFields = CommuneSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, code, premier, deuxieme, troisieme, quatrieme } =
    validateFields.data;

  await db.communes.create({
    data: {
      name,
      code,
      premier,
      deuxieme,
      troisieme,
      quatrieme,
    },
  });

  return { success: "Groupement created" };
};
