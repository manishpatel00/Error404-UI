import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// Determine which adapter to use based on database provider
const isPostgres = process.env.DATABASE_PROVIDER === "postgresql";

let prismaClientSingleton: ReturnType<typeof createPrismaClient>;

function createPrismaClient() {
  if (isPostgres) {
    // PostgreSQL adapter for production
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL!,
      ssl: process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : undefined,
    });

    const adapter = new PrismaPg(pool);

    return new PrismaClient({
      adapter,
      log: ["error"],
    });
  } else {
    // SQLite (default) for local development
    return new PrismaClient({
      log: ["error"],
    });
  }
}

declare global {
  var prismaGlobal: ReturnType<typeof createPrismaClient> | undefined;
}

const prisma = global.prismaGlobal ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prismaGlobal = prisma;
}

export default prisma;
