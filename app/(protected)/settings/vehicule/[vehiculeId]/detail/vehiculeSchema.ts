import * as z from "zod";

export const VehiculeSchema = z.object({
  name: z.string().min(1, { message: "name is requered" }),
  type: z.string().min(1, { message: "type is requered" }),
  affectation: z.string().min(1, { message: "affectation is requered" }),
  theme: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  status: z.string().min(1, { message: "status is requered" }),
});
