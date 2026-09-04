import {
  ChapterHeader,
  Example,
  ExerciseBox,
  ExerciseItem,
  Nb,
  Rich,
  Rule,
  SectionBar,
  SectionDivider,
  Subhead,
  TealHead,
  Term,
  TextbookPage,
} from "@/components/textbook";
import {
  chapter2,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseD,
  exerciseE,
  overview,
} from "@/content/chapters/02";

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

function Page22() {
  return (
    <TextbookPage pageNumber={22} pageNumberSide="left">
      <ChapterHeader number={chapter2.number} title={chapter2.title} />
      <OverviewBlock />

      <SectionDivider title="I. Formes" />

      <Example
        centered
        text="J'ai *un* cahier, *de* bonnes idées mais pas *de* stylo."
      />

      <Subhead text="1. 1 *Un* et *une* font *des* au pluriel." />
      <p className="mb-4 text-[15px] italic text-tb-example">
        <Rich text="J'ai *un* livre ; j'ai *des* livres." />
      </p>

      <Subhead text="1. 2 *Des* se change en *de* devant un nom précédé d'un adjectif." />
      <Rule>
        Il se change en <Rich text="*d'*" /> si l&apos;adjectif commence par une
        voyelle ou un h muet.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="Il y avait *de* jolies fleurs chez le fleuriste." />
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        <Rich text="Nous voulons *d'*autres exercices." />
      </p>

      <Subhead text="1. 3 L'article indéfini et la négation" />
      <Rule>
        <span className="font-semibold">a. </span>
        <Rich text="*Un*, *une*, *des*" /> sont généralement remplacés par{" "}
        <Rich text="*de*" /> (ou <Rich text="*d'*" />) après la négation (ne…
        pas, ne… plus, etc.).
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="J'ai *un* livre ; je n'ai pas *de* livre." />
      </p>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="J'ai *des* livres ; je n'ai plus *de* livres." />
      </p>
      <p className="text-[15px] italic text-tb-example">
        <Rich text="Vous avez mangé *des* épinards, vous n'avez pas mangé *d'*épinards." />
      </p>
    </TextbookPage>
  );
}

function Page23() {
  return (
    <TextbookPage pageNumber={23}>
      <Rule>
        <span className="font-semibold">b. </span>
        Cependant, avec le verbe « être » à la forme négative, on garde
        l&apos;article indéfini <Rich text="*un*, *une*, *des*" />.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="Nous sommes *des* étudiants de première année." />
      </p>
      <p className="mb-3 text-[15px] italic text-tb-example">
        <Rich text="Nous ne sommes pas *des* étudiants de première année." />
      </p>
      <Nb>
        la règle I. 2 reste valable avec le verbe « être » à la forme négative.{" "}
        <em className="text-tb-example">
          <Rich text="Ce ne sont pas *de* bons étudiants." />
        </em>
      </Nb>

      <SectionBar title="II. Article indéfini et nom attribut" />

      <div className="mb-4 space-y-1">
        <Example centered text="Elle *est étudiante*." />
        <Example centered text="C'est *une étudiante*." />
        <Example centered text="C'est *une étudiante* consciencieuse." />
      </div>

      <Subhead text="II. 1 Disparition de l'article indéfini" />
      <Rule>
        L&apos;article indéfini disparaît devant un nom de profession, de
        nationalité, de religion quand celui-ci est{" "}
        <span className="font-semibold">attribut</span> (c&apos;est-à-dire
        utilisé avec les verbes <em>être, sembler, devenir</em>, etc.).
      </Rule>
      <Nb>
        dans ce cas, le nom de nationalité ne prend pas de majuscule.
      </Nb>
      <p className="mt-2 text-[15px] italic text-tb-example">
        M. Dupont est professeur.
        <span className="mt-0.5 block not-italic text-tb-muted">
          Mr Dupont is a professor.
        </span>
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        Charlotte et Sylvie sont françaises.
        <span className="mt-0.5 block not-italic text-tb-muted">
          Charlotte and Sylvie are French.
        </span>
      </p>

      <Subhead text="II. 2 Exceptions" />
      <Rule>
        <span className="font-semibold">a. </span>
        Si le nom attribut est qualifié par un adjectif qualificatif ou
        complété par une proposition relative, l&apos;article réapparaît.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="M. Dupont est *un* bon professeur." />
        <span className="mt-0.5 block not-italic text-tb-muted">
          Mr Dupont is a good professor.
        </span>
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        <Rich text="Charlotte et Sylvie sont *des Françaises* qui font un stage." />
        <span className="mt-0.5 block not-italic text-tb-muted">
          Charlotte and Sylvie are French women who are doing a training
          programme.
        </span>
      </p>

      <Rule>
        <span className="font-semibold">b. </span>
        Quand l&apos;article apparaît (parce que le nom est qualifié par un
        adjectif ou complété par une relative) ou quand le nom n&apos;est pas
        qualifié mais qu&apos;on veut garder l&apos;article, on est obligé de
        remplacer le pronom personnel sujet 3e personne (il, elle, ils, elles)
        par le démonstratif « ce » ou « c&apos; ».
      </Rule>
      <p className="mb-1 text-[15px] text-tb-ink">
        On dira :{" "}
        <em className="text-tb-example">Elle est américaine</em> (nom attribut
        de nationalité, non qualifié).
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">
        On ne dira pas :{" "}
        <em className="text-tb-example">Elle est une Américaine.</em>
      </p>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="C'est *une* Américaine." />
        <span className="mt-0.5 block not-italic text-tb-muted">
          She is an American.
        </span>
      </p>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="C'est *une jeune* Américaine." />
        <span className="mt-0.5 block not-italic text-tb-muted">
          She is a young American.
        </span>
      </p>
      <p className="text-[15px] italic text-tb-example">
        <Rich text="Ce sont *des* américains qui viennent de Californie." />
        <span className="mt-0.5 block not-italic text-tb-muted">
          They are Americans from California.
        </span>
      </p>
    </TextbookPage>
  );
}

