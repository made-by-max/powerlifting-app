import * as z from "zod";
const COEFFICIENTS = ["female", "male"] as const;
export const DotsSchema = z.object({
  bodyweight: z.coerce.number().optional(),
  coefficient: z.enum(COEFFICIENTS).optional(),
});

export type DotsState = {
  message: string;
  success: boolean;
  errors?: {
    bodyweight?: string[];
    coefficient?: string[];
  };
  dotScore: number;
};
