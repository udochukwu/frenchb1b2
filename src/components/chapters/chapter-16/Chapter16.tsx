import type { ReactNode } from "react";
import {
  AttentionBox,
  Blank,
  ChapterHeader,
  Example,
  ExerciseBox,
  ExerciseItem,
  Nb,
  Rich,
  Rule,
  SectionBar,
  Subhead,
  TealHead,
  TextbookPage,
} from "@/components/textbook";
import {
  adjectivePrepositionPairs,
  chapter16,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseD,
  exerciseE,
  exerciseF,
  exerciseG,
  exerciseH,
  exerciseI,
  meaningPairs,
  overview,
  prepositionPairs,
  verbsWithEnglishPreposition,
  verbsWithFrenchPreposition,
} from "@/content/chapters/16";

function OverviewBlock() {
  return (
    <div className="mx-auto max-w-[38rem] space-y-4 text-center">
      {overview.map((section) => (
        <div key={section.roman}>
          <p className="text-[16px] font-semibold text-tb-teal">
            {section.roman} {section.title}
          </p>
          {section.examples.map((text) => (
            <p key={text} className="text-[14.5px] leading-relaxed text-tb-example italic">
              {text}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

function Gloss({ fr, en }: { fr: string; en: string }) {
  return (
    <p className="mb-1 text-[14.5px] italic leading-relaxed text-tb-example">
      <Rich text={fr} />
      <span className="not-italic text-tb-muted"> {en}</span>
    </p>
  );
}

function PairList({ pairs }: { pairs: readonly (readonly [string, string])[] }) {
  return (
    <div className="mb-3 space-y-1 pl-5 text-[14.5px] leading-relaxed">
      {pairs.map(([left, right]) => (
        <p key={left}>
          <span className="text-tb-cyan">– </span>
          <Rich text={left} /> <span className="text-tb-muted">=</span> {right}
        </p>
      ))}
    </div>
  );
}

function Page132() {
  return (
    <TextbookPage pageNumber={132} pageNumberSide="left">
      <ChapterHeader number={chapter16.number} title={chapter16.title} />
      <OverviewBlock />
      <SectionBar title="I. Verbes et prépositions + nom ou pronom" />
      <Gloss fr="J'ai téléphoné à mes parents." en="I phoned my parents." />
      <Gloss fr="Je pense à mon avenir." en="I am thinking of my future." />
      <Gloss
        fr="Il pense à lui ; il lui donne un conseil."
        en="He is thinking of him; he is giving him advice."
      />

      <Subhead text="I. 1 Différences de construction" />
      <TealHead>
        a. Certains verbes français peuvent se construire avec une préposition,
        alors que leur équivalent anglais se construit directement.
      </TealHead>
      <Rule>Il faut noter en particulier :</Rule>
      <PairList pairs={verbsWithFrenchPreposition} />
      <TealHead>
        b. Inversement, certains verbes anglais peuvent se construire avec une
        préposition alors que leur équivalent français se construit directement.
      </TealHead>
      <p className="mb-2 text-[14.5px] text-tb-ink">
        <span className="text-tb-cyan">to look at something</span> = regarder
        quelque chose
      </p>
      <Rule>On notera en particulier :</Rule>
      <PairList pairs={verbsWithEnglishPreposition.slice(1)} />
    </TextbookPage>
  );
}

function Page133() {
  return (
    <TextbookPage pageNumber={133}>
      <Subhead text="I. 2 Différences de préposition" />
      <Rule>
        Dans certains cas, le verbe français et le verbe anglais ont tous les
        deux une préposition mais les prépositions ne correspondent pas d&apos;une
        langue à l&apos;autre.
      </Rule>
      <Rule>Il faut noter en particulier :</Rule>
      <PairList pairs={prepositionPairs} />

      <Subhead text="I. 3 Parfois le sens du verbe français change" />
      <TealHead>a. Selon que le verbe est accompagné ou non d&apos;une préposition.</TealHead>
      <Rule>Il faut noter en particulier :</Rule>
      <PairList pairs={meaningPairs.slice(0, 4)} />
      <TealHead>b. Selon la préposition dont le verbe est accompagné.</TealHead>
      <Rule>Par exemple :</Rule>
      <PairList pairs={meaningPairs.slice(4)} />
      <p className="mb-4 text-right text-[13px] font-medium text-tb-cyan">
        → annexes, p. 345-346
      </p>

      <ExerciseBox title="A. Complétez à l&apos;aide de la préposition qui convient.">
        {exerciseA.map(([before, after], index) => (
          <ExerciseItem key={before} n={index + 1}>
            <Rich text={before} /> <Blank width="5rem" /> {after}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <Subhead text="I. 4 Préposition à + pronom personnel représentant une personne" />
    </TextbookPage>
  );
}

function Page134() {
  return (
    <TextbookPage pageNumber={134} pageNumberSide="left">
      <p className="mb-2 text-[14.5px] text-tb-ink">
        <span className="text-tb-cyan">– </span>les verbes penser à, rêver à,
        faire attention à...
      </p>
      <Example text="Je pense à mon camarade. → Je pense à lui." />
      <Example text="Il rêve à moi." />
      <TealHead>
        b. Dans les autres cas, on ne garde pas la préposition à ; on utilise
        seulement la forme faible, non tonique du pronom personnel (me, te, lui,
        nous, vous, leur).
      </TealHead>
      <Example text="Cette affaire convient à l'acheteur. → Cette affaire lui convient." />
      <Rule>
        C&apos;est le cas, en particulier, lorsqu&apos;il s&apos;agit d&apos;un complément
        d&apos;attribution, c&apos;est-à-dire lorsque le verbe a un complément d&apos;objet
        direct de chose et un complément indirect de personne (selon le schéma
        verbe + qqch. + à qqun). L&apos;emploi de la forme faible du pronom (me, te,
        lui, nous, vous, leur) est alors obligatoire.
      </Rule>
      <Example text="Je donne un conseil à mon frère. → Je lui donne un conseil." />
      <AttentionBox>
        <p>On ne peut pas dire :</p>
        <p>*Je donne un conseil à lui.</p>
        <p>*Je vends mon auto à lui.</p>
        <p>*Elle propose ses services à elles.</p>
        <p>On dira :</p>
        <p>Je lui donne un conseil.</p>
        <p>Je lui vends mon auto.</p>
        <p>Elle leur propose ses services.</p>
      </AttentionBox>
      <p className="mb-5 text-right text-[13px] font-medium text-tb-cyan">
        → chapitre 10, II. 3, p. 76-77
      </p>

      <ExerciseBox title="B. Reformulez les phrases suivantes en remplaçant les mots soulignés par le pronom personnel précédé ou non de la préposition « à ». ">
        {exerciseB.map(([before, underlined], index) => (
          <ExerciseItem key={before} n={index + 1}>
            {before} <u>{underlined}</u>
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="II. Adjectifs et prépositions" />
      <Gloss fr="On est responsable de ses actes." en="One is responsible for one's actions." />
      <Gloss fr="Les citoyens sont hostiles au projet." en="The citizens are hostile to the project." />
      <Subhead text="II. 1 Différences de préposition" />
      <Rule>
        Les adjectifs qualificatifs suivis d&apos;un complément se construisent
        généralement avec une préposition <span className="text-tb-cyan">(→ annexes, p. 346-348).</span>
      </Rule>
    </TextbookPage>
  );
}

function Page135() {
  return (
    <TextbookPage pageNumber={135}>
      <Rule>Les prépositions anglaises et françaises ne correspondent pas toujours.</Rule>
      <Rule>Il faut noter en particulier que l&apos;on traduit :</Rule>
      <PairList pairs={adjectivePrepositionPairs} />
      <Nb>
        on dit <em>différent de</em> et non <em>*différent que</em>.
      </Nb>

      <Subhead text="II. 2 Choix de la préposition" />
      <Rule>
        En français, la préposition qui suit l&apos;adjectif est souvent à ou de mais
        on peut rencontrer d&apos;autres prépositions devant le nom ou le pronom
        complément. Par exemple on utilise envers (ou avec) après aimable,
        charitable, poli, agréable.
      </Rule>
      <Example text="Soyez aimable envers (avec) elle." />

      <Subhead text="II. 3 La préposition de" />
      <Rule>
        Lorsque l&apos;adjectif qualificatif se rapporte à un pronom indéfini
        (quelqu&apos;un, personne, quelque chose, rien), on le fait précéder de la
        préposition de (d&apos;). (→ Attention, page 128)
      </Rule>
      <div className="mb-2 space-y-1 pl-5">
        <Example text="J'ai rencontré quelqu'un d'intelligent." />
        <Example text="Rien de grave ne s'est passé." />
        <Example text="Donnez-moi quelque chose de bon." />
        <Example text="Il n'y a personne d'intéressé par cette sortie." />
      </div>
      <AttentionBox>
        <p>Personne et quelque chose, pronoms indéfinis, ne sont pas féminins.</p>
        <p>On dira :</p>
        <p>J&apos;ai vu quelque chose de beau.</p>
        <p>Il n&apos;y a eu personne de satisfait.</p>
      </AttentionBox>
      <p className="mb-5 text-right text-[13px] font-medium text-tb-cyan">
        → V. 1, p. 128
      </p>

      <ExerciseBox title="C. Complétez par la préposition qui convient.">
        {exerciseC.map(([before, after], index) => (
          <ExerciseItem key={before} n={index + 1}>
            {before} <Blank width="4.5rem" /> {after}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page136() {
  return (
    <TextbookPage pageNumber={136} pageNumberSide="left">
      <ExerciseBox title="D. À l&apos;aide des mots suivants, faites des phrases sur le schéma : verbe + quelque chose + à quelqu&apos;un.">
        <p className="pl-7 text-[14.5px] italic text-tb-example">
          le médecin – du repos – son patient – conseiller
        </p>
        <p className="mb-3 pl-7 text-[14.5px] italic text-tb-example">
          → Le médecin a conseillé du repos à son patient.
        </p>
        {exerciseD.map((cue, index) => (
          <ExerciseItem key={cue} n={index + 1}>
            {cue}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="E. Récrivez les phrases suivantes en remplaçant les mots soulignés par le pronom personnel précédé ou non de la préposition « à ». ">
        {exerciseE.map(([before, underlined], index) => (
          <ExerciseItem key={before} n={index + 1}>
            {before} <u>{underlined}</u>
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="F. Complétez à l&apos;aide de la préposition qui convient.">
        {exerciseF.map(([before, after], index) => (
          <ExerciseItem key={before} n={index + 1}>
            {before} <Blank width="4.5rem" /> {after}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page137() {
  return (
    <TextbookPage pageNumber={137}>
      <ExerciseBox title="G. Répondez aux questions suivantes.">
        {exerciseG.map((question, index) => (
          <ExerciseItem key={question} n={index + 1}>
            {question}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="H. Traduisez.">
        {exerciseH.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="I. Traduisez.">
        {exerciseI.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter16() {
  const pages: ReactNode[] = [
    <Page132 key={132} />,
    <Page133 key={133} />,
    <Page134 key={134} />,
    <Page135 key={135} />,
    <Page136 key={136} />,
    <Page137 key={137} />,
  ];

  return <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">{pages}</div>;
}
