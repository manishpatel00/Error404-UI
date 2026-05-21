import { get404Content } from "@/app/actions/get-404-content";
import { pages404, type Page404Key } from "./index";

export async function getPageWithCode(key: Page404Key) {
  const pageEntry = pages404[key];

  if (!pageEntry) {
    return null;
  }

  const codeResult = await get404Content(pageEntry.slug);

  return {
    ...pageEntry,
    code: codeResult.success ? codeResult.code : "",
    codeError: codeResult.success ? null : codeResult.error,
  };
}

export async function getAllPagesWithCode() {
  const entries = Object.entries(pages404);
  const results = [];

  for (const [key, pageEntry] of entries) {
    const codeResult = await get404Content(pageEntry.slug);

    results.push({
      key,
      ...pageEntry,
      code: codeResult.success ? codeResult.code : "",
      codeError: codeResult.success ? null : codeResult.error,
    });
  }

  return results;
}

export async function getPageCode(key: Page404Key) {
  const pageEntry = pages404[key];

  if (!pageEntry) {
    return "";
  }

  const codeResult = await get404Content(pageEntry.slug);

  return codeResult.success ? codeResult.code : "";
}

export type Page404WithCode =
  ReturnType<typeof getPageWithCode> extends Promise<infer T> ? T : never;
