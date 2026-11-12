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
  chapter22,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseD,
  exerciseE,
  exerciseF,
  exerciseG,
  exerciseH,
  exerciseI,
  overview,
} from "@/content/chapters/22";

function OverviewBlock() {
  return (
    <div className="mx-auto max-w-[40rem] space-y-3 text-center">
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

function PairTable({
  left,
  right,
  rows,
}: {
  left: string;
  right: string;
  rows: readonly (readonly [string, string])[];
}) {
  return (
    <table className="my-3 w-full max-w-lg border-collapse text-center text-[14.5px]">
      <thead>
        <tr className="text-tb-teal">
          <th className="border border-tb-cyan/40 px-3 py-1.5 font-semibold">{left}</th>
          <th className="border border-tb-cyan/40 px-3 py-1.5 font-semibold">{right}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([a, b]) => (
          <tr key={a}>
            <td className="border border-tb-cyan/25 px-3 py-1 italic text-tb-example">{a}</td>
            <td className="border border-tb-cyan/25 px-3 py-1 italic text-tb-example">{b}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const spellingGu = [
  ["communiquant", "communicant"],
  ["convainquant", "convaincant"],
  ["fatiguant", "fatigant"],
  ["intriguant", "intrigant"],
  ["provoquant", "provocant"],
  ["suffoquant", "suffocant"],
  ["vaguant", "vacant"],
] as const;

const spellingEnd = [
  ["différant", "différent"],
  ["équivalant", "équivalent"],
  ["négligeant", "négligent"],
  ["résidant", "résident"],
] as const;

const ingVerbs = [
  ["to stop (smoking, etc.)", "s'arrêter de (fumer, etc.)"],
  ["to consist in", "consister à"],
  ["to succeed in", "réussir à, parvenir à"],
  ["to apologize for", "s'excuser de"],
  ["to thank a person for", "remercier quelqu'un de"],
  ["to give up", "renoncer à"],
  ["to begin by", "commencer par"],
  ["to end by", "finir par"],
] as const;

const postures = [
  ["clinging", "cramponné"],
  ["crouching", "tapi"],
  ["fainting", "évanoui"],
  ["hanging", "pendu, accroché, suspendu"],
  ["kneeling", "agenouillé"],
  ["leaning", "penché, incliné"],
  ["lying", "couché, étendu"],
  ["sitting", "assis"],
  ["squatting", "accroupi"],
] as const;

function Page172() {
  return (
    <TextbookPage pageNumber={172} pageNumberSide="left">
      <ChapterHeader number={chapter22.number} title={chapter22.title} />
      <OverviewBlock />
      <SectionDivider title="I. Formes" />
      <Example centered text="Ne faisant pas attention, il s'est blessé." />

      <Subhead text="I. 1 Formation régulière et irrégulière" />
      <ArrowItem>
        Le participe présent se forme en ajoutant <Rich text="*-ant*" /> au
        radical du verbe conjugué à la première personne du pluriel du présent
        de l&apos;indicatif.
      </ArrowItem>
      <Example text="nous buvons → buvant" />
      <Example text="nous faisons → faisant" />
      <Example text="nous rougissons → rougissant" />
      <ArrowItem>Notez la forme de trois verbes irréguliers :</ArrowItem>
      <p className="text-[15px] italic text-tb-example">
        être → <Rich text="*étant*" />
        <span className="mx-4">avoir → <Rich text="*ayant*" /></span>
        savoir → <Rich text="*sachant*" />
      </p>
    </TextbookPage>
  );
}

function Page173() {
  return (
    <TextbookPage pageNumber={173}>
      <SectionDivider title="II. Participe présent et adjectif verbal" />
      <Example
        centered
        text="Négligeant nos conseils, ils rencontrent des difficultés."
        translation="Neglecting our advice, they encounter problems."
      />
      <Example
        centered
        text="Ce sont des parents négligents."
        translation="They are neglectful parents."
      />

      <Subhead text="II. 1 Adjectif verbal" />
      <ArrowItem>
        À partir du participe présent, la langue a formé des adjectifs verbaux
        qui s&apos;accordent en genre et en nombre avec le nom auquel ils se
        rapportent.
      </ArrowItem>
      <Example text="Des jeux amusants." translation="Amusing games." />
      <Example text="Des histoires passionnantes." translation="Exciting stories." />
      <ArrowItem>
        Ces adjectifs verbaux marquent une <Rich text="*qualité*" /> ou un{" "}
        <Rich text="*état*" /> ; ils ne peuvent pas avoir de complément
        d&apos;objet. (On ne peut pas écrire « des jeux amusants les enfants ».)
      </ArrowItem>

      <Subhead text="II. 2 Participe présent" />
      <Rule>
        Le participe présent, lui, marque une action ; il est{" "}
        <Rich text="*invariable*" /> et peut avoir un complément d&apos;objet.
      </Rule>
      <Example
        text="Les clowns, amusant les enfants, faisaient des acrobaties."
        translation="The clowns, amusing the children, were doing acrobatics."
      />

      <Subhead text="II. 3 Différences orthographiques" />
      <ArrowItem>
        Le participe présent et l&apos;adjectif verbal masculin singulier ont
        souvent la même forme mais parfois ils se distinguent par
        l&apos;orthographe.
      </ArrowItem>
      <Rule>Notez les différences suivantes :</Rule>
      <PairTable left="Participe présent" right="Adjectif verbal" rows={spellingGu} />
      <Example
        text="Elle a donné des preuves, convainquant tout l'auditoire."
        translation="She gave her evidence, convincing the entire audience."
      />
      <Example
        text="Elle a donné des preuves convaincantes."
        translation="She gave convincing evidence."
      />
    </TextbookPage>
  );
}

function Page174() {
  return (
    <TextbookPage pageNumber={174} pageNumberSide="left">
      <ArrowItem>
        Parfois, participe présent et adjectif verbal se distinguent par la
        terminaison :
      </ArrowItem>
      <PairTable left="Participe présent" right="Adjectif verbal" rows={spellingEnd} />
      <Example
        text="Différant trop dans leur point de vue, les négociateurs ne sont pas arrivés à un accord."
        translation="Differing too widely in their points of view, the negotiators could not reach an agreement."
      />
      <Example
        text="Les points de vue étaient trop différents pour que les négociateurs arrivent à un accord."
        translation="Their points of view were too different for the negotiators to reach an agreement."
      />

      <Subhead text="II. 4 Participe présent ou relative ?" />
      <Rule>
        Souvent, le participe présent suivi d&apos;un complément est remplacé par
        une <Rich text="*proposition relative*" />.
      </Rule>
      <Example
        text="Il a observé le soleil se couchant à l'horizon."
        translation="He watched the sun setting on the horizon."
      />
      <Example
        text="Il a observé le soleil qui se couchait à l'horizon."
        translation="He watched the sun, which was setting on the horizon."
      />

      <Subhead text="II. 5 Problème de traduction" />
      <Rule>
        À l&apos;adjectif verbal anglais ne correspond pas toujours un adjectif
        verbal français. On doit vérifier dans le dictionnaire si l&apos;adjectif
        verbal existe. S&apos;il n&apos;existe pas, on traduit l&apos;adjectif
        verbal anglais par une proposition relative.
      </Rule>
      <div className="my-2 grid max-w-lg grid-cols-2 gap-x-6 pl-4 text-[14.5px] italic text-tb-example">
        <p>a shouting man</p>
        <p>un homme qui crie</p>
        <p>a waiting limousine</p>
        <p>une limousine qui attend</p>
        <p>a barking dog</p>
        <p>un chien qui aboie</p>
        <p>a crying baby</p>
        <p>un bébé qui pleure</p>
      </div>

      <ExerciseBox title="A. Complétez à l'aide d'un participe présent.">
        <Items items={exerciseA} />
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page175() {
  return (
    <TextbookPage pageNumber={175}>
      <SectionDivider title="III. Participe présent et gérondif" />
      <Example
        centered
        text="Il est tombé en descendant les escaliers."
        translation="He fell going down the stairs."
      />
      <Example
        centered
        text="En étudiant régulièrement, vous ferez des progrès."
        translation="By studying regularly, you will make progress."
      />

      <Subhead text="III. 1 Qu'est-ce qu'un gérondif ?" />
      <Rule>
        On appelle <Rich text="*gérondif*" /> la forme du participe présent
        précédée de la préposition <Rich text="*en*" />.
      </Rule>
      <Example text="en chantant, en marchant, etc." />

      <Subhead text="III. 2 Emploi du gérondif" />
      <ArrowItem>
        <span className="font-semibold">a. </span>
        Le gérondif est <Rich text="*invariable*" /> et marque souvent le{" "}
        <Rich text="*temps*" /> et, plus spécialement, la{" "}
        <Rich text="*simultanéité*" /> par rapport à l&apos;action de la
        principale.
      </ArrowItem>
      <Example text="Je l'ai rencontré en allant à l'université. (= Je l'ai rencontré alors que j'allais à l'université.)" />
      <ArrowItem>
        <span className="font-semibold">b. </span>
        Lorsqu&apos;on veut <Rich text="*insister sur la simultanéité*" /> des
        deux actions, on peut faire précéder le gérondif de{" "}
        <Rich text="*tout*" />.
      </ArrowItem>
      <Example text="Il parlait tout en se préparant." />
      <ArrowItem>
        <span className="font-semibold">c. </span>
        Le gérondif peut aussi marquer la <Rich text="*manière*" /> (question :
        comment ?), la <Rich text="*cause*" /> (question : pourquoi ?) et
        l&apos;<Rich text="*hypothèse*" />.
      </ArrowItem>
      <Example text="Elle a répondu en souriant. (Manière = Elle a répondu avec le sourire.)" />
      <Example text="En lui rappelant son passé, vous l'avez mis dans l'embarras. (Cause = Parce que vous lui avez rappelé son passé, vous l'avez mis dans l'embarras.)" />
      <Example text="En n'écoutant pas, vous ne comprendrez pas. (Hypothèse = Si vous n'écoutez pas, vous ne comprendrez pas.)" />

      <ExerciseBox title="B. Traduisez.">
        <Items items={exerciseB} />
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page176() {
  return (
    <TextbookPage pageNumber={176} pageNumberSide="left">
      <SectionDivider title="IV. Forme anglaise en -ing et ses équivalents en français" />
      <Example centered text="J'ai passé la journée à travailler." translation="I spent the day working." />
      <Example centered text="J'arrête de fumer." translation="I stop smoking." />
      <Example centered text="Elle était assise sur le plancher." translation="She was sitting on the floor." />

      <Subhead text="IV. 1 Après un verbe de perception" />
      <Rule>
        Après les verbes du type <Rich text="*voir, regarder, sentir*" />, etc.,
        la forme en <Rich text="*-ing*" /> est traduite par un infinitif.
      </Rule>
      <Example text="I see him working. Je le vois travailler." />
      <p className="mb-3 text-[14.5px]">
        <CrossRef>chapitre 18, II. 2, p. 146</CrossRef>
      </p>
      <AttentionBox>
        <p>
          Avec les verbes qui signifient <Rich text="*passer du temps*" />, on
          utilise <Rich text="*l'infinitif précédé de à*" />.
        </p>
        <p>Ainsi, on dira :</p>
        <Example text="J'ai passé mon temps à réfléchir." translation="I spent my time thinking." />
        <Example text="Il a passé la journée à chercher un emploi." translation="He spent the day looking for a job." />
        <Example text="Elle a passé la soirée à lire le journal." translation="She spent the evening reading the newspaper." />
      </AttentionBox>

      <Subhead text="IV. 2 Choix de la préposition" />
      <ArrowItem>
        En français, la <Rich text="*seule préposition*" /> qui puisse précéder
        la forme en -ant est <Rich text="*en*" />. En anglais la forme en -ing
        peut être précédée de différentes prépositions (by, without, in...) et se
        traduit alors par un infinitif.
      </ArrowItem>
      <div className="my-2 grid max-w-md grid-cols-2 gap-x-6 pl-6 text-[14.5px]">
        <p>for living</p>
        <p className="italic text-tb-example">pour vivre</p>
        <p>without paying</p>
        <p className="italic text-tb-example">sans payer</p>
      </div>
      <ArrowItem>
        Notez que les verbes suivants ne sont pas suivis, en français, d&apos;une
        forme en -ant mais d&apos;un infinitif :
      </ArrowItem>
      <PairTable left="Verbe + -ing" right="Verbe + infinitif" rows={ingVerbs} />
    </TextbookPage>
  );
}

function Page177() {
  return (
    <TextbookPage pageNumber={177}>
      <p className="mb-1 text-[15px] leading-relaxed">
        I feel like drinking. <span className="italic text-tb-example">J&apos;ai envie de boire.</span>
      </p>
      <p className="mb-1 text-[15px] leading-relaxed">
        They prevented me from falling.{" "}
        <span className="italic text-tb-example">Ils m&apos;ont empêché de tomber.</span>
      </p>
      <p className="mb-1 text-[15px] leading-relaxed">
        He began by thanking his parents.{" "}
        <span className="italic text-tb-example">Il a commencé par remercier ses parents.</span>
      </p>
      <p className="mb-1 text-[15px] leading-relaxed">
        She had to give up dancing.{" "}
        <span className="italic text-tb-example">Elle a dû renoncer à danser.</span>
      </p>

      <Subhead text="IV. 3 Problème de traduction" />
      <Rule>
        Certains participes présents en anglais correspondent à des{" "}
        <Rich text="*participes passés*" /> en français. (Le verbe marque alors
        une <Rich text="*attitude physique*" />.) En voici quelques-uns :
      </Rule>
      <ul className="mb-3 space-y-0.5 pl-4 text-[14.5px]">
        {postures.map(([en, fr]) => (
          <li key={en}>
            – {en} = {fr}
          </li>
        ))}
      </ul>
      <p className="mb-1 text-[15px] leading-relaxed">
        She was <span className="italic text-tb-example">sitting</span> on the floor.{" "}
        <span className="italic text-tb-example">Elle était assise sur le plancher.</span>
      </p>

      <Subhead text="IV. 4 La notion de durée" />
      <Rule>
        La périphrase <Rich text="*to be + -ing*" /> qui marque la durée peut se
        traduire par la périphrase <Rich text="*être en train de*" />. En
        français, cette périphrase marque plus qu&apos;en anglais l&apos;insistance
        sur la durée.
      </Rule>
      <Example
        text="J'étais en train de travailler (je travaillais) lorsqu'il arriva."
        translation="I was working when he arrived."
      />
      <Example
        text="Elle est en train de faire la cuisine (elle cuisine)."
        translation="She is cooking."
      />

      <ExerciseBox title="C. Traduisez.">
        <Items items={exerciseC} />
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page178() {
  return (
    <TextbookPage pageNumber={178} pageNumberSide="left">
      <SectionDivider title="V. Participe présent (ou gérondif) et proposition principale" />
      <Example centered text="Il encourage l'élève en souriant." />
      <Example centered text="Ne voyant pas clair, il s'est trompé de porte." />

      <Subhead text="V. 1 Rappel" />
      <ArrowItem>
        Le gérondif et le participe présent suivis de leurs compléments peuvent
        former une proposition subordonnée qui, suivant le contexte, équivaut à
        une subordonnée circonstancielle de <Rich text="*temps*" />, de{" "}
        <Rich text="*cause*" /> ou d&apos;<Rich text="*hypothèse*" /> (
        <CrossRef>page 175, III. 2</CrossRef>).
      </ArrowItem>
      <Example
        text="En étudiant ce document, vous découvrirez qu'il s'agit d'une fraude. = Lorsque vous étudierez ce document, vous découvrirez qu'il s'agit d'une fraude."
        translation="On studying this document, you will find it is a fake."
      />
      <Example
        text="En lui rappelant son passé, vous l'avez mis dans l'embarras. = Parce que vous lui avez rappelé son passé, vous l'avez mis dans l'embarras."
        translation="By recalling his past, you have embarrassed him."
      />
      <ArrowItem>
        Le participe présent marque le plus souvent la <Rich text="*cause*" />.
      </ArrowItem>
      <Example
        text="Étant enrhumé, il préfère ne pas sortir."
        translation="Having a cold, he prefers not to go out."
      />

      <Subhead text="V. 2 Construction avec le participe présent" />
      <ArrowItem>
        Le participe présent peut avoir un sujet autre que le sujet du verbe de
        la <Rich text="*proposition principale*" />.
      </ArrowItem>
      <Example
        text="L'orateur levant son verre, les assistants applaudirent."
        translation="As the speaker raised his glass, the audience applauded."
      />
      <AttentionBox>
        <p>On ne peut pas dire :</p>
        <p>« Levant son verre, les assistants applaudirent. »</p>
        <p>
          car <em>levant</em> ne peut pas se rapporter à <em>assistants</em>{" "}
          puisque le possesseur du verre est singulier (<em>son</em> verre).
        </p>
      </AttentionBox>
      <ArrowItem>
        Si le participe présent n&apos;a pas de sujet exprimé, il doit se
        rapporter au sujet du verbe de la principale.
      </ArrowItem>
      <Example
        text="Levant son verre, l'orateur proposa un toast."
        translation="Raising his glass, the speaker proposed a toast."
      />

      <Subhead text="V. 3 Construction avec le gérondif" />
      <ArrowItem>
        Le sujet du gérondif est toujours le même que celui de la proposition
        principale.
      </ArrowItem>
      <Example
        text="Il encouragea l'élève en souriant."
        translation="Smiling, he encouraged the student. (C'est la même personne qui encourage et qui sourit.)"
      />
    </TextbookPage>
  );
}

function Page179() {
  return (
    <TextbookPage pageNumber={179}>
      <ArrowItem>
        Pour cette raison, la phrase anglaise : I met him going to the university
        se traduira par : « Je l&apos;ai rencontré en allant à l&apos;université »
        et implique que aller à l&apos;université et rencontrer sont deux actions
        accomplies par la même personne. Si la phrase anglaise sous-entend que
        les deux actions sont accomplies par deux personnes différentes, il
        faudra exprimer les deux sujets et traduire par : « Je l&apos;ai
        rencontré alors qu&apos;il allait à l&apos;université. »
      </ArrowItem>

      <Subhead text="V. 4 Participe présent de l'auxiliaire + participe passé du verbe" />
      <ArrowItem>
        Il faut noter l&apos;existence d&apos;un participe, composé du participe
        présent de l&apos;auxiliaire (avoir ou être) et du participe passé du
        verbe.
      </ArrowItem>
      <Example text="Ayant mangé, étant tombé, etc." translation="Having eaten, having fallen, etc." />
      <ArrowItem>
        Ce participe composé marque l&apos;<Rich text="*antériorité*" /> par
        rapport à l&apos;action du verbe de la proposition principale.
      </ArrowItem>
      <Example
        text="Les enfants ayant mangé, elle desservit la table."
        translation="The children having eaten, she cleared the table."
      />
      <Example
        text="Les enfants étant endormis, elle peut enfin lire le journal."
        translation="The children having gone to sleep, she can at last read the newspaper."
      />
      <ArrowItem>
        Si ce participe n&apos;a pas de sujet exprimé, il se rapporte
        obligatoirement au sujet de la proposition principale.
      </ArrowItem>
      <Example
        text="Ayant mangé, elle partit rencontrer son amie."
        translation="Having eaten, she went to meet her friend."
      />

      <ExerciseBox title="D. Traduisez à l'aide d'un participe présent ou d'un gérondif.">
        <Items items={exerciseD} />
      </ExerciseBox>
      <ExerciseBox title="E. Donnez le participe présent des verbes entre parenthèses.">
        <Items items={exerciseE} />
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page180() {
  return (
    <TextbookPage pageNumber={180} pageNumberSide="left">
      <ExerciseBox title="F. Remplacez l'infinitif par un participe présent ou par un adjectif verbal et, s'il s'agit d'un adjectif verbal, faites attention à l'accord et à l'orthographe.">
        <Items items={exerciseF} />
      </ExerciseBox>
      <ExerciseBox title="G. Remplacez les propositions soulignées par un gérondif ou par un participe présent.">
        {exerciseG.map((item, i) => (
          <ExerciseItem key={item.under} n={i + 1}>
            {item.lead}
            <u>{item.under}</u>
            {item.tail}
          </ExerciseItem>
        ))}
      </ExerciseBox>
      <ExerciseBox title="H. Sur le modèle suivant, utilisez un gérondif qui insiste sur la simultanéité.">
        <p className="mb-2">
          (conduire), il regardait le paysage. →{" "}
          <Rich text="*Tout en conduisant*" />, il regardait le paysage.
        </p>
        <Items items={exerciseH} />
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page181() {
  return (
    <TextbookPage pageNumber={181}>
      <ExerciseBox title="I. Traduisez.">
        <Items items={exerciseI} />
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter22() {
  return (
    <div className="space-y-8 py-8">
      <Page172 />
      <Page173 />
      <Page174 />
      <Page175 />
      <Page176 />
      <Page177 />
      <Page178 />
      <Page179 />
      <Page180 />
      <Page181 />
    </div>
  );
}
