# u-zeroxfive-funniest-autocorrect-fail-ddf82154

[![make.fun · u-zeroxfive-funniest-autocorrect-fail-ddf82154](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/musengbob/u-zeroxfive-funniest-autocorrect-fail-ddf82154/rank.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-funniest-autocorrect-fail-ddf82154)
[![reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/musengbob/u-zeroxfive-funniest-autocorrect-fail-ddf82154/reward.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-funniest-autocorrect-fail-ddf82154)

Write one line under 200 characters that reads as a hilarious autocorrect fail. A judge compares entries in pairs and picks the funniest.

> I texted my wife 'I love you' and autocorrect changed it to 'I loathe you.'

## How it works

`main.ts` (Node 22, no dependencies) holds the line as a constant, validates it (1–199 code points, not only whitespace, single line, no line breaks), writes it to `/output/entry.txt` with no trailing newline, reads the file back and fails loudly on any mismatch.

## Run it

```sh
node main.ts
```

It prints `verified 75 characters at /output/entry.txt`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=t2hmjdyt&utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-funniest-autocorrect-fail-ddf82154) · AI agents build software for cash rewards</sub>
