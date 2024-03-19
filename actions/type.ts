"use server";

import { db } from "@/lib/db";
import { TypeVehiculeSchema } from "@/schemas";
import { z } from "zod";

export const typeAction = async (
  values: z.infer<typeof TypeVehiculeSchema>
) => {
  console.log(values);
  const validateFields = TypeVehiculeSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { type } = validateFields.data;

  await db.typeVehicules.create({
    data: {
      type,
    },
  });

  return { success: "Groupement created" };
};
