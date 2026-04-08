import { cache } from "react";
import { prisma } from "@/lib/prisma";
export const getSessionById = cache(async (sessionId: string) => {
  const id = Number(sessionId);
  if (!Number.isFinite(id)) return null;
  return prisma.session.findUnique({
    where: { id },
  });
});
