import {
  ArrowItem,
  ChapterHeader,
  CrossRef,
  Example,
  ExerciseBox,
  ExerciseItem,
  Rich,
  Rule,
  SectionDivider,
  Subhead,
  TextbookPage,
} from "@/components/textbook";
import {
  chapter24,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseD,
  exerciseE,
  exerciseF,
  exerciseG,
  exerciseH,
  exerciseI,
  overview,
} from "@/content/chapters/24";

function OverviewBlock() {
  return (
    <div className="mx-auto max-w-[38rem] space-y-3 text-center">
      {overview.map((section) => (
        <div key={section.roman}>
          <p className="text-[16px] font-semibold text-tb-teal">
            {section.roman} {section.title}
          </p>
          {section.lines.map((line) => (
            <p key={line.fr} className="text-[14.5px] leading-relaxed text-tb-example italic">
              {line.fr}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

function Items({ items }: { items: readonly string[] }) {
  return (
    <>
      {items.map((item, i) => (
        <ExerciseItem key={item} n={i + 1}>
          {item}
        </ExerciseItem>
      ))}
    </>
  );
}

function FlowList({ items, rows }: { items: readonly string[]; rows: number }) {
  return (
    <div
      className="grid gap-x-8 gap-y-1 text-[14.5px]"
      style={{ gridTemplateRows: `repeat(${rows}, auto)`, gridAutoFlow: "column" }}
    >
      {items.map((item, i) => (
        <p key={item}>
          <span className="mr-1.5">{i + 1}.</span>
          {item}
        </p>
      ))}
    </div>
  );
}

function Trio({ rows }: { rows: readonly (readonly [string, string, string])[] }) {
  return (
    <div className="my-2 grid grid-cols-3 gap-x-3 pl-6 text-[14.5px] italic text-tb-example">
      {rows.map((row) =>
        row.map((cell) => <span key={cell}>{cell}</span>),
      )}
    </div>
  );
}

function Page190() {
  return (
    <TextbookPage pageNumber={190} pageNumberSide="left">
      <ChapterHeader number={chapter24.number} title={chapter24.title} />
      <OverviewBlock />
      <SectionDivider title="I. Formes" />
      <Example centered text="Arrive à l'heure pour le concert." />
      <Example centered text="Viens à sept heures précises." />

      <Subhead text="I. 1 Les personnes de l'impératif" />
      <Rule>
        L&apos;impératif n&apos;a pas de sujet exprimé et n&apos;existe qu&apos;à
        trois personnes :
      </Rule>
      <Example text="2e personne du singulier : Travaille !" />
      <Example text="1re personne du pluriel : Partons !" />
      <Example text="2e personne du pluriel : Mangez !" />

      <Subhead text="I. 2 Présent de l'impératif et présent de l'indicatif" />
      <Rule>
        En règle générale, les formes de l&apos;
        <Rich text="*impératif présent*" /> sont semblables à celles du présent
        de l&apos;indicatif.
      </Rule>
      <Example text="Fais attention ! Verbe faire. Présent : tu fais → impératif : fais !" />
      <Example text="Cours vite ! Verbe courir. Présent : tu cours → impératif : cours !" />
      <Example text="Mangeons rapidement ! Verbe manger. Présent : nous mangeons → impératif : mangeons !" />

      <Subhead text="I. 3 Particularités" />
      <ArrowItem>
        À la deuxième personne du singulier, les verbes en <Rich text="*-er*" />{" "}
        et les verbes <Rich text="*ouvrir*" />, cueillir, offrir, couvrir et
        souffrir ne prennent pas de <Rich text="*-s*" /> sauf s&apos;ils sont
        suivis des pronoms compléments <Rich text="*y*" /> et{" "}
        <Rich text="*en*" />.
      </ArrowItem>
      <Example text="Mange des pommes. → Manges-en." />
      <Example text="Va faire les courses. → Vas-y." />
    </TextbookPage>
  );
}

function Page191() {
  return (
    <TextbookPage pageNumber={191}>
      <ArrowItem>
        Quand <Rich text="*y*" /> et <Rich text="*en*" /> sont suivis d&apos;un{" "}
        <Rich text="*infinitif*" /> dont ils sont <Rich text="*compléments*" />,
        la 2<sup>e</sup> personne du singulier des verbes mentionnés en I. 3 ne
        prend pas de <Rich text="*-s*" />.
      </ArrowItem>
      <Example text="Va chercher des fruits. → Va en chercher." />
      <Example text="Va dormir à l'hôtel. → Va y dormir." />
      <ArrowItem>Les quatre verbes suivants ont un impératif irrégulier :</ArrowItem>
      <div className="my-2 grid grid-cols-[7rem_1fr_1fr_1fr] gap-x-3 pl-4 text-[14.5px] italic text-tb-example">
        <span className="not-italic text-tb-ink">avoir →</span>
        <span>aie</span>
        <span>ayons</span>
        <span>ayez</span>
        <span className="not-italic text-tb-ink">être →</span>
        <span>sois</span>
        <span>soyons</span>
        <span>soyez</span>
        <span className="not-italic text-tb-ink">savoir →</span>
        <span>sache</span>
        <span>sachons</span>
        <span>sachez</span>
        <span className="not-italic text-tb-ink">vouloir →</span>
        <span>(veuille)</span>
        <span>(veuillons)</span>
        <span>veuillez</span>
      </div>

      <ExerciseBox title="A. Donnez les trois personnes de l'impératif des verbes suivants.">
        <FlowList items={exerciseA} rows={5} />
      </ExerciseBox>

      <Subhead text="I. 4 L'impératif passé" />
      <ArrowItem>
        L&apos;impératif <Rich text="*passé*" /> se forme à partir de
        l&apos;impératif présent de l&apos;auxiliaire <Rich text="*être*" /> ou{" "}
        <Rich text="*avoir*" /> et du participe passé du verbe.
      </ArrowItem>
      <Example text="finir → aie fini    ayons fini    ayez fini" />
      <Example text="arriver → sois arrivé(e)    soyons arrivé(e)s    soyez arrivé(e)s" />
      <ArrowItem>
        Il exprime l&apos;idée que l&apos;action doit être{" "}
        <Rich text="*complètement terminée*" /> à un moment déterminé du futur.
      </ArrowItem>
      <Rule>En anglais, l&apos;impératif est toujours au présent.</Rule>
      <Example
        text="Soyez arrivés quand il viendra."
        translation="Be there when he arrives. (Make sure you have arrived when he comes.)"
      />
      <Example
        text="Ayez fini cette lettre avant cinq heures."
        translation="Finish this letter before 5 o'clock. (Make sure you have finished...)"
      />

      <ExerciseBox title="B. Traduisez.">
        <Items items={exerciseB} />
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page192() {
  return (
    <TextbookPage pageNumber={192} pageNumberSide="left">
      <SectionDivider title="II. Place des pronoms à l'impératif" />
      <Example centered text="Amusez-vous bien et téléphonez-moi." />
      <Example centered text="Ne nous attardons pas et ne lui disons rien." />

      <Subhead text="II. 1 Place des pronoms à l'impératif affirmatif" />
      <Rule>
        À l&apos;impératif <Rich text="*affirmatif*" />, tous les pronoms
        compléments sont placés <Rich text="*après*" /> le verbe. Le{" "}
        <Rich text="*trait d'union*" /> est obligatoire. Le pronom est à la forme{" "}
        <Rich text="*tonique*" />. Devant les pronoms <em>y</em> et <em>en</em>,{" "}
        <em>moi</em> et <em>toi</em> se changent en <Rich text="*m'*" /> et{" "}
        <Rich text="*t'*" />.
      </Rule>
      <p className="mb-2 text-right text-[14px] text-tb-cyan">
        <CrossRef>chapitre 10, V. 2, p. 81</CrossRef>
      </p>
      <Example text="Lavez-vous les mains." />
      <Example text="Dites-moi la vérité ; dites-la-moi." />
      <Example text="Regardez-les." />
      <Example text="Envoyez-les-moi." />
      <Example text="Vas-y." />
      <Example text="Donne-m'en." />

      <ExerciseBox title="C. Transformez les phrases suivantes à l'impératif affirmatif.">
        <Items items={exerciseC} />
      </ExerciseBox>

      <Subhead text="II. 2 Place des pronoms à l'impératif négatif" />
      <Rule>
        À l&apos;impératif <Rich text="*négatif*" />, tous les pronoms objets
        sont placés <Rich text="*avant*" /> le verbe. Il n&apos;y a pas de trait
        d&apos;union. Les pronoms sont à la forme non accentuée.
      </Rule>
      <p className="mb-2 text-right text-[14px] text-tb-cyan">
        <CrossRef>chapitre 10, V. 1, p. 81</CrossRef>
      </p>
      <Example text="Ne me dites plus rien." />
      <Example text="Ne lui envoyez pas cette lettre." />
      <Example text="Ne la lui envoyez pas." />

      <ExerciseBox title="D. Mettez les phrases suivantes à l'impératif négatif.">
        <Items items={exerciseD} />
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page193() {
  return (
    <TextbookPage pageNumber={193}>
      <SectionDivider title="III. L'impératif des verbes pronominaux" />
      <Example centered text="Amusez-vous ; ne vous pressez pas." />

      <Subhead text="III. 1 Le pronom objet" />
      <ArrowItem>
        À l&apos;impératif, le <Rich text="*pronom objet*" /> des verbes
        pronominaux est <Rich text="*toujours exprimé*" />.
      </ArrowItem>
      <Rule>
        Prenons, par exemple, les verbes <Rich text="*s'amuser*" />,{" "}
        <Rich text="*s'habiller*" />, <Rich text="*se fâcher*" />. À
        l&apos;impératif, il n&apos;y aura, bien sûr, pas de sujet exprimé mais le
        pronom complément sera, lui, exprimé.
      </Rule>
      <ArrowItem>À la forme affirmative, on aura :</ArrowItem>
      <Trio
        rows={[
          ["amuse-toi", "amusons-nous", "amusez-vous"],
          ["habille-toi", "habillons-nous", "habillez-vous"],
          ["fâche-toi", "fâchons-nous", "fâchez-vous"],
        ]}
      />
      <ArrowItem>À la forme négative, on aura :</ArrowItem>
      <Trio
        rows={[
          ["ne t'amuse pas", "ne nous amusons pas", "ne vous amusez pas"],
          ["ne t'habille pas", "ne nous habillons pas", "ne vous habillez pas"],
          ["ne te fâche pas", "ne nous fâchons pas", "ne vous fâchez pas"],
        ]}
      />
      <ArrowItem>
        Comparez le présent de l&apos;<Rich text="*indicatif*" /> et le présent
        de l&apos;<Rich text="*impératif*" /> :
      </ArrowItem>
      <Example text="indicatif : nous nous lavons (sujet + objet) ;" />
      <Example text="impératif : lavons-nous (objet seulement)." />

      <ExerciseBox title="E. Traduisez.">
        <div
          className="grid gap-x-8 gap-y-1"
          style={{ gridTemplateRows: "repeat(3, auto)", gridAutoFlow: "column" }}
        >
          {exerciseE.map((item, i) => (
            <ExerciseItem key={item} n={i + 1}>
              {item}
            </ExerciseItem>
          ))}
        </div>
      </ExerciseBox>
      <ExerciseBox title="F. Traduisez.">
        <Items items={exerciseF} />
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page194() {
  return (
    <TextbookPage pageNumber={194} pageNumberSide="left">
      <ExerciseBox title="G. Mettez à la forme négative les phrases suivantes.">
        <Items items={exerciseG} />
      </ExerciseBox>
      <ExerciseBox title="H. Exprimez les idées contenues dans les phrases suivantes à l'aide d'un impératif.">
        <p className="mb-2 italic text-tb-example">
          Il faut que tu lui pardonnes. → Pardonne-lui.
        </p>
        <Items items={exerciseH} />
      </ExerciseBox>
      <ExerciseBox title="I. Mettez à la forme affirmative.">
        <Items items={exerciseI} />
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter24() {
  return (
    <div className="space-y-8 py-8">
      <Page190 />
      <Page191 />
      <Page192 />
      <Page193 />
      <Page194 />
    </div>
  );
}
