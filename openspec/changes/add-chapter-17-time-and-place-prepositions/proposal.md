# Proposal

## Why

The interactive textbook currently includes chapters 1–16, while the supplied scans provide the next six printed pages (138–143) on French prepositions of time and place. Adding chapter 17 will extend the manual with a faithful digital rendering and the matching English lesson while preserving its printed-page and visual-exercise conventions.

## What Changes

- Add chapter 17 for *Les prépositions de temps et de lieu*, covering printed pages 138–143.
- Transcribe the supplied pages' headings, explanations, examples, notes, warnings, and exercises without paraphrasing or inventing content.
- Present the six pages as textbook sheets, preserving page numbers, sequence, and even/odd page-number placement; keep exercises visual-only.
- Add an English lesson that explains the scanned chapter's rules and examples, and expose chapter 17 through the existing chapter catalog and route/layout pattern.

## Capabilities

### New Capabilities
- `chapter-17-prepositions`: Render and navigate the supplied chapter 17 content, including its English lesson and visual-only exercises.

### Modified Capabilities

None.

## Impact

- Add chapter 17 metadata and source content under `src/content/chapters/`, a lesson under `src/content/lessons/`, a textbook-page component under `src/components/chapters/chapter-17/`, and a route under `src/app/chapters/17/`.
- Export and register the chapter in `src/content/chapters/index.ts`; reuse the existing textbook components and `ChapterLayout`.
- No API, dependency, or database changes. The supplied scans are the source of truth for printed pages 138–143.
