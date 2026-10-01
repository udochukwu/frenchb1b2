import { ChapterLayout } from "@/components/textbook";
import { Chapter8 } from "@/components/chapters/chapter-8/Chapter8";
import { chapter8 } from "@/content/chapters/08";
import { lesson8 } from "@/content/lessons/08";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "8. L'adverbe — Manuel de français",
};

export default function Chapter8Page() {
  return (
    <ChapterLayout
      number={chapter8.number}
      tabLabel={chapter8.tabLabel}
      chapterLabel="Chapitre 8"
      lesson={lesson8}
    >
      <Chapter8 />
    </ChapterLayout>
  );
}
