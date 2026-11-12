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
  chapter28,
  exerciseB,
  exerciseC,
  exerciseG,
  overview,
} from "@/content/chapters/28";

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

const futureA = [
  ["1. (boire) je", "6. (courir) nous"],
  ["2. (manger) il", "7. (envoyer) tu"],
  ["3. (savoir) nous", "8. (venir) nous"],
  ["4. (étudier) vous", "9. (descendre) tu"],
  ["5. (arriver) ils", "10. (voir) elles"],
];

const futureD = [
  ["1. (aller) nous", "6. (devoir) il"],
  ["2. (vivre) vous", "7. (rentrer) je"],
  ["3. (voir) tu", "8. (déjeuner) ils"],
  ["4. (rester) elles", "9. (répondre) tu"],
  ["5. (écrire) elle", "10. (arriver) je"],
];

function TwoCol({ rows }: { rows: string[][] }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
      {rows.map((row) => (
        <div key={row[0]} className="contents">
          <p>
            {row[0]} <Blank width="6rem" />
          </p>
          <p>
            {row[1]} <Blank width="6rem" />
          </p>
        </div>
      ))}
    </div>
  );
}

function Page213() {
  return (
    <TextbookPage pageNumber={213}>
      <ChapterHeader number={chapter28.number} title={chapter28.title} />
      <OverviewBlock />
      <SectionDivider title="I. Formation" />
      <Example centered text="Je travaillerai jusqu'à 5 heures." />
      <Example centered text="Nous rendrons ce livre demain." />
      <Example centered text="Tu jetteras ce vieux journal." />
      <Example centered text="Elle appellera sa mère cet après-midi." />
      <Example centered text="Vous enlèverez vos bottes." />

      <Subhead text="I. 1 Règle générale" />
      <Rule>
        On forme le futur à partir de l&apos;<Rich text="*infinitif*" />, en
        ajoutant les terminaisons suivantes :{" "}
        <Rich text="*-ai, -as, -a, -ons, -ez, -ont*" />.
      </Rule>
      <Example text="infinitif : manger → futur : je mangerai" />
      <Example text="infinitif : finir → futur : nous finirons" />

      <Subhead text="I. 2 Particularités" />
      <ArrowItem>
        Les verbes qui se terminent par un <Rich text="*-e*" /> à
        l&apos;infinitif perdent ce <Rich text="*-e*" /> au futur.
      </ArrowItem>
      <Example text="infinitif : écrire → futur : tu écriras" />
      <Example text="infinitif : prendre → futur : ils prendront" />
    </TextbookPage>
  );
}

function Page214() {
  return (
    <TextbookPage pageNumber={214} pageNumberSide="left">
      <ArrowItem>
        Les verbes en <Rich text="*-er*" /> qui ont un <Rich text="*-e*" /> à
        l&apos;avant-dernière syllabe :
      </ArrowItem>
      <Rule>
        <span className="font-semibold">a. </span>
        <Rich text="*doublent la consonne*" /> au futur s&apos;il s&apos;agit de
        verbes en <Rich text="*-eler*" /> ou en <Rich text="*-eter*" />.
      </Rule>
      <Example text="infinitif : appeler → futur : nous appellerons." />
      <Example text="infinitif : jeter → futur : nous jetterons." />
      <Rule>Quelques exceptions :</Rule>
      <Example text="- acheter : il achètera ;" />
      <Example text="- déceler : il décèlera ;" />
      <Example text="- geler et ses composés : il gèlera ;" />
      <Example text="- peler : il pèlera." />
      <Rule>
        <span className="font-semibold">b. </span>
        changent <Rich text="*-e*" /> en <Rich text="*-è*" /> dans les autres
        cas.
      </Rule>
      <Example text="mener (et ses composés) : il mènera." />
      <Example text="crever : il crèvera." />
      <AttentionBox>
        <p>Quelques verbes ont un futur irrégulier. On notera en particulier :</p>
        <div className="grid grid-cols-2 gap-x-6">
          <span>- aller → il ira</span>
          <span>- falloir → il faudra</span>
          <span>- avoir → il aura</span>
          <span>- mourir → il mourra</span>
          <span>- courir → il courra</span>
          <span>- savoir → il saura</span>
          <span>- devoir → il devra</span>
          <span>- voir → il verra</span>
          <span>- être → il sera</span>
        </div>
      </AttentionBox>
      <ExerciseBox title="A. Donnez le futur des verbes suivants.">
        <TwoCol rows={futureA} />
      </ExerciseBox>

      <SectionDivider title="II. Futur proche" />
      <Example centered text="Je vais partir d'un moment à l'autre." />
      <Subhead text="II. 1 Construction" />
      <Rule>
        On exprime le futur proche à l&apos;aide du présent du verbe{" "}
        <Rich text="*aller*" /> et de l&apos;infinitif.
      </Rule>
      <Example
        text="Elle va téléphoner dans deux minutes."
        translation="She is going to phone in 2 minutes."
      />
      <Example
        text="Nous allons tout vous raconter."
        translation="We are going to tell you everything."
      />
    </TextbookPage>
  );
}

