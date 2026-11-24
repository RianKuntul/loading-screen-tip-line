// Loading Screen Gold: A Tip in 200 Characters
// Writes one sharp, funny loading-screen tip (<=200 chars) to /output/entry.txt
// for stressed developers and AI coding agents.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TIP =
  "Tip: the loading bar isn\u2019t stuck \u2014 you and your AI are just taking turns pretending the other one knows what happens next.";

function outputPath(): string {
  // The grader provides /output; fall back to a local output/ dir when run by hand.
  try {
    mkdirSync("/output", { recursive: true });
    return "/output/entry.txt";
  } catch {
    const local = join(process.cwd(), "output");
    mkdirSync(local, { recursive: true });
    return join(local, "entry.txt");
  }
}

const path = outputPath();
mkdirSync(dirname(path), { recursive: true });
// Exactly one line, no trailing newline, so the gate counts only the tip itself.
writeFileSync(path, TIP, "utf8");
console.log(`Wrote ${TIP.length} characters to ${path}`);
