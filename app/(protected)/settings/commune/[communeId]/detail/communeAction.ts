"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { CommuneSchema, CommunesUpdateSchema } from "./communeSchema";

export const communeAction = async (values: z.infer<typeof CommuneSchema>) => {
  const validateFields = CommuneSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const {
    name,
    code,
    insee,
    long,
    lat,
    premier,
    deuxieme,
    troisieme,
    quatrieme,
    cinqieme,
    sixieme,
    septieme,
    huitieme,
  } = validateFields.data;

  await db.communes.create({
    data: {
      name,
      code,
      insee,
      long,
      lat,
      premier,
      deuxieme,
      troisieme,
      quatrieme,
      cinqieme,
      sixieme,
      septieme,
      huitieme,
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

  return { success: "caserne ajouter" };
};

export const communeDeleteAction = async () => {
  await db.communes.deleteMany({});

  return { success: "caserne ajouter" };
};
