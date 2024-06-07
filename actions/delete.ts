"use server";

import { db } from "@/lib/db";

export const deletAction = async (values: string, data: string) => {
  if (!values) {
    return { error: "Invalid fields!" };
  }

  if (data === "intervention") {
    await db.intervention.delete({
      where: {
        id: values,
      },
    });
    return { success: "Groupement deleted" };
  }

  if (data === "casernes") {
    await db.casernes.delete({
      where: {
        id: values,
      },
    });
    return { success: "Groupement deleted" };
  }

  return { success: " delete complite" };
};
