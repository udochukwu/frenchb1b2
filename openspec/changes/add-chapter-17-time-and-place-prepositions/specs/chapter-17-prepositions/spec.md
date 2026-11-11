# Spec Delta

## Purpose

This capability presents the scanned chapter on French prepositions of time and place as part of the interactive textbook, preserving its printed content and helping learners study its rules in an English-language lesson.

## ADDED Requirements

### Requirement: Chapter 17 pages faithfully represent the supplied scans
The chapter MUST present the supplied pages 138–143 as six sequential textbook pages and preserve their French wording and printed content without inventing additional pages or material.

#### Scenario: Viewing chapter 17
- **WHEN** a reader opens chapter 17
- **THEN** the reader sees the chapter title and the six supplied pages in printed order, numbered 138 through 143
- **AND** the displayed headings, explanations, examples, notes, warnings, and exercise prompts match the scans verbatim

#### Scenario: Printed page alignment
- **WHEN** the six page sheets are displayed
- **THEN** each sheet uses the printed page number and the existing even-left, odd-right page-number placement

### Requirement: Chapter 17 exercises remain visual-only
Exercises transcribed from the scans MUST retain their printed prompts and blank-answer appearance without interactive inputs, answer keys, or grading.

#### Scenario: Reading an exercise
- **WHEN** a reader views an exercise on any chapter 17 page
- **THEN** the prompts and printed blanks are visible as in the source, with no answer entry or grading controls

### Requirement: Chapter 17 has a complete English lesson
The chapter's English lesson MUST teach the rules shown in the supplied pages, including numbered rules, Attention and NB notes, using the book's French examples and without omitting listed inventories.

#### Scenario: Studying the lesson
- **WHEN** a reader opens the English lesson for chapter 17
- **THEN** the lesson explains the scanned chapter's prepositions of time and place, country names, distance, and usage pitfalls
- **AND** it covers every numbered rule and each Attention and NB note shown in the scans
- **AND** French examples are retained from the book rather than translated

### Requirement: Chapter 17 is discoverable through textbook navigation
Chapter 17 MUST be available from the textbook's chapter catalog and its chapter route MUST use the established chapter layout and lesson toggle.

#### Scenario: Navigating from the catalog
- **WHEN** a reader selects chapter 17 from the home chapter list
- **THEN** the reader is taken to the chapter 17 page, which displays its tab, back link, and English-lesson toggle
