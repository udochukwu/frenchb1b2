export function Blank({ width = "4.5rem" }: { width?: string }) {
  return (
    <span
      aria-hidden
      className="mx-0.5 inline-block translate-y-px border-b border-dotted border-tb-ink/55"
      style={{ width }}
    />
  );
}

export function BlankLine() {
  return (
    <span
      aria-hidden
      className="ml-1 inline-block min-w-[8rem] flex-1 translate-y-px border-b border-dotted border-slate-400"
    />
  );
}

export function ExerciseItem({
  n,
  children,
}: {
  n: number;
  children: React.ReactNode;
}) {
  return (
    <p className="flex gap-2 text-[14.5px] leading-[1.8]">
      <span className="w-5 shrink-0 text-right">{n}.</span>
      <span className="min-w-0 flex-1">{children}</span>
    </p>
  );
}
