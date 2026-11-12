import { Chapter22 } from "@/components/chapters/chapter-22/Chapter22";
import { ChapterLayout } from "@/components/textbook";
import { chapter22 } from "@/content/chapters/22";
import { lesson22 } from "@/content/lessons/22";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "22. Les formes en -ant — Manuel de français",
};

export default function Chapter22Page() {
  return (
    <ChapterLayout
      number={chapter22.number}
      tabLabel={chapter22.tabLabel}
      chapterLabel="Chapitre 22"
      lesson={lesson22}
    >
      <Chapter22 />
    </ChapterLayout>
  );
}
