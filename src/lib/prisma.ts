// import { PrismaPg } from "@prisma/adapter-pg";
// import { Pool } from "pg";
// import { PrismaClient } from "@generated/prisma/client";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
//   pool: Pool | undefined;
// };

// const pool =
//   globalForPrisma.pool ??
//   new Pool({ connectionString: process.env.DATABASE_URL });

// const adapter = new PrismaPg(pool);

// export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
//   globalForPrisma.pool = pool;
// }

import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@generated/prisma/client";
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
export { prisma };
