"use server";

import { VehiculeSchema } from "@/app/(protected)/settings/vehicule/[vehiculeId]/detail/vehiculeSchema";
import { db } from "@/lib/db";
import { z } from "zod";

export const vehiculeAction = async (
  values: z.infer<typeof VehiculeSchema>
) => {
  const validateFields = VehiculeSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, type, affectation, theme } = validateFields.data;

  const themeConnectArray = theme.map((themeId) => ({
    id: themeId,
  }));

  await db.vehicules.create({
    data: {
      name,
      type: {
        connect: {
          id: type,
        },
      },
      affectation,
      theme: {
        connect: themeConnectArray,
      },
    },
  });

  return { success: "Groupement created" };
};
