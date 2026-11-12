import { Chapter29 } from "@/components/chapters/chapter-29/Chapter29";
import { ChapterLayout } from "@/components/textbook";
import { chapter29 } from "@/content/chapters/29";
import { lesson29 } from "@/content/lessons/29";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "29. L'antériorité — Manuel de français",
};

export default function Chapter29Page() {
  return (
    <ChapterLayout
      number={chapter29.number}
      tabLabel={chapter29.tabLabel}
      chapterLabel="Chapitre 29"
      lesson={lesson29}
    >
      <Chapter29 />
    </ChapterLayout>
  );
}
