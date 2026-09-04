import {
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
  Term,
  TextbookPage,
} from "@/components/textbook";
import {
  chapter3,
  exerciseB,
  exerciseD,
  overview,
} from "@/content/chapters/03";

function OverviewBlock() {
  return (
    <div className="mx-auto max-w-[32rem] space-y-4 text-center">
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

function Page27() {
  return (
    <TextbookPage pageNumber={27}>
      <ChapterHeader number={chapter3.number} title={chapter3.title} />
      <OverviewBlock />

      <SectionBar title="I. Formes et fonctions" />
      <Example
        centered
        text="Au dessert, nous mangeons *du* gâteau ou *de la* tarte."
      />

      <Subhead text="I. 1 Les formes de l'article partitif sont *du*, *de la*, *des*." />
      <Rule>
        <Rich text="*Du* et *de la* se changent en *de l'* devant une voyelle ou un h muet." />
      </Rule>
      <p className="mb-4 text-[15px] italic text-tb-example">
        <Rich text="Pour faire mon gâteau je prends *du* beurre, *de la* farine et *de l'*huile." />
      </p>

      <Subhead text="I. 2 L'emploi de l'article partitif" />
      <Rule>
        L&apos;article partitif sert à marquer une partie indéterminée d&apos;un
        tout, une quantité indéterminée que l&apos;on ne peut pas préciser par
        une unité de mesure.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="Je mange *de la* tarte." />
      </p>
      <p className="mb-6 text-[15px] italic text-tb-example">
        <Rich text="Prenez *du* café !" />
      </p>

      <SectionBar title="II. Article partitif et préposition « de »" />
      <Subhead text="II. 1 Avec les verbes suivis de la préposition de" />
      <Rule>
        <span className="font-semibold">a. </span>
        Lorsque le nom est complément d&apos;un verbe ou d&apos;un adjectif qui
        veut la préposition <Term>de</Term> (avoir besoin <Term>de</Term>,
        manquer <Term>de</Term>, être privé <Term>de</Term>… → voir p. 145-146),
        on n&apos;utilise pas l&apos;article partitif, on n&apos;utilise que la
        préposition <Term>de</Term>.
      </Rule>
    </TextbookPage>
  );
}

function Page28() {
  return (
    <TextbookPage pageNumber={28} pageNumberSide="left">
      <Rule>
        Comparez : <em className="text-tb-example">il faut de la farine</em> et{" "}
        <em className="text-tb-example">avoir besoin de farine</em>. Des
        expressions comme <Term>avoir besoin de</Term> ou{" "}
        <Term>remplir de</Term> incluent déjà la préposition <em>de</em>.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="Il me faut *de la* farine." />
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        <Rich text="J'ai besoin *de* farine." />
      </p>

      <Rule>
        <span className="font-semibold">b. </span>
        Si le nom est déterminé (par exemple par une relative), on emploie{" "}
        <em>de</em> + l&apos;article défini, et non le partitif.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="J'ai besoin *de* farine." />{" "}
        <span className="not-italic text-tb-muted">(indéterminé)</span>
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        <Rich text="J'ai besoin de *la* farine que tu as achetée." />{" "}
        <span className="not-italic text-tb-muted">(déterminé)</span>
      </p>

      <Subhead text="II. 2 Négation" />
      <Rule>
        Après une négation, l&apos;article partitif se change en <Term>de</Term>
        .
      </Rule>
      <p className="mb-3 text-[15px] italic text-tb-example">
        <Rich text="J'ai *du* vin ; je n'ai pas *de* vin." />
      </p>
      <Rule>
        Exception : avec le verbe <em>être</em> à la forme négative, on garde le
        partitif.
      </Rule>
      <p className="mb-4 text-[15px] italic text-tb-example">
        <Rich text="Ce n'est pas *du* vin." />
      </p>

      <Subhead text="II. 3 Préposition « sans »" />
      <Rule>
        On n&apos;emploie presque jamais le partitif après <Term>sans</Term>.
      </Rule>
      <p className="mb-4 text-[15px] italic text-tb-example">
        Je bois mon thé sans sucre.
      </p>

      <ExerciseBox title="A. Complétez par l'article partitif ou par la préposition de.">
        <ExerciseItem n={1}>
          Il me faut <Blank /> temps pour faire cet exercice.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Monique a envie <Blank /> fraises.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Je ne lis jamais <Blank /> romans policiers.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Benjamin a besoin <Blank /> ciseaux que tu as empruntés.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Il m&apos;a envoyé <Blank /> fleurs.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page29() {
  return (
    <TextbookPage pageNumber={29}>
      <SectionBar title="III. Article partitif et adverbes de quantité" />
      <Example centered text="Tu m'as fait beaucoup de peine." />

      <Subhead text="III. 1 Quantités indéterminées" />
      <Rule>
        Les adverbes de quantité (<em>beaucoup, trop, assez, peu, un peu, un
        tas</em>…) sont suivis de la préposition <Term>de</Term> sans article.
      </Rule>
      <p className="mb-4 text-[15px] italic text-tb-example">
        beaucoup de peine, trop de café, assez d&apos;argent.
      </p>

      <Nb>
        <span className="block">
          a. Après l&apos;adverbe <Term>bien</Term>, on emploie l&apos;article
          partitif.{" "}
          <em className="text-tb-example">
            <Rich text="Tu as bien *de la* chance." />
          </em>
        </span>
        <span className="mt-2 block">
          b. Après <Term>la plupart</Term>, on emploie l&apos;article contracté
          pluriel <Rich text="*des*" />.{" "}
          <em className="text-tb-example">
            <Rich text="La plupart *des* élèves..." />
          </em>
        </span>
      </Nb>

      <ExerciseBox title="B. Traduisez.">
        {exerciseB.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="C. Complétez par l'article partitif ou par de.">
        <ExerciseItem n={1}>
          Faut-il encore aller chercher <Blank /> pain ?
        </ExerciseItem>
        <ExerciseItem n={2}>
          Tu lui as fait <Blank /> peine.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Je ne veux pas <Blank /> ennuis.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Elle est arrivée avec beaucoup <Blank /> bagages.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Je voudrais un kilo <Blank /> cerises.
        </ExerciseItem>
        <ExerciseItem n={6}>
          La plupart <Blank /> passagers ont eu le mal de mer.
        </ExerciseItem>
        <ExerciseItem n={7}>
          Buvez-vous <Blank /> thé ou <Blank /> café ?
        </ExerciseItem>
        <ExerciseItem n={8}>
          Ils n&apos;ont plus <Blank /> travail.
        </ExerciseItem>
        <ExerciseItem n={9}>
          Avez-vous <Blank /> cigarettes ?
        </ExerciseItem>
        <ExerciseItem n={10}>
          Ils n&apos;ont pas acheté assez <Blank /> lait.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page30() {
  return (
    <TextbookPage pageNumber={30} pageNumberSide="left">
      <ExerciseBox title="D. Traduisez.">
        {exerciseD.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter3() {
  return (
    <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">
      <Page27 />
      <Page28 />
      <Page29 />
      <Page30 />
    </div>
  );
}
