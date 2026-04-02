"use server";

import { prisma } from "@/lib/prisma";

export type CreateUserState = {
  success: boolean;
  message: string;
};

export async function createUser(
  _prevState: CreateUserState,
  formData: FormData,
): Promise<CreateUserState> {
  const raw = formData.get("form-user-name");
  const name = typeof raw === "string" ? raw.trim() : "";

  if (!name) {
    return { success: false, message: "Please enter a name." };
  }
  if (name.length < 2 || name.length > 32) {
    return {
      success: false,
      message: "Name must be between 2 and 32 characters.",
    };
  }

  try {
    const lifter = await prisma.lifter.create({ data: { name } });
    return { success: true, message: `User ${lifter.name} created!` };
  } catch {
    return { success: false, message: "Database error occurred." };
  }
}
