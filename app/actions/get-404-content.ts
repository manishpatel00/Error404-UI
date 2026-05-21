"use server";

import fs from "fs/promises";
import path from "path";
import { components404 } from "@/lib/404-components";

export type Get404ContentResult =
  | { success: true; code: string }
  | { success: false; error: string };

const BASE_PATH = path.join(process.cwd(), "components", "404");

/**
 * Server action to read a 404 component file and return its source code as string
 *
 * @param slug - The component slug (e.g., 'simple', 'modern')
 * @returns Object with success status and either code or error message
 *
 * @example
 * const result = await get404Content('google');
 * if (result.success) {
 *   console.log(result.code);
 * } else {
 *   console.log(result.error);
 * }
 */
export async function get404Content(
  slug: string,
): Promise<Get404ContentResult> {
  try {
    // Prevent path traversal attacks - only allow alphanumeric, hyphens, and underscores
    if (!/^[a-zA-Z0-9-_]+$/.test(slug)) {
      return { success: false, error: "Invalid slug format" };
    }

    // Get the actual file name from the configuration
    const component = components404[slug.toLowerCase()];
    if (!component) {
      return { success: false, error: "Component not found" };
    }

    const filePath = path.join(BASE_PATH, `${component.fileName}.tsx`);

    // Read the file with UTF-8 encoding
    const file = await fs.readFile(filePath, "utf-8");

    return {
      success: true,
      code: file,
    };
  } catch (error) {
    console.error(`Error reading 404 component file (${slug}):`, error);

    return {
      success: false,
      error: "Component file not found or cannot be read",
    };
  }
}

/**
 * Get multiple 404 component files at once
 *
 * @param names - Array of component file names
 * @returns Object with success status and map of name->code or error
 *
 * @example
 * const results = await get404ContentMultiple(['google', 'github']);
 */
export async function get404ContentMultiple(
  names: string[],
): Promise<
  | { success: true; codes: Record<string, string> }
  | { success: false; error: string }
> {
  try {
    const codes: Record<string, string> = {};

    for (const name of names) {
      const result = await get404Content(name);
      if (result.success) {
        codes[name] = result.code;
      }
    }

    return {
      success: true,
      codes,
    };
  } catch (error) {
    console.error("Error reading multiple 404 component files:", error);
    return {
      success: false,
      error: "Failed to read component files",
    };
  }
}

/**
 * Get a list of all available 404 components
 *
 * @returns Array of component names (without .tsx extension)
 *
 * @example
 * const components = await list404Components();
 * // ['google', 'github', 'simple-page', ...]
 */
export async function list404Components(): Promise<string[]> {
  try {
    const files = await fs.readdir(BASE_PATH);
    return files
      .filter((file) => file.endsWith(".tsx"))
      .map((file) => file.replace(".tsx", ""));
  } catch (error) {
    console.error("Error listing 404 components:", error);
    return [];
  }
}
