import { ChapterTab } from "@/components/textbook";
import { Chapter2 } from "@/components/chapters/chapter-2/Chapter2";
import { chapter2 } from "@/content/chapters/02";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2. L'article indéfini — Manuel de français",
};

export default function Chapter2Page() {
  return (
    <div className="relative min-h-full bg-tb-canvas">
      <ChapterTab number={chapter2.number} label={chapter2.tabLabel} />
      <header className="mx-auto flex max-w-[820px] items-center justify-between px-6 pt-6 text-sm">
        <Link
          href="/"
          className="font-medium text-tb-teal hover:text-tb-cyan"
        >
          ← Manuel
        </Link>
        <span className="text-tb-muted">Chapitre 2</span>
      </header>
      <Chapter2 />
    </div>
  );
}
