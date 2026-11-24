import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "E004: toast abandoned mid-cycle. Bagel detected but no bagel consent given. Reset required by an adult; the crumbs are monitoring your apology.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY_TEXT, "utf8");
console.log("wrote " + target + ": " + ENTRY_TEXT.length + " chars");
