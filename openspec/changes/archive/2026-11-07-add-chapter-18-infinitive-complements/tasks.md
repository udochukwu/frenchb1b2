# Tasks

## 1. Chapter content and printed pages

- [x] 1.1 Add chapter 18 metadata, overview, and exercise data in `src/content/chapters/18.ts`; verify the title, page span (144–148), section headings, and exercises A–F against the supplied scans.
- [x] 1.2 Create exactly five `TextbookPage` sheets for pages 144–148; compare each sheet with its scan to verify verbatim headings, explanations, examples, notes, warnings, exercise prompts, and even-left/odd-right page-number placement.

## 2. English lesson and navigation

- [x] 2.1 Add the chapter 18 English lesson; verify it covers every numbered rule, Attention and NB note, complete verb inventories, and French examples from the scans without translating or inventing examples.
- [x] 2.2 Add the chapter 18 route using the existing `ChapterLayout` and lesson toggle, then export and register chapter 18 in `src/content/chapters/index.ts`; verify the chapter appears in the home catalog and the route shows the tab, back link, and lesson toggle.

## 3. Integration verification

- [x] 3.1 Run `npm run lint` and `npm run build`; verify both succeed and `/chapters/18` renders pages 144–148 with exercises remaining visual-only.
