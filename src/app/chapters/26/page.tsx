import { Chapter26 } from "@/components/chapters/chapter-26/Chapter26";
import { ChapterLayout } from "@/components/textbook";
import { chapter26 } from "@/content/chapters/26";
import { lesson26 } from "@/content/lessons/26";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "26. L'imparfait — Manuel de français",
};

export default function Chapter26Page() {
  return (
    <ChapterLayout
      number={chapter26.number}
      tabLabel={chapter26.tabLabel}
      chapterLabel="Chapitre 26"
      lesson={lesson26}
    >
      <Chapter26 />
    </ChapterLayout>
  );
}
