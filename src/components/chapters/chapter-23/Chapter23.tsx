import {
  ArrowItem,
  AttentionBox,
  ChapterHeader,
  CrossRef,
  Example,
  ExerciseBox,
  ExerciseItem,
  Nb,
  Rich,
  Rule,
  SectionDivider,
  Subhead,
  TextbookPage,
} from "@/components/textbook";
import { Blank } from "@/components/textbook/blanks";
import {
  chapter23,
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
  exerciseJVerbs,
  exerciseK,
  overview,
} from "@/content/chapters/23";
import type { ReactNode } from "react";

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

function WithBlanks({ text }: { text: string }) {
  const parts = text.split("___");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 ? <Blank width="5.5rem" /> : null}
        </span>
      ))}
    </>
  );
}

function FlowList({
  items,
  rows,
  render,
}: {
  items: readonly string[];
  rows: number;
  render?: (item: string) => ReactNode;
}) {
  return (
    <div
      className="grid gap-x-6 gap-y-1 text-[14.5px]"
      style={{ gridTemplateRows: `repeat(${rows}, auto)`, gridAutoFlow: "column" }}
    >
      {items.map((item, i) => (
        <p key={`${item}-${i}`}>
          <span className="mr-1.5">{i + 1}.</span>
          {render ? render(item) : item}
        </p>
      ))}
    </div>
  );
}

function Conj({ title, rows }: { title: string; rows: readonly (readonly [string, string])[] }) {
  return (
    <div className="mx-auto my-3 max-w-md rounded-sm border border-tb-cyan/40 px-4 py-2 text-[14.5px]">
      <p className="mb-1 text-center font-semibold">
        Conjugaison type : <span className="italic text-tb-example">{title}</span>
      </p>
      {rows.map(([a, b]) => (
        <div key={a} className="grid grid-cols-2 italic text-tb-example">
          <span>– {a}</span>
          <span>{b}</span>
        </div>
      ))}
    </div>
  );
}

const presentEr = [
  ["chanter", "je chante", "nous chantons"],
  ["travailler", "je travaille", "nous travaillons"],
  ["filmer", "je filme", "nous filmons"],
] as const;

function Page182() {
  return (
    <TextbookPage pageNumber={182} pageNumberSide="left">
      <ChapterHeader number={chapter23.number} title={chapter23.title} />
      <OverviewBlock />
      <SectionDivider title="I. Remarques générales sur les formes" />
      <Example centered text="Je chante." />
      <Example centered text="Je n'aime pas le thé." />
      <Example centered text="Nous finissons notre devoir." />
      <Example centered text="Nous courons plus vite que vous." />

      <Subhead text="I. 1 Les groupes" />
      <Rule>On classe traditionnellement les verbes français en trois groupes.</Rule>
      <Rule>
        <span className="font-semibold">a. </span>
        Les verbes du 1<sup>er</sup> groupe : les verbes qui ont un infinitif en{" "}
        <Rich text="*-er*" />.
      </Rule>
      <Rule>
        <span className="font-semibold">b. </span>
        Les verbes du 2<sup>e</sup> groupe : les verbes qui ont un infinitif en{" "}
        <Rich text="*-ir*" /> et qui ont au présent une première personne du
        pluriel en <Rich text="*-issons*" />.
      </Rule>
      <Example text="finir → nous finissons" />
      <Rule>
        <span className="font-semibold">c. </span>
        Les verbes du 3<sup>e</sup> groupe : les verbes en{" "}
        <Rich text="*-ir, -re, -oir*" />.
      </Rule>
      <Example text="dormir → nous dormons" />
      <Example text="rendre → nous rendons" />
      <Example text="vouloir → nous voulons" />
    </TextbookPage>
  );
}

