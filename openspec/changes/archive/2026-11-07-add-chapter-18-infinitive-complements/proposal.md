# Proposal

## Why

The interactive textbook now includes chapter 17, and the supplied scans continue the manual with chapter 18 on infinitives used as direct complements of verbs. Digitizing pages 144–148 will extend the chapter sequence while retaining the printed content and visual exercise format.

## What Changes

- Add chapter 18, *L'infinitif complément d'un verbe (sans préposition)*, using only the five supplied printed pages 144–148.
- Transcribe the scans' headings, explanations, examples, notes, warnings, and exercises A–F verbatim; do not add a page or material not supplied.
- Render one textbook sheet per printed page and keep exercises visual-only.
- Add the matching English lesson and expose the chapter through the existing chapter layout, route, and catalog.

## Capabilities

### New Capabilities
- `chapter-18-infinitive-complements`: Present chapter 18's scanned content and companion English lesson, including its printed exercises.

### Modified Capabilities

None.

## Impact

- Add chapter 18 metadata and exercise data under `src/content/chapters/`, textbook pages under `src/components/chapters/chapter-18/`, an English lesson under `src/content/lessons/`, and a route under `src/app/chapters/18/`.
- Export and register chapter 18 in `src/content/chapters/index.ts`; reuse the existing textbook components and `ChapterLayout`.
- No API, dependency, or database changes. Pages 144–148 in the supplied scans are the content source; exercises remain visual-only.
