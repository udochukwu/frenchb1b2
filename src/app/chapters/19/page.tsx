import { Chapter19 } from "@/components/chapters/chapter-19/Chapter19";
import { ChapterLayout } from "@/components/textbook";
import { chapter19 } from "@/content/chapters/19";
import { lesson19 } from "@/content/lessons/19";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "19. L'infinitif complément d'un verbe (avec préposition) — Manuel de français",
};

export default function Chapter19Page() {
  return (
    <ChapterLayout
      number={chapter19.number}
      tabLabel={chapter19.tabLabel}
      chapterLabel="Chapitre 19"
      lesson={lesson19}
    >
      <Chapter19 />
    </ChapterLayout>
  );
}
