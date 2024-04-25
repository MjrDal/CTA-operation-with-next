"use server";

import { db } from "@/lib/db";
import { MessageSchema } from "@/schemas";
import { z } from "zod";

export const messageAction = async (values: z.infer<typeof MessageSchema>) => {
  console.log(values);
  const validateFields = MessageSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { message, generation } = validateFields.data;

  const messageConnectArray = generation.map((themeId) => ({
    id: themeId,
  }));

  await db.message.create({
    data: {
      message,
      generation: {
        connect: messageConnectArray,
      },
    },
  });

  return { success: "message created" };
};
