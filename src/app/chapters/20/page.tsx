import { Chapter20 } from "@/components/chapters/chapter-20/Chapter20";
import { ChapterLayout } from "@/components/textbook";
import { chapter20 } from "@/content/chapters/20";
import { lesson20 } from "@/content/lessons/20";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "20. Les verbes pièges — Manuel de français",
};

export default function Chapter20Page() {
  return (
    <ChapterLayout
      number={chapter20.number}
      tabLabel={chapter20.tabLabel}
      chapterLabel="Chapitre 20"
      lesson={lesson20}
    >
      <Chapter20 />
    </ChapterLayout>
  );
}