function Page183() {
  return (
    <TextbookPage pageNumber={183}>
      <Subhead text="I. 2 Formation du présent" />
      <Rule>
        <span className="font-semibold">a. </span>
        Les verbes du 1<sup>er</sup> groupe font régulièrement leur 1<sup>re</sup>{" "}
        personne du singulier du présent de l&apos;indicatif en ajoutant au
        radical la terminaison <Rich text="*-e*" />.
      </Rule>
      <Example text="Je chante, je danse, je travaille." />
      <Rule>
        Une exception : le verbe irrégulier <Rich text="*aller*" /> → je{" "}
        <Rich text="*vais*" />, tu <Rich text="*vas*" />, il/elle{" "}
        <Rich text="*va*" />, nous allons, vous allez, ils/elles vont.
      </Rule>
      <Rule>
        <span className="font-semibold">b. </span>
        Les verbes des 2<sup>e</sup> et 3<sup>e</sup> groupes font leur première
        personne du singulier avec une terminaison en <Rich text="*-s*" />.
      </Rule>
      <Rule>
        Quelques verbes du 3<sup>e</sup> groupe ont une terminaison en{" "}
        <Rich text="*-x*" />.
      </Rule>
      <Example text="Je finis, je dors, je vends, je veux." />
      <Rule>
        Quelques rares exceptions : offrir → j&apos;<Rich text="*offre*" /> ;
        ouvrir → j&apos;<Rich text="*ouvre*" /> ; couvrir → je{" "}
        <Rich text="*couvre*" /> ; souffrir → je <Rich text="*souffre*" /> ;
        cueillir → je <Rich text="*cueille*" />.
      </Rule>
      <AttentionBox>
        <p>
          Rappelez-vous la règle : « <Rich text="*Je n'aime pas le thé*" /> » (et
          n&apos;aime pas le <em>t</em> !). Il n&apos;y a jamais de -t final à la
          première personne du singulier d&apos;un verbe.
        </p>
        <p>
          Prononciation : la terminaison <Rich text="*-ent*" /> de la 3<sup>e</sup>{" "}
          personne du pluriel ne se prononce pas [ɑ̃]. On distinguera par
          exemple :
        </p>
        <p>
          Ils <Rich text="*négligent*" /> (verbe) et il est négligent [ɑ̃]
          (adjectif).
        </p>
      </AttentionBox>

      <ExerciseBox title="A. Dites à quel groupe appartiennent les verbes suivants.">
        <FlowList items={exerciseA} rows={3} />
      </ExerciseBox>

      <SectionDivider title="II. Les verbes en -er" />
      <Example centered text="Nous nageons trois fois par semaine." />
      <Example centered text="Nous commençons l'étude du présent." />
      <Example centered text="Tu lèves la tête." />
      <Example centered text="Je me rappelle." />

      <Subhead text="II. 1 Présent des verbes en -er" />
      <Rule>
        On forme le présent des verbes en <Rich text="*-er*" /> en ajoutant au
        radical les terminaisons : <Rich text="*-e, -es, -e, -ons, -ez, -ent*" />.
      </Rule>
      <div className="my-2 grid grid-cols-3 gap-x-4 pl-2 text-[14.5px] italic text-tb-example">
        {presentEr.map(([inf, sg, pl]) => (
          <p key={inf} className="contents">
            <span className="not-italic text-tb-ink">{inf}</span>
            <span>{sg}</span>
            <span>{pl}</span>
          </p>
        ))}
      </div>
    </TextbookPage>
  );
}

function Page184() {
  return (
    <TextbookPage pageNumber={184} pageNumberSide="left">
      <Subhead text="II. 2 Modifications dans le radical" />
      <ArrowItem>
        Les verbes en <Rich text="*-ger*" /> et en <Rich text="*-cer*" /> se
        terminent en <Rich text="*-geons*" /> et <Rich text="*-çons*" /> à la 1
        <sup>re</sup> personne du pluriel.
      </ArrowItem>
      <Example text="Nous nageons trois fois par semaine." />
      <Example text="Nous commençons l'étude du présent." />
      <ArrowItem>Notez aussi :</ArrowItem>
      <Example text="manger → nous mangeons ;" />
      <Example text="ranger → nous rangeons ;" />
      <Example text="placer → nous plaçons ;" />
      <Example text="rincer → nous rinçons." />

      <Subhead text="II. 3 Doublement de la consonne" />
      <ArrowItem>
        Les verbes en <Rich text="*-eler*" /> et en <Rich text="*-eter*" />{" "}
        redoublent la consonne <Rich text="*l*" /> ou <Rich text="*t*" /> devant
        un <Rich text="*e muet*" /> (c&apos;est-à-dire à toutes les personnes
        sauf aux 1<sup>re</sup> et 2<sup>e</sup> personnes du pluriel).
      </ArrowItem>
      <Example text="Je jette ce vieux journal. Nous jetons les papiers inutiles." />
      <Example text="Elle s'appelle Charlotte. Comment vous appelez-vous ?" />
      <Conj
        title="jeter"
        rows={[
          ["je jette", "nous jetons"],
          ["tu jettes", "vous jetez"],
          ["il/elle jette", "ils/elles jettent"],
        ]}
      />
      <ArrowItem>
        Notez la différence de prononciation : je <Rich text="*jette*" /> [ɛ] ;
        nous <Rich text="*jetons*" /> [ə].
      </ArrowItem>
      <ArrowItem>
        <span className="font-semibold">Exceptions : </span>
        Quelques verbes prennent un <Rich text="*accent grave*" /> sur le radical
        au lieu de redoubler le <em>l</em> ou le <em>t</em> :
      </ArrowItem>
      <Example text="geler (et ses composés) : je gèle, nous gelons ;" />
      <Example text="peler : je pèle, nous pelons ;" />
      <Example text="acheter : j'achète, nous achetons." />

      <Subhead text="II. 4 Présence d'un accent grave : è" />
      <Rule>
        Les verbes qui ont un <Rich text="*e*" /> ou un <Rich text="*é*" /> à la
        dernière syllabe du radical le changent en <Rich text="*è*" /> devant une
        syllabe muette de terminaison (c&apos;est-à-dire à toutes les personnes
        sauf aux 1<sup>re</sup> et 2<sup>e</sup> personnes du pluriel).
      </Rule>
      <Example text="lever → je lève, nous levons. Tu lèves la tête." />
      <Example text="répéter → je répète, nous répétons. Il répète la phrase." />
      <Conj
        title="mener"
        rows={[
          ["je mène", "nous menons"],
          ["tu mènes", "vous menez"],
          ["il/elle mène", "ils/elles mènent"],
        ]}
      />
      <Nb>
        les verbes mentionnés en II. 3 (sauf les trois exceptions) ne sont pas
        concernés par cette règle.
      </Nb>
    </TextbookPage>
  );
}

