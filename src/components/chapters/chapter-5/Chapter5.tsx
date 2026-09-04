import {
  AttentionBox,
  Blank,
  ChapterHeader,
  Example,
  ExerciseBox,
  ExerciseItem,
  Rich,
  Rule,
  SectionBar,
  Subhead,
  Term,
  TextbookPage,
} from "@/components/textbook";
import {
  chapter5,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseE,
  overview,
} from "@/content/chapters/05";

function OverviewBlock() {
  return (
    <div className="mx-auto max-w-[34rem] space-y-4 text-center">
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

function Page41() {
  return (
    <TextbookPage pageNumber={41}>
      <ChapterHeader number={chapter5.number} title={chapter5.title} />
      <OverviewBlock />

      <SectionBar title="I. Les différents compléments du nom" />
      <Rule>
        Un nom peut être précisé ou « complété » de quatre façons :
      </Rule>

      <p className="mb-1 text-[15px] font-semibold text-tb-ink">
        a. Un adjectif (an adjective)
      </p>
      <p className="mb-3 pl-4 text-[15px] italic text-tb-example">
        Un livre <Rich text="*relié*" /> ; le ciel <Rich text="*bleu*" /> ; une
        journée <Rich text="*ensoleillée*" />…
      </p>

      <p className="mb-1 text-[15px] font-semibold text-tb-ink">
        b. Une proposition relative (a relative clause)
      </p>
      <p className="mb-3 pl-4 text-[15px] italic text-tb-example">
        Le plat <Rich text="*qui a été préparé*" /> ; la fête{" "}
        <Rich text="*que l'on célèbre tous les ans*" />…
      </p>

      <p className="mb-1 text-[15px] font-semibold text-tb-ink">
        c. Un autre nom (another noun)
      </p>
      <p className="mb-3 pl-4 text-[15px] italic text-tb-example">
        Le cahier <Rich text="*de l'élève*" /> ; une photo{" "}
        <Rich text="*de famille*" />…
      </p>

      <p className="mb-1 text-[15px] font-semibold text-tb-ink">
        d. Précédé de « à » ou « en »
      </p>
      <p className="pl-4 text-[15px] italic text-tb-example">
        Une machine <Rich text="*à coudre*" /> ; une veste{" "}
        <Rich text="*en cuir*" /> ; un homme <Rich text="*en short*" />.
      </p>
    </TextbookPage>
  );
}

function Page42() {
  return (
    <TextbookPage pageNumber={42} pageNumberSide="left">
      <SectionBar title="II. Différences entre l'anglais et le français" />
      <Example centered text="Les animaux *du zoo*." />
      <Example centered text="Les gens *d'en haut*." />
      <Example centered text="*Ceux* qui sont à l'intérieur." />

      <Subhead text="II. 1 Prépositions de lieu" />
      <Rule>
        Contrairement à l&apos;anglais, un nom français n&apos;est généralement
        pas complété par un simple nom précédé d&apos;une préposition de lieu.
      </Rule>

      <AttentionBox>
        <p>
          The animals in the zoo are sick →{" "}
          <em>*Les animaux dans le zoo sont malades.</em>
        </p>
        <p>
          The room on the second floor is empty →{" "}
          <em>*La pièce au deuxième étage est vide.</em>
        </p>
        <p>Pour éviter la construction anglaise, on emploie :</p>
        <p>
          <span className="font-semibold">a. Une relative : </span>
          <em className="text-tb-example">
            Les animaux qui vivent dans le zoo sont malades. La pièce qui se
            trouve au deuxième étage est vide.
          </em>
        </p>
        <p>
          <span className="font-semibold">
            b. Un participe passé à valeur d&apos;adjectif :{" "}
          </span>
          <em className="text-tb-example">
            Les animaux enfermés dans le zoo sont malades. La pièce située au
            deuxième étage est vide.
          </em>
        </p>
        <p>
          <span className="font-semibold">
            c. Un nom précédé de la préposition « de » :{" "}
          </span>
          <em className="text-tb-example">
            Les animaux du zoo sont malades. La pièce du deuxième étage est
            vide.
          </em>
        </p>
      </AttentionBox>

      <ExerciseBox title="A. Traduisez.">
        {exerciseA.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page43() {
  return (
    <TextbookPage pageNumber={43}>
      <Subhead text="II. 2 Adverbes de lieu" />
      <Rule>
        Un nom français ne peut pas être complété directement par un adverbe de
        lieu.
      </Rule>
      <AttentionBox>
        <p>
          The people upstairs are my friends →{" "}
          <em>*Les gens en haut sont mes amis.</em>
        </p>
        <p>On dira plutôt :</p>
        <p className="italic text-tb-example">
          1. Les gens qui sont en haut…
          <br />
          2. Les gens installés en haut…
          <br />
          3. Les gens du haut… / les gens d&apos;en haut…
        </p>
      </AttentionBox>

      <Subhead text="II. 3 Les pronoms démonstratifs" />
      <Rule>
        Les règles de II. 1 et II. 2 s&apos;appliquent aussi aux pronoms
        démonstratifs (<em>celui, celle, ceux, celles</em>).
      </Rule>
      <p className="mb-3 text-[15px] italic text-tb-example">
        Those inside are safe → Ceux (celles) qui sont à l&apos;intérieur sont
        en sécurité / Ceux (celles) de l&apos;intérieur sont en sécurité.
      </p>
      <AttentionBox>
        <p>
          Un pronom démonstratif ne peut pas être complété par un adjectif. On
          ne peut pas employer ici un participe passé comme adjectif.
        </p>
        <p>
          Those hurt in the accident are still in hospital →{" "}
          <em>*Ceux blessés dans l&apos;accident sont encore à l&apos;hôpital.</em>
        </p>
        <p>
          On emploie une relative :{" "}
          <em className="text-tb-example">
            Ceux qui ont été blessés dans l&apos;accident sont encore à
            l&apos;hôpital.
          </em>
        </p>
      </AttentionBox>

      <ExerciseBox title="B. Traduisez.">
        {exerciseB.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page44() {
  return (
    <TextbookPage pageNumber={44} pageNumberSide="left">
      <SectionBar title="III. Complément de nom précédé de la préposition « à »" />
      <Example centered text="L'homme à l'imperméable gris." />
      <Example
        centered
        text="Ces dames au chapeau vert."
        translation="The ladies with green hats."
      />

      <Subhead text="III. 1 Emploi" />
      <Rule>
        On emploie <Term>à</Term> (+ article défini : au, à la, aux) pour
        marquer une caractéristique physique ou vestimentaire, ou pour
        souligner un détail descriptif. Schéma : nom + (à + nom).
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        La maison aux tuiles rouges.
      </p>
      <p className="mb-1 text-[15px] italic text-tb-example">
        L&apos;homme au masque de fer.
      </p>
      <p className="mb-3 text-[15px] italic text-tb-example">
        La femme aux gants noirs.
      </p>
      <AttentionBox>
        <p>
          Le groupe complément (<em>à + nom</em>) ne peut pas être séparé du
          nom qu&apos;il modifie ; il le suit immédiatement.
        </p>
      </AttentionBox>

      <Subhead text="III. 2 Différence français/anglais" />
      <Rule>
        L&apos;anglais emploie souvent « with ». En français,{" "}
        <Term>avec</Term> est incorrect dans ce contexte.
      </Rule>
      <p className="mb-1 text-[14.5px] text-tb-muted">
        The woman with the red dress came from a foreign country.
      </p>
      <p className="mb-1 text-[15px] italic text-tb-ink">
        *La femme avec une robe rouge venait d&apos;un pays étranger.
      </p>
      <p className="mb-1 text-[15px] italic text-tb-example">
        La femme qui portait une robe rouge venait d&apos;un pays étranger.
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        La femme à la robe rouge venait d&apos;un pays étranger.
      </p>

      <ExerciseBox title="C. Traduisez.">
        {exerciseC.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page45() {
  return (
    <TextbookPage pageNumber={45}>
      <SectionBar title="IV. Infinitif complément d'un nom" />
      <Example centered text="Il y a des chambres à louer." />
      <Example centered text="Voici un film à voir." />

      <Subhead text="IV. 1 Conditions d'emploi" />
      <Rule>
        Un nom peut être suivi d&apos;un infinitif précédé de <Term>à</Term>{" "}
        lorsque la construction équivaut à une relative.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        Une chambre à louer (chambre que l&apos;on peut / veut louer)
      </p>
      <p className="mb-1 text-[15px] italic text-tb-example">
        Un devoir à faire (devoir que l&apos;on doit faire)
      </p>
      <p className="mb-3 text-[15px] italic text-tb-example">
        Une machine à laver (machine qui lave)
      </p>
      <Rule>
        Cette construction n&apos;est généralement possible que si
        l&apos;infinitif est un <strong>verbe transitif direct</strong>. Avec
        un verbe transitif indirect, on emploie une relative.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        Un journal auquel on doit s&apos;abonner.{" "}
        <span className="not-italic text-tb-muted">
          (et non *un journal à s&apos;abonner)
        </span>
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        Une question à laquelle il faut répondre.{" "}
        <span className="not-italic text-tb-muted">
          (et non *une question à répondre)
        </span>
      </p>

      <ExerciseBox title="D. Trouvez une relative ou un adjectif (participe passé) pour éviter la construction anglaise.">
        <p className="mb-2 italic text-tb-ink">
          Le tableau <Rich text="*(qui est accroché)*" /> au mur est un Picasso.
        </p>
        <ExerciseItem n={1}>
          Le vase <Blank width="8rem" /> sur la table est en cristal.
        </ExerciseItem>
        <ExerciseItem n={2}>
          L&apos;argent <Blank width="8rem" /> dans ma poche ne m&apos;appartient
          pas.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Les personnes <Blank width="8rem" /> dans la salle se connaissaient
          déjà.
        </ExerciseItem>
        <ExerciseItem n={4}>
          L&apos;échelle <Blank width="8rem" /> contre le mur gêne le passage.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Le tricot <Blank width="8rem" /> sur le dossier de la chaise appartient
          à maman.
        </ExerciseItem>
      </ExerciseBox>

      <ExerciseBox title="E. Traduisez.">
        {exerciseE.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter5() {
  return (
    <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">
      <Page41 />
      <Page42 />
      <Page43 />
      <Page44 />
      <Page45 />
    </div>
  );
}
