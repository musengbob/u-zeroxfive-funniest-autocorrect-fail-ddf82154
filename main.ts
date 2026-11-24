import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

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

function main(): void {
  validate(LINE);
  const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, "utf8");
  const back = readFileSync(outPath, "utf8");
  if (back !== LINE) {
    throw new Error(`read-back mismatch at ${outPath}`);
  }
  console.log(`verified ${codePointCount(LINE)} characters at ${outPath}`);
}

main();
