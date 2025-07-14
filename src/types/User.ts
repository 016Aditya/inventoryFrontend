import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email("Invalid Email!"),
  password: z
    .string()
    .min(8, "Password must have 8 characters!")
    .max(20, "password must have 20 max characters")
    .regex(/[a-z]/, "Password must have a lower character")
    .regex(/[A-Z]/, "Password must have a Uppercase character")
    .regex(/[^A-Z0-9a-z]/, "Password must have Special char"),
});
export type User = z.infer<typeof userSchema>;
