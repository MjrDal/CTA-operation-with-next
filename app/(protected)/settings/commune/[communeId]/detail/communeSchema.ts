import * as z from "zod";

export const CommuneSchema = z.object({
  name: z.string().min(1, { message: "name is requered" }),
  code: z.string().min(1, { message: "name is requered" }),
  insee: z.string().min(1, { message: "name is requered" }),
  long: z.string().min(1, { message: "name is requered" }),
  lat: z.string().min(1, { message: "name is requered" }),
  premier: z.string().min(1, { message: "name is requered" }),
  deuxieme: z.string().min(1, { message: "name is requered" }),
  troisieme: z.string().min(1, { message: "name is requered" }),
  quatrieme: z.string().min(1, { message: "name is requered" }),
  cinqieme: z.string().min(1, { message: "name is requered" }),
  sixieme: z.string().min(1, { message: "name is requered" }),
  septieme: z.string().min(1, { message: "name is requered" }),
  huitieme: z.string().min(1, { message: "name is requered" }),
});

export const CommunesUpdateSchema = z.object({
  id: z.string().optional(),
  premier: z.string().min(1, { message: "type is requered" }),
  deuxieme: z.string().min(1, { message: "type is requered" }),
  troisieme: z.string().min(1, { message: "type is requered" }),
  quatrieme: z.string().min(1, { message: "type is requered" }),
});

export const CodeCommunesUpdateSchema = z.object({
  name: z.string().optional(),
  insee: z.string().min(1, { message: "type is requered" }),
});
