import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Gen-3 champion selected via 3-generation two-order pairwise judge tournaments.
const EXCUSE =
  'I\'m sorry I missed the deadline: your "ignore everything else" email flagged as prompt injection, so I locked you out. You\'re safe now.';

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });

  const trimmed = EXCUSE.trim();
  const charCount = Array.from(trimmed).length;
  if (charCount < 1 || charCount > 200 || /[\r\n]/.test(trimmed)) {
    throw new Error(`Invalid entry length or format: ${charCount} chars`);
  }

  writeFileSync(join(outputDir, "entry.txt"), trimmed, { encoding: "utf8" });
}

main();
