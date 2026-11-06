import { ChapterLayout } from "@/components/textbook";
import { Chapter14 } from "@/components/chapters/chapter-14/Chapter14";
import { chapter14 } from "@/content/chapters/14";
import { lesson14 } from "@/content/lessons/14";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "14. Les adjectifs et les pronoms démonstratifs — Manuel de français",
};

export default function Chapter14Page() {
  return (
    <ChapterLayout
      number={chapter14.number}
      tabLabel={chapter14.tabLabel}
      chapterLabel="Chapitre 14"
      lesson={lesson14}
    >
      <Chapter14 />
    </ChapterLayout>
  );
}
