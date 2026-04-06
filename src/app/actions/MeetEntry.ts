// "use server";
// import { Prisma } from "@generated/prisma/client";
// import { prisma } from "@/lib/prisma";

// export type CreateMeetEntryState = {
//   success: boolean;
//   message: string;
// };

// function formStringOrNull(formData: FormData, key: string): string | null {
//   const v = formData.get(key);
//   if (typeof v !== "string") return null;
//   const t = v.trim();
//   return t === "" ? null : t;
// }

// function formIntOrNull(formData: FormData, key: string): number | null {
//   const raw = formStringOrNull(formData, key);
//   if (raw === null) return null;
//   const n = Number.parseInt(raw, 10);
//   return Number.isNaN(n) ? null : n;
// }

// export async function meetEntry(
//   prevState: CreateMeetEntryState,
//   formData: FormData,
// ) {
//   const lifterId = formIntOrNull(formData, "form-meetEntry-lifterId");
//   const meetId = formIntOrNull(formData, "form-meetEntry-meetId");
//   const bodyweight = formIntOrNull(formData, "form-meetEntry-bodyweight");
//   const weight_class = formStringOrNull(formData, "form-meetEntry-weightClass");
//   const coefficient = formStringOrNull(formData, "form-meetEntry-coefficient");

//   if (lifterId === null || meetId === null) {
//     return {
//       success: false,
//       message: "Lifter ID and Meet ID are required.",
//     };
//   }

//   try {
//     const entry = await prisma.meetEntry.create({
//       data: {
//         lifterId,
//         meetId,
//         bodyweight,
//         weight_class,
//         coefficient,
//         bestSquat: 0,
//         bestBench: 0,
//         bestDeadlift: 0,
//         total: 0,
//         meet_entry: 1,
//       },
//     });
//     return {
//       success: true,
//       message: `Meet entry #${entry.id} saved (lifter ${entry.lifterId}, meet ${entry.meetId}).`,
//     };
//   } catch (error) {
//     console.error("meetEntry failed:", error);
//     if (error instanceof Prisma.PrismaClientKnownRequestError) {
//       console.error("[Prisma]", error.code, error.message, error.meta);
//     }
//     const detail = error instanceof Error ? error.message : String(error);
//     return {
//       success: false,
//       message: `Database error: ${detail}`,
//     };
//   }
// }
