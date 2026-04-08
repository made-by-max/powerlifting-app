"use server";

import { prisma } from "@/lib/prisma";

import { DotsSchema, DotsState } from "@/app/schemas/DotsSchema";

export async function calculateDots(
  sessionId: number,
  prevState: DotsState,
  formData: FormData,
) {
  if (!Number.isFinite(sessionId)) {
    return {
      success: false,
      message: "Invalid session id.",
      dotScore: prevState.dotScore,
    };
  }

  const parsed = DotsSchema.safeParse({
    bodyweight: formData.get("bodyweight"),
    coefficient: formData.get("coefficient"),
  });

  const retrieveTotal = await prisma.session.findUnique({
    where: {
      id: sessionId,
    },
  });

  if (!retrieveTotal) {
    return {
      success: false,
      message: "No total available.",
      dotScore: prevState.dotScore,
    };
  }

  const total = retrieveTotal.total;

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      message: "Validation failed.",
      dotScore: prevState.dotScore,
    };
  }

  if (!parsed.data.bodyweight || !parsed.data.coefficient) {
    return {
      success: false,
      message: "Null values.",
      dotScore: prevState.dotScore,
    };
  }

  function calculateFemaleDotScore(bodyweight: number) {
    const a = -0.0000010706;
    const b = 0.0005158568;
    const c = -0.1126655495;
    const d = 13.6175032;
    const e = -57.96288;

    const femaleDotScore =
      (total * 500) /
      (a * bodyweight ** 4 +
        b * bodyweight ** 3 +
        c * bodyweight ** 2 +
        d * bodyweight +
        e);
    return femaleDotScore;
  }

  function calculateMaleDotScore(bodyweight: number) {
    const a = -0.000001093;
    const b = 0.0007391293;
    const c = -0.1918759221;
    const d = 24.0900756;
    const e = -307.75076;

    const maleDotScore =
      (total * 500) /
      (a * bodyweight ** 4 +
        b * bodyweight ** 3 +
        c * bodyweight ** 2 +
        d * bodyweight +
        e);
    return maleDotScore;
  }

  const dotScore =
    parsed.data.coefficient === "female"
      ? calculateFemaleDotScore(parsed.data.bodyweight)
      : calculateMaleDotScore(parsed.data.bodyweight);

  await prisma.session.update({
    where: {
      id: sessionId,
    },
    data: {
      bodyweight: parsed.data.bodyweight,
      coefficient: parsed.data.coefficient,
      dots_score: dotScore,
    },
  });
  return {
    success: true,
    message: `Attempt created!`,
    dotScore: dotScore,
  };
}
