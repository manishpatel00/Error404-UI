import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

let prismaClientSingleton: PrismaClient;

function getPrismaClient() {
  if (!prismaClientSingleton) {
    const prismaPg = new PrismaPg({
      connectionString: process.env.DATABASE_URL,
    });
    prismaClientSingleton = new PrismaClient({
      adapter: prismaPg,
      log:
        process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    });
  }
  return prismaClientSingleton;
}

declare global {
  var prismaGlobal: PrismaClient | undefined;
}

const prisma = globalThis.prismaGlobal || getPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}

export default prisma;
