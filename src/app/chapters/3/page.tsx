import { ChapterTab } from "@/components/textbook";
import { Chapter3 } from "@/components/chapters/chapter-3/Chapter3";
import { chapter3 } from "@/content/chapters/03";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "3. L'article partitif — Manuel de français",
};

export default function Chapter3Page() {
  return (
    <div className="relative min-h-full bg-tb-canvas">
      <ChapterTab number={chapter3.number} label={chapter3.tabLabel} />
      <header className="mx-auto flex max-w-[820px] items-center justify-between px-6 pt-6 text-sm">
        <Link
          href="/"
          className="font-medium text-tb-teal hover:text-tb-cyan"
        >
          ← Manuel
        </Link>
        <span className="text-tb-muted">Chapitre 3</span>
      </header>
      <Chapter3 />
    </div>
  );
}
