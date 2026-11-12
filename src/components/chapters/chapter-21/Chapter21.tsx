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
import { Blank } from "@/components/textbook/blanks";
import {
  chapter21,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseD,
  exerciseE,
  exerciseF,
  exerciseFVerbs,
  exerciseG,
  exerciseHVerbs,
  exerciseI,
  overview,
} from "@/content/chapters/21";

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
              <Rich text={line.fr} />
              {"en" in line ? (
                <span className="not-italic text-tb-muted"> {line.en}</span>
              ) : null}
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
          {i < parts.length - 1 ? <Blank width="6.5rem" /> : null}
        </span>
      ))}
    </>
  );
}

function Items({ items }: { items: readonly string[] }) {
  return (
    <>
      {items.map((item, i) => (
        <ExerciseItem key={item} n={i + 1}>
          <WithBlanks text={item} />
        </ExerciseItem>
      ))}
    </>
  );
}

const essential = [
  ["s'abstenir (de)", "s'écrire", "se repentir (de)", "s'obstiner (à)"],
  ["se refuser", "s'évader (de)", "s'écrouler", "se suicider"],
  ["s'emparer (de)", "se méfier (de)", "s'évanouir", ""],
];

const getList = [
  ["to get married", "se marier"],
  ["to get dressed", "s'habiller"],
  ["to get discouraged", "se décourager"],
  ["to get used to", "s'habituer"],
  ["to get angry at", "se fâcher contre"],
  ["to get lost", "se perdre"],
  ["to get upset (irritated)", "s'énerver"],
  ["to get up", "se lever"],
];

function Page166() {
  return (
    <TextbookPage pageNumber={166} pageNumberSide="left">
      <ChapterHeader number={chapter21.number} title={chapter21.title} />
      <OverviewBlock />
      <SectionDivider title="I. Définition et formes" />
      <Example centered text="Je me demande si vous vous amusez bien." />

      <Subhead text="I. 1 Qu'est-ce qu'un verbe pronominal ?" />
      <ArrowItem>
        On appelle <Rich text="*verbes pronominaux*" /> les verbes qui ont comme{" "}
        <Rich text="*complément*" /> un <Rich text="*pronom*" /> qui renvoie au
        sujet. Le pronom objet est à la <Rich text="*même personne*" /> et au{" "}
        <Rich text="*même nombre*" /> (singulier ou pluriel) que le sujet et
        prend les formes suivantes :
      </ArrowItem>
      <div className="my-3 grid grid-cols-1 gap-x-8 pl-6 text-[15px] italic text-tb-example sm:grid-cols-2">
        <p>je me lave</p>
        <p>nous nous lavons</p>
        <p>tu te laves</p>
        <p>vous vous lavez</p>
        <p>il/elle/on se lave</p>
        <p>ils/elles se lavent</p>
      </div>
      <ArrowItem>
        On notera que le pronom complément d&apos;objet est toujours{" "}
        <Rich text="*se*" /> (<Rich text="*s'*" /> devant une voyelle ou un h
        muet).
      </ArrowItem>

      <Subhead text="I. 2 Emploi du pronom personnel" />
      <ArrowItem>
        D&apos;une façon générale, le pronom personnel objet suit les règles du
        pronom quant à sa place dans la phrase (
        <CrossRef>chapitre 10, V. 1 et V. 2, p. 81</CrossRef>).
      </ArrowItem>
      <ArrowItem>
        À <Rich text="*l'impératif*" />, le pronom sujet n&apos;étant pas
        exprimé, seul apparaît le <Rich text="*pronom complément*" />.
      </ArrowItem>
      <Example text="Amusons-nous ; levez-vous." />
      <Example text="Ne te perds pas." />
    </TextbookPage>
  );
}

