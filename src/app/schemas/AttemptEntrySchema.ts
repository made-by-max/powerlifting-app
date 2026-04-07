import * as z from "zod";

export const AttemptEntrySchema = z.object({
  sessionId: z.coerce.number(),
  lift_type: z
    .string()
    .min(2, "Must be at least 2 characters.")
    .max(32, "Must be at most 32 characters."),
  attempt_number: z.coerce
    .number()
    .min(1, "Must be between 1-3.")
    .max(3, "Must be between 1-3."),
  weight: z.coerce.number(),
  left_judge: z.stringbool(),
  center_judge: z.stringbool(),
  right_judge: z.stringbool(),
  // result: z.stringbool(),
  platform_pr: z.coerce.boolean(),
  all_time_pr: z.coerce.boolean(),
});

export type AddAtemptState = {
  message: string;
  success: boolean;
  errors?: {
    lift_type?: string[];
    attempt_number?: string[];
    weight?: string[];
    left_judge?: string[];
    center_judge?: string[];
    right_judge?: string[];
    // result?: string[];
    platform_pr?: string[];
    all_time_pr?: string[];
  };
};