function Page215() {
  return (
    <TextbookPage pageNumber={215}>
      <Subhead text="II. 2 Emploi" />
      <Rule>
        On traduit un futur anglais par un futur proche chaque fois qu&apos;on
        veut marquer l&apos;<Rich text="*imminence*" /> d&apos;un événement, en
        particulier lorsqu&apos;on utilise des adverbes comme{" "}
        <Rich text="*tout de suite, immédiatement*" />, etc.
      </Rule>
      <Example
        text="Je vais t'expliquer tout de suite."
        translation="I'll explain to you right away."
      />
      <ExerciseBox title="B. Traduisez par un futur simple ou par un futur proche.">
        {exerciseB.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionDivider title="III. Le futur dans la subordonnée de temps" />
      <Example
        centered
        text="Quand je verrai Paul, je lui rendrai son livre."
        translation="When I see Paul, I will give him back his book."
      />
      <Subhead text="III. 1 Concordance des temps" />
      <Rule>
        En français, quand la proposition principale est au{" "}
        <Rich text="*futur*" /> ou implique une <Rich text="*action future*" />,
        on n&apos;utilise pas le présent dans la proposition subordonnée de
        temps, on utilise le <Rich text="*futur*" />.
      </Rule>
      <Rule>
        On se rappellera la règle chaque fois que la subordonnée sera introduite
        par : <Rich text="*quand, lorsque, aussitôt que, tant que, aussi longtemps que, dès que*" />, etc.
      </Rule>
      <Example
        text="J'irai au musée quand je serai en vacances."
        translation="(futur dans la subordonnée de temps car la principale est au futur) I will go to the museum when I am on holiday."
      />
      <Example
        text="Lorsque tu viendras, nous visiterons l'exposition."
        translation="(futur dans la subordonnée car la principale est au futur) When you come, we will visit the exhibition."
      />
      <Example
        text="Je t'aiderai aussi longtemps que tu voudras."
        translation="I will help you for as long as you like."
      />
      <Example
        text="Nous rentrerons à la maison aussitôt qu'il fera nuit."
        translation="We will go home as soon as it is dark."
      />
      <Rule>
        <span className="font-semibold">b. </span>
        Lorsque la principale implique une idée de <Rich text="*futur*" /> (par
        exemple quand elle est à l&apos;impératif et qu&apos;elle sous-entend un
        ordre à exécuter dans l&apos;avenir), la subordonnée de temps se met au{" "}
        <Rich text="*futur*" />.
      </Rule>
      <Example
        text="Envoyez-moi une carte quand vous arriverez."
        translation="Send me a card when you arrive."
      />
    </TextbookPage>
  );
}

function Page216() {
  return (
    <TextbookPage pageNumber={216} pageNumberSide="left">
      <Rule>
        <span className="font-semibold">c. </span>
        Quand le verbe de la principale implique une idée de{" "}
        <Rich text="*futur*" /> (par exemple avec le verbe{" "}
        <Rich text="*espérer*" /> dans certains contextes), la subordonnée est
        au <Rich text="*futur*" /> et non pas au présent.
      </Rule>
      <Example
        text="J'espère que vous pourrez partir à temps."
        translation="I hope that you can leave on time."
      />
      <ExerciseBox title="C. Traduisez.">
        {exerciseC.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionDivider title="IV. Futur antérieur" />
      <Example
        centered
        text="J'aurai fini ce travail à cinq heures."
        translation="I will have finished my work by 5."
      />
      <Example
        centered
        text="Quand Sophie aura lu ce roman, elle le rendra à la bibliothèque."
        translation="When Sophie has read this book, she will return it to the library."
      />
      <Subhead text="IV. 1 Construction" />
      <Rule>
        Le <Rich text="*futur antérieur*" /> est formé avec le{" "}
        <Rich text="*futur*" /> de l&apos;auxiliaire <Rich text="*être*" /> ou{" "}
        <Rich text="*avoir*" /> et le participe passé du verbe.
      </Rule>
      <Example
        text="Nous serons rentrés à 5 h."
        translation="We will be back by 5."
      />
      <AttentionBox>
        <p>
          Bien choisir l&apos;auxiliaire (
          <CrossRef>chapitre 25, I., p. 195</CrossRef>).
        </p>
        <p>
          Revoir la liste des verbes conjugués avec être (
          <CrossRef>p. 196</CrossRef>).
        </p>
        <p>
          Tenir compte des règles d&apos;accord du participe passé (
          <CrossRef>chapitre 27, p. 206-211</CrossRef>).
        </p>
      </AttentionBox>
      <Subhead text="IV. 2 Emplois" />
      <ArrowItem>
        Le futur antérieur est utilisé pour indiquer qu&apos;une action :
      </ArrowItem>
      <Rule>
        — sera <Rich text="*complètement terminée*" /> à un moment précis du
        futur ;
      </Rule>
      <Rule>
        — sera <Rich text="*complètement terminée*" /> avant qu&apos;une autre
        action <Rich text="*future*" /> ne commence.
      </Rule>
      <Example
        text="J'aurai terminé cette traduction demain après-midi."
        translation="I will have finished this translation tomorrow afternoon."
      />
      <Example
        text="Vous pourrez faire les exercices lorsque vous aurez étudié la leçon."
        translation="You will be able to do the exercises once you have studied the lesson."
      />
      <ArrowItem>
        Notez que l&apos;anglais utilise couramment le passé composé pour
        indiquer une action qui ne sera complétée qu&apos;au futur.
      </ArrowItem>
    </TextbookPage>
  );
}

function Page217() {
  return (
    <TextbookPage pageNumber={217}>
      <ExerciseBox title="D. Donnez le futur antérieur des verbes suivants.">
        <TwoCol rows={futureD} />
      </ExerciseBox>
      <SectionDivider title="V. Pas de futur après « si » d'hypothèse" />
      <Example
        centered
        text="J'irai en Europe si j'ai assez d'argent."
        translation="I will go to Europe if I have enough money."
      />
      <Subhead text="V. 1 Règle générale" />
      <Rule>
        Il n&apos;y a <Rich text="*jamais*" /> de futur dans la subordonnée
        hypothétique introduite par <Rich text="*si*" />, même quand la
        principale est au futur ou implique une action future (
        <CrossRef>chapitre 32, I. 2, p. 243</CrossRef>).
      </Rule>
      <Example
        text="J'irai au cinéma s'il pleut."
        translation="I will go to the cinema if it rains."
      />
      <Subhead text="V. 2 Nature de « si »" />
      <Rule>
        Ne confondez pas le <Rich text="*si*" /> d&apos;
        <Rich text="*hypothèse*" /> et le <Rich text="*si*" /> de l&apos;
        <Rich text="*interrogation indirecte*" /> (introduit par les verbes tels
        que <Rich text="*demander*" />). Après le <Rich text="*si*" /> de
        l&apos;interrogation indirecte, si le verbe de déclaration est au
        présent ou au futur, le <Rich text="*futur*" /> est obligatoire dans la
        subordonnée pour indiquer une action future. Distinguez bien :
      </Rule>
      <Example
        text="Je me demande s'il fera beau demain."
        translation="I wonder if it will be fine tomorrow. (interrogation indirecte ; l'interrogation directe correspondante serait au futur : Fera-t-il beau demain ?)"
      />
      <Example
        text="J'irai me baigner s'il fait beau demain."
        translation="I will go swimming if it is fine tomorrow. (hypothèse, donc pas de futur après si)."
      />
      <ExerciseBox title="E. Dans les phrases suivantes, mettez le verbe au présent ou au futur.">
        <ExerciseItem n={1}>
          Je ne sais pas s&apos;il (manger) <Blank /> avec nous demain.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Tu m&apos;écriras si tu le (pouvoir) <Blank />.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Vous me donnerez votre nouvelle adresse si vous (déménager){" "}
          <Blank />.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Je me demande si Hélène me (téléphoner) <Blank /> ce soir.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Si Hélène me (téléphoner) <Blank />, je lui donnerai rendez-vous
          demain matin.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page218() {
  return (
    <TextbookPage pageNumber={218} pageNumberSide="left">
      <ExerciseBox title="F. Complétez les phrases suivantes de façon correcte et logique.">
        <ExerciseItem n={1}>
          Dès que tu auras fini tes examens, tu <Blank width="10rem" />.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Demain soir après le dîner, nous <Blank width="10rem" />.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Vous aurez des nouvelles de Catherine quand <Blank width="10rem" />.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Je me demande si l&apos;année prochaine je <Blank width="10rem" />.
        </ExerciseItem>
        <ExerciseItem n={5}>
          J&apos;irai en Californie aux prochaines vacances si{" "}
          <Blank width="10rem" />.
        </ExerciseItem>
      </ExerciseBox>
      <ExerciseBox title="G. Traduisez.">
        {exerciseG.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
      <ExerciseBox title="H. Complétez le texte suivant en utilisant le futur ou le futur antérieur.">
        <p>
          Mon frère et moi (aller) <Blank /> en vacances au Québec quand nous
          (terminer) <Blank /> nos examens. Nous (passer) <Blank /> par Ottawa
          où nous (visiter) <Blank /> le Parlement. Dès que nous (arriver){" "}
          <Blank /> à Québec, je vous (écrire) <Blank /> pour vous donner mes
          premières impressions. Je me demande si je (pouvoir) <Blank /> me
          débrouiller en français. Les deux premiers jours, nous (rester){" "}
          <Blank /> dans la ville où deux amis nous (rejoindre) <Blank /> puis
          nous (remonter) <Blank /> le Saint-Laurent et nous (rentrer){" "}
          <Blank /> le 6 août.
        </p>
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter28() {
  return (
    <div className="space-y-8 py-8">
      <Page213 />
      <Page214 />
      <Page215 />
      <Page216 />
      <Page217 />
      <Page218 />
    </div>
  );
}
