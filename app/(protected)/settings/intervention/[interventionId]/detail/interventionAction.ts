"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { InterventionSchema } from "./interventionSchema";

export const interventionAction = async (
  values: z.infer<typeof InterventionSchema>
) => {
  const validateFields = InterventionSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { theme, denomination, dialogue, radio1, radio2, radio3, radio4 } =
    validateFields.data;

  await db.intervention.create({
    data: {
      theme,
      denomination,
      dialogue,
      radio1,
      radio2,
      radio3,
      radio4,
    },
  });

  return { success: "Groupement created" };
};