function Page185() {
  return (
    <TextbookPage pageNumber={185}>
      <Subhead text="II. 5 Changement de radical selon la personne" />
      <Rule>
        Les verbes en <Rich text="*-yer*" /> (essayer, envoyer, appuyer, etc.)
        ont un radical en <Rich text="*i*" /> aux trois personnes du singulier et
        à la 3<sup>e</sup> personne du pluriel mais gardent le{" "}
        <Rich text="*y*" /> aux 1<sup>re</sup> et 2<sup>e</sup> personnes du
        pluriel.
      </Rule>
      <Conj
        title="envoyer"
        rows={[
          ["j'envoie", "nous envoyons"],
          ["tu envoies", "vous envoyez"],
          ["il/elle envoie", "ils/elles envoient"],
        ]}
      />
      <AttentionBox>
        <p className="font-bold tracking-wide text-tb-cyan">FAULTES À ÉVITER !</p>
        <p>
          <span className="font-semibold">a. </span>
          Les verbes en <Rich text="*-ier*" /> gardent toujours le{" "}
          <Rich text="*i*" /> du radical, même devant une terminaison muette.
        </p>
        <Example text="J'étudie le français. Il mendie son pain." />
        <p>
          <span className="font-semibold">b. </span>
          N&apos;oubliez pas le <Rich text="*e muet*" /> de la terminaison des
          verbes en <Rich text="*-er*" /> (même quand le radical se termine par
          un <em>d</em> ou un <em>t</em>).
        </p>
        <Example text="Je chante, il transporte (et non pas *il transport)." />
        <p>
          <span className="font-semibold">c. </span>
          Ne confondez pas « <Rich text="*pleurer*" /> » et «{" "}
          <Rich text="*pleuvoir*" /> ».
        </p>
        <Example text="Il pleure parce qu'il s'est fait mal." />
        <Example text="Il pleut à verse ; n'oublie pas ton parapluie." />
      </AttentionBox>

      <ExerciseBox title="B. Donnez la 1re personne du pluriel des verbes suivants.">
        <FlowList items={exerciseB} rows={4} />
      </ExerciseBox>

      <SectionDivider title="III. Les verbes en -ir du 2e groupe" />
      <Example centered text="Nous choisissons un bon exercice." />
      <Example centered text="Les enfants grandissent." />

      <Subhead text="III. 1 Particularité du 2e groupe" />
      <ArrowItem>
        Les verbes du 2<sup>e</sup> groupe ont la particularité d&apos;avoir une
        terminaison à <Rich text="*double i*" /> aux trois personnes du pluriel.
      </ArrowItem>
      <Conj
        title="finir"
        rows={[
          ["je finis", "nous finissons"],
          ["tu finis", "vous finissez"],
          ["il/elle finit", "ils/elles finissent"],
        ]}
      />
    </TextbookPage>
  );
}

