"use server";

import { prisma } from "@/lib/prisma";

export type ResultsState = {
  message: string;
  success: boolean;
  total: number;
  dotScore: number;
  bestSquat: number;
  bestBench: number;
  bestDeadlift: number;
};

export async function pullResults(sessionId: number): Promise<ResultsState> {
  if (!Number.isFinite(sessionId)) {
    return {
      success: false,
      message: "Invalid session id.",
      total: 0,
      dotScore: 0,
      bestSquat: 0,
      bestBench: 0,
      bestDeadlift: 0,
    };
  }
  const retrievedData = await prisma.session.findUnique({
    where: {
      id: sessionId,
    },
  });

  if (!retrievedData) {
    return {
      success: false,
      message: "Could not retrieve data.",
      total: 0,
      dotScore: 0,
      bestSquat: 0,
      bestBench: 0,
      bestDeadlift: 0,
    };
  }

  const total = retrievedData.total ?? 0;
  const dotScore = retrievedData.dots_score ?? 0;
  const bestSquat = retrievedData.bestSquat ?? 0;
  const bestBench = retrievedData.bestBench ?? 0;
  const bestDeadlift = retrievedData.bestDeadlift ?? 0;

  return {
    success: true,
    message: "",
    total,
    dotScore,
    bestSquat,
    bestBench,
    bestDeadlift,
  };
}
