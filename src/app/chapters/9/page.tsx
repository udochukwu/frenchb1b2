import { ChapterLayout } from "@/components/textbook";
import { Chapter9 } from "@/components/chapters/chapter-9/Chapter9";
import { chapter9 } from "@/content/chapters/09";
import { lesson9 } from "@/content/lessons/09";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "9. L'adverbe de manière — Manuel de français",
};

export default function Chapter9Page() {
  return (
    <ChapterLayout
      number={chapter9.number}
      tabLabel={chapter9.tabLabel}
      chapterLabel="Chapitre 9"
      lesson={lesson9}
    >
      <Chapter9 />
    </ChapterLayout>
  );
}
