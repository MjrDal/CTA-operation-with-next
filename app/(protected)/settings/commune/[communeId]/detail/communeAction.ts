"use server";

import { db } from "@/lib/db";
import { CommuneSchema } from "@/schemas";
import { z } from "zod";
import { CommunesUpdateSchema } from "./communeSchema";

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

export const communeUpdateAction = async (
  values: z.infer<typeof CommunesUpdateSchema>
) => {
  const validateFields = CommunesUpdateSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { id, premier, deuxieme, troisieme, quatrieme } = validateFields.data;

  await db.communes.update({
    where: { id: id },
    data: {
      premier,
      deuxieme,
      troisieme,
      quatrieme,
    },
  });

  return { success: "Groupement created" };
};
