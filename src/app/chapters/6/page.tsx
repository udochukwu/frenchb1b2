import { ChapterLayout } from "@/components/textbook";
import { Chapter6 } from "@/components/chapters/chapter-6/Chapter6";
import { chapter6 } from "@/content/chapters/06";
import { lesson6 } from "@/content/lessons/06";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "6. L'adjectif qualificatif — Manuel de français",
};

export default function Chapter6Page() {
  return (
    <ChapterLayout
      number={chapter6.number}
      tabLabel={chapter6.tabLabel}
      chapterLabel="Chapitre 6"
      lesson={lesson6}
    >
      <Chapter6 />
    </ChapterLayout>
  );
}
