import { ComponentType } from "react";

export interface Page404Entry {
  name: string;
  Component: ComponentType;
  slug: string;
}

export type Page404Registry = Record<string, Page404Entry>;

export type Page404Key =
  | "simple"
  | "modern"
  | "strangerthings"
  | "terminal"
  | "snow"
  | "amongus"
  | "stoneage"
  | "retrotv"
  | "bear"
  | "poet"
  | "particles"
  | "macos"
  | "google"
  | "geeksforgeeks"
  | "buggame";
