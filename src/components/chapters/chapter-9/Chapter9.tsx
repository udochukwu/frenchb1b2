import {
  Blank,
  ChapterHeader,
  Example,
  ExerciseBox,
  ExerciseItem,
  Rich,
  Rule,
  SectionDivider,
  SquareItem,
  Subhead,
  Term,
  TextbookPage,
} from "@/components/textbook";
import {
  acuteEAdjectives,
  acuteEAdverbs,
  antPairs,
  chapter9,
  eMasculinePairs,
  entPairs,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseD,
  exerciseE,
  exerciseF,
  exerciseG,
  exerciseH,
  exerciseI,
  exerciseJ,
  formationChains,
  overview,
  vowelExceptions,
} from "@/content/chapters/09";

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

function Pair({ adj, adv }: { adj: string; adv: string }) {
  return (
    <p className="text-[14.5px] italic text-tb-example">
      {adj} → <Rich text={`*${adv}*`} />
    </p>
  );
}

function Page68() {
  return (
    <TextbookPage pageNumber={68} pageNumberSide="left">
      <ChapterHeader number={chapter9.number} title={chapter9.title} />
      <OverviewBlock />

      <SectionDivider title="I. Adverbes en -ment" />

      <Example
        centered
        text="*Heureusement*, je parle français *couramment*."
      />
      <Example centered text="Elle m'a *gentiment* aidé." />

      <Subhead text="I. 1 Formation" />
      <SquareItem>
        <p>
          Beaucoup d&apos;adverbes de manière se forment à l&apos;aide de
          l&apos;adjectif et du suffixe <Term>-ment</Term>. Quand l&apos;adjectif
          masculin se termine par une consonne, on ajoute{" "}
          <Term>-ment</Term> à la forme féminine de l&apos;adjectif.
        </p>
      </SquareItem>
      <div className="mb-4 space-y-0.5 pl-5 text-[14.5px] italic text-tb-example">
        {formationChains.map((chain) => (
          <p key={chain}>
            <Rich text={chain} />
          </p>
        ))}
      </div>

      <SquareItem>
        <p>Quelques exceptions à retenir :</p>
      </SquareItem>
      <p className="mb-2 pl-5 text-[15px] text-tb-ink">
        <span className="font-semibold">a. </span>
        <em>gentil</em> devient{" "}
        <em className="text-tb-example">
          <Rich text="*gentiment*" />
        </em>{" "}
        ; <em>bref</em> devient{" "}
        <em className="text-tb-example">
          <Rich text="*brièvement*" />
        </em>
        .
      </p>
      <p className="mb-4 pl-5 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        {acuteEAdjectives} prennent un <em>é</em> devant le suffixe :{" "}
        <em className="text-tb-example">
          <Rich text={acuteEAdverbs} />
        </em>
        .
      </p>

      <Subhead text="I. 2 Particularités" />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        Quand l&apos;adjectif masculin se termine par une voyelle, on forme
        l&apos;adverbe de manière en ajoutant le suffixe <Term>-ment</Term> à
        la forme masculine de l&apos;adjectif.
      </p>
      <div className="mb-2 space-y-0.5 pl-5 text-[14.5px] italic text-tb-example">
        <p>
          agréable → <Rich text="*agréablement*" />
        </p>
        <p>
          poli → <Rich text="*poliment*" />
        </p>
      </div>
    </TextbookPage>
  );
}

