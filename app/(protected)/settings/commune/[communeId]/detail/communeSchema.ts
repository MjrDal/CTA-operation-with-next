import * as z from "zod";

export const CommunesUpdateSchema = z.object({
  name: z.string().min(1, { message: "name is requered" }),
  premier: z.string().min(1, { message: "type is requered" }),
  deuxieme: z.string().min(1, { message: "type is requered" }),
  troiseme: z.string().min(1, { message: "type is requered" }),
  quatrieme: z.string().min(1, { message: "type is requered" }),
});
