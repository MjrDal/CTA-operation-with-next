import * as z from "zod";

export const CommunesUpdateSchema = z.object({
  id: z.string().optional(),
  premier: z.string().min(1, { message: "type is requered" }),
  deuxieme: z.string().min(1, { message: "type is requered" }),
  troisieme: z.string().min(1, { message: "type is requered" }),
  quatrieme: z.string().min(1, { message: "type is requered" }),
});
