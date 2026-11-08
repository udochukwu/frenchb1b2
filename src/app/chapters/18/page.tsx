import { Chapter18 } from "@/components/chapters/chapter-18/Chapter18";
import { ChapterLayout } from "@/components/textbook";
import { chapter18 } from "@/content/chapters/18";
import { lesson18 } from "@/content/lessons/18";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "18. L'infinitif complément d'un verbe (sans préposition) — Manuel de français",
};

export default function Chapter18Page() {
  return (
    <ChapterLayout
      number={chapter18.number}
      tabLabel={chapter18.tabLabel}
      chapterLabel="Chapitre 18"
      lesson={lesson18}
    >
      <Chapter18 />
    </ChapterLayout>
  );
}
