import { ChapterTab } from "@/components/textbook";
import { Chapter1 } from "@/components/chapters/chapter-1/Chapter1";
import { chapter1 } from "@/content/chapters/01";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "1. L'article défini — Manuel de français",
};

export default function Chapter1Page() {
  return (
    <div className="relative min-h-full bg-tb-canvas">
      <ChapterTab number={chapter1.number} label={chapter1.tabLabel} />
      <header className="mx-auto flex max-w-[820px] items-center justify-between px-6 pt-6 text-sm">
        <Link
          href="/"
          className="font-medium text-tb-teal hover:text-tb-cyan"
        >
          ← Manuel
        </Link>
        <span className="text-tb-muted">Chapitre 1</span>
      </header>
      <Chapter1 />
    </div>
  );
}
