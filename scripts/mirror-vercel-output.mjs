#!/usr/bin/env node
// Mirrors the built site (artifacts/yellow-brick-load/dist/public) into a
// top-level `public/` directory. Vercel's "Other" framework preset looks for
// a directory literally named `public` at the project root when no explicit
// Output Directory applies, and fails with "No Output Directory named
// 'public' found after the Build completed" otherwise. Keeping a mirrored
// copy at the root makes the deploy succeed no matter which output-directory
// setting (vercel.json, dashboard override, or the default fallback) wins.
import { cpSync, existsSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(repoRoot, "artifacts", "yellow-brick-load", "dist", "public");
const destination = path.join(repoRoot, "public");

if (!existsSync(path.join(source, "index.html"))) {
  console.error(
    `Build output not found at ${source} — run the yellow-brick-load build first.`,
  );
  process.exit(1);
}

rmSync(destination, { recursive: true, force: true });
cpSync(source, destination, { recursive: true });
console.log(`Mirrored ${source} -> ${destination}`);
