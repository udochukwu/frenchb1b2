<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Interactive French textbook

Visual replica of a printed grammar manual. The user uploads PDF chapter scans; typeset them as stacked page sheets. Do not invent pages that were not uploaded.

## Defaults

- **Visual-only exercises** until the user asks otherwise: dotted blanks and printed prompts, no inputs, no answer keys, no grading.
- Long scroll of `TextbookPage` sheets (one printed page each), centered ~820px, pale grey canvas.
- Reuse `src/components/textbook/` — do not invent a new look.
- Do not edit plan files.
- Keep this Next.js agent-rules block at the top of this file.

## How to add a chapter

Mirror chapter 2.

1. `src/content/chapters/0N.ts` — `chapterN` metadata (`number`, `title`, `tabLabel`, `slug`, `pages`, `summary`) plus exercise lists / overviews. Use `*word*` in strings for cyan article highlights (`Rich`).
2. `src/components/chapters/chapter-N/ChapterN.tsx` — one `TextbookPage` per printed page (`pageNumberSide`: left on even, right on odd).
3. `src/app/chapters/N/page.tsx` — `ChapterTab number={n} label={tabLabel}`, back link to `/`.
4. Export `chapterN` from `src/content/chapters/index.ts` and add it to the `chapters` array (home page maps that catalog).

Primitives: `TextbookPage`, `ChapterHeader`, `ChapterTab`, `SectionBar`, `SectionDivider`, `Subhead`, `TealHead`, `Rule`, `Example`, `Rich`, `Term`, `AttentionBox`, `ExerciseBox`, `Nb`, `Blank`, `BlankLine`, `ExerciseItem`, `ArrowItem`, `SquareItem`, `CrossRef`.

## Home

[`src/app/page.tsx`](src/app/page.tsx) lists `chapters` from the catalog. Do not hardcode extra cards there.
