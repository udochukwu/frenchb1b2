import {
  AttentionBox,
  Blank,
  ChapterHeader,
  CrossRef,
  Example,
  ExerciseBox,
  ExerciseItem,
  Rich,
  Rule,
  SectionBar,
  SectionDivider,
  SquareItem,
  Subhead,
  Term,
  TextbookPage,
} from "@/components/textbook";
import {
  chapter10,
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
  exerciseK,
  exerciseL,
  exerciseM,
  overview,
  pronounForms,
  pronounOrder,
} from "@/content/chapters/10";

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

function Spans({
  parts,
}: {
  parts: readonly { text: string; underline?: boolean }[];
}) {
  return (
    <>
      {parts.map((part, i) =>
        part.underline ? <u key={i}>{part.text}</u> : <span key={i}>{part.text}</span>,
      )}
    </>
  );
}

function Gloss({ fr, en }: { fr: string; en: string }) {
  return (
    <p className="mb-1 text-[15px] italic text-tb-example">
      <Rich text={fr} />
      <span className="not-italic text-tb-muted"> {en}</span>
    </p>
  );
}

function Page74() {
  return (
    <TextbookPage pageNumber={74} pageNumberSide="left">
      <ChapterHeader number={chapter10.number} title={chapter10.title} />
      <OverviewBlock />

      <SectionDivider title="I. Formes" />

      <Example
        centered
        text="Il *me* voit, se dirige vers *moi* et *me* dit bonjour."
      />

      <Rule>
        Le pronom personnel peut changer de forme selon sa fonction dans la
        phrase. Vous trouverez page suivante un tableau récapitulatif de ces
        différentes formes.
      </Rule>
    </TextbookPage>
  );
}