function Page24() {
  return (
    <TextbookPage pageNumber={24} pageNumberSide="left">
      <ExerciseBox title="A. Traduisez.">
        {exerciseA.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="III. Traduction de « as a »" />

      <Example
        centered
        text="En tant que spécialiste..."
        translation="As a specialist..."
      />

      <TealHead>III. 1 Comme, en tant que</TealHead>
      <Rule>
        Après <Term>comme</Term> ou <Term>en tant que</Term> qui introduisent un
        titre, une référence ou une qualité, on n&apos;utilise généralement pas
        l&apos;article.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        En tant que citoyen, j&apos;ai le droit de voter.
        <span className="mt-0.5 block not-italic text-tb-muted">
          As a citizen, I have the right to vote.
        </span>
      </p>
      <p className="mb-1 text-[15px] italic text-tb-example">
        Que veux-tu comme dessert ?
        <span className="mt-0.5 block not-italic text-tb-muted">
          What would you like as dessert?
        </span>
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        En tant que médecin je vous conseille de ne plus fumer.
        <span className="mt-0.5 block not-italic text-tb-muted">
          As a doctor I advise you to give up smoking.
        </span>
      </p>

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

function Page25() {
  return (
    <TextbookPage pageNumber={25}>
      <SectionBar title="IV. Article indéfini et nom abstrait" />

      <Example
        centered
        text="Il a lutté avec courage, avec *un* courage admirable."
      />

      <TealHead>IV. 1 Les noms abstraits</TealHead>
      <Rule>
        Les noms abstraits précédés de « <Term>avec</Term> » ou de «{" "}
        <Term>sans</Term> » ne prennent pas d&apos;article indéfini si le nom
        n&apos;est pas qualifié.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        Ils avançaient avec prudence.
        <span className="mt-0.5 block not-italic text-tb-muted">
          They proceeded with caution.
        </span>
      </p>
      <p className="mb-1 text-[15px] italic text-tb-example">
        Ils ont joué avec enthousiasme.
        <span className="mt-0.5 block not-italic text-tb-muted">
          They played with enthusiasm.
        </span>
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        Ils écoutaient avec attention.
        <span className="mt-0.5 block not-italic text-tb-muted">
          They listened with care.
        </span>
      </p>

      <Rule>
        Mais, contrairement à l&apos;anglais, si le nom abstrait est qualifié,
        on utilise l&apos;article indéfini.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="Ils avançaient avec *une* prudence remarquable." />
        <span className="mt-0.5 block not-italic text-tb-muted">
          They proceeded with great caution.
        </span>
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        <Rich text="Elles écoutaient avec *une* attention soutenue." />
        <span className="mt-0.5 block not-italic text-tb-muted">
          They listened with intense care.
        </span>
      </p>

      <SectionBar title="V. Article indéfini et nom en apposition" />

      <Example
        centered
        text="Spécialiste de renommée mondiale, *M. Massicote* a été reçu à l'académie."
      />

      <TealHead>
        V. 1 Devant un nom mis en apposition, on ne met en général pas
        d&apos;article indéfini.
      </TealHead>
      <p className="mb-1 text-[15px] italic text-tb-example">
        Louis XIV, <Rich text="*roi de France*" />, est mort en 1715.
      </p>
      <p className="mb-1 text-[15px] italic text-tb-example">
        M. Dampierre, <Rich text="*directeur*" /> de la compagnie depuis dix
        ans, a pris sa retraite.
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        <Rich text="*Directeur*" /> de la compagnie depuis dix ans, M. Dampierre
        a pris sa retraite.
      </p>

      <p className="mb-1 text-[14.5px] text-tb-muted">
        A professor of chemistry at Yale University, Mr. Harris is the first to
        receive the Nobel Prize at twenty-nine.
      </p>
      <p className="text-[14.5px] text-tb-ink">
        sans utiliser l&apos;article indéfini :
      </p>
      <p className="text-[15px] italic text-tb-example">
        Professeur de chimie à l&apos;université Yale, M. Harris est le premier
        à recevoir le prix Nobel à l&apos;âge de 29 ans.
      </p>
    </TextbookPage>
  );
}

function Page26() {
  return (
    <TextbookPage pageNumber={26} pageNumberSide="left">
      <ExerciseBox title="C. Sur le modèle :">
        <p className="italic text-tb-ink">Elle est étudiante.</p>
        <p className="pl-4 text-[14.5px]">
          a) C&apos;est une étudiante consciencieuse.
        </p>
        <p className="mb-3 pl-4 text-[14.5px]">
          b) C&apos;est une étudiante qui mérite des félicitations.
        </p>
        <p>Composez des phrases où le nom attribut sera :</p>
        <p className="pl-4">a) qualifié par un adjectif.</p>
        <p className="mb-3 pl-4">b) complété par une relative.</p>
        {exerciseC.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="D. Traduisez.">
        {exerciseD.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="E. Mettez à la forme négative.">
        {exerciseE.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter2() {
  return (
    <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">
      <Page22 />
      <Page23 />
      <Page24 />
      <Page25 />
      <Page26 />
    </div>
  );
}