function Page167() {
  return (
    <TextbookPage pageNumber={167}>
      <ExerciseBox title="A. Complétez les verbes pronominaux par le pronom qui convient.">
        <Items items={exerciseA} />
      </ExerciseBox>

      <SectionDivider title="II. Fonctions" />
      <Example centered text="Je me lave." />
      <Example centered text="Ils se battent." />
      <Example centered text="Elle s'en va." />

      <Subhead text="II. 1 Verbes réfléchis" />
      <Rule>
        Les verbes pronominaux peuvent indiquer que l&apos;action du sujet{" "}
        <Rich text="*porte sur le sujet lui-même*" />. On les appelle alors
        verbes réfléchis.
      </Rule>
      <Example text="Je me lave ; il se rase ; etc." />

      <Subhead text="II. 2 Verbes réciproques" />
      <Rule>
        Parfois, quand le sujet est au pluriel, les verbes pronominaux indiquent
        une <Rich text="*action réciproque*" /> : un individu A agit sur un
        individu B et l&apos;individu B agit de la même façon sur l&apos;individu
        A.
      </Rule>
      <Example text="Ils se battent ; elles se téléphonent ; etc." />

      <Subhead text="II. 3 Verbes essentiellement pronominaux" />
      <ArrowItem>
        Quelques verbes ne peuvent s&apos;employer qu&apos;avec un pronom objet
        de la même personne que le sujet. On les appelle des verbes{" "}
        <Rich text="*essentiellement pronominaux*" />.
      </ArrowItem>
      <Example text="Ils s'évanouissent ; elle s'en va ; etc." />
      <ArrowItem>Parmi ces verbes on notera :</ArrowItem>
      <div className="mb-2 grid grid-cols-2 gap-x-4 gap-y-1 pl-6 text-[14.5px] sm:grid-cols-4">
        {essential.flat().map((verb) =>
          verb ? <p key={verb}>– {verb}</p> : <p key="empty" />,
        )}
      </div>
    </TextbookPage>
  );
}

