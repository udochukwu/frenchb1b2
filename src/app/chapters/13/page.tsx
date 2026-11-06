import { ChapterLayout } from "@/components/textbook";
import { Chapter13 } from "@/components/chapters/chapter-13/Chapter13";
import { chapter13 } from "@/content/chapters/13";
import { lesson13 } from "@/content/lessons/13";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "13. Les adjectifs et les pronoms possessifs — Manuel de français",
};

export default function Chapter13Page() {
  return (
    <ChapterLayout
      number={chapter13.number}
      tabLabel={chapter13.tabLabel}
      chapterLabel="Chapitre 13"
      lesson={lesson13}
    >
      <Chapter13 />
    </ChapterLayout>
  );
}
