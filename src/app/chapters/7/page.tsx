import { ChapterLayout } from "@/components/textbook";
import { Chapter7 } from "@/components/chapters/chapter-7/Chapter7";
import { chapter7 } from "@/content/chapters/07";
import { lesson7 } from "@/content/lessons/07";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "7. Les degrés de l'adjectif — Manuel de français",
};

export default function Chapter7Page() {
  return (
    <ChapterLayout
      number={chapter7.number}
      tabLabel={chapter7.tabLabel}
      chapterLabel="Chapitre 7"
      lesson={lesson7}
    >
      <Chapter7 />
    </ChapterLayout>
  );
}
