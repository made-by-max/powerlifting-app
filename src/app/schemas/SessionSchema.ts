import * as z from "zod";
const COEFFICIENTS = ["Female", "Male"] as const;
export const SessionSchema = z.object({
  bodyweight: z.coerce.number().optional(),
  coefficient: z.enum(COEFFICIENTS).optional(),
});

export type SessionState = {
  message: string;
  success: boolean;
  errors?: {
    bodyweight?: string[];
    coefficient?: string[];
  };
};
