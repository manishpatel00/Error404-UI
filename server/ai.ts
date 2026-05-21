"use server";

import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function getAIResponse(prompt: string) {
  // Check if OpenAI API key is configured
  if (!process.env.OPENAI_API_KEY) {
    console.warn(
      "⚠️  OpenAI API key is not configured. AI features are disabled."
    );
    throw new Error(
      "AI features are not available. Please configure OPENAI_API_KEY to use AI-powered features."
    );
  }

  try {
    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt,
    });

    return text;
  } catch (error) {
    console.error("OpenAI Error:", error);
    throw new Error("Failed to generate AI response. Please try again.");
  }
}
