import { chapters } from "@/content/chapters";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-tb-canvas">
      <main className="mx-auto flex w-full max-w-[720px] flex-1 flex-col px-6 py-16">
        <p className="text-sm font-medium tracking-wide text-tb-teal uppercase">
          Manuel interactif
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-tb-ink">
          Grammaire française
        </h1>
        <p className="mt-3 max-w-md text-[16px] leading-relaxed text-tb-muted">
          Reconstitution numérique du manuel, chapitre par chapitre. Les
          exercices restent visuels pour l&apos;instant — comme sur la page
          imprimée.
        </p>

        <ul className="mt-10 space-y-4">
          {chapters.map((ch) => (
            <li key={ch.slug}>
              <Link
                href={`/chapters/${ch.slug}`}
                className="group flex items-baseline gap-5 rounded-md bg-tb-paper px-6 py-5 shadow-[0_1px_8px_rgba(15,23,42,0.06)] transition hover:shadow-[0_4px_16px_rgba(0,174,239,0.12)]"
              >
                <span className="text-4xl font-bold text-tb-ink">
                  {ch.number}
                </span>
                <span>
                  <span className="block text-xl font-bold uppercase tracking-wide text-tb-cyan group-hover:text-tb-cyan-dark">
                    {ch.title}
                  </span>
                  <span className="mt-1 block text-sm text-tb-muted">
                    Pages {ch.pages} · {ch.summary}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
