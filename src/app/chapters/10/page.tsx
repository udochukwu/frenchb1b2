import { ChapterLayout } from "@/components/textbook";
import { Chapter10 } from "@/components/chapters/chapter-10/Chapter10";
import { chapter10 } from "@/content/chapters/10";
import { lesson10 } from "@/content/lessons/10";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10. Le pronom personnel — Manuel de français",
};

export default function Chapter10Page() {
  return (
    <ChapterLayout
      number={chapter10.number}
      tabLabel={chapter10.tabLabel}
      chapterLabel="Chapitre 10"
      lesson={lesson10}
    >
      <Chapter10 />
    </ChapterLayout>
  );
}
