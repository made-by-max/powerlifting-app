// "use server";
// import { prisma } from "@/lib/prisma"; // Your Prisma instance

// export type CreateUserState = {
//   success: boolean;
//   message: string;
// };

// export async function createUser(
//   prevState: CreateUserState,
//   formData: FormData,
// ) {
//   const name = formData.get("form-user-name") as string;

//   try {
//     const lifter = await prisma.lifter.create({ data: { name } });
//     return { success: true, message: `User ${lifter.name} created!` };
//   } catch {
//     return { success: false, message: "Database error occurred." };
//   }
// }
