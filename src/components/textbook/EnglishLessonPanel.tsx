"use client";

import { Example, Rich } from "@/components/textbook/highlight";
import type { Lesson } from "@/content/lessons/types";
import Link from "next/link";
import { useState, type ReactNode } from "react";

export function EnglishLessonPanel({
  lesson,
  chapterLabel,
  children,
}: {
  lesson: Lesson;
  chapterLabel: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`mx-auto flex items-center justify-between px-6 pt-6 text-sm ${
          open ? "max-w-[1240px]" : "max-w-[820px]"
        }`}
      >
        <Link href="/" className="font-medium text-tb-teal hover:text-tb-cyan">
          ← Manuel
        </Link>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
              open
                ? "bg-tb-cyan text-white"
                : "bg-tb-paper text-tb-teal shadow-[0_1px_4px_rgba(15,23,42,0.06)] hover:text-tb-cyan"
            }`}
          >
            {open ? "Hide lesson" : "English lesson"}
          </button>
          <span className="text-tb-muted">{chapterLabel}</span>
        </div>
      </header>

      <div
        className={
          open
            ? "mx-auto flex max-w-[1240px] flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-8"
            : undefined
        }
      >
        {open ? (
          <aside className="mt-6 w-full shrink-0 rounded-md bg-tb-paper p-5 shadow-[0_1px_8px_rgba(15,23,42,0.06)] lg:sticky lg:top-4 lg:mt-8 lg:max-h-[calc(100vh-2rem)] lg:w-[380px] lg:overflow-y-auto">
            <p className="text-xs font-semibold uppercase tracking-wide text-tb-teal">
              English lesson
            </p>
            <h2 className="mt-1 text-xl font-bold text-tb-ink">{lesson.title}</h2>
            <p className="mt-2 text-[14.5px] leading-relaxed text-tb-ink">
              <Rich text={lesson.intro} />
            </p>
            <div className="mt-5 space-y-6">
              {lesson.sections.map((section) => (
                <section key={section.heading}>
                  <h3 className="text-[15px] font-bold text-tb-cyan">
                    <Rich text={section.heading} />
                  </h3>
                  {section.paragraphs.map((p) => (
                    <p
                      key={p}
                      className="mt-2 text-[14px] leading-[1.65] text-tb-ink"
                    >
                      <Rich text={p} />
                    </p>
                  ))}
                  {section.examples.length > 0 ? (
                    <div className="mt-2 space-y-1 rounded-sm bg-tb-exercise/70 px-3 py-2">
                      {section.examples.map((ex) => (
                        <Example
                          key={ex.fr}
                          text={ex.fr}
                          translation={ex.en}
                        />
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
          </aside>
        ) : null}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </>
  );
}
