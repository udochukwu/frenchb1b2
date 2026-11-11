# Spec Delta

## Purpose

This capability presents the supplied chapter on French verbs followed directly by infinitives as part of the interactive textbook, retaining the printed material and providing an English-language lesson for its grammar rules.

## ADDED Requirements

### Requirement: Chapter 18 pages faithfully represent the supplied scans
The chapter MUST present the five supplied pages 144–148 in printed order and preserve their French wording and printed content without inventing additional pages or material.

#### Scenario: Viewing chapter 18
- **WHEN** a reader opens chapter 18
- **THEN** the reader sees five sequential textbook pages numbered 144 through 148
- **AND** the displayed headings, explanations, examples, notes, warnings, and exercise prompts match the supplied scans verbatim

#### Scenario: Printed page alignment
- **WHEN** the five page sheets are displayed
- **THEN** each sheet uses its printed page number and the existing even-left, odd-right page-number placement

### Requirement: Chapter 18 exercises remain visual-only
The chapter's exercises A–F MUST retain their printed prompts without interactive answer inputs, answer keys, or grading.

#### Scenario: Reading the printed exercises
- **WHEN** a reader views an exercise on pages 145–148
- **THEN** its printed prompt and items are visible in the textbook sheet format
- **AND** no answer-entry or grading controls are shown

### Requirement: Chapter 18 has a complete English lesson
The chapter's English lesson MUST explain every numbered rule and each Attention and NB note shown in the scans, using the book's French examples and retaining complete listed verb inventories.

#### Scenario: Studying the lesson
- **WHEN** a reader opens the English lesson for chapter 18
- **THEN** it explains direct infinitive complements, double constructions, verbs of perception, and *falloir*
- **AND** it covers the same-subject and different-subject constructions, relative-clause alternatives, and the expression *avoir beau* shown in the scans
- **AND** its French examples are taken from the supplied pages rather than translated or invented

### Requirement: Chapter 18 is discoverable through textbook navigation
Chapter 18 MUST be available from the chapter catalog and its route MUST use the established chapter layout and English-lesson toggle.

#### Scenario: Navigating from the catalog
- **WHEN** a reader selects chapter 18 from the home chapter list
- **THEN** the reader is taken to the chapter 18 page, which displays its chapter tab, back link, and English-lesson toggle
