import { Chapter27 } from "@/components/chapters/chapter-27/Chapter27";
import { ChapterLayout } from "@/components/textbook";
import { chapter27 } from "@/content/chapters/27";
import { lesson27 } from "@/content/lessons/27";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "27. L'accord du participe passé — Manuel de français",
};

export default function Chapter27Page() {
  return (
    <ChapterLayout
      number={chapter27.number}
      tabLabel={chapter27.tabLabel}
      chapterLabel="Chapitre 27"
      lesson={lesson27}
    >
      <Chapter27 />
    </ChapterLayout>
  );
}
