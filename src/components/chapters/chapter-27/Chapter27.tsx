import {
  ArrowItem,
  AttentionBox,
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
  chapter27,
  exerciseH,
  exerciseI,
  exerciseJ,
  irregularParticiples,
  overview,
} from "@/content/chapters/27";

function OverviewBlock() {
  return (
    <div className="mx-auto max-w-[40rem] space-y-3 text-center">
      {overview.map((section) => (
        <div key={section.roman}>
          <p className="text-[16px] font-semibold text-tb-teal">
            {section.roman} {section.title}
          </p>
          {section.lines.map((line) => (
            <p
              key={line.fr}
              className="text-[14.5px] leading-relaxed text-tb-example italic"
            >
              {line.fr}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

function Page206() {
  return (
    <TextbookPage pageNumber={206} pageNumberSide="left">
      <ChapterHeader number={chapter27.number} title={chapter27.title} />
      <OverviewBlock />
      <SectionDivider title="I. Accord du participe passé avec « être »" />
      <Example centered text="Marie est sortie." />
      <Example centered text="Nos équipes ont été battues." />

      <Subhead text="I. 1 Le participe passé conjugué avec être s'accorde avec le sujet." />
      <Example text="Ils sont sortis pendant deux heures." />
      <Example text="Elles sont parties en vacances." />

      <Subhead text="I. 2 Modes et temps" />
      <Rule>
        Cette règle est valable pour tous les temps (
        <Rich text="*passé composé, plus-que-parfait, futur antérieur*" />, etc.)
        et pour tous les modes (<Rich text="*après être sortie, elle...*" /> ;{" "}
        <Rich text="*je suis contente qu'elle soit sortie*" />.).
      </Rule>

      <Subhead text="I. 3 Passif" />
      <Rule>
        Ne pas oublier cette règle quand le verbe est au passif.
      </Rule>
      <Example text="Nos équipes ont été battues." />
    </TextbookPage>
  );
}

function Page207() {
  return (
    <TextbookPage pageNumber={207}>
      <Subhead text="I. 4 Sujets multiples" />
      <Rule>
        Lorsque le sujet est un nom masculin <Rich text="*et*" /> un nom
        féminin, l&apos;accord se fait au <Rich text="*masculin pluriel*" />.
      </Rule>
      <Example text="Paul et Marie sont arrivés en retard." />

      <Subhead text="I. 5 Avec on, personne et quelque chose" />
      <Rule>
        L&apos;accord se fait au <Rich text="*masculin singulier*" />.
      </Rule>
      <Example text="On est rentré à 3 heures du matin." />
      <Example text="Personne n'était blessé." />
      <Example text="Quelque chose de grave est arrivé." />
      <AttentionBox>
        <p>
          Il est important de connaître la liste des verbes conjugués avec{" "}
          <Rich text="*être*" /> (
          <CrossRef>chapitre 25, I. 2 et I. 3, p. 195-196</CrossRef>).
        </p>
      </AttentionBox>

      <ExerciseBox title="A. Mettez à la forme correcte du participe passé le verbe entre parenthèses.">
        <ExerciseItem n={1}>
          Si Claudine avait couru, elle ne serait pas (arriver){" "}
          <Blank width="6rem" /> en retard.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Pierre et Françoise sont (marier) <Blank width="6rem" /> depuis 3
          ans.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Il faudrait que ces paquets soient (expédier) <Blank width="6rem" />{" "}
          avant le 24.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Mes filles ont été (inviter) <Blank width="6rem" /> à faire du ski.
        </ExerciseItem>
        <ExerciseItem n={5}>
          On est (rentrer) <Blank width="6rem" /> à 2 heures.
        </ExerciseItem>
      </ExerciseBox>

      <SectionDivider title="II. Accord du participe passé avec « avoir »" />
      <Example centered text="Marie a écrit une lettre." />
      <Example centered text="La lettre que Paul a écrite vient d'arriver." />

      <Subhead text="II. 1 Accord avec le c. o. d." />
      <Rule>
        Le participe passé des verbes conjugués avec{" "}
        <Rich text="*avoir*" /> s&apos;accorde avec le{" "}
        <Rich text="*complément d'objet direct*" /> (c. o. d.) si celui-ci est
        placé <Rich text="*avant*" /> le verbe.
      </Rule>
      <Example text="Les livres que j'ai empruntés sont intéressants." />
      <Rule>
        Dans cette phrase, <Rich text="*que*" /> (pronom relatif remplaçant{" "}
        <Rich text="*livres*" />, nom masculin pluriel), c. o. d., est placé
        avant le verbe ; on fait donc l&apos;accord.
      </Rule>
      <Example text="Lesquelles avez-vous achetées ?" />
      <Rule>
        Dans cette phrase interrogative, <Rich text="*lesquelles*" /> (pronom
        interrogatif, c. o. d., féminin pluriel) est placé avant le verbe ; on
        fait donc l&apos;accord.
      </Rule>
    </TextbookPage>
  );
}

function Page208() {
  return (
    <TextbookPage pageNumber={208} pageNumberSide="left">
      <Subhead text="II. 2 Absence d'accord" />
      <Rule>
        Quand le complément d&apos;objet direct est placé{" "}
        <Rich text="*après*" /> le verbe ou quand il n&apos;y a pas de
        complément d&apos;objet direct, on ne fait pas l&apos;accord.
      </Rule>
      <Example text="Ils ont lavé la voiture. (c. o. d. placé après ; pas d'accord)" />
      <Example text="Ils ont écrit. (pas de c. o. d. ; pas d'accord)" />
      <AttentionBox>
        <p>
          Il est important de connaître les participes passés des verbes
          irréguliers. En particulier, on se rappellera les participes passés
          des verbes suivants :
        </p>
        <div className="grid grid-cols-2 gap-x-6 text-[14.5px]">
          {irregularParticiples.map((row) => (
            <div key={row[0]} className="contents">
              <span>{row[0]}</span>
              <span>{row[1]}</span>
            </div>
          ))}
        </div>
        <p>
          On ne fait pas l&apos;accord avec les pronoms{" "}
          <Rich text="*en*" /> et <Rich text="*dont*" />, même s&apos;ils sont
          placés avant l&apos;auxiliaire avoir.
        </p>
        <Example text="J'aime les pommes ; j'en ai mangé trois." />
        <Example text="J'ai aimé les films dont Hélène m'a parlé." />
      </AttentionBox>

      <ExerciseBox title="B. Mettez le verbe entre parenthèses à la forme correcte du participe passé.">
        <ExerciseItem n={1}>
          Les films qu&apos;ils ont (voir) avaient une bonne intrigue.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Elles ont (aimer) les pièces de théâtre.
        </ExerciseItem>
        <ExerciseItem n={3}>
          À laquelle ont-elles (donner) la préférence ?
        </ExerciseItem>
        <ExerciseItem n={4}>Laquelle avez-vous (préférer) ?</ExerciseItem>
        <ExerciseItem n={5}>
          Je te prête la cassette que je t&apos;ai (enregistrer).
        </ExerciseItem>
      </ExerciseBox>

      <SectionDivider title="III. Cas particuliers" />
      <Example centered text="Quelle belle journée il a fait !" />
      <Example centered text="Les livres qu'il a fait venir." />
      <Example centered text="La sonate que j'ai entendu jouer." />
      <Example centered text="La pianiste que j'ai entendue jouer." />

      <Subhead text="III. 1 Verbes impersonnels" />
      <Rule>
        Le participe passé d&apos;un verbe <Rich text="*impersonnel*" /> est
        invariable.
      </Rule>
      <Example text="Quelle belle journée il a fait !" />
      <Example text="Les dégâts qu'il y a eu." />
    </TextbookPage>
  );
}

function Page209() {
  return (
    <TextbookPage pageNumber={209}>
      <Subhead text="III. 2 Faire + infinitif" />
      <Rule>
        Le participe passé du verbe <Rich text="*faire*" /> suivi d&apos;un
        infinitif est <Rich text="*invariable*" />.
      </Rule>
      <Example text="Les fleurs qu'il a fait livrer à sa femme." />

      <Subhead text="III. 3 Avoir + participe passé + infinitif" />
      <ArrowItem>
        Lorsque le participe passé conjugué avec <Rich text="*avoir*" /> est
        suivi d&apos;un <Rich text="*infinitif*" /> (avec ou sans préposition) :
      </ArrowItem>
      <Rule>
        <span className="font-semibold">a. </span>
        le participe passé est <Rich text="*invariable*" /> s&apos;il a pour
        complément d&apos;objet l&apos;infinitif. Dans ce cas, le pronom objet
        placé avant le participe passé ne fait pas l&apos;action exprimée par
        l&apos;infinitif :
      </Rule>
      <Example text="La sonate que j'ai entendu jouer." />
      <Rule>
        (La phrase correspond à : « J&apos;ai entendu jouer la sonate. » ; le
        pronom relatif <Rich text="*que*" />, mis pour{" "}
        <Rich text="*sonate*" />, n&apos;est pas le sujet de l&apos;action
        exprimée par l&apos;infinitif ; ce n&apos;est pas la sonate qui joue.)
      </Rule>
      <Rule>
        <span className="font-semibold">b. </span>
        le participe passé <Rich text="*s'accorde*" /> s&apos;il a pour
        complément d&apos;objet direct le pronom objet qui précède. Dans ce
        cas, le pronom objet <Rich text="*qui précède*" /> fait l&apos;action
        exprimée par l&apos;infinitif :
      </Rule>
      <Example text="La pianiste que j'ai entendue jouer." />
      <Rule>
        (La phrase correspond à : « J&apos;ai entendu jouer la pianiste. »{" "}
        <Rich text="*entendue*" /> est sujet de l&apos;infinitif{" "}
        <Rich text="*jouer*" /> et le pronom relatif <Rich text="*que*" />, qui
        représente <Rich text="*pianiste*" />, exprime le sujet de
        l&apos;infinitif ; c&apos;est la pianiste qui joue.)
      </Rule>
      <ArrowItem>Autres exemples :</ArrowItem>
      <Example text="Cette pièce, je l'ai vu jouer. (III. 3 a)" />
      <Example text="Cette catastrophe, je l'ai vue arriver. (III. 3 b)" />
      <Example text="Ces objets, tu les avais laissés tomber. (III. 3 b)" />
      <Example text="Ces objets, tu les avais laissé emprunter. (III. 3 a)" />

      <SectionDivider title="IV. Accord du participe passé des verbes pronominaux" />
      <Example centered text="Annie s'est blessée." />
      <Example centered text="Les lettres que Paul et Marie se sont écrites sont touchantes." />
      <Example centered text="Paul et Marie se sont écrit de nombreuses lettres." />
      <Example centered text="Annie s'est évanouie." />

      <Subhead text="IV. 1 Règle générale" />
      <ArrowItem>
        Les verbes pronominaux réfléchis et réciproques (
        <CrossRef>chapitre 21, III, p. 168</CrossRef>) sont conjugués avec
        l&apos;auxiliaire <Rich text="*être*" /> mais suivent les règles
        d&apos;accord des participes avec avoir.
      </ArrowItem>
    </TextbookPage>
  );
}

function Page210() {
  return (
    <TextbookPage pageNumber={210} pageNumberSide="left">
      <Rule>
        <span className="font-semibold">a. </span>
        Le participe passé des verbes pronominaux s&apos;accorde avec le
        complément d&apos;objet direct (c. o. d.) si celui-ci est placé avant le
        verbe.
      </Rule>
      <Example text="Elle s'est regardée dans le miroir." />
      <Rule>
        (<Rich text="*se*" /> : pronom réfléchi, complément d&apos;objet direct,
        féminin singulier)
      </Rule>
      <Example text="Les photos qu'ils se sont envoyées étaient floues." />
      <Rule>
        (Le c. o. d. est le pronom relatif <Rich text="*qu'*" /> mis pour{" "}
        <Rich text="*photos*" />, féminin pluriel.)
      </Rule>
      <Rule>
        <span className="font-semibold">b. </span>
        Si le complément d&apos;objet direct est placé{" "}
        <Rich text="*après*" /> le verbe ou s&apos;il n&apos;y a pas de
        complément d&apos;objet direct, le participe passé reste invariable.
      </Rule>
      <Example text="Elles se sont envoyé des photos. (c. o. d. placé après)" />
      <Example text="Ils se sont raconté des histoires. (c. o. d. placé après)" />
      <Example text="Elles se sont parlé au téléphone. (pas de c. o. d.)" />
      <ArrowItem>
        Dans ces trois cas, le pronom réfléchi est{" "}
        <Rich text="*objet indirect*" /> : envoyer des photos{" "}
        <Rich text="*à*" /> quelqu&apos;un ; raconter des histoires{" "}
        <Rich text="*à*" /> quelqu&apos;un ; parler{" "}
        <Rich text="*à*" /> quelqu&apos;un.
      </ArrowItem>
      <AttentionBox>
        <p>
          Il faut toujours se demander si le pronom réfléchi est complément
          d&apos;objet direct (c. o. d.) ou indirect (c. o. i.).
        </p>
        <Example text="Elles se sont lavées. (se = c. o. d.)" />
        <Example text="Elles se sont lavé les mains. (se = c. o. i.)" />
        <p>
          <CrossRef>chapitre 21, III. 4, p. 168</CrossRef>
        </p>
      </AttentionBox>

      <ExerciseBox title="C. Faites ou non l'accord du participe passé placé entre parenthèses.">
        <p>
          Marie s&apos;est (levé) <Blank /> de bonne heure. Elle s&apos;est
          (douché) <Blank />, s&apos;est (lavé) <Blank /> les cheveux, s&apos;est
          (habillé) <Blank /> en un clin d&apos;œil. Elle a mis les chaussures
          qu&apos;elle s&apos;était (acheté) <Blank /> la veille. Elle devait
          retrouver Émilie au musée. Elles ne s&apos;étaient pas (vu){" "}
          <Blank /> depuis plus d&apos;un mois. Elles se sont (rejoint){" "}
          <Blank /> sur les marches du musée et se sont (raconté) <Blank /> ce
          qu&apos;elles avaient fait depuis leur dernière rencontre. Après leur
          visite du musée, elles se sont (quitté) <Blank /> et se sont (promis){" "}
          <Blank /> de se revoir bientôt.
        </p>
      </ExerciseBox>

      <Subhead text="IV. 2 Les verbes essentiellement pronominaux et pronominaux à sens passif" />
      <Rule>
        Les verbes essentiellement pronominaux (du type{" "}
        <Rich text="*s'évanouir, s'abstenir, se souvenir*" />, etc.{" "}
        <CrossRef>p. 168</CrossRef>) et les verbes pronominaux à sens passif (
        <CrossRef>chapitre 31, IV. 4, p. 240</CrossRef>) font l&apos;accord du
        participe passé avec le sujet.
      </Rule>
      <Example text="Elles se sont souvenues de leur rendez-vous. (essentiellement pronominal)" />
      <Example text="Ils se sont évanouis. (essentiellement pronominal)" />
      <Example text="Les billets de concert se sont vendus en une heure. (sens passif)" />
    </TextbookPage>
  );
}

function Page211() {
  return (
    <TextbookPage pageNumber={211}>
      <Subhead text="IV. 3 Temps et modes" />
      <Rule>
        Les règles d&apos;accord du participe passé énoncées en IV. 1 et IV. 2
        sont valables pour <Rich text="*tous les temps*" /> et pour{" "}
        <Rich text="*tous les modes*" />.
      </Rule>
      <Example text="Elle sortira après s'être lavée." />
      <Example text="Elle sortira après s'être lavé les cheveux." />
      <Example text="Il ne pense pas que Jacques et Hervé se soient vus récemment." />

      <ExerciseBox title="D. Dans les phrases suivantes, dites si le pronom souligné est objet direct ou objet indirect. Puis mettez les phrases au passé composé.">
        <ExerciseItem n={1}>Ils se disent des injures.</ExerciseItem>
        <ExerciseItem n={2}>Elle se coiffe.</ExerciseItem>
        <ExerciseItem n={3}>Nous nous pressons.</ExerciseItem>
        <ExerciseItem n={4}>Elles se lèvent.</ExerciseItem>
        <ExerciseItem n={5}>Ils se téléphonent.</ExerciseItem>
      </ExerciseBox>
      <ExerciseBox title="E. Mettez les phrases suivantes au passé composé.">
        <ExerciseItem n={1}>Il a soif et il boit du lait.</ExerciseItem>
        <ExerciseItem n={2}>Elle n&apos;aime pas les gâteaux que tu fais.</ExerciseItem>
        <ExerciseItem n={3}>Jacqueline rentre à 3 heures.</ExerciseItem>
        <ExerciseItem n={4}>Mon frère et ma sœur partent à Montréal.</ExerciseItem>
        <ExerciseItem n={5}>Je suis deux cours de français.</ExerciseItem>
        <ExerciseItem n={6}>Personne ne vient.</ExerciseItem>
        <ExerciseItem n={7}>Il pleut à verse.</ExerciseItem>
        <ExerciseItem n={8}>Elles s&apos;écrivent.</ExerciseItem>
        <ExerciseItem n={9}>Ils se souviennent.</ExerciseItem>
        <ExerciseItem n={10}>Ils se taisent.</ExerciseItem>
      </ExerciseBox>
      <ExerciseBox title="F. Mettez les verbes entre parenthèses au passé composé.">
        <p>
          Le gangster (assassiner) <Blank /> M. Dupont. Ce dernier (mourir){" "}
          <Blank /> vers 6 heures du soir. La police (arriver) <Blank /> peu de
          temps après. Les empreintes qu&apos;elle (trouver) <Blank />{" "}
          n&apos;étaient pas nombreuses. Le bandit (voler) <Blank /> une voiture
          qu&apos;il (abandonner) <Blank /> un peu plus loin. Un complice
          (acheter) <Blank /> des billets de chemin de fer et (monter){" "}
          <Blank /> avec lui. Ils (descendre) <Blank /> à la gare suivante et on
          (perdre) <Blank /> leurs traces.
        </p>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page212() {
  return (
    <TextbookPage pageNumber={212} pageNumberSide="left">
      <ExerciseBox title="G. Complétez le texte suivant de façon logique à l'aide de participes passés.">
        <p>
          Émilie est <Blank /> en 1970. Elle a <Blank /> dans une école
          d&apos;immersion. Les sujets qu&apos;elle a <Blank /> étaient le
          français et l&apos;histoire mais elle n&apos;a pas beaucoup <Blank />{" "}
          les mathématiques. De 1980 à 1982, elle a <Blank /> à Montréal. Quand
          elle est <Blank /> à Toronto, elle a régulièrement <Blank /> aux amies
          qu&apos;elle avait <Blank /> à Montréal. Certaines sont <Blank /> lui
          rendre visite.
        </p>
      </ExerciseBox>
      <ExerciseBox title="H. Traduisez.">
        {exerciseH.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
      <ExerciseBox title="I. Mettez le texte suivant au passé composé.">
        <p>{exerciseI}</p>
      </ExerciseBox>
      <ExerciseBox title="J. Traduisez en utilisant des verbes pronominaux.">
        {exerciseJ.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter27() {
  return (
    <div className="space-y-8 py-8">
      <Page206 />
      <Page207 />
      <Page208 />
      <Page209 />
      <Page210 />
      <Page211 />
      <Page212 />
    </div>
  );
}
