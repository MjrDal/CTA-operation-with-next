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

  const { name, type, affectation, theme, status } = validateFields.data;

  await db.vehicules.create({
    data: {
      name,
      type,
      affectation,
      theme,
      status,
    },
  });

  return { success: "Groupement created" };
};
