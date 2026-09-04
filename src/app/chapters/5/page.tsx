import { ChapterTab } from "@/components/textbook";
import { Chapter5 } from "@/components/chapters/chapter-5/Chapter5";
import { chapter5 } from "@/content/chapters/05";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "5. Les compléments du nom — Manuel de français",
};

export default function Chapter5Page() {
  return (
    <div className="relative min-h-full bg-tb-canvas">
      <ChapterTab number={chapter5.number} label={chapter5.tabLabel} />
      <header className="mx-auto flex max-w-[820px] items-center justify-between px-6 pt-6 text-sm">
        <Link
          href="/"
          className="font-medium text-tb-teal hover:text-tb-cyan"
        >
          ← Manuel
        </Link>
        <span className="text-tb-muted">Chapitre 5</span>
      </header>
      <Chapter5 />
    </div>
  );
}
