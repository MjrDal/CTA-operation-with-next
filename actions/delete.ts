"use server";

import { db } from "@/lib/db";

export const deletAction = async (values: string) => {
  if (!values) {
    return { error: "Invalid fields!" };
  }

  await db.casernes.delete({
    where: {
      id: values,
    },
  });
  return { success: "Groupement created" };
};
