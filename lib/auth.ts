import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";

// Determine the database provider
const provider = (process.env.DATABASE_PROVIDER || "sqlite") as
  | "sqlite"
  | "postgresql";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider }),
  baseURL:
    process.env.BETTER_AUTH_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  basePath: "/api/auth",
  secret: process.env.BETTER_AUTH_SECRET || "fallback_secret_for_build",

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          },
        }
      : {}),
  },

  user: {
    additionalFields: {
      isPro: {
        type: "boolean",
        defaultValue: false,
      },
    },
  },
});