function Page168() {
  return (
    <TextbookPage pageNumber={168} pageNumberSide="left">
      <SectionDivider title="III. Le participe passé des verbes pronominaux" />
      <Example centered text="Elle s'est lavée." />
      <Example centered text="Elle s'est lavé les mains." />

      <Subhead text="III. 1 Choix de l'auxiliaire aux temps composés" />
      <Rule>
        Aux temps composés, les verbes pronominaux se construisent toujours avec
        l&apos;auxiliaire <Rich text="*être*" />.
      </Rule>
      <Example text="Elles se seraient amusées, s'il y avait eu un bon orchestre." />
      <Example text="Dès qu'elle se sera habillée, nous partirons." />
      <Example text="Ils se sont écrit souvent." />

      <Subhead text="III. 2 Accord du participe passé" />
      <Rule>
        Le participe passé s&apos;accorde avec le pronom complément d&apos;<Rich text="*objet direct*" />{" "}
        placé <Rich text="*avant l'auxiliaire*" />.
      </Rule>
      <Example text="Elle s'est lavée. (s' : objet direct, car on dit laver quelqu'un, quelque chose)" />
      <Example text="Ils se sont tus. (se : objet direct, car on dit taire quelqu'un, quelque chose)" />

      <Subhead text="III. 3 Absence d'accord" />
      <Rule>
        Si le pronom complément d&apos;objet est <Rich text="*indirect*" />, on{" "}
        <Rich text="*ne fait pas*" /> l&apos;accord avec celui-ci.
      </Rule>
      <Example text="Ils se sont plu. (se : objet indirect, car on dit plaire à quelqu'un)" />
      <Example text="Elle s'est lavé les mains. (s' : objet indirect, l'objet direct est les mains)." />

      <Subhead text="III. 4 Accord des verbes essentiellement pronominaux" />
      <Rule>
        Dans le cas des verbes essentiellement pronominaux (
        <CrossRef>II. 3, page 167</CrossRef>), l&apos;accord se fait{" "}
        <Rich text="*avec le sujet*" />.
      </Rule>
      <Example text="Certains se sont abstenus de voter." />
      <p className="text-[14.5px] text-tb-cyan">
        <CrossRef>chapitre 27, IV. 1 et IV. 2, p. 209-210</CrossRef>
      </p>

      <ExerciseBox title="B. Mettez le participe passé à la forme qui convient.">
        <Items items={exerciseB} />
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page169() {
  return (
    <TextbookPage pageNumber={169}>
      <SectionDivider title="IV. Différences entre l'anglais et le français" />
      <Example centered text="Ils se sont embrassés." translation="They kissed." />
      <Example centered text="Se marier." translation="To get married." />
      <Example centered text="S'aimer." translation="To love each other." />

      <Subhead text="IV. 1 Verbe pronominal ou verbe simple ?" />
      <ArrowItem>
        La notion de <Rich text="*réciprocité*" /> ou de{" "}
        <Rich text="*réfléchi*" /> marquée en français par un verbe pronominal
        s&apos;exprime parfois en anglais par un verbe simple quand le contexte
        implique déjà cette notion.
      </ArrowItem>
      <Example
        text="Elle lui a ouvert la porte et ils se sont embrassés."
        translation="She opened the door to him and they kissed. (each other est sous-entendu)"
      />
      <Example
        text="Ils se tenaient par la main."
        translation="They held hands. (each other's est sous-entendu)"
      />
      <ArrowItem>
        Le verbe pronominal français correspond souvent à une expression anglaise
        composée de <Rich text="*to get*" /> et d&apos;un{" "}
        <Rich text="*participe passé*" /> (ou d&apos;un adjectif) :
      </ArrowItem>
      <ul className="mb-3 space-y-0.5 pl-6 text-[14.5px] leading-relaxed">
        {getList.map(([en, fr]) => (
          <li key={en}>
            – {en} = {fr}
          </li>
        ))}
      </ul>
      <Rule>
        – Notez que <Rich text="*to feel*" /> (sick, great, etc.) se traduit par{" "}
        <Rich text="*se sentir*" /> (malade, en grande forme, etc.) et que{" "}
        <Rich text="*to be bored*" /> se traduit par{" "}
        <Rich text="*s'ennuyer*" />.
      </Rule>

      <Subhead text="IV. 2 Expressions marquant la réciprocité" />
      <ArrowItem>
        L&apos;anglais, pour marquer la réciprocité ou le réfléchi, utilise les
        expressions <Rich text="*each other*" />, <Rich text="*oneself*" />, etc.
      </ArrowItem>
      <ArrowItem>
        Le français aussi peut accompagner le verbe pronominal d&apos;expressions
        comme <Rich text="*l'un l'autre*" />,{" "}
        <Rich text="*les uns les autres*" />, ou <Rich text="*soi-même*" />,{" "}
        <Rich text="*toi-même*" />, etc. mais uniquement comme forme
        d&apos;insistance.
      </ArrowItem>
      <ArrowItem>
        Ainsi, on traduira to love each other par <Rich text="*s'aimer*" /> ou to
        look at oneself (in the mirror) par <Rich text="*se regarder*" /> (dans
        le miroir).
      </ArrowItem>
      <ArrowItem>
        « S&apos;aimer l&apos;un l&apos;autre », « se regarder soi-même » serait
        une lourde insistance, inutile, voire incorrecte.
      </ArrowItem>
    </TextbookPage>
  );
}

function Page170() {
  return (
    <TextbookPage pageNumber={170} pageNumberSide="left">
      <ExerciseBox title="C. Traduisez.">
        <Items items={exerciseC} />
      </ExerciseBox>
      <ExerciseBox title="D. Complétez les verbes pronominaux par les pronoms manquants.">
        <Items items={exerciseD} />
      </ExerciseBox>
      <ExerciseBox title="E. Dans le texte suivant, soulignez les verbes pronominaux.">
        <p>{exerciseE}</p>
      </ExerciseBox>
      <ExerciseBox
        title={
          <>
            F. Traduisez en utilisant un des verbes pronominaux suivants :{" "}
            {exerciseFVerbs}
          </>
        }
      >
        <Items items={exerciseF} />
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page171() {
  return (
    <TextbookPage pageNumber={171}>
      <ExerciseBox title="G. À quelle question correspondraient les réponses suivantes.">
        <Items items={exerciseG} />
      </ExerciseBox>
      <ExerciseBox title="H. Composez un récit au passé qui aura pour thème le lancement d'une navette spatiale. Vous commencerez votre récit par : « Il y a quinze jours, elle a été invitée au lancement de la dernière navette spatiale. Le jour J, elle... ». Vous choisirez, entre autres, des verbes pronominaux de la liste suivante :">
        <p>{exerciseHVerbs}</p>
      </ExerciseBox>
      <ExerciseBox title="I. Traduisez.">
        <Items items={exerciseI} />
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter21() {
  return (
    <div className="space-y-8 py-8">
      <Page166 />
      <Page167 />
      <Page168 />
      <Page169 />
      <Page170 />
      <Page171 />
    </div>
  );
}
