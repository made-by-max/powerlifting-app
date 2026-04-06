"use server";
import { Prisma } from "@generated/prisma/client";
import { prisma } from "@/lib/prisma"; // Your Prisma instance

export type CreateMeetState = {
  success: boolean;
  message: string;
};

function formStringOrNull(formData: FormData, key: string): string | null {
  const v = formData.get(key);
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t === "" ? null : t;
}

/** HTML date input gives "YYYY-MM-DD"; Prisma expects a `Date` (or ISO string), not the Prisma schema keyword `DateTime`. */
function parseMeetDate(formData: FormData): Date | null {
  const raw = formStringOrNull(formData, "form-meet-date");
  if (!raw) return null;
  const d = new Date(raw);
  return Number.isNaN(d.getTime()) ? null : d;
}

export async function createMeet(
  prevState: CreateMeetState,
  formData: FormData,
) {
  const name = formStringOrNull(formData, "form-meet-name");
  const meet_date = parseMeetDate(formData);
  const location = formStringOrNull(formData, "form-meet-location");
  const federation = formStringOrNull(formData, "form-meet-federation");

  try {
    const meet = await prisma.meet.create({
      data: { name, meet_date, location, federation },
    });
    return {
      success: true,
      message: `Meet ${meet.name} on ${meet.meet_date} at ${meet.location} in ${meet.federation} created!`,
    };
  } catch (error) {
    // Full details go to the server terminal (Next dev / production logs).
    console.error("createMeet failed:", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error("[Prisma]", error.code, error.message, error.meta);
    }
    const detail = error instanceof Error ? error.message : String(error);
    return {
      success: false,
      message: `Database error: ${detail}`,
    };
  }
}
