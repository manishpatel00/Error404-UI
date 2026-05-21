require("dotenv/config");
const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");

(async () => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : undefined,
  });

  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter, log: ["query", "error"] });

  try {
    const users = await prisma.user.findMany();
    console.log("Users:", JSON.stringify(users, null, 2));
  } catch (e) {
    console.error("Error:", e);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
})();