function Page69() {
  return (
    <TextbookPage pageNumber={69}>
      <SquareItem>
        <p>Quelques exceptions à retenir :</p>
      </SquareItem>
      <div className="mb-4 grid max-w-lg grid-cols-2 gap-x-8 pl-5">
        <Pair adj={vowelExceptions[0].adj} adv={vowelExceptions[0].adv} />
        <Pair adj={vowelExceptions[2].adj} adv={vowelExceptions[2].adv} />
        <Pair adj={vowelExceptions[1].adj} adv={vowelExceptions[1].adv} />
      </div>

      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        Quelques adjectifs qui se terminent par un <em>e</em> au masculin
        prennent un accent aigu devant le suffixe <Term>-ment</Term>.
      </p>
      <div className="mb-4 grid max-w-lg grid-cols-2 gap-x-8 pl-5">
        <div className="space-y-0.5">
          {eMasculinePairs.slice(0, 3).map(([adj, adv]) => (
            <Pair key={adj} adj={adj} adv={adv} />
          ))}
        </div>
        <div className="space-y-0.5">
          {eMasculinePairs.slice(3).map(([adj, adv]) => (
            <Pair key={adj} adj={adj} adv={adv} />
          ))}
        </div>
      </div>

      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">c. </span>
        Les adjectifs qui se terminent par <Term>-ent</Term> forment des
        adverbes en <Term>-emment</Term>.
      </p>
      <div className="mb-4 space-y-0.5 pl-5">
        {entPairs.map(([adj, adv]) => (
          <Pair key={adj} adj={adj} adv={adv} />
        ))}
      </div>

      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">d. </span>
        Les adjectifs qui se terminent par <Term>-ant</Term> forment des
        adverbes en <Term>-amment</Term>.
      </p>
      <div className="mb-6 grid max-w-lg grid-cols-2 gap-x-8 pl-5">
        {antPairs.map(([adj, adv]) => (
          <Pair key={adj} adj={adj} adv={adv} />
        ))}
      </div>

      <ExerciseBox title="A. Donnez l'adverbe qui correspond aux adjectifs suivants.">
        <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          {exerciseA.map((item, i) => (
            <ExerciseItem key={item} n={i + 1}>
              {item}
            </ExerciseItem>
          ))}
        </div>
      </ExerciseBox>

      <SectionDivider title="II. Autres adverbes de manière et locutions adverbiales" />

      <Example centered text="Ne parlez pas si *fort*." />
      <Example centered text="Elle l'a fait *avec réticence*." />

      <Rule>
        Tous les adverbes de manière ne se terminent pas par{" "}
        <Term>-ment</Term>.
      </Rule>

      <Subhead text="II. 1 Locutions adverbiales" />
      <Rule>
        On ne peut pas toujours former un adverbe en <Term>-ment</Term> à
        partir d&apos;un adjectif (il faut faire attention en particulier aux
        adjectifs formés à partir d&apos;un participe). Dans ce cas, on fait
        appel à une locution adverbiale.
      </Rule>
      <SquareItem>
        <p>On utilise des formules comme :</p>
      </SquareItem>
      <div className="mb-2 space-y-0.5 pl-5 text-[14.5px] italic text-tb-example">
        <p>
          blessant → <Rich text="*d'une manière blessante*" />
        </p>
        <p>
          attrayant → <Rich text="*d'une façon attrayante*" />
        </p>
        <p>
          convaincu → <Rich text="*d'un air convaincu*" />
        </p>
      </div>
    </TextbookPage>
  );
}

function Page70() {
  return (
    <TextbookPage pageNumber={70} pageNumberSide="left">
      <SquareItem>
        <p>
          On peut aussi avoir recours à des expressions idiomatiques comme :{" "}
          <em className="text-tb-example">
            <Rich text="*à la légère*, *à son insu*" />
          </em>
          , etc.
        </p>
      </SquareItem>
      <SquareItem>
        <p>
          On peut aussi parfois utiliser un nom abstrait précédé de la
          préposition <Term>avec</Term> :
        </p>
      </SquareItem>
      <div className="mb-4 space-y-1 pl-5 text-[14.5px] text-tb-ink">
        <p>
          <em>charmingly</em> :{" "}
          <em className="text-tb-example">
            <Rich text="*d'une manière charmante*, *avec charme*" />
          </em>
        </p>
        <p>
          <em>indignantly</em> :{" "}
          <em className="text-tb-example">
            <Rich text="*avec indignation*" />
          </em>
        </p>
        <p>
          <em>urgently</em> :{" "}
          <em className="text-tb-example">
            <Rich text="*de toute urgence*, *d'une façon urgente*" />
          </em>
        </p>
      </div>

      <Subhead text="II. 2 Adverbes à forme simple" />
      <SquareItem>
        <p>
          Certains adverbes de manière ont, en français, une forme simple qui
          ne se termine pas par le suffixe <Term>-ment</Term> :
        </p>
      </SquareItem>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        <Rich text="*bien*, *mal*, *ensemble*, *vite*" />
      </p>
      <SquareItem>
        <p>
          Certains adverbes de manière ont une forme simple, identique à celle
          de l&apos;adjectif masculin singulier.
        </p>
      </SquareItem>
      <p className="mb-2 pl-5 text-[15px] italic text-tb-example">
        <Rich text="Chanter *haut*, parler *fort*, sentir *mauvais*" />, etc.
      </p>
      <Rule>
        Dans ce cas, l&apos;adverbe, comme tous les adverbes, reste{" "}
        <Term>invariable</Term>.
      </Rule>

      <Subhead text="II. 3 Fautes à éviter" />
      <p className="mb-3 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        <Term>Vite</Term> est déjà un adverbe ; on ne peut donc pas dire{" "}
        <em>*« vitement »</em>.
      </p>

      <p className="mb-1 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        On ne dit pas en français <em>*« possiblement »</em> pour traduire
        « possibly ». On utilise, selon le contexte,{" "}
        <Term>probablement</Term>, <Term>peut-être</Term> ou la tournure{" "}
        <Term>il se peut que</Term> + subjonctif.
      </p>
      <p className="mb-1 text-[15px] italic text-tb-ink">
        This is possibly the truth.{" "}
        <span className="text-tb-example">
          Il se peut que ce soit la vérité.
        </span>
      </p>

      <p className="mb-1 mt-3 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">c. </span>
        On utilise <Term>soudain</Term> et non <em>*soudainement</em> quand on
        veut signifier <em>brusquement</em>, <em>tout à coup</em>.
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        <Rich text="*Soudain* un cri déchira le silence." />
      </p>

      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">d. </span>
        Il ne faut pas confondre <Term>adjectif</Term> et{" "}
        <Term>adverbe</Term>.
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        – <Term>Vite</Term> est un adverbe. Il ne peut pas être attribut
        d&apos;un sujet, c&apos;est-à-dire qu&apos;il ne peut pas modifier un
        nom ni un pronom personnel qui seraient sujets des verbes{" "}
        <em>être, devenir, paraître, sembler</em>.
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">
        On ne peut pas dire : <em>*« Je suis vite »</em> (I am quick.)
      </p>
      <p className="mb-3 text-[15px] text-tb-ink">
        On doit dire : « Je suis <Term>rapide</Term> » (adjectif) ou : « Je
        vais <Term>vite</Term> » (adverbe).
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">
        – On ne dit pas : <em>*« Cette information est assez. »</em> (This
        information is enough.)
      </p>
      <p className="mb-3 text-[15px] text-tb-ink">
        On doit dire : « Cette information est <Term>suffisante</Term>. »
      </p>
      <p className="mb-1 text-[15px] leading-[1.65] text-tb-ink">
        – De même, on ne confondra pas <Term>bon/meilleur</Term> et{" "}
        <Term>bien/mieux</Term>.
      </p>
      <p className="text-[15px] leading-[1.65] text-tb-ink">
        On traduira : <em>He sings better than I do</em> par : « Il chante{" "}
        <Term>mieux</Term> que moi » (<em>meilleur</em>, adjectif, serait une
        faute).
      </p>
    </TextbookPage>
  );
}

