"use server";
import { prisma } from "@/lib/prisma";

export async function bestSquat() {
  const squats = await prisma.attempt.findMany({
    where: {
      sessionId: 8,
      lift_type: "squat",
      result: true,
    },
  });
  return Math.max(...squats.map((s) => s.weight));
}

export async function bestBench() {
  const benches = await prisma.attempt.findMany({
    where: {
      sessionId: 8,
      lift_type: "bench",
      result: true,
    },
  });
  return Math.max(...benches.map((b) => b.weight));
}

export async function bestDeadlift() {
  const deadlifts = await prisma.attempt.findMany({
    where: {
      sessionId: 8,
      lift_type: "deadlift",
      result: true,
    },
  });
  return Math.max(...deadlifts.map((d) => d.weight));
}
