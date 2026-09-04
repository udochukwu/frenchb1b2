import type { ReactNode } from "react";

export function AttentionBox({ children }: { children: ReactNode }) {
  return (
    <aside className="my-5 border-l-[6px] border-tb-cyan bg-white px-5 py-3 shadow-[0_0_0_1px_rgba(0,174,239,0.12)]">
      <p className="mb-2 text-[15px] font-bold tracking-wide text-tb-cyan">
        ATTENTION !
      </p>
      <div className="space-y-2 text-[14.5px] leading-[1.65] text-tb-ink">
        {children}
      </div>
    </aside>
  );
}

export function ExerciseBox({
  title,
  children,
}: {
  title?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="my-5 rounded-md bg-linear-to-b from-tb-exercise to-[#f3fbfe] px-5 py-4 shadow-[inset_0_0_0_1px_rgba(0,174,239,0.18)]">
      {title ? (
        <h3 className="mb-3 text-[15px] font-bold text-tb-cyan">{title}</h3>
      ) : null}
      <div className="space-y-2 text-[14.5px] leading-[1.7] text-tb-ink">
        {children}
      </div>
    </section>
  );
}
