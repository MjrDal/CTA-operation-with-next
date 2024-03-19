"use server";

import { db } from "@/lib/db";
import { CaserneSchema } from "@/schemas";
import { z } from "zod";

export const caserneAction = async (values: z.infer<typeof CaserneSchema>) => {
  console.log(values);
  const validateFields = CaserneSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, groupement } = validateFields.data;

  await db.casernes.create({
    data: {
      name,
      groupement,
    },
  });

  return { success: "Groupement created" };
};
