"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

// import {
//   SessionSchema,
//   SessionState,
// } from "@/app/schemas/SessionSchema";

export const CreateSession = async () => {
  const newSession = await prisma.session.create({
    data: {}, // Works if all required fields have defaults
  });

  revalidatePath("/session");
  redirect(`/session/${newSession.id}`);
};
