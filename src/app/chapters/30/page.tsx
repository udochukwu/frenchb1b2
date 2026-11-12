import { Chapter30 } from "@/components/chapters/chapter-30/Chapter30";
import { ChapterLayout } from "@/components/textbook";
import { chapter30 } from "@/content/chapters/30";
import { lesson30 } from "@/content/lessons/30";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "30. Le subjonctif — Manuel de français",
};

export default function Chapter30Page() {
  return (
    <ChapterLayout
      number={chapter30.number}
      tabLabel={chapter30.tabLabel}
      chapterLabel="Chapitre 30"
      lesson={lesson30}
    >
      <Chapter30 />
    </ChapterLayout>
  );
}
