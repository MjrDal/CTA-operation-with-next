"use server";

import { db } from "@/lib/db";
import { CaserneSchema } from "@/schemas";
import { z } from "zod";
import { CasernesUpdateSchema } from "./caserneUpdateSchema";

export const caserneAction = async (values: z.infer<typeof CaserneSchema>) => {
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

export const caserneUpdateAction = async (
  values: z.infer<typeof CasernesUpdateSchema>
) => {
  const validateFields = CasernesUpdateSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { id, groupement, name, long, lat } = validateFields.data;

  await db.casernes.update({
    where: { id: id },
    data: {
      groupement,
      name,
      long,
      lat,
    },
  });

  return { success: "caserne ajouter" };
};
