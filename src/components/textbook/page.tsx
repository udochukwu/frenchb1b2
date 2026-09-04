import type { ReactNode } from "react";

export function TextbookPage({
  pageNumber,
  pageNumberSide = "right",
  children,
}: {
  pageNumber: number;
  pageNumberSide?: "left" | "right";
  children: ReactNode;
}) {
  return (
    <article className="relative mx-auto w-full max-w-[820px] min-h-[1080px] bg-tb-paper px-10 pb-16 pt-12 shadow-[0_1px_8px_rgba(15,23,42,0.06)] sm:px-14 sm:pb-20 sm:pt-14">
      <div className="relative z-10">{children}</div>
      <span
        className={`absolute bottom-8 text-[15px] text-tb-ink ${
          pageNumberSide === "left" ? "left-10" : "right-10"
        }`}
      >
        {pageNumber}
      </span>
    </article>
  );
}

export function ChapterHeader({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  return (
    <header className="mb-8 flex items-baseline gap-4">
      <span className="text-5xl font-bold leading-none tracking-tight text-tb-ink">
        {number}
      </span>
      <h1 className="text-[28px] font-bold uppercase tracking-wide text-tb-cyan sm:text-[32px]">
        {title}
      </h1>
    </header>
  );
}

export function ChapterTab({
  number,
  label,
}: {
  number: number;
  label: string;
}) {
  return (
    <div className="pointer-events-none fixed top-1/2 right-0 z-30 hidden -translate-y-1/2 lg:flex">
      <div className="flex h-72 w-9 flex-col items-center justify-end rounded-l-md bg-tb-tab pb-4">
        <span className="mb-3 h-6 w-6 rounded-sm bg-tb-cyan text-center text-sm font-bold leading-6 text-white">
          {number}
        </span>
        <span className="rotate-180 text-[11px] font-semibold tracking-wider text-tb-cyan [writing-mode:vertical-rl]">
          {label}
        </span>
      </div>
    </div>
  );
}