function Page75() {
  return (
    <TextbookPage pageNumber={75}>
      <Subhead text="I. 1 Formes du pronom personnel" />
      <table className="mb-5 w-full border-collapse text-center text-[14.5px]">
        <thead>
          <tr className="border-b border-tb-cyan/50 text-tb-teal">
            <th className="border border-tb-cyan/30 px-2 py-1.5 font-semibold">
              Sujet
            </th>
            <th className="border border-tb-cyan/30 px-2 py-1.5 font-semibold">
              Objet direct
            </th>
            <th className="border border-tb-cyan/30 px-2 py-1.5 font-semibold">
              Objet indirect
            </th>
            <th className="border border-tb-cyan/30 px-2 py-1.5 font-semibold">
              Tonique
            </th>
          </tr>
        </thead>
        <tbody>
          {pronounForms.map((row) => (
            <tr key={`${row.sujet}-${row.tonique}`}>
              <td className="border border-tb-cyan/25 px-2 py-1">{row.sujet}</td>
              <td className="border border-tb-cyan/25 px-2 py-1 italic text-tb-example">
                {row.direct}
              </td>
              <td className="border border-tb-cyan/25 px-2 py-1 italic text-tb-example">
                {row.indirect}
              </td>
              <td className="border border-tb-cyan/25 px-2 py-1 italic text-tb-example">
                {row.tonique}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Subhead text="I. 2 Nous et vous" />
      <Rule>
        Notez que les formes de la 1<sup>re</sup> et de la 2<sup>e</sup>{" "}
        personnes du pluriel sont particulièrement faciles puisqu&apos;elles
        restent <Rich text="*nous*" /> ou <Rich text="*vous*" /> quelle que soit
        la fonction.
      </Rule>

      <Subhead text="I. 3 Le pronom personnel réfléchi se" />
      <Rule>
        Ce pronom renvoie à un sujet de la 3<sup>e</sup> personne (du singulier
        ou du pluriel). Le pronom sujet et le pronom réfléchi représentent alors
        la même personne ou la même chose (
        <CrossRef>chapitre 21, I., p. 166</CrossRef>).
      </Rule>
      <p className="text-[15px] italic text-tb-example">
        <Rich text="Il *se* lave." />
      </p>
      <p className="mb-2 text-[15px] italic text-tb-example">
        <Rich text="Elles *se* lèvent." />
      </p>

      <ExerciseBox title="A. Dans les phrases suivantes, remplacez les mots soulignés par un pronom personnel.">
        {exerciseA.map((item, i) => (
          <ExerciseItem key={item.tail + item.cue} n={i + 1}>
            <Spans parts={item.spans} /> → {item.cue} <Blank width="6.5rem" />{" "}
            {item.tail}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page76() {
  return (
    <TextbookPage pageNumber={76} pageNumberSide="left">
      <SectionBar title="II. Pronom complément d'un verbe construit avec « à »" />
      <Example centered text="Christine obéit aux lois ; elle *y* obéit." />
      <Example centered text="Christine obéit à son père ; elle *lui* obéit." />
      <Example
        centered
        text="Christine pense à son père ; elle pense à *lui*."
      />

      <Subhead text="II. 1 Le pronom y" />
      <Rule>
        Pour remplacer un nom de chose, un nom abstrait ou un nom géographique
        précédés de <Rich text="*à*" />, on utilise <Rich text="*y*" />.
      </Rule>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Je m'habitue *à ma nouvelle maison*. (chose) → Je m'*y* habitue." />
      </p>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Je m'intéresse *à la philosophie*. (nom abstrait) → Je m'*y* intéresse." />
      </p>
      <p className="mb-2 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Je vais *au Mexique*. (nom géographique) → J'*y* vais." />
      </p>

      <Subhead text="II. 2 Le pronom lui" />
      <Rule>
        En règle générale, pour remplacer un nom de{" "}
        <Term>personne</Term> précédé de la préposition <Rich text="*à*" />, on
        utilise <Rich text="*lui*" /> (masculin ou féminin singulier) ou{" "}
        <Rich text="*leur*" /> (masculin ou féminin pluriel).
      </Rule>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Ce livre appartient *à mon père*. (personne, singulier) → Ce livre *lui* appartient." />
      </p>
      <p className="mb-2 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Cette voiture appartient *à mes parents*. (personne, pluriel) → Cette voiture *leur* appartient." />
      </p>

      <AttentionBox>
        <p>
          On utilise le pronom personnel <Rich text="*lui*" /> sans la
          préposition <Rich text="*à*" /> et on le place devant le verbe.
        </p>
        <p className="italic text-tb-example">
          <Rich text="Je téléphone *à mon père*. → Je *lui* téléphone." />
        </p>
        <p>
          (On ne peut pas dire : *« Je téléphone à lui. »)
        </p>
      </AttentionBox>

      <Subhead text="II. 3 Forme tonique du pronom personnel" />
      <Rule>
        Quand il s&apos;agit d&apos;un nom de <Term>personne</Term>, il faut
        conserver la préposition <Rich text="*à*" /> suivie de la forme{" "}
        <Term>tonique</Term> du pronom personnel uniquement dans les deux cas
        suivants :
      </Rule>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        quand le complément d&apos;objet direct est :{" "}
        <em>me, te, se, nous, vous</em> (c&apos;est le cas très souvent avec les
        verbes pronominaux).
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Le professeur s'adresse *aux étudiants*. → Le professeur s'adresse *à eux*." />
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Elle nous envoie *à son remplaçant*. → Elle nous envoie *à lui*." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] text-tb-ink">
        (On ne peut pas dire : *« Le professeur se leur adresse. » ou *« Elle
        nous lui envoie. »)
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        après certains verbes comme : <Term>être à</Term>,{" "}
        <Term>faire attention à</Term>, <Term>penser à</Term>,{" "}
        <Term>prendre garde à</Term>, <Term>rêver à</Term>, <Term>tenir à</Term>
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Je fais attention *à la petite fille*. → Je fais attention *à elle*." />
      </p>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Je pense *à Paul*. → Je pense *à lui*." />
      </p>
    </TextbookPage>
  );
}

function Page77() {
  return (
    <TextbookPage pageNumber={77}>
      <AttentionBox>
        <p>
          <span className="font-semibold">a. </span>
          Il ne faut pas confondre le pronom personnel{" "}
          <Rich text="*leur*" /> avec l&apos;adjectif possessif. Le pronom
          personnel indirect pluriel ne prend jamais de <em>s</em>.
        </p>
        <p className="italic text-tb-example">
          <Rich text="Je *leur* téléphone." /> (pronom personnel)
        </p>
        <p className="italic text-tb-example">
          <Rich text="*Leurs* amis sont partis." /> (adjectif possessif)
        </p>
        <p>
          <span className="font-semibold">b. </span>
          N&apos;oubliez pas que certains verbes français sont construits avec
          la préposition <Rich text="*à*" /> alors que, en anglais :
        </p>
        <p>– ils n&apos;ont pas de préposition.</p>
        <p className="italic">
          to obey s.o. = obéir <Rich text="*à*" /> quelqu&apos;un ; to telephone
          s.o. = téléphoner <Rich text="*à*" /> quelqu&apos;un
        </p>
        <p>
          – ou ils sont suivis d&apos;une préposition telle que <em>of</em>,{" "}
          <em>in</em>, etc.
        </p>
        <p className="italic">
          to think of = penser <Rich text="*à*" /> (
          <CrossRef>liste page 342</CrossRef>)
        </p>
        <p>
          <span className="font-semibold">c. </span>
          N&apos;oubliez pas qu&apos;en français de nombreux verbes sont suivis
          d&apos;un complément d&apos;objet direct de chose et d&apos;un
          complément d&apos;objet indirect de personne ; la construction
          n&apos;est pas la même en anglais.
        </p>
        <Gloss
          fr="Je donne un conseil *à mon ami*."
          en="I give my friend some advice."
        />
        <p className="italic text-tb-example">
          → <Rich text="Je *lui* donne un conseil." />
          <span className="not-italic text-tb-muted">
            {" "}
            = I give him some advice.
          </span>
        </p>
        <Gloss
          fr="Les parents promettent une récompense *à leur fille*."
          en="The parents promise their daughter a reward."
        />
        <p className="italic text-tb-example">
          → <Rich text="Les parents *lui* promettent une récompense." />
          <span className="not-italic text-tb-muted">
            {" "}
            The parents promise her a reward.
          </span>
        </p>
      </AttentionBox>

      <ExerciseBox title="B. Remplacez les mots soulignés par un pronom.">
        {exerciseB.map((item, i) => (
          <ExerciseItem key={item.map((p) => p.text).join("")} n={i + 1}>
            <Spans parts={item} />
          </ExerciseItem>
        ))}
      </ExerciseBox>

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

function Page78() {
  return (
    <TextbookPage pageNumber={78} pageNumberSide="left">
      <SectionBar title="III. Emploi du pronom « en »" />
      <Example centered text="Je veux des cerises ; j'*en* veux." />
      <Example centered text="Je veux trois cahiers ; j'*en* veux trois." />
      <Example centered text="J'ai besoin de ta voiture ; j'*en* ai besoin." />
      <Example
        centered
        text="Je me souviens de ton ami ; je me souviens de *lui*."
      />

      <Subhead text="III. 1 Emploi" />
      <Rule>
        On utilise <Rich text="*en*" /> pour remplacer un nom précédé de
        l&apos;article partitif (<Rich text="*du*, *de la*, *des*" />) ou de
        l&apos;article indéfini (<Rich text="*des*" />). La quantité est alors
        indéterminée.
      </Rule>
      <AttentionBox>
        <p>On comparera :</p>
        <p className="italic text-tb-example">
          <Rich text="Je veux *des* pommes." /> (quantité indéterminée) →{" "}
          <Rich text="J'*en* veux." />
          <span className="not-italic text-tb-muted"> I want some.</span>
        </p>
        <p>avec :</p>
        <p className="italic text-tb-example">
          <Rich text="Je veux *les* pommes." /> (totalité ; quantité déterminée) →{" "}
          <Rich text="Je *les* veux." />
          <span className="not-italic text-tb-muted"> I want them.</span>
        </p>
      </AttentionBox>

      <Subhead text="III. 2 Cas particuliers" />
      <Rule>
        Quand le substantif est complété par un{" "}
        <Term>adjectif numéral ou qualificatif</Term>, ou bien quand il est
        modifié par un <Term>adverbe de quantité</Term> (beaucoup, trop, peu,
        etc.), le substantif est remplacé par <Rich text="*en*" /> mais on garde
        alors l&apos;adjectif ou l&apos;adverbe.
      </Rule>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Elle a *trois enfants*. → Elle *en* a trois." />
      </p>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="J'ai acheté *trois bonnes pommes*. → J'*en* ai acheté trois bonnes." />
      </p>
      <p className="mb-2 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="J'ai *beaucoup de travail*. → J'*en* ai beaucoup." />
      </p>

      <Subhead text="III. 3 La préposition de" />
      <Rule>
        On utilise <Rich text="*en*" /> pour remplacer un nom de chose, un nom
        abstrait ou un nom géographique précédés de la préposition{" "}
        <Rich text="*de*" />.
      </Rule>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Je me souviens *de ta première voiture*. (chose) → Je m'*en* souviens." />
      </p>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="J'ai peur *de la mort*. (nom abstrait) → J'*en* ai peur." />
      </p>
      <p className="mb-2 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Je reviens *du Brésil*. (nom géographique) → J'*en* reviens." />
      </p>

      <AttentionBox>
        <p>
          Pour remplacer un nom de <Term>personne</Term> complément introduit
          par la préposition <Rich text="*de*" />, on garde la préposition{" "}
          <Rich text="*de*" />, suivie de la forme <Term>tonique</Term> du
          pronom.
        </p>
        <p className="italic text-tb-example">
          <Rich text="J'ai peur *de ce professeur*. → J'ai peur *de lui*." />
        </p>
        <p className="italic text-tb-example">
          <Rich text="Je suis jalouse *de ma sœur*. → Je suis jalouse *d'elle*." />
        </p>
      </AttentionBox>
    </TextbookPage>
  );
}

function Page79() {
  return (
    <TextbookPage pageNumber={79}>
      <ExerciseBox title="D. Remplacez les mots soulignés par un pronom.">
        {exerciseD.map((item, i) => (
          <ExerciseItem key={item.map((p) => p.text).join("")} n={i + 1}>
            <Spans parts={item} />
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="E. Traduisez.">
        {exerciseE.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="IV. Le pronom « le »" />
      <Example
        centered
        text="Elle est malade ; elle *l'*est depuis deux mois."
      />
      <Example
        centered
        text="Sais-tu ce que je t'ai acheté pour Noël ? Oui, je *le* sais."
      />

      <Subhead text="IV. 1 Emploi" />
      <SquareItem>
        <p>
          Le pronom <Rich text="*le*" /> peut remplacer un{" "}
          <Term>adjectif</Term> ou un nom <Term>attribut</Term> (les verbes sont
          alors les verbes <Term>être</Term>, <Term>sembler</Term>,{" "}
          <Term>devenir</Term>, <Term>paraître</Term>).
        </p>
      </SquareItem>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Je suis *généreux*. → Je *le* suis." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Ils sont *étudiants*. → Ils *le* sont." />
      </p>

      <AttentionBox>
        <p>
          Dans ce cas, on utilise toujours <Rich text="*le*" />, même quand
          l&apos;adjectif à remplacer est au féminin ou au pluriel.
        </p>
        <p className="italic text-tb-example">
          <Rich text="Ils sont *américains*. (masculin, pluriel) → Ils *le* sont." />
        </p>
        <p className="italic text-tb-example">
          <Rich text="Elles sont *contentes*. (féminin, pluriel) → Elles *le* sont." />
        </p>
        <p className="italic text-tb-example">
          <Rich text="Elle est *absente*. (féminin, singulier) → Elle *l'*est." />
        </p>
      </AttentionBox>

      <SquareItem>
        <p>
          On remarquera que l&apos;anglais fait l&apos;ellipse du pronom alors
          que cette ellipse est impossible en français.
        </p>
      </SquareItem>
      <p className="text-[15px] italic text-tb-example">
        <span className="not-italic text-tb-muted">
          Are you tired? Yes, I am.
        </span>{" "}
        <Rich text="Es-tu *fatiguée* ? Oui, je *le* suis." />
      </p>
    </TextbookPage>
  );
}

function Page80() {
  return (
    <TextbookPage pageNumber={80} pageNumberSide="left">
      <Subhead text="IV. 2 Le pronom le peut remplacer toute une proposition objet direct." />
      <p className="mb-3 text-[15px] italic text-tb-example">
        <Rich text="Je veux (*que tu viennes demain à 8 heures*.) (proposition complément direct de *je veux*) → Je *le* veux." />
      </p>

      <Subhead text="IV. 3 La proposition objet direct peut être une proposition infinitive." />
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="Je veux (*partir demain*.) (proposition complément de *je veux*) → Je *le* veux." />
      </p>
      <p className="mb-3 text-[15px] italic text-tb-example">
        <Rich text="Elle espère *être reçue à son examen*. → Elle *l'*espère." />
      </p>

      <AttentionBox>
        <p>
          <span className="font-semibold">a. </span>
          La subordonnée infinitive peut être objet direct d&apos;un verbe mais
          être introduite par <Rich text="*de*" /> qui est, alors, un simple mot
          de liaison.
        </p>
        <p className="italic text-tb-example">
          <Rich text="Il me permet *de sortir demain soir*." />
        </p>
        <p>
          Le verbe <Term>permettre</Term> est un verbe transitif{" "}
          <Term>direct</Term> ; on dit « permettre quelque chose ». Dans ce cas
          le pronom qui remplace la subordonnée est le pronom{" "}
          <Rich text="*le*" />.
        </p>
        <p className="italic text-tb-example">
          → <Rich text="Il me *le* permet." />
        </p>
        <p>
          <span className="font-semibold">b. </span>
          La subordonnée infinitive peut être complément d&apos;un verbe
          construit nécessairement avec la préposition <Rich text="*de*" /> (
          <CrossRef>liste page 343</CrossRef>).
        </p>
        <p className="italic text-tb-example">
          <Rich text="Je me charge *de lui trouver une chambre*." />
        </p>
        <p>
          Le verbe <Term>se charger de</Term> est un verbe transitif indirect ;
          il est toujours construit avec la préposition <Rich text="*de*" /> ;
          on dit <em>se charger de quelque chose</em>. Dans ce cas le pronom qui
          remplace la subordonnée est le pronom <Rich text="*en*" />.
        </p>
        <p className="italic text-tb-example">
          → <Rich text="Je m'*en* charge." />
        </p>
      </AttentionBox>

      <ExerciseBox title="F. Répondez aux questions suivantes sans répéter les mots soulignés.">
        <p className="mb-2 text-[14.5px] italic text-tb-ink">
          Es-tu <u>fatiguée</u> ? → Oui, je{" "}
          <span className="text-tb-example">le</span> suis.
        </p>
        {exerciseF.map((item, i) => (
          <ExerciseItem key={item.map((p) => p.text).join("")} n={i + 1}>
            <Spans parts={item} />
            <Blank width="9rem" />
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
    </TextbookPage>
  );
}

function Page81() {
  return (
    <TextbookPage pageNumber={81}>
      <SectionBar title="V. Place du pronom" />
      <Example centered text="Je *les lui* donne." />
      <Example centered text="Je ne *lui en* parle pas." />
      <Example
        centered
        text="« Tu *me les* donneras demain », *me* dit-il."
      />
      <Example centered text="Donne-*les*-*moi* maintenant." />
      <Example centered text="Peut-être pourras-*tu* venir ce soir ?" />

      <Subhead text="V. 1 Les pronoms objets" />
      <SquareItem>
        <p>
          Ces pronoms (objets directs ou indirects) précèdent toujours le verbe
          sauf à l&apos;impératif affirmatif (
          <CrossRef>V. 2</CrossRef>).
        </p>
      </SquareItem>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Je *les lui* prêterai." />
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Je ne *la leur* ai pas montrée." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Ne *me les* perdez pas." />
      </p>

      <SquareItem>
        <p>
          Dans le cas de plusieurs pronoms objets, il faut suivre l&apos;ordre
          indiqué dans le tableau ci-dessous.
        </p>
      </SquareItem>
      <table className="mb-3 w-full max-w-lg border-collapse text-center text-[14.5px]">
        <thead>
          <tr className="text-tb-teal">
            {["1", "2", "3", "4", "5"].map((n) => (
              <th
                key={n}
                className="border border-tb-cyan/30 px-2 py-1 font-semibold"
              >
                {n}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pronounOrder.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td
                  key={`${row[0]}-${i}`}
                  className="border border-tb-cyan/25 px-2 py-1 italic text-tb-example"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[14.5px] italic text-tb-example">
        <Rich text="Je *lui en* donne." />
      </p>
      <p className="text-[14.5px] italic text-tb-example">
        <Rich text="Ils *me la* prêtent." />
      </p>
      <p className="text-[14.5px] italic text-tb-example">
        <Rich text="Ne *m'en* donnez pas !" />
      </p>
      <p className="mb-3 text-[14.5px] italic text-tb-example">
        <Rich text="Il ne *les y* conduit pas." />
      </p>

      <SquareItem>
        <p>
          Si on a <Term>deux</Term> pronoms compléments, on ne combine jamais
          deux pronoms de la même colonne. On ne peut pas non plus utiliser
          ensemble des pronoms des colonnes 1 et 3. Dans ce dernier cas, les
          pronoms <Rich text="*lui*" /> et <Rich text="*leur*" /> sont remplacés
          par la préposition <Rich text="*à*" /> et le pronom tonique
          correspondant (<CrossRef>II. 3, a, p. 76</CrossRef>).
        </p>
      </SquareItem>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Elle *me* présente *à lui*." />
      </p>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Elle s'adresse *à eux*." />
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Il *vous* a présenté *à moi*." />
      </p>

      <Subhead text="V. 2 À l'impératif affirmatif" />
      <p className="mb-1 text-[15px] text-tb-ink">
        – les pronoms <Term>suivent</Term> le verbe ;
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">
        – l&apos;objet direct (<em>le, la, les</em>) précède{" "}
        <Term>l&apos;objet indirect</Term> ;
      </p>
      <p className="text-[15px] text-tb-ink">
        – <em>me</em> et <em>te</em> deviennent <Rich text="*moi*" /> et{" "}
        <Rich text="*toi*" /> sauf devant <Rich text="*en*" /> où ils deviennent{" "}
        <Rich text="*m'*" /> et <Rich text="*t'*" /> ;
      </p>
    </TextbookPage>
  );
}

function Page82() {
  return (
    <TextbookPage pageNumber={82} pageNumberSide="left">
      <p className="mb-2 text-[15px] text-tb-ink">
        – les traits d&apos;union sont obligatoires entre le verbe et les
        pronoms compléments de l&apos;impératif.
      </p>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Montre-*moi* ton livre. → Montre-*le*-*moi*. (direct ; indirect)" />
      </p>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Donnez-*les*-*nous*." />
      </p>
      <p className="mb-4 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Donnez-*m'en*." />
      </p>

      <Subhead text="V. 3 L'inversion du pronom sujet" />
      <Rule>Cette inversion est obligatoire :</Rule>
      <p className="mb-1 text-[15px] leading-[1.65] text-tb-ink">
        – dans une proposition <Term>incise</Term>, c&apos;est-à-dire après le
        verbe de déclaration qui suit le discours direct :
      </p>
      <p className="mb-2 pl-4 text-[15px] italic text-tb-example">
        <Rich text="Viens, *dit-elle*." />
        <span className="not-italic text-tb-muted"> Come, she says.</span>
      </p>
      <p className="mb-1 text-[15px] leading-[1.65] text-tb-ink">
        – après <Rich text="*peut-être*, *aussi*, *sans doute*, *à peine*" />,
        placés au début de la phrase :
      </p>
      <p className="mb-2 pl-4 text-[15px] italic text-tb-example">
        <Rich text="*Peut-être* sera-*t-il* en retard." />
      </p>
      <p className="mb-1 text-[15px] leading-[1.65] text-tb-ink">
        – dans l&apos;interrogation directe :
      </p>
      <p className="mb-4 pl-4 text-[15px] italic text-tb-example">
        <Rich text="Pars-*tu* en vacances ?" />
      </p>

      <ExerciseBox title="H. Dans les phrases suivantes, remplacez les mots soulignés par les pronoms qui conviennent.">
        {exerciseH.map((item, i) => (
          <ExerciseItem key={item.map((p) => p.text).join("")} n={i + 1}>
            <Spans parts={item} />
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="VI. La forme tonique du pronom" />
      <Example centered text="Il vient avec *moi*." />
      <Example centered text="*Toi* *tu* as raison." />

      <Subhead text="VI. 1 Emploi" />
      <Rule>
        La forme tonique du pronom personnel (parfois appelé{" "}
        <Term>pronom personnel disjoint</Term>) est utilisée après les
        prépositions.
      </Rule>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Pierre est venu *avec ses amis*. → Pierre est venu *avec eux*." />
      </p>
      <p className="mb-2 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Ils ont dormi *chez leur tante*. → Ils ont dormi *chez elle*." />
      </p>

      <AttentionBox>
        <p>
          Comme on le sait, si la préposition est <Rich text="*à*" /> ou{" "}
          <Rich text="*de*" />, la règle est plus complexe (
          <CrossRef>II et III, pages 76 à 79</CrossRef>).
        </p>
      </AttentionBox>
    </TextbookPage>
  );
}

function Page83() {
  return (
    <TextbookPage pageNumber={83}>
      <Subhead text="VI. 2 L'emphase" />
      <Rule>
        On utilise la forme tonique du pronom dans les expressions{" "}
        <Term>emphatiques</Term> pour marquer l&apos;insistance, la mise en
        relief (<em>c&apos;est… qui/que</em>, <em>… qui/que</em>,{" "}
        <em>il n&apos;y a que…</em>).
      </Rule>
      <Gloss
        fr="*Ah*, j'ai fini mon travail ; *toi* pas."
        en="I have finished my work; you haven't."
      />
      <Gloss
        fr="*Ce sont eux* qui m'ont prêté leur maison."
        en="They are the ones who lent me their house."
      />
      <p className="mb-3 text-[15px] italic text-tb-example">
        <Rich text="Il n'y a que *toi* qui puisses le faire." />
        <span className="not-italic text-tb-muted">
          {" "}
          You are the only one who can do it.
        </span>
      </p>

      <Subhead text="VI. 3 La comparaison" />
      <Rule>
        On utilise la forme tonique du pronom comme deuxième élément d&apos;une{" "}
        <Term>comparaison</Term>.
      </Rule>
      <p className="text-[15px] italic text-tb-example">
        <Rich text="Il est plus riche que *moi*." />
      </p>
      <p className="mb-2 text-[15px] italic text-tb-example">
        <Rich text="Elles sont aussi intelligentes qu'*eux*." />
      </p>

      <Subhead text="VI. 4 La forme tonique soi" />
      <SquareItem>
        <p>
          On utilise la forme tonique <Rich text="*soi*" /> comme complément
          lorsque ce pronom renvoie à <Rich text="*on*" /> ou à un pronom
          indéfini sujet (<em>chacun, tout le monde, personne</em>).
        </p>
      </SquareItem>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="On a toujours besoin d'un plus petit que *soi*." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Chacun travaille pour *soi*." />
      </p>
      <SquareItem>
        <p>
          Mais on dira : <em>Jacques travaille pour lui</em>, parce que le sujet
          est <Term>précis</Term>.
        </p>
      </SquareItem>
      <SquareItem>
        <p>
          Pour éviter toute confusion (<Rich text="*lui*" /> dans l&apos;exemple
          ci-dessus, pourrait, hors contexte, représenter une autre personne que
          Jacques) et pour bien marquer que le pronom complément est la même
          personne que le sujet, on ajoutera <Term>même/mêmes</Term>.
        </p>
      </SquareItem>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="L'étudiant travaille pour *lui-même*." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Elles travaillent pour *elles-mêmes*." />
      </p>

      <ExerciseBox title="I. Remplacez les mots soulignés par un pronom.">
        {exerciseI.map((item, i) => (
          <ExerciseItem key={item.map((p) => p.text).join("")} n={i + 1}>
            <Spans parts={item} />
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page84() {
  return (
    <TextbookPage pageNumber={84} pageNumberSide="left">
      <ExerciseBox title="J. Remplacez les pronoms soulignés par des noms.">
        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
          <div>
            {exerciseJ.slice(0, 5).map((item, i) => (
              <ExerciseItem key={item.map((p) => p.text).join("")} n={i + 1}>
                <Spans parts={item} />
              </ExerciseItem>
            ))}
          </div>
          <div>
            {exerciseJ.slice(5).map((item, i) => (
              <ExerciseItem key={item.map((p) => p.text).join("")} n={i + 6}>
                <Spans parts={item} />
              </ExerciseItem>
            ))}
          </div>
        </div>
      </ExerciseBox>

      <ExerciseBox title="K. Remplacez les mots soulignés par des pronoms.">
        <p>
          <Spans parts={exerciseK} />
        </p>
      </ExerciseBox>

      <ExerciseBox title="L. Remplacez les mots soulignés par des pronoms personnels en faisant attention à la place de ces pronoms et à l'accord des verbes.">
        {exerciseL.map((item, i) => (
          <ExerciseItem key={item.map((p) => p.text).join("")} n={i + 1}>
            <Spans parts={item} />
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="M. Traduisez.">
        <ExerciseItem n={1}>
          Do <u>you</u> understand this question? I don&apos;t.
        </ExerciseItem>
        {exerciseM.slice(1).map((item, i) => (
          <ExerciseItem key={item} n={i + 2}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter10() {
  return (
    <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">
      <Page74 />
      <Page75 />
      <Page76 />
      <Page77 />
      <Page78 />
      <Page79 />
      <Page80 />
      <Page81 />
      <Page82 />
      <Page83 />
      <Page84 />
    </div>
  );
}
