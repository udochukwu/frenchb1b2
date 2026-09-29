import { ChapterTab } from "@/components/textbook/page";
import { EnglishLessonPanel } from "@/components/textbook/EnglishLessonPanel";
import type { Lesson } from "@/content/lessons/types";
import type { ReactNode } from "react";

export function ChapterLayout({
  number,
  tabLabel,
  chapterLabel,
  lesson,
  children,
}: {
  number: number;
  tabLabel: string;
  chapterLabel: string;
  lesson: Lesson;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-full bg-tb-canvas">
      <ChapterTab number={number} label={tabLabel} />
      <EnglishLessonPanel lesson={lesson} chapterLabel={chapterLabel}>
        {children}
      </EnglishLessonPanel>
    </div>
  );
}
