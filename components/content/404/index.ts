import { components } from "./components";
import { PAGE_NAMES, DEFAULT_PAGE_KEY } from "./constants";
import type { Page404Registry, Page404Key, Page404Entry } from "./types";

/**
 * Create a page entry with dynamic code loading
 * Code is no longer stored statically - it's fetched via server action
 * Use get404Content(slug) to fetch code when needed
 */
const createPageEntry = (key: string, slug: string): Page404Entry => ({
  name: PAGE_NAMES[key],
  Component: components[key as keyof typeof components],
  slug, // Added for server action
});

export const pages404: Page404Registry = {
  simple: createPageEntry("simple", "simple"),
  modern: createPageEntry("modern", "modern"),
  strangerthings: createPageEntry("strangerthings", "strangerthings"),
  terminal: createPageEntry("terminal", "terminal"),
  snow: createPageEntry("snow", "snow"),
  amongus: createPageEntry("amongus", "amongus"),
  stoneage: createPageEntry("stoneage", "stoneage"),
  retrotv: createPageEntry("retrotv", "retrotv"),
  blueglitch: createPageEntry("blueglitch", "blueglitch"),
  poet: createPageEntry("poet", "poet"),
  particles: createPageEntry("particles", "particles"),
  macos: createPageEntry("macos", "macos"),
  google: createPageEntry("google", "google"),
  geeksforgeeks: createPageEntry("geeksforgeeks", "geeksforgeeks"),
  vercel: createPageEntry("vercel", "vercel"),
  buggame: createPageEntry("buggame", "buggame"),
  void: createPageEntry("void", "void"),
};

export { DEFAULT_PAGE_KEY };
export type { Page404Entry, Page404Registry, Page404Key };
