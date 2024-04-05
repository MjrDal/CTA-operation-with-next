import * as z from "zod";

export const InterventionSchema = z.object({
  theme: z.string().min(1, { message: "name is requered" }),
  denomination: z.string().min(1, { message: "name is requered" }),
  dialogue: z.string().min(1, { message: "name is requered" }),
  radio1: z.string().optional(),
  radio2: z.string().optional(),
  radio3: z.string().optional(),
  radio4: z.string().optional(),
});
