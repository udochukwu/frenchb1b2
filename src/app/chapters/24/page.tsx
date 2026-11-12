import { Chapter24 } from "@/components/chapters/chapter-24/Chapter24";
import { ChapterLayout } from "@/components/textbook";
import { chapter24 } from "@/content/chapters/24";
import { lesson24 } from "@/content/lessons/24";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24. L'impératif — Manuel de français",
};

export default function Chapter24Page() {
  return (
    <ChapterLayout
      number={chapter24.number}
      tabLabel={chapter24.tabLabel}
      chapterLabel="Chapitre 24"
      lesson={lesson24}
    >
      <Chapter24 />
    </ChapterLayout>
  );
}
