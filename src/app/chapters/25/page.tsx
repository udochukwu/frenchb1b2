import { Chapter25 } from "@/components/chapters/chapter-25/Chapter25";
import { ChapterLayout } from "@/components/textbook";
import { chapter25 } from "@/content/chapters/25";
import { lesson25 } from "@/content/lessons/25";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "25. Le passé composé et le passé simple — Manuel de français",
};

export default function Chapter25Page() {
  return (
    <ChapterLayout
      number={chapter25.number}
      tabLabel={chapter25.tabLabel}
      chapterLabel="Chapitre 25"
      lesson={lesson25}
    >
      <Chapter25 />
    </ChapterLayout>
  );
}
