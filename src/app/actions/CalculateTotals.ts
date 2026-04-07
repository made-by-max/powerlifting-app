"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { bestSquat, bestBench, bestDeadlift } from "@/app/utils/Calculations";

const bestSquatNumber: number = await bestSquat();
const bestBenchNumber: number = await bestBench();
const bestDeadliftNumber: number = await bestDeadlift();
const total: number = bestSquatNumber + bestBenchNumber + bestDeadliftNumber;

export async function CalculateTotals(sessionId: number) {
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
