import type { ReactNode } from "react";

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-tb-cyan">{children}</span>;
}

export function Term({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-sm bg-tb-exercise px-1 py-0.5 font-medium text-tb-teal">
      {children}
    </span>
  );
}

/** Parse *text* as a cyan article highlight. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
          return <Highlight key={i}>{part.slice(1, -1)}</Highlight>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function Example({
  text,
  translation,
  centered = false,
}: {
  text: string;
  translation?: string;
  centered?: boolean;
}) {
  return (
    <p
      className={`text-[15px] leading-relaxed text-tb-example italic ${
        centered ? "text-center" : ""
      }`}
    >
      <Rich text={text} />
      {translation ? (
        <span className="mt-0.5 block not-italic text-tb-muted">
          {translation}
        </span>
      ) : null}
    </p>
  );
}

export function CrossRef({ children }: { children: ReactNode }) {
  return (
    <span className="whitespace-nowrap font-medium text-tb-cyan">
      {" "}
      → {children}
    </span>
  );
}
