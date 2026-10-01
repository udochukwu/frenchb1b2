import {
  AttentionBox,
  Blank,
  ChapterHeader,
  CrossRef,
  Example,
  ExerciseBox,
  ExerciseItem,
  Nb,
  Rich,
  Rule,
  SectionBar,
  SquareItem,
  Subhead,
  Term,
  TextbookPage,
} from "@/components/textbook";
import {
  chapter7,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseD,
  exerciseE,
  exerciseF,
  exerciseG,
  overview,
} from "@/content/chapters/07";

function OverviewBlock() {
  return (
    <div className="mx-auto max-w-[36rem] space-y-4 text-center">
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

function Bilingual({
  fr,
  en,
}: {
  fr: string;
  en: string;
}) {
  return (
    <p className="mb-1 text-[15px] italic text-tb-example">
      <Rich text={fr} />
      <span className="mt-0.5 block not-italic text-tb-muted">{en}</span>
    </p>
  );
}

function Page55() {
  return (
    <TextbookPage pageNumber={55}>
      <ChapterHeader number={chapter7.number} title={chapter7.title} />
      <OverviewBlock />

      <SectionBar title="I. Comparatif" />

      <Example
        centered
        text="Cécile est *plus* sympathique mais *moins* travailleuse."
        translation="Cécile is more pleasant (nicer) but less hard-working."
      />
      <Example
        centered
        text="Ton appartement est *aussi* confortable *que* le mien."
        translation="Your apartment is as comfortable as mine."
      />

      <Subhead text="I. 1 Formation" />
      <Rule>
        Pour former le comparatif d&apos;un adjectif qualificatif, on fait
        précéder l&apos;adjectif de :
      </Rule>
      <p className="mb-1 text-[15px] text-tb-ink">
        – <Term>plus</Term> (comparatif de supériorité).
      </p>
      <Bilingual
        fr="Il est *plus* intelligent."
        en="He is more intelligent."
      />
      <p className="mb-1 mt-2 text-[15px] text-tb-ink">
        – <Term>moins</Term> (comparatif d&apos;infériorité).
      </p>
      <Bilingual
        fr="Il est *moins* intelligent."
        en="He is less intelligent."
      />
      <p className="mb-1 mt-2 text-[15px] text-tb-ink">
        – <Term>aussi</Term> (comparatif d&apos;égalité).
      </p>
      <Bilingual
        fr="Il est *aussi* intelligent."
        en="He is as intelligent."
      />

      <Subhead text="I. 2 Emploi" />
      <SquareItem>
        <p>
          Le comparatif peut être utilisé seul. Si l&apos;on ajoute un terme de
          comparaison, celui-ci est précédé de <Term>que</Term>. (Attention ! Il
          ne faut utiliser ni « de » ni « comme » !)
        </p>
      </SquareItem>
      <Bilingual fr="Il est *plus* grand *que* moi." en="He is bigger than me." />
      <Bilingual
        fr="Elle est *moins* jolie *que* sa sœur."
        en="She is less pretty than her sister."
      />
      <Bilingual
        fr="Ils sont *aussi* beaux *que* tu le dis."
        en="They are as lovely as you say."
      />
    </TextbookPage>
  );
}

function Page56() {
  return (
    <TextbookPage pageNumber={56} pageNumberSide="left">
      <SquareItem>
        <p>L&apos;élément de comparaison peut être :</p>
      </SquareItem>
      <p className="mb-1 text-[15px] text-tb-ink">– un nom.</p>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        <Rich text="Pierre est *aussi* intelligent *que* Paul." />
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">
        – un pronom (le pronom personnel est à la forme tonique ;{" "}
        <CrossRef>chapitre 10, VI. 3, p. 83</CrossRef>
        ).
      </p>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        <Rich text="Elle est *plus* courageuse *que* lui." />
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">– un adverbe.</p>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        <Rich text="L'eau est *plus* chaude ici *que* là-bas." />
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">
        – une proposition subordonnée.
      </p>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        <Rich text="C'est *plus* cher *que* je ne le pensais." />
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">– un adjectif qualificatif.</p>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        <Rich text="Elle est *aussi* aimable *que* belle." />
      </p>

      <SquareItem>
        <p>
          Notez dans le dernier exemple l&apos;ellipse du verbe qui ne serait
          pas possible en anglais. On traduira : « Il est aussi rigoureux que
          juste » par : « He is as strict as he is fair. »
        </p>
      </SquareItem>

      <Subhead text="I. 3 Renforcement du comparatif" />
      <Rule>
        Si l&apos;on veut renforcer le comparatif et insister sur la différence,
        on peut ajouter <Term>bien</Term> ou <Term>beaucoup</Term> devant{" "}
        <Term>plus</Term> et <Term>moins</Term>.
      </Rule>
      <Bilingual
        fr="Il est *bien plus* grand *que* nous."
        en="He is much bigger than us."
      />
      <Bilingual
        fr="Nous sommes *beaucoup moins* riches."
        en="We are much less rich."
      />

      <ExerciseBox title="A. Avec les éléments suivants, faites une phrase en utilisant le comparatif.">
        {exerciseA.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page57() {
  return (
    <TextbookPage pageNumber={57}>
      <SectionBar title="II. Superlatif" />

      <Example
        centered
        text="Gaëlle est *la plus* sympathique."
        translation="Gaëlle is the nicest."
      />
      <Example
        centered
        text="Gaëlle est la camarade *la plus* aimée."
        translation="Gaëlle is the most popular friend."
      />
      <Example
        centered
        text="Il est *très* beau ; elle est *fort* belle."
        translation="He is very handsome; she is very beautiful."
      />

      <Subhead text="II. 1 Formation" />
      <Rule>
        Pour former le superlatif de supériorité ou d&apos;infériorité, on fait
        précéder l&apos;adjectif de l&apos;adverbe <Term>plus</Term> ou{" "}
        <Term>moins</Term> et de l&apos;article défini ou de l&apos;adjectif
        possessif.
      </Rule>
      <Bilingual
        fr="Gaëlle est *la plus* aimable."
        en="Gaëlle is the most friendly (friendliest)."
      />
      <Bilingual
        fr="Pierre est *le moins* riche."
        en="Pierre is the least rich."
      />
      <Bilingual
        fr="Ces dessins sont *les plus* amusants."
        en="These drawings are the funniest."
      />
      <Bilingual
        fr="La gourmandise est *son plus* grand défaut."
        en="Greed is his greatest fault."
      />

      <Subhead text="II. 2 Emploi" />
      <Rule>
        Le superlatif peut être utilisé seul. S&apos;il est accompagné
        d&apos;un complément de référence (nom ou pronom), ce complément est
        précédé de <Term>de</Term>.
      </Rule>
      <Bilingual
        fr="Pierre est *le plus* gentil *de* tous."
        en="Peter is the kindest of all."
      />
      <Bilingual
        fr="Ils ont coupé *les plus* gros arbres *de* la forêt."
        en="They cut down the biggest trees in the forest."
      />
      <Bilingual
        fr="C'est *la plus* grande province *du* Canada."
        en="It is the largest province in Canada."
      />

      <AttentionBox>
        <p>
          Lorsque l&apos;adjectif est placé après le nom{" "}
          <CrossRef>chapitre 6</CrossRef>, il garde cette place quand il est au
          superlatif.
        </p>
        <p className="italic text-tb-example">
          On dit : la belle femme.
          <span className="mt-0.5 block text-center text-[12px] not-italic text-tb-muted">
            1&emsp;&emsp;2
          </span>
        </p>
        <p className="italic text-tb-example">
          On dira : la plus belle femme.
        </p>
        <p className="italic text-tb-example">
          On dit : la femme sympathique.
        </p>
        <p className="italic text-tb-example">
          On dira : la femme la plus sympathique.
        </p>
        <p>
          De même on dira : « mon plus beau livre », mais : « mon livre le plus
          rare », etc.
        </p>
      </AttentionBox>

      <Subhead text="II. 3 Le superlatif absolu" />
      <Rule>
        Pour marquer le haut degré d&apos;une qualité sans référence à un autre
        élément, on fait précéder l&apos;adjectif qualificatif de l&apos;adverbe{" "}
        <Term>très</Term> ou d&apos;un équivalent (
        <em>fort, bien, extrêmement, tout à fait</em>).
      </Rule>
      <p className="text-[15px] italic text-tb-example">
        <Rich text="Il est *très* pauvre." />
      </p>
      <p className="text-[15px] italic text-tb-example">
        <Rich text="Elle est *fort* belle." />
      </p>
      <p className="text-[15px] italic text-tb-example">
        <Rich text="Ils sont *bien* déçus." />
      </p>
    </TextbookPage>
  );
}

function Page58() {
  return (
    <TextbookPage pageNumber={58} pageNumberSide="left">
      <Subhead text="II. 4 Emploi de « beaucoup »" />
      <Rule>
        <Term>Beaucoup</Term> ne peut pas être employé comme équivalent de{" "}
        <Term>très</Term> ; <em>beaucoup</em> ne peut pas précéder directement
        un adjectif qualificatif.
      </Rule>

      <ExerciseBox title="B. Selon le modèle, mettez l'adjectif au superlatif absolu puis au superlatif relatif.">
        <p className="mb-3 italic text-tb-ink">
          Cet homme est admiré.{" "}
          <span className="not-italic text-tb-cyan">→</span> Cet homme est très
          admiré. <span className="not-italic text-tb-cyan">→</span> C&apos;est
          l&apos;homme le plus admiré.
        </p>
        {exerciseB.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="III. Comparatifs et superlatifs irréguliers" />
      <Example
        centered
        text="Le *meilleur* dentiste de la ville."
        translation="The best dentist in town."
      />
      <Example
        centered
        text="La gourmandise n'est pas son *pire* défaut."
        translation="Greed is not his worst fault."
      />

      <Subhead text="III. 1 Adjectifs irréguliers" />
      <Rule>
        Certains adjectifs ont un comparatif et un superlatif de supériorité
        irréguliers :
      </Rule>
      <Rule>
        – <Term>bon</Term> fait toujours <Term>meilleur</Term> (au comparatif de
        supériorité) et <Term>le meilleur</Term> (au superlatif de
        supériorité). → good → better → best.
      </Rule>
      <Rule>
        – <Term>mauvais</Term> fait <Term>pire</Term> (à côté de{" "}
        <em>plus mauvais</em>) et <Term>le pire</Term> (à côté de{" "}
        <em>le plus mauvais</em>) → bad → worse → worst.
      </Rule>
      <Rule>
        <em>Pire</em> et <em>plus mauvais</em> sont souvent synonymes.{" "}
        <em>Pire</em> (moins courant que <em>plus mauvais</em>) est souvent lié
        à un jugement moral (il signifie alors « plus détestable »), alors que{" "}
        <em>plus mauvais</em> sert davantage à caractériser une réalité
        matérielle.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="Cette solution est *pire* que l'autre." />
      </p>
      <p className="mb-3 text-[15px] italic text-tb-example">
        <Rich text="Le sirop à la cerise est *plus mauvais* que le sirop au citron." />
      </p>
      <Rule>
        – <Term>petit</Term> fait <Term>moindre</Term> (à côté de{" "}
        <em>plus petit</em>) et <Term>le moindre</Term> (à côté de{" "}
        <em>le plus petit</em>) → small → smaller → smallest.
      </Rule>
      <Rule>
        On utilise <em>moindre</em> quand il s&apos;agit d&apos;une idée de
        valeur ou d&apos;importance et <em>plus petit</em> quand il s&apos;agit
        de dimensions physiques ou de taille.
      </Rule>
      <Bilingual
        fr="Il nous punit dès qu'on fait *la moindre* sottise."
        en="He punishes us for the smallest (least, slightest) mistake."
      />
      <Bilingual
        fr="J'occupe *la plus petite* chambre."
        en="I have the smallest room."
      />
    </TextbookPage>
  );
}

function Page59() {
  return (
    <TextbookPage pageNumber={59}>
      <div className="mb-5 overflow-hidden rounded-md border border-tb-cyan/25 bg-tb-exercise/50 px-5 py-3 text-[15px]">
        <div className="grid grid-cols-[7rem_1fr_1fr] items-center gap-x-4">
          <p>– bon</p>
          <p className="italic text-tb-example">meilleur</p>
          <p className="italic text-tb-example">le meilleur</p>
        </div>
        <div className="mt-2 grid grid-cols-[7rem_1fr_1fr] items-center gap-x-4">
          <p>– mauvais</p>
          <p className="italic text-tb-example">
            <span className="text-tb-cyan">{"{"}</span> pire
            <br />
            plus mauvais
          </p>
          <p className="italic text-tb-example">
            <span className="text-tb-cyan">{"{"}</span> le pire
            <br />
            le plus mauvais
          </p>
        </div>
        <div className="mt-2 grid grid-cols-[7rem_1fr_1fr] items-center gap-x-4">
          <p>– petit</p>
          <p className="italic text-tb-example">
            <span className="text-tb-cyan">{"{"}</span> moindre
            <br />
            plus petit
          </p>
          <p className="italic text-tb-example">
            <span className="text-tb-cyan">{"{"}</span> le moindre
            <br />
            le plus petit
          </p>
        </div>
      </div>

      <Subhead text="III. 2 Certains adjectifs ne peuvent avoir ni comparatif ni superlatif." />
      <Rule>
        C&apos;est le cas des adjectifs qui expriment déjà l&apos;idée de
        supériorité, d&apos;excellence ou de point limite (par exemple :{" "}
        <em>supérieur, parfait, excellent, unique, mineur</em>, etc.). Parfois,
        c&apos;est le sens de l&apos;adjectif qui interdit de le mettre au
        comparatif ou au superlatif (par exemple : <em>égal</em>).
      </Rule>
      <Nb>
        <em>supérieur</em> et <em>inférieur</em> ont des compléments introduits
        par la préposition <Term>à</Term>.
      </Nb>
      <p className="mt-1 text-[15px] italic text-tb-example">
        <Rich text="Ce magasin est *supérieur* aux autres." />
      </p>

      <Subhead text="III. 3 Aussi… que / si… que" />
      <Rule>
        On ne confondra pas <Term>aussi (grand) que</Term> et{" "}
        <Term>si (grand) que</Term>.
      </Rule>
      <Rule>
        <em>Aussi (grand) que</em> introduit une comparaison alors que{" "}
        <em>si (grand) que</em> introduit une conséquence.
      </Rule>
      <Bilingual
        fr="Il est *aussi* grand *que* son père."
        en="He is as tall as his father. (comparaison)"
      />
      <Bilingual
        fr="Il est *si* grand *qu'*il doit se baisser pour passer sous la porte."
        en="He is so tall that he must duck to pass through the doorway. (conséquence)"
      />

      <AttentionBox>
        <p>
          Dans ce dernier cas, « that » peut se supprimer en anglais ; « que »
          ne peut pas se supprimer.
        </p>
      </AttentionBox>

      <ExerciseBox title="C. Traduisez.">
        {exerciseC.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page60() {
  return (
    <TextbookPage pageNumber={60} pageNumberSide="left">
      <ExerciseBox title="D. Exprimez la différence des éléments suivants à l'aide d'un adjectif mis au comparatif de supériorité et d'infériorité.">
        {exerciseD.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="E. Transformez les phrases suivantes selon l'exemple ci-dessous :">
        <p className="mb-3 italic text-tb-ink">
          Crésus était le Romain le plus riche.{" "}
          <span className="not-italic text-tb-cyan">→</span> Crésus était le plus
          riche des Romains.
        </p>
        {exerciseE.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="F. À l'aide des éléments suivants, faites une phrase qui utilise un superlatif de supériorité et un complément.">
        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
          {exerciseF.map((item, i) => (
            <ExerciseItem key={item} n={i + 1}>
              {item}
            </ExerciseItem>
          ))}
        </div>
      </ExerciseBox>

      <ExerciseBox title={'G. Complétez à l\'aide de « que » ou « de ».'}>
        {exerciseG.map((item, i) => (
          <ExerciseItem key={item.before} n={i + 1}>
            {item.before} <Blank width="6rem" /> {item.after}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter7() {
  return (
    <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">
      <Page55 />
      <Page56 />
      <Page57 />
      <Page58 />
      <Page59 />
      <Page60 />
    </div>
  );
}
