# Tasks

## 1. Chapter content and printed pages

- [x] 1.1 Add chapter 17 metadata, overview, and any typed exercise inventories in `src/content/chapters/17.ts`; verify the title, printed page span (138–143), summary, headings, and exercise data against the supplied scans.
- [x] 1.2 Create the chapter 17 textbook component with exactly six sequential `TextbookPage` sheets; verify pages 138–143 preserve scanned wording, examples, notes, warnings, exercise prompts, and printed blanks, with even page numbers on the left and odd page numbers on the right.

## 2. English lesson and textbook navigation

- [x] 2.1 Add the chapter 17 English lesson; verify it covers every numbered rule, Attention and NB note, and listed inventory from pages 138–143, using the book's French examples without translating them.
- [x] 2.2 Add the chapter 17 route using the existing `ChapterLayout` and lesson toggle, then export and register the chapter in `src/content/chapters/index.ts`; verify chapter 17 appears in the home catalog and its route shows the chapter tab, back link, and lesson toggle.

## 3. Integration verification

- [x] 3.1 Run `npm run lint` and `npm run build`; verify both succeed and the chapter route renders all six sheets with exercises remaining visual-only.
