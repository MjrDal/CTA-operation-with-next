import * as z from "zod";

export const CasernesUpdateSchema = z.object({
  id: z.string().optional(),
  groupement: z.string().min(1, { message: "type is requered" }),
  name: z.string().min(1, { message: "type is requered" }),
  long: z.string().min(1, { message: "type is requered" }),
  lat: z.string().min(1, { message: "type is requered" }),
});
