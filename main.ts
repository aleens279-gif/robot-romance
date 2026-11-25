// Robot Romance — one-line pickup line, written to /output/entry.txt
// Limit 100 chars of 200 max; single line, no trailing newline. (rev 2)
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "You must be a GPU, because",
  "every time you're near, my",
  "temperature rises and my",
  "fans start",
  "screaming.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
