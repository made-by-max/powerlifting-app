"use server";
import { Prisma } from "@generated/prisma/client";
import { prisma } from "@/lib/prisma";
import {
  AttemptEntrySchema,
  AddAtemptState,
} from "@/app/schemas/AttemptEntrySchema";

// export type AddAtemptState = {
//   success: boolean;
//   message: string;
// };

// function formStringOrNull(formData: FormData, key: string): string | null {
//   const v = formData.get(key);
//   if (typeof v !== "string") return null;
//   const t = v.trim();
//   return t === "" ? null : t;
// }

// function formIntOrNull(formData: FormData, key: string): number {
//   const raw = formStringOrNull(formData, key);
//   // if (raw === null) return null;
//   const n = Number.parseInt(raw, 10);
//   return Number.isNaN(n) ? null : n;
// }

// function formConvertBoolean(formData: FormData, key: string): boolean {
//   const raw = formStringOrNull(formData, key);
//   if (raw === null) return null;
//   const bool = raw === "true";
//   return bool === true ? true : false;
// }

export async function addAttempt(
  prevState: AddAtemptState,
  formData: FormData,
) {
  const parsed = AttemptEntrySchema.safeParse({
    lift_type: formData.get("lift_type"),
    attempt_number: formData.get("attempt_number"),
    weight: formData.get("weight"),
    left_judge: formData.get("left_judge"),
    center_judge: formData.get("center_judge"),
    right_judge: formData.get("right_judge"),
    result: formData.get("result"),
    platform_pr: formData.get("platform_pr"),
    all_time_pr: formData.get("all_time_pr"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "Validation failed.",
    };
  }
  const attempt = await prisma.attempt.create({
    data: parsed.data,
  });
  return { success: true, message: `Attempt created!` };
}

//   try {
//     const attempt = validatedFields;
//     return { message: `Attempt created!` };
//   } catch (error) {
//     console.error("meetEntry failed:", error);
//     if (error instanceof Prisma.PrismaClientKnownRequestError) {
//       console.error("[Prisma]", error.code, error.message, error.meta);
//     }
//     const detail = error instanceof Error ? error.message : String(error);
//     return {
//       message: `Database error: ${detail}`,
//     };
//   }
//
