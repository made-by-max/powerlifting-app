"use server";

import { prisma } from "@/lib/prisma";

import { SessionSchema, SessionState } from "@/app/schemas/SessionSchema";

export async function UpdateSession(
  prevState: SessionState,
  formData: FormData,
) {
  const parsed = SessionSchema.safeParse({
    bodyweight: formData.get("bodyweight"),
    coefficient: formData.get("coefficient"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "Validation failed.",
    };
  }
  const session = await prisma.session.update({
    where: {
      id: sessionId,
    },
    data: {
      bodyweight: parsed.data.bodyweight,
      coefficient: parsed.data.coefficient,
    },
  });
  return {
    success: true,
    message: `Attempt created!`,
  };
}
