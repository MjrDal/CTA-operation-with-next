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

export const VehiculeSchema = z.object({
  id: z.string().min(1, { message: "name is requered" }),
  name: z.string().min(1, { message: "name is requered" }),
  type: z.string().min(1, { message: "name is requered" }),
  affectation: z.string().min(1, { message: "name is requered" }),
  theme: z.string().min(1, { message: "name is requered" }),
});

export const CaserneSchema = z.object({
  name: z.string().min(1, { message: "name is requered" }),
  groupement: z.string().min(1, { message: "name is requered" }),
});

export const DeleteSchema = z.object({
  id: z.string().min(1),
});
