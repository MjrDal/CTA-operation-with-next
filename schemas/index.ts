import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "email is requered" }),
  password: z.string().min(1, { message: "Password is requered" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "email is requered" }),
  password: z.string().min(6, { message: "Minimum 6 characters requiered" }),
  name: z.string().min(1, { message: "name is requered" }),
});

export const GroupementSchema = z.object({
  groupement: z.string().min(1, { message: "name is requered" }),
});

export const ThemeSchema = z.object({
  theme: z.string().min(1, { message: "name is requered" }),
});

export const TypeVehiculeSchema = z.object({
  type: z.string().min(1, { message: "name is requered" }),
});

export const CaserneSchema = z.object({
  name: z.string().min(1, { message: "name is requered" }),
  groupement: z.string().min(1, { message: "name is requered" }),
});

export const CommuneSchema = z.object({
  name: z.string().min(1, { message: "name is requered" }),
  code: z.string().min(1, { message: "name is requered" }),
  premier: z.string().min(1, { message: "name is requered" }),
  deuxieme: z.string().min(1, { message: "name is requered" }),
  troisieme: z.string().min(1, { message: "name is requered" }),
  quatrieme: z.string().min(1, { message: "name is requered" }),
});

export const DeleteSchema = z.object({
  id: z.string().min(1),
});

export const GenerationSchema = z.object({
  numero: z.string().min(1, { message: "name is requered" }),
  commune: z.string().min(1, { message: "name is requered" }),
  code: z.string().min(1, { message: "name is requered" }),
  premier: z.string().min(1, { message: "name is requered" }),
  deuxieme: z.string().min(1, { message: "name is requered" }),
  troisieme: z.string().min(1, { message: "name is requered" }),
  quatrieme: z.string().min(1, { message: "name is requered" }),
  theme: z.string().min(1, { message: "name is requered" }),
  denomination: z.string().min(1, { message: "name is requered" }),
  dialogue: z.string().min(1, { message: "name is requered" }),
  radio1: z.string().min(1, { message: "name is requered" }),
  radio2: z.string().optional(),
  radio3: z.string().optional(),
  radio4: z.string().optional(),
  note: z.string().min(1, { message: "name is requered" }),
});

export const MessageSchema = z.object({
  message: z.string().min(1, { message: "name is requered" }),
  generation: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});
