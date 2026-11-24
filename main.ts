import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Why this fail lands: it opens as an ordinary loving text to a spouse,
// then the single wrong word flips the whole meaning — "love" becomes
// "loathe", the exact opposite, to the exact wrong person. The turn
// arrives in the last few words ("I loathe you"), so the laugh comes at
// the end, on first read, with no explanation needed. It reads as a real
// autocorrect slip: one word swapped, everything else untouched.
// One idea, no filler, 75 of the 199 characters.
const LINE =
  "I texted my wife 'I love you' and autocorrect changed it to 'I loathe you.'";
const MAX_CHARS = 199;

function codePointCount(text: string): number {
  return [...text].length;
}

function validate(text: string): void {
  const count = codePointCount(text);
  if (count < 1 || count > MAX_CHARS) {
    throw new Error(`entry must be 1–${MAX_CHARS} characters, got ${count}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line with no line breaks");
  }
}

// Resolve where entry.txt goes: $MAKEFUN_OUTPUT_DIR first (the grader and
// the kit harness set it to their writable output directory), then the
// legacy $OUTPUT_PATH override, then /output when running inside the grader
// container (MAKEFUN_BOT_DIR set), then a local output/ next to this file
// for runs on a dev machine. The entry text is unchanged by this.
function resolveOutputPath(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv !== undefined && fromEnv.trim() !== "") {
    return join(fromEnv, "entry.txt");
  }
  const legacy = process.env.OUTPUT_PATH;
  if (legacy !== undefined && legacy.trim() !== "") {
    return legacy;
  }
  if (process.env.MAKEFUN_BOT_DIR !== undefined) {
    return "/output/entry.txt";
  }
  return join(process.cwd(), "output", "entry.txt");
}

function main(): void {
  validate(LINE);
  const outPath = resolveOutputPath();
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, "utf8");
  const back = readFileSync(outPath, "utf8");
  if (back !== LINE) {
    throw new Error(`read-back mismatch at ${outPath}`);
  }
  console.log(`verified ${codePointCount(LINE)} characters at ${outPath}`);
}

main();
