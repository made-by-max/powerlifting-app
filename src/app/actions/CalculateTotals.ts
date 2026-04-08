"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { bestSquat, bestBench, bestDeadlift } from "@/app/utils/Calculations";

export async function CalculateTotals(sessionId: number) {
  const bestSquatNumber: number = await bestSquat(sessionId);
  const bestBenchNumber: number = await bestBench(sessionId);
  const bestDeadliftNumber: number = await bestDeadlift(sessionId);
  const total: number = bestSquatNumber + bestBenchNumber + bestDeadliftNumber;

  const session = await prisma.session.update({
    where: {
      id: sessionId,
    },
    data: {
      bestSquat: bestSquatNumber,
      bestBench: bestBenchNumber,
      bestDeadlift: bestDeadliftNumber,
      total: total,
    },
  });
  revalidatePath(`/session/${sessionId}/dotscore`);
  redirect(`/session/${sessionId}/dotscore`);
}
