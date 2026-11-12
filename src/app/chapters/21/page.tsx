import { Chapter21 } from "@/components/chapters/chapter-21/Chapter21";
import { ChapterLayout } from "@/components/textbook";
import { chapter21 } from "@/content/chapters/21";
import { lesson21 } from "@/content/lessons/21";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "21. Les verbes pronominaux — Manuel de français",
};

export default function Chapter21Page() {
  return (
    <ChapterLayout
      number={chapter21.number}
      tabLabel={chapter21.tabLabel}
      chapterLabel="Chapitre 21"
      lesson={lesson21}
    >
      <Chapter21 />
    </ChapterLayout>
  );
}
