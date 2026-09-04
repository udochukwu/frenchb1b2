import {
  ArrowItem,
  AttentionBox,
  Blank,
  BlankLine,
  ChapterHeader,
  CrossRef,
  Example,
  ExerciseBox,
  ExerciseItem,
  Nb,
  Rich,
  Rule,
  SectionBar,
  SectionDivider,
  SquareItem,
  Subhead,
  TealHead,
  TextbookPage,
} from "@/components/textbook";
import {
  chapter1,
  citiesWithArticle,
  contractions,
  exerciseB,
  exerciseD,
  exerciseE,
  exerciseF,
  exerciseG,
  exerciseH,
  overview,
} from "@/content/chapters/01";

function OverviewBlock() {
  return (
    <div className="mx-auto max-w-[28rem] space-y-4 text-center">
      {overview.map((section) => (
        <div key={section.roman}>
          <p className="text-[16px] font-semibold text-tb-teal">
            {section.roman} {section.title}
          </p>
          {section.examples.map((ex) => (
            <p
              key={ex}
              className="text-[14.5px] leading-relaxed text-tb-ink italic"
            >
              <Rich text={ex} />
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

function Page15() {
  return (
    <TextbookPage pageNumber={15}>
      <ChapterHeader number={chapter1.number} title={chapter1.title} />
      <OverviewBlock />

      <SectionDivider title="I. Formes" />

      <Example
        centered
        text="*Les* tableaux de *l'*artiste sont exposés *au* musée."
      />

      <Subhead text="1. 1 L'article défini *le*, *la*, *les* peut subir des transformations" />

      <Rule>
        <span className="font-semibold">a. Élision : </span>
        <Rich text="*le* et *la* deviennent *l'* devant une voyelle ou un h muet." />
      </Rule>
      <p className="mb-4 pl-6 text-[15px] italic text-tb-example">
        <Rich text="*l'*avion, *l'*herbe, etc." />
      </p>

      <ArrowItem>
        <p>
          On garde la forme <Rich text="*le* et *la*" /> devant un h aspiré.
          Notez que, pour cette raison, il faut écrire :
        </p>
        <p className="mt-1 italic text-tb-example">
          <Rich text="*la* hauteur, *la* honte, *le* héros." />
        </p>
      </ArrowItem>

      <ArrowItem>
        <p>
          Quand on prononce ces mots, on ne fait pas la liaison entre l&apos;article
          pluriel et le mot qui commence par un h aspiré :
        </p>
        <p className="mt-1 italic text-tb-example">
          <Rich text="*les*/héros, *les*/hauteurs." />
        </p>
      </ArrowItem>

      <Nb>
        un bon dictionnaire (Le Petit Robert par exemple) indique les mots qui
        commencent par un h aspiré.
      </Nb>
    </TextbookPage>
  );
}

function Page16() {
  return (
    <TextbookPage pageNumber={16} pageNumberSide="left">
      <Subhead text="b. Contraction" />

      <ul className="mb-4 space-y-1.5 text-[15px]">
        {contractions.map((row) => (
          <li key={row.formula} className="flex flex-wrap gap-x-3">
            <span className="font-medium text-tb-ink">{row.formula}</span>
            <span className="italic text-tb-example">
              (<Rich text={row.example} />)
            </span>
          </li>
        ))}
      </ul>

      <AttentionBox>
        <p>
          <Rich text="*à* + *l'* et *de* + *l'* ne se contractent pas." />
        </p>
        <p className="italic text-tb-example">
          <Rich text="Je vais à *l'*aéroport. Je reviens de *l'*hôpital." />
        </p>
      </AttentionBox>

      <ExerciseBox title="A. Complétez par l'article défini à la forme qui convient.">
        <ExerciseItem n={1}>
          Dès <Blank /> lever <Blank /> jour, <Blank /> vacanciers partent pour{" "}
          <Blank /> plage.
        </ExerciseItem>
        <ExerciseItem n={2}>
          <Blank /> avions atterrissent à <Blank /> aéroport.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Nous allons <Blank /> cinéma après <Blank /> dîner.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Ils reviennent <Blank /> États-Unis.
        </ExerciseItem>
        <ExerciseItem n={5}>
          <Blank /> herbe est verte, mais <Blank /> héros est fatigué.
        </ExerciseItem>
      </ExerciseBox>

      <SectionBar title="II. Emplois" />

      <Example
        centered
        text="*L'*argent ne fait pas *le* bonheur."
        translation="Money doesn't buy happiness."
      />

      <Subhead text="II. 1 En français, on met l'article défini :" />

      <p className="mb-1 text-[15px] font-semibold text-tb-ink">
        a. devant un nom qui a un sens général.
      </p>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        <Rich text="*L'*argent ne fait pas *le* bonheur. *Le* temps, c'est de *l'*argent." />
      </p>

      <p className="mb-1 text-[15px] font-semibold text-tb-ink">
        b. devant les noms abstraits.
      </p>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        <Rich text="*La* paresse est un défaut. *La* jalousie détruit *l'*amour." />
      </p>

      <p className="mb-1 text-[15px] font-semibold text-tb-ink">
        c. devant les noms compléments des verbes qui marquent les relations
        d&apos;amour ou de haine.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] text-tb-ink">
        (aimer, préférer, détester, etc.)
      </p>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        <Rich text="J'aime *le* cinéma mais je préfère *le* théâtre." />
      </p>

      <p className="mb-1 text-[15px] font-semibold text-tb-ink">
        d. devant les noms désignant une espèce, une catégorie et devant les
        noms de langue et de discipline.
      </p>
      <p className="pl-5 text-[15px] italic text-tb-example">
        <Rich text="*Les* Français sont gastronomes. *Le* français est une belle langue. *La* chimie est difficile." />
      </p>
    </TextbookPage>
  );
}

function Page17() {
  return (
    <TextbookPage pageNumber={17}>
      <p className="mb-1 text-[15px] font-semibold text-tb-ink">
        e. devant les noms qui indiquent une unité de mesure ou un poids.
      </p>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        <Rich text="*Les* fraises valent 3 euros *le* kilo. *L'*essence coûte 1,50 euro *le* litre." />
      </p>

      <p className="mb-1 text-[15px] font-semibold text-tb-ink">
        f. devant un nom de jour pour exprimer une répétition ou une habitude.
      </p>
      <p className="mb-1 pl-5 text-[15px] italic text-tb-example">
        <Rich text="*Le* lundi, je vais à *la* piscine." />
      </p>
      <p className="mb-2 pl-5 text-[14px] text-tb-muted">
        (= every Monday)
      </p>
      <p className="mb-6 text-right text-[14px]">
        <CrossRef>chapitre 42, V. 3, p. 315</CrossRef>
      </p>

      <ExerciseBox title="B. Traduisez.">
        {exerciseB.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="III. Devant les noms géographiques" />

      <Example
        centered
        text="*Le* Canada est un pays bilingue."
        translation="Canada is a bilingual country."
      />

      <Subhead text="III. 1 L'emploi de l'article défini" />

      <Rule>
        On emploie l&apos;article défini devant les noms de continents, de pays, de
        provinces, de fleuves et de montagnes.
      </Rule>
      <p className="mb-2 pl-5 text-[15px] italic text-tb-example">
        <Rich text="*Le* Saint-Laurent, *le* Québec, *le* mont Everest, *l'*Europe, *la* France." />
      </p>
      <Nb>
        Quelques pays n&apos;ont pas d&apos;article : <em>Israël</em>,{" "}
        <em>Oman</em>, etc.
      </Nb>

      <Subhead text="III. 2 Disparition de l'article défini" />

      <Rule>
        L&apos;article défini disparaît après la préposition{" "}
        <span className="font-semibold text-tb-teal">en</span> devant un nom de
        pays féminin ou un nom de pays masculin commençant par une voyelle.
      </Rule>
      <p className="mb-2 pl-5 text-[15px] italic text-tb-example">
        <Rich text="Je vais *en* France. Je vais *en* Équateur." />
      </p>
      <p className="text-right text-[14px]">
        <CrossRef>chapitre 17, II. 2, p. 141</CrossRef>
      </p>
    </TextbookPage>
  );
}

function Page18() {
  return (
    <TextbookPage pageNumber={18} pageNumberSide="left">
      <TealHead>III. 3 La préposition de</TealHead>

      <SquareItem>
        <p>
          Devant un nom de pays masculin commençant par une voyelle, ou un nom
          de pays féminin, on n&apos;emploie pas l&apos;article après{" "}
          <em>de</em> pour indiquer l&apos;origine.
        </p>
        <p className="mt-2 italic text-tb-example">
          Je suis originaire d&apos;Irak.{" "}
          <span className="not-italic text-tb-muted">
            (nom masculin commençant par une voyelle)
          </span>
        </p>
        <p className="italic text-tb-example">
          Je viens d&apos;Allemagne.{" "}
          <span className="not-italic text-tb-muted">(nom féminin)</span>
        </p>
      </SquareItem>

      <p className="mb-1 mt-4 text-[15px] text-tb-ink">Mais on dira :</p>
      <p className="mb-3 italic text-tb-example">
        Je viens du Canada.{" "}
        <span className="not-italic text-tb-muted">
          (nom masculin commençant par une consonne)
        </span>
      </p>

      <Nb>
        Cette règle ne s&apos;applique pas aux États-Unis, qui prennent toujours
        l&apos;article pluriel.
      </Nb>
      <p className="mt-1 italic text-tb-example">Il vient des États-Unis.</p>

      <TealHead>III. 4 Les noms de ville</TealHead>

      <SquareItem>
        <p>
          Les noms de ville ne prennent généralement pas l&apos;article défini,
          sauf s&apos;ils sont accompagnés d&apos;un adjectif ou d&apos;une
          proposition.
        </p>
        <p className="mt-2 italic text-tb-example">
          Montréal a beaucoup changé depuis 1970.
        </p>
        <p className="italic text-tb-example">
          <Rich text="*Le* vieux Montréal a beaucoup de charme." />
        </p>
      </SquareItem>

      <Nb>
        Certaines villes incluent l&apos;article dans leur nom :
      </Nb>
      <div className="mt-2 grid max-w-md grid-cols-2 gap-x-8 pl-4 text-[15px] italic text-tb-example">
        {citiesWithArticle.map(([left, right]) => (
          <div key={left} className="contents">
            <span>{left}</span>
            <span>{right}</span>
          </div>
        ))}
      </div>

      <ExerciseBox title="Complétez, s'il y a lieu, les phrases suivantes par la préposition et par l'article défini qui conviennent.">
        <ExerciseItem n={1}>
          <Blank /> Ottawa est la capitale <Blank /> Canada.
        </ExerciseItem>
        <ExerciseItem n={2}>
          <Blank /> Écosse est célèbre pour son whisky.
        </ExerciseItem>
        <ExerciseItem n={3}>
          J&apos;aime beaucoup <Blank /> Paris du XIX<sup>e</sup> siècle.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Elles ont passé un mois <Blank /> Angleterre.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Je reviens <Blank /> Floride.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page19() {
  return (
    <TextbookPage pageNumber={19}>
      <SectionBar title="IV. Devant les titres" />

      <Example
        centered
        text="*Le* président Kennedy a été assassiné à Dallas."
        translation="President Kennedy was assassinated in Dallas."
      />

      <TealHead>IV. 1 Noms de profession, fonction, titre...</TealHead>

      <SquareItem>
        <p>
          On emploie l&apos;article défini devant les noms de profession, de
          fonction ou de titre, même s&apos;ils sont suivis d&apos;un nom propre.
        </p>
        <p className="mt-2 italic text-tb-example">
          <Rich text="*Le* docteur Schweitzer a vécu à Lambaréné." />
        </p>
        <p className="italic text-tb-example">
          <Rich text="*Le* général de Gaulle a organisé la Résistance." />
        </p>
        <p className="italic text-tb-example">
          <Rich text="J'ai parlé *au* capitaine Laporte." />
        </p>
      </SquareItem>

      <AttentionBox>
        <p>
          On n&apos;emploie pas l&apos;article quand on s&apos;adresse directement à
          quelqu&apos;un :
        </p>
        <p className="italic text-tb-example">
          Bonjour, capitaine. Au revoir, docteur !
        </p>
        <p>
          On conserve toutefois l&apos;article dans les formules de politesse :{" "}
          <em className="text-tb-example">Monsieur le Ministre.</em>
        </p>
      </AttentionBox>

      <ExerciseBox title="D. Traduisez.">
        {exerciseD.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="V. Article défini et adjectif possessif" />

      <Example
        centered
        text="Je me suis cassé *le* bras."
        translation="I broke my arm."
      />

      <TealHead>V. 1 Les parties du corps</TealHead>

      <SquareItem>
        <p>
          Quand le possesseur est évident, on emploie l&apos;article défini (et
          non l&apos;adjectif possessif) devant les parties du corps.
        </p>
        <p className="mt-2 italic text-tb-example">
          <Rich text="J'ai mal *au* bras." />
        </p>
        <p className="italic text-tb-example">
          <Rich text="Il se lave *les* mains." />
        </p>
      </SquareItem>
    </TextbookPage>
  );
}

function Page20() {
  return (
    <TextbookPage pageNumber={20} pageNumberSide="left">
      <Rule>
        Les expressions « j&apos;ai mal » et « il se lave » indiquent déjà
        clairement qui est le possesseur.
        <CrossRef>IV, 1, p. 111</CrossRef>
      </Rule>

      <AttentionBox>
        <p>
          En anglais, on marque le possesseur par un adjectif possessif et un
          verbe simple. En français, on marque souvent le possesseur par un
          pronom personnel ou réfléchi et l&apos;article défini.
        </p>
        <p>
          <em>He broke his leg</em> ne se traduit pas par{" "}
          <em>*Il a cassé sa jambe</em> mais par{" "}
          <em>
            Il s&apos;est cassé <Rich text="*la*" /> jambe.
          </em>
        </p>
        <p>
          <em>The hairdresser cuts my hair</em> se traduit par{" "}
          <em>
            Le coiffeur <Rich text="*me*" /> coupe <Rich text="*les*" /> cheveux
          </em>{" "}
          (et non <em>*mes cheveux</em>).
        </p>
      </AttentionBox>

      <ExerciseBox title="E. Traduisez.">
        {exerciseE.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="F. Mettez l'article défini qui convient devant les noms suivants.">
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 sm:grid-cols-3 md:grid-cols-5">
          {exerciseF.map((word) => (
            <p key={word} className="flex items-end gap-1 text-[13.5px]">
              <Blank width="2.1rem" />
              <span>{word}</span>
            </p>
          ))}
        </div>
      </ExerciseBox>

      <ExerciseBox title="G. Traduisez.">
        {exerciseG.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page21() {
  return (
    <TextbookPage pageNumber={21}>
      <ExerciseBox title={exerciseH.prompt}>
        <p className="mb-4 text-[14.5px] italic text-tb-ink">
          {exerciseH.model.cue}{" "}
          <span className="not-italic text-tb-cyan">→</span>{" "}
          <Rich text={exerciseH.model.sentence} />
        </p>
        <ol className="space-y-3">
          {exerciseH.items.map((item, i) => (
            <li key={item.cue} className="flex gap-2 text-[14.5px] leading-[1.8]">
              <span className="w-5 shrink-0 text-right">{i + 1}.</span>
              <span className="flex min-w-0 flex-1 flex-wrap items-end">
                <span>
                  {item.cue} : {item.start}{" "}
                </span>
                <BlankLine />
              </span>
            </li>
          ))}
        </ol>
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter1() {
  return (
    <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">
      <Page15 />
      <Page16 />
      <Page17 />
      <Page18 />
      <Page19 />
      <Page20 />
      <Page21 />
    </div>
  );
}
