import { ChapterLayout } from "@/components/textbook";
import { Chapter15 } from "@/components/chapters/chapter-15/Chapter15";
import { chapter15 } from "@/content/chapters/15";
import { lesson15 } from "@/content/lessons/15";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "15. Les adjectifs et les pronoms indéfinis — Manuel de français",
};

export default function Chapter15Page() {
  return (
    <ChapterLayout
      number={chapter15.number}
      tabLabel={chapter15.tabLabel}
      chapterLabel="Chapitre 15"
      lesson={lesson15}
    >
      <Chapter15 />
    </ChapterLayout>
  );
}
