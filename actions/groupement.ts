"use server";

import { db } from "@/lib/db";
import { GroupementSchema } from "@/schemas";
import { z } from "zod";

export const groupementAction = async (
  values: z.infer<typeof GroupementSchema>
) => {
  console.log(values);
  const validateFields = GroupementSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { groupement } = validateFields.data;

  await db.groupements.create({
    data: {
      groupement,
    },
  });

  return { success: "Groupement created" };
};
