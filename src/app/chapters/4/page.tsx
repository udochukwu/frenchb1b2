import { ChapterLayout } from "@/components/textbook";
import { Chapter4 } from "@/components/chapters/chapter-4/Chapter4";
import { chapter4 } from "@/content/chapters/04";
import { lesson4 } from "@/content/lessons/04";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "4. Le nom — Manuel de français",
};

export default function Chapter4Page() {
  return (
    <ChapterLayout
      number={chapter4.number}
      tabLabel={chapter4.tabLabel}
      chapterLabel="Chapitre 4"
      lesson={lesson4}
    >
      <Chapter4 />
    </ChapterLayout>
  );
}
