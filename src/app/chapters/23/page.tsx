import { Chapter23 } from "@/components/chapters/chapter-23/Chapter23";
import { ChapterLayout } from "@/components/textbook";
import { chapter23 } from "@/content/chapters/23";
import { lesson23 } from "@/content/lessons/23";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "23. Le présent — Manuel de français",
};

export default function Chapter23Page() {
  return (
    <ChapterLayout
      number={chapter23.number}
      tabLabel={chapter23.tabLabel}
      chapterLabel="Chapitre 23"
      lesson={lesson23}
    >
      <Chapter23 />
    </ChapterLayout>
  );
}
