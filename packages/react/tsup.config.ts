import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: false,
  clean: true,
  external: [
    "react",
    "react-dom",
    "next",
    "next/image",
    "next/link",
    "next/font/google",
    "next/navigation",
  ],
  treeshake: true,
});
