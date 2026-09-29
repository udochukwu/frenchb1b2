import { ChapterLayout } from "@/components/textbook";
import { Chapter5 } from "@/components/chapters/chapter-5/Chapter5";
import { chapter5 } from "@/content/chapters/05";
import { lesson5 } from "@/content/lessons/05";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5. Les compléments du nom — Manuel de français",
};

export default function Chapter5Page() {
  return (
    <ChapterLayout
      number={chapter5.number}
      tabLabel={chapter5.tabLabel}
      chapterLabel="Chapitre 5"
      lesson={lesson5}
    >
      <Chapter5 />
    </ChapterLayout>
  );
}
