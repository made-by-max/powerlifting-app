"use server";
import { Prisma } from "@generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { LiftSuccessful } from "../utils/LiftSuccessful";

import {
  AttemptEntrySchema,
  AddAtemptState,
} from "@/app/schemas/AttemptEntrySchema";

export async function addAttempt(
  prevState: AddAtemptState,
  formData: FormData,
) {
  const parsed = AttemptEntrySchema.safeParse({
    sessionId: formData.get("sessionId"),
    lift_type: formData.get("lift_type"),
    attempt_number: formData.get("attempt_number"),
    weight: formData.get("weight"),
    left_judge: formData.get("left_judge"),
    center_judge: formData.get("center_judge"),
    right_judge: formData.get("right_judge"),

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

  // LiftSuccessful(parsed.data.left, parsed.data.center_judge, parsed.data.right_judge)

  // function calculateResult() {
  //   if (!parsed.success) return;
  //   let count = 0;

  //   if (parsed.data.left_judge === true) {
  //     count++;
  //   }
  //   if (parsed.data.center_judge === true) {
  //     count++;
  //   }
  //   if (parsed.data.right_judge === true) {
  //     count++;
  //   }
  //   return count >= 2;
  // }

  const attempt = await prisma.attempt.create({
    data: {
      lift_type: parsed.data.lift_type,
      attempt_number: parsed.data.attempt_number,
      weight: parsed.data.weight,
      left_judge: parsed.data.left_judge,
      center_judge: parsed.data.center_judge,
      right_judge: parsed.data.right_judge,
      result: LiftSuccessful(
        parsed.data.left_judge,
        parsed.data.center_judge,
        parsed.data.right_judge,
      ),
      platform_pr: parsed.data.platform_pr,
      all_time_pr: parsed.data.all_time_pr,
      session: {
        connect: { id: parsed.data.sessionId },
      },
    },
  });
  return {
    success: true,
    message: `Attempt created!`,
  };
}
