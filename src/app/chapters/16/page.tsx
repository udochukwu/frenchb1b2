import { ChapterLayout } from "@/components/textbook";
import { Chapter16 } from "@/components/chapters/chapter-16/Chapter16";
import { chapter16 } from "@/content/chapters/16";
import { lesson16 } from "@/content/lessons/16";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "16. Les verbes et les adjectifs suivis de prépositions — Manuel de français",
};

export default function Chapter16Page() {
  return (
    <ChapterLayout
      number={chapter16.number}
      tabLabel={chapter16.tabLabel}
      chapterLabel="Chapitre 16"
      lesson={lesson16}
    >
      <Chapter16 />
    </ChapterLayout>
  );
}
