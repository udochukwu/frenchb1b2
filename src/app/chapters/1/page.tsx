import { ChapterLayout } from "@/components/textbook";
import { Chapter1 } from "@/components/chapters/chapter-1/Chapter1";
import { chapter1 } from "@/content/chapters/01";
import { lesson1 } from "@/content/lessons/01";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1. L'article défini — Manuel de français",
};

export default function Chapter1Page() {
  return (
    <ChapterLayout
      number={chapter1.number}
      tabLabel={chapter1.tabLabel}
      chapterLabel="Chapitre 1"
      lesson={lesson1}
    >
      <Chapter1 />
    </ChapterLayout>
  );
}
