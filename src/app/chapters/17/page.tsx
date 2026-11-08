import { Chapter17 } from "@/components/chapters/chapter-17/Chapter17";
import { ChapterLayout } from "@/components/textbook";
import { chapter17 } from "@/content/chapters/17";
import { lesson17 } from "@/content/lessons/17";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "17. Les prépositions de temps et de lieu — Manuel de français",
};

export default function Chapter17Page() {
  return (
    <ChapterLayout
      number={chapter17.number}
      tabLabel={chapter17.tabLabel}
      chapterLabel="Chapitre 17"
      lesson={lesson17}
    >
      <Chapter17 />
    </ChapterLayout>
  );
}
