import { ChapterLayout } from "@/components/textbook";
import { Chapter3 } from "@/components/chapters/chapter-3/Chapter3";
import { chapter3 } from "@/content/chapters/03";
import { lesson3 } from "@/content/lessons/03";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3. L'article partitif — Manuel de français",
};

export default function Chapter3Page() {
  return (
    <ChapterLayout
      number={chapter3.number}
      tabLabel={chapter3.tabLabel}
      chapterLabel="Chapitre 3"
      lesson={lesson3}
    >
      <Chapter3 />
    </ChapterLayout>
  );
}
