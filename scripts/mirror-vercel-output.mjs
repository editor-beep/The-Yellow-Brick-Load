#!/usr/bin/env node
// Mirrors the built site (artifacts/yellow-brick-load/dist/public) into a
// top-level `public/` directory. Vercel's "Other" framework preset looks for
// a directory literally named `public` at the project root when no explicit
// Output Directory applies, and fails with "No Output Directory named
// 'public' found after the Build completed" otherwise. Keeping a mirrored
// copy at the root makes the deploy succeed no matter which output-directory
// setting (vercel.json, dashboard override, or the default fallback) wins.
//
// The Vercel project's Root Directory may point at a subdirectory of the
// repo (e.g. artifacts/api-server), in which case the build command runs
// with that subdirectory as cwd and Vercel resolves the output directory
// relative to it. To cover that, this script also mirrors into
// `<cwd>/public` whenever cwd differs from the repo root, and thin shims
// named scripts/mirror-vercel-output.mjs exist in each workspace package so
// `node scripts/mirror-vercel-output.mjs` resolves from any of those roots.
import { cpSync, existsSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(repoRoot, "artifacts", "yellow-brick-load", "dist", "public");

if (!existsSync(path.join(source, "index.html"))) {
  console.error(
    `Build output not found at ${source} — run the yellow-brick-load build first.`,
  );
  process.exit(1);
}

// artifacts/yellow-brick-load/public is the app's real static-asset
// directory (vite publicDir) — never overwrite it. That root doesn't need a
// mirror anyway: its own vercel.json points at dist/public directly.
const appDir = path.join(repoRoot, "artifacts", "yellow-brick-load");

const destinations = new Set([path.join(repoRoot, "public")]);
const cwd = path.resolve(process.cwd());
const inRepo = !path.relative(repoRoot, cwd).startsWith("..");
if (inRepo && cwd !== repoRoot && cwd !== appDir) {
  destinations.add(path.join(cwd, "public"));
}

for (const destination of destinations) {
  rmSync(destination, { recursive: true, force: true });
  cpSync(source, destination, { recursive: true });
  console.log(`Mirrored ${source} -> ${destination}`);
}
