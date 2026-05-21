import {
  getPaddleInstance,
  initializePaddle,
  type Paddle,
} from "@paddle/paddle-js";

let paddle: Paddle | undefined;

export const getPaddle = async (): Promise<Paddle | undefined> => {
  // If Paddle is disabled (no token configured), return undefined
  if (!process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN) {
    console.warn(
      "⚠️  Paddle is not configured. Payment features will be disabled."
    );
    return undefined;
  }

  if (!paddle) {
    const environment = (process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT ||
      "sandbox") as "sandbox" | "production";

    try {
      paddle =
        (await initializePaddle({
          environment,
          token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN!,
        })) ?? getPaddleInstance();
    } catch (error) {
      console.error("Failed to initialize Paddle:", error);
      return undefined;
    }
  }
  return paddle;
};
