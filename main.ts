import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Round-1 Gen-4 champion (P2, 123B) selected via blind two-order pairwise tournaments.
const EXCUSE =
  "I'm sorry I missed the deadline: I spent all 128k tokens validating your concern that I'd be late. You're absolutely right.";

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
