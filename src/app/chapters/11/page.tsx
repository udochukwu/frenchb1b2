import { ChapterLayout } from "@/components/textbook";
import { Chapter11 } from "@/components/chapters/chapter-11/Chapter11";
import { chapter11 } from "@/content/chapters/11";
import { lesson11 } from "@/content/lessons/11";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "11. L'opposition « il est » / « c'est » — Manuel de français",
};

export default function Chapter11Page() {
  return (
    <ChapterLayout
      number={chapter11.number}
      tabLabel={chapter11.tabLabel}
      chapterLabel="Chapitre 11"
      lesson={lesson11}
    >
      <Chapter11 />
    </ChapterLayout>
  );
}