function Page186() {
  return (
    <TextbookPage pageNumber={186} pageNumberSide="left">
      <ArrowItem>
        Il est important de bien distinguer ces verbes car le{" "}
        <Rich text="*radical*" /> se retrouve au participe présent (finissant) et
        à l&apos;imparfait (je finissais).
      </ArrowItem>

      <Subhead text="III. 2 Comment distinguer les verbes en -ir du 2e et du 3e groupe ?" />
      <Rule>
        Il n&apos;y a pas de règle absolue mais les verbes en{" "}
        <Rich text="*-ir*" /> qui <Rich text="*marquent une transformation*" /> et
        qui tirent leur origine d&apos;un adjectif sont souvent du 2<sup>e</sup>{" "}
        groupe.
      </Rule>
      <div className="my-2 grid max-w-lg grid-cols-2 gap-x-8 pl-4 text-[15px] italic text-tb-example">
        <p>grand → grandir</p>
        <p>riche → s&apos;enrichir</p>
        <p>blanc → blanchir</p>
        <p>vieux → vieillir</p>
      </div>

      <ExerciseBox title={'C. Distinguez les verbes du 2e groupe (type « finir, finissons ») des verbes du 3e groupe (type « courir, courons »).'}>
        <FlowList items={exerciseC} rows={3} />
      </ExerciseBox>

      <SectionDivider title="IV. Les verbes du 3e groupe" />
      <Example centered text="Pourquoi courir ? Où courons-nous ?" />
      <Example centered text="Je le veux et je le prends." />

      <Subhead text="IV. 1 Verbes du 3e groupe" />
      <Rule>
        Les verbes du 3<sup>e</sup> groupe comprennent les verbes en{" "}
        <Rich text="*-ir*" /> (1<sup>re</sup> personne du pluriel en{" "}
        <Rich text="*-ons*" /> ; type : courir/courons), ainsi que les verbes en{" "}
        <Rich text="*-oir*" /> ou en <Rich text="*-re*" />.
      </Rule>

      <Subhead text="IV. 2 Particularités au présent" />
      <Rule>
        Si l&apos;on fait exception des auxiliaires <Rich text="*avoir*" /> et{" "}
        <Rich text="*être*" /> et de quelques verbes (par exemple : ouvrir →
        j&apos;ouvre ; couvrir → je couvre ; offrir → j&apos;offre), on peut
        remarquer qu&apos;au présent de l&apos;indicatif :
      </Rule>
      <Rule>
        <span className="font-semibold">a. </span>
        ces verbes ont généralement aux 1<sup>re</sup> et aux 2<sup>e</sup>{" "}
        personnes du singulier des formes identiques qui se terminent par{" "}
        <Rich text="*-s*" /> ou, assez rarement, par <Rich text="*-x*" /> :
      </Rule>
      <Example text="dormir → je dors/tu dors" />
      <Example text="valoir → je vaux/tu vaux" />
      <Example text="vouloir → je veux/tu veux" />
      <Rule>
        <span className="font-semibold">b. </span>
        ces verbes se terminent à la 3<sup>e</sup> personne du singulier par un{" "}
        <Rich text="*-t*" /> ou, plus rarement, par un <Rich text="*-d*" />.
      </Rule>
      <Example text="peindre → il peint ; plaindre → il plaint ; résoudre → il résout" />
      <Example text="répondre → il répond ; prendre → il prend" />
    </TextbookPage>
  );
}

const heart = [
  ["j'ai", "je suis", "je prends", "je peux", "je veux"],
  ["tu as", "tu es", "tu prends", "tu peux", "tu veux"],
  ["il/elle a", "il/elle est", "il/elle prend", "il/elle peut", "il/elle veut"],
  ["nous avons", "nous sommes", "nous prenons", "nous pouvons", "nous voulons"],
  ["vous avez", "vous êtes", "vous prenez", "vous pouvez", "vous voulez"],
  ["ils/elles ont", "ils/elles sont", "ils/elles prennent", "ils/elles peuvent", "ils/elles veulent"],
];

const heart2 = [
  ["je sais", "j'aperçois", "je deviens"],
  ["nous savons", "nous apercevons", "nous devenons"],
  ["ils savent", "elles aperçoivent", "ils deviennent"],
];

