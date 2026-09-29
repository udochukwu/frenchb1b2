import { ChapterLayout } from "@/components/textbook";
import { Chapter2 } from "@/components/chapters/chapter-2/Chapter2";
import { chapter2 } from "@/content/chapters/02";
import { lesson2 } from "@/content/lessons/02";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2. L'article indéfini — Manuel de français",
};

export default function Chapter2Page() {
  return (
    <ChapterLayout
      number={chapter2.number}
      tabLabel={chapter2.tabLabel}
      chapterLabel="Chapitre 2"
      lesson={lesson2}
    >
      <Chapter2 />
    </ChapterLayout>
  );
}