function Page71() {
  return (
    <TextbookPage pageNumber={71}>
      <ExerciseBox title="B. Traduisez.">
        {exerciseB.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="C. Remplacez les mots soulignés par un adverbe.">
        <p className="mb-2 text-[14.5px] italic text-tb-ink">
          Il parle avec <u>douceur</u>. → Il parle{" "}
          <span className="text-tb-example">doucement</span>.
        </p>
        {exerciseC.map((item, i) => (
          <ExerciseItem key={item.underline} n={i + 1}>
            {item.before}
            <u>{item.underline}</u>
            {item.after}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="D. Remplacez le nom et l'adjectif soulignés par un adverbe.">
        <p className="mb-2 text-[14.5px] italic text-tb-ink">
          Il parle <u>d&apos;une voix douce</u>. → Il parle{" "}
          <span className="text-tb-example">doucement</span>.
        </p>
        {exerciseD.map((item, i) => (
          <ExerciseItem key={item.underline} n={i + 1}>
            {item.before}
            <u>{item.underline}</u>
            {item.after}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page72() {
  return (
    <TextbookPage pageNumber={72} pageNumberSide="left">
      <ExerciseBox title="E. Complétez les phrases suivantes de façon logique par un adverbe.">
        {exerciseE.map((item, i) => (
          <ExerciseItem key={item.before} n={i + 1}>
            {item.before} <Blank width="7rem" /> {item.after}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="F. Traduisez.">
        {exerciseF.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="G. Traduisez.">
        {exerciseG.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="H. Traduisez les adverbes suivants.">
        <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          {exerciseH.map((item, i) => (
            <ExerciseItem key={item} n={i + 1}>
              {item}
            </ExerciseItem>
          ))}
        </div>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page73() {
  return (
    <TextbookPage pageNumber={73}>
      <ExerciseBox title="I. Trouvez une locution adverbiale correspondant aux adverbes suivants.">
        <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          {exerciseI.map((item, i) => (
            <ExerciseItem key={item} n={i + 1}>
              {item}
            </ExerciseItem>
          ))}
        </div>
      </ExerciseBox>

      <ExerciseBox title="J. Traduisez à l'aide d'une locution adverbiale.">
        {exerciseJ.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter9() {
  return (
    <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">
      <Page68 />
      <Page69 />
      <Page70 />
      <Page71 />
      <Page72 />
      <Page73 />
    </div>
  );
}