function Page187() {
  return (
    <TextbookPage pageNumber={187}>
      <Subhead text="IV. 3 À apprendre par cœur !" />
      <ArrowItem>
        La plupart de ces verbes sont irréguliers et changent de radical ; il
        faut donc les apprendre par cœur ou se référer à un tableau de
        conjugaison.
      </ArrowItem>
      <ArrowItem>Notez bien les conjugaisons suivantes :</ArrowItem>
      <div className="my-3 overflow-x-auto text-[13px] italic leading-relaxed text-tb-example">
        {heart.map((row) => (
          <div key={row[0]} className="grid grid-cols-5 gap-x-2">
            {row.map((cell) => (
              <span key={cell}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="my-3 grid max-w-lg grid-cols-3 gap-x-3 text-[14px] italic text-tb-example">
        {heart2.map((row) =>
          row.map((cell) => <span key={cell}>{cell}</span>),
        )}
      </div>
      <ArrowItem>
        Notez aussi que les verbes <Rich text="*dire*" /> et{" "}
        <Rich text="*faire*" /> sont irréguliers. Ils font à la 1<sup>re</sup>{" "}
        personne du pluriel : nous disons, nous faisons [ə] et à la 2<sup>e</sup>{" "}
        personne du pluriel : vous dites, vous faites.
      </ArrowItem>

      <ExerciseBox title="D. Conjuguez à la 1re personne du singulier :">
        <p>{exerciseD}</p>
      </ExerciseBox>
      <ExerciseBox title="E. Conjuguez à la 1re personne du pluriel :">
        <p>{exerciseE}</p>
      </ExerciseBox>
      <ExerciseBox title="F. Conjuguez à la 3e personne du pluriel :">
        <p>{exerciseF}</p>
      </ExerciseBox>

      <SectionDivider title="V. Emplois" />
      <Example centered text="Ne la dérangez pas. Elle est en train de dormir." />
      <Example centered text="Elle dort jusqu'à sept heures." />

      <Subhead text="V. 1 Deux exceptions notables" />
      <Rule>
        Les emplois du présent en français correspondent généralement aux emplois
        anglais. Deux exceptions cependant sont à noter :
      </Rule>
      <Rule>
        <span className="font-semibold">a. </span>
        en français, la <Rich text="*subordonnée de temps*" /> est au{" "}
        <Rich text="*futur*" /> quand le verbe de la proposition principale est au
        futur (<CrossRef>chapitre 28, III. 1, p. 215</CrossRef>).
      </Rule>
      <Example
        text="Je le lui donnerai quand je le verrai."
        translation="I will give it to him when I see him."
      />
    </TextbookPage>
  );
}

function Page188() {
  return (
    <TextbookPage pageNumber={188} pageNumberSide="left">
      <Rule>
        <span className="font-semibold">b. </span>
        en français, dans le cas où une action commencée dans le passé aboutit à
        un fait présent, on utilise le présent (
        <CrossRef>chapitre 42, IV. 1, p. 314</CrossRef>).
      </Rule>
      <Example
        text="J'attends depuis trois heures."
        translation="I have been waiting for three hours."
      />

      <Subhead text="V. 2 Être en train de + infinitif" />
      <ArrowItem>
        Lorsqu&apos;on veut <Rich text="*insister sur le présent en cours*" />, on
        utilise la périphrase <Rich text="*être en train de*" /> suivie de
        l&apos;infinitif pour traduire la forme anglaise{" "}
        <Rich text="*to be + -ing*" />.
      </ArrowItem>
      <Example text="Je suis en train de travailler." translation="I am working." />
      <ArrowItem>
        Dans les autres cas, la formule anglaise se traduit par un simple présent.
      </ArrowItem>

      <ExerciseBox title="G. Donnez l'infinitif des verbes suivants et dites à quel groupe ils appartiennent.">
        <div
          className="grid gap-x-8 gap-y-1"
          style={{ gridTemplateRows: "repeat(3, auto)", gridAutoFlow: "column" }}
        >
          {exerciseG.map((pair, i) => (
            <p key={pair[0]} className="text-[14.5px]">
              <span className="mr-1.5">{i + 1}.</span>
              {pair[0]}
              <br />
              {pair[1]}
            </p>
          ))}
        </div>
      </ExerciseBox>

      <ExerciseBox title="H. Complétez par -e, -is ou -s les verbes suivants (présent de l'indicatif) et dites à quel groupe ils appartiennent.">
        <FlowList items={exerciseH} rows={5} render={(item) => <WithBlanks text={item} />} />
      </ExerciseBox>

      <ExerciseBox title="I. Donnez la première personne du pluriel des verbes suivants.">
        <FlowList items={exerciseI} rows={5} />
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page189() {
  return (
    <TextbookPage pageNumber={189}>
      <ExerciseBox title={`J. Complétez les phrases suivantes en choisissant un verbe de la liste ci-jointe et en le mettant à la forme correcte : ${exerciseJVerbs}`}>
        {exerciseJ.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            <WithBlanks text={item} />
          </ExerciseItem>
        ))}
      </ExerciseBox>
      <ExerciseBox title="K. Traduisez.">
        {exerciseK.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter23() {
  return (
    <div className="space-y-8 py-8">
      <Page182 />
      <Page183 />
      <Page184 />
      <Page185 />
      <Page186 />
      <Page187 />
      <Page188 />
      <Page189 />
    </div>
  );
}
