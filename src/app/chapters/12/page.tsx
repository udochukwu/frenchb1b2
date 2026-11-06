import { ChapterLayout } from "@/components/textbook";
import { Chapter12 } from "@/components/chapters/chapter-12/Chapter12";
import { chapter12 } from "@/content/chapters/12";
import { lesson12 } from "@/content/lessons/12";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "12. Le pronom relatif — Manuel de français",
};

export default function Chapter12Page() {
  return (
    <ChapterLayout
      number={chapter12.number}
      tabLabel={chapter12.tabLabel}
      chapterLabel="Chapitre 12"
      lesson={lesson12}
    >
      <Chapter12 />
    </ChapterLayout>
  );
}
