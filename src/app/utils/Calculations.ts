"use server";
import { prisma } from "@/lib/prisma";

export async function bestSquat(sessionId: number) {
  const squats = await prisma.attempt.findMany({
    where: {
      sessionId: sessionId,
      lift_type: "squat",
      result: true,
    },
  });
  return Math.max(...squats.map((s) => s.weight));
}

export async function bestBench(sessionId: number) {
  const benches = await prisma.attempt.findMany({
    where: {
      sessionId: sessionId,
      lift_type: "bench",
      result: true,
    },
  });
  return Math.max(...benches.map((b) => b.weight));
}

export async function bestDeadlift(sessionId: number) {
  const deadlifts = await prisma.attempt.findMany({
    where: {
      sessionId: sessionId,
      lift_type: "deadlift",
      result: true,
    },
  });
  return Math.max(...deadlifts.map((d) => d.weight));
}
