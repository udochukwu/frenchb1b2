import { Chapter28 } from "@/components/chapters/chapter-28/Chapter28";
import { ChapterLayout } from "@/components/textbook";
import { chapter28 } from "@/content/chapters/28";
import { lesson28 } from "@/content/lessons/28";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "28. Le futur et le futur antérieur — Manuel de français",
};

export default function Chapter28Page() {
  return (
    <ChapterLayout
      number={chapter28.number}
      tabLabel={chapter28.tabLabel}
      chapterLabel="Chapitre 28"
      lesson={lesson28}
    >
      <Chapter28 />
    </ChapterLayout>
  );
}
