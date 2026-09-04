import type { ReactNode } from "react";
import { Rich } from "./highlight";

export function SectionBar({ title }: { title: string }) {
  return (
    <div className="my-6 flex justify-center">
      <div className="w-full max-w-[34rem] rounded-[2px] bg-tb-cyan px-6 py-1.5 text-center">
        <h2 className="text-[17px] font-semibold text-white">{title}</h2>
      </div>
    </div>
  );
}

export function SectionDivider({ title }: { title: string }) {
  return (
    <div className="relative my-8 flex items-center justify-center">
      <div className="absolute inset-x-0 h-px bg-tb-cyan/70" />
      <div className="relative rounded-md bg-tb-cyan px-5 py-1">
        <h2 className="text-[15px] font-semibold text-white">{title}</h2>
      </div>
    </div>
  );
}

export function Subhead({ text }: { text: string }) {
  return (
    <h3 className="mb-3 mt-6 border-b border-tb-cyan/80 pb-0.5 text-[16px] font-semibold text-tb-ink">
      <Rich text={text} />
    </h3>
  );
}

export function TealHead({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-3 mt-6 text-[16px] font-bold text-tb-teal">{children}</h3>
  );
}

export function Rule({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">{children}</p>
  );
}

export function ArrowItem({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 flex gap-2.5 text-[15px] leading-[1.65]">
      <span
        aria-hidden
        className="mt-[0.35rem] inline-block h-0 w-0 shrink-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-tb-cyan"
      />
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export function SquareItem({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 flex gap-2.5 text-[15px] leading-[1.65]">
      <span
        aria-hidden
        className="mt-[0.45rem] inline-block h-2 w-2 shrink-0 bg-tb-cyan"
      />
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export function Nb({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 text-[14.5px] leading-relaxed text-tb-teal">
      <span className="font-semibold">N. B. : </span>
      {children}
    </p>
  );
}
