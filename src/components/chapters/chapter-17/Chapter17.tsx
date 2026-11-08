import {
  AttentionBox,
  Blank,
  ChapterHeader,
  Example,
  ExerciseBox,
  ExerciseItem,
  Nb,
  Rich,
  Rule,
  SectionBar,
  SquareItem,
  Subhead,
  TealHead,
  TextbookPage,
} from "@/components/textbook";
import {
  chapter17,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseD,
  exerciseE,
  overview,
} from "@/content/chapters/17";

function OverviewBlock() {
  return (
    <div className="mx-auto max-w-[38rem] space-y-3 text-center">
      {overview.map((section) => (
        <div key={section.roman}>
          <p className="text-[16px] font-semibold text-tb-teal">
            {section.roman} {section.title}
          </p>
          {section.examples.map((text) => (
            <p key={text} className="text-[14.5px] leading-relaxed text-tb-example italic">
              <Rich text={text} />
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

function Gloss({ fr, en }: { fr: string; en: string }) {
  return (
    <p className="mb-1 text-[14.5px] italic leading-relaxed text-tb-example">
      <Rich text={fr} />
      <span className="not-italic text-tb-muted"> {en}</span>
    </p>
  );
}

function Page138() {
  return (
    <TextbookPage pageNumber={138} pageNumberSide="left">
      <ChapterHeader number={chapter17.number} title={chapter17.title} />
      <OverviewBlock />
      <SectionBar title="I. Prépositions de temps" />
      <Gloss fr="J'ai *travaillé pendant* trois heures." en="I worked for three hours (and stopped)." />
      <Gloss fr="Je *travaille depuis* trois heures." en="I have been working for three hours (still am)." />
      <Gloss fr="Je ferai ce devoir *en* une heure." en="I will do this homework in an hour (duration)." />
      <Gloss fr="Je ferai ce devoir *dans* une heure." en="I will do this homework in an hour (an hour from now)." />

      <Subhead text="I. 1 Traduction de *for* (préposition de temps)" />
      <TealHead>
        a. La préposition <em>pour</em> ne peut pas s&apos;employer pour indiquer un laps de temps déjà écoulé. Se traduit alors par <em>pendant</em> (ou <em>durant</em>).
      </TealHead>
      <Example text="J'ai travaillé *pendant* trois heures." translation="I worked for three hours." />
      <TealHead>
        b. <em>For</em> peut se traduire par <em>pour</em> et marquer une durée uniquement quand il s&apos;agit d&apos;un projet, d&apos;une prévision.
      </TealHead>
      <Example text="Je pars demain à Paris *pour* 15 jours." translation="Tomorrow, I leave for Paris for 15 days." />
      <TealHead>
        c. Lorsqu&apos;une action commencée dans le passé aboutit au présent, quand l&apos;action a commencé et continue de se réaliser au présent, l&apos;anglais utilise le present perfect et la préposition <em>for</em>, alors que le français utilise le présent et la préposition <em>depuis</em>.
      </TealHead>
    </TextbookPage>
  );
}

function Page139() {
  return (
    <TextbookPage pageNumber={139}>
      <Example
        text="J'attends *depuis* deux heures. (J'ai attendu et j'attends encore.)"
        translation="I have been waiting for 2 hours."
      />
      <Nb>
        Notez que <em>depuis</em>, dans ce cas, peut indiquer une origine ou une durée. <em>J&apos;attends depuis deux heures</em> peut signifier : I have been waiting since 2 o&apos;clock ou I have been waiting for 2 hours.
      </Nb>

      <Subhead text="I. 2 Les prépositions *en* et *dans*" />
      <Rule>On notera la différence entre <em>en deux heures</em> et <em>dans deux heures</em>.</Rule>
      <Rule><em>En</em> indique le temps utilisé pour accomplir une action.</Rule>
      <Rule><em>Dans</em> indique une idée de futur, une période à la fin de laquelle commencera l&apos;action.</Rule>
      <Rule>
        On dira : « Je me marierai <em>dans</em> un mois. » (Et non pas « en un mois » car cela voudrait dire que la cérémonie durerait un mois !)
      </Rule>
      <ExerciseBox title="A. Traduisez.">
        {exerciseA.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>{sentence}</ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="II. Prépositions de lieu" />
      <Gloss fr="Je me promène *dans* la rue." en="I am walking in/on the street." />
      <Gloss fr="Je suis *dans* le bus." en="I am on the bus." />
      <Gloss fr="Ils habitaient *au* Mexique ; ils travaillent *en* Afrique." en="They lived in Mexico; they work in Africa." />
      <Gloss fr="Ils vont *à* Paris." en="They are going to Paris." />
      <Gloss fr="Elles habitent *à* 200 mètres d'ici." en="They live 200 meters from here." />

      <Subhead text="II. 1 La préposition *dans*" />
      <TealHead>a. Dans et sur</TealHead>
      <Rule><em>Dans</em> marque l&apos;intérieur d&apos;un lieu ou d&apos;un objet alors que <em>sur</em> marque le simple contact.</Rule>
      <Example text="Je suis *dans* mon lit." translation="I am in my bed." />
      <Example text="Je suis *sur* mon lit." translation="I am on my bed." />
    </TextbookPage>
  );
}

function Page140() {
  return (
    <TextbookPage pageNumber={140} pageNumberSide="left">
      <Example text="Je suis assis *dans* un fauteuil." translation="(Idée que l'on est entouré par les bras du fauteuil.) I am sitting in an armchair." />
      <Example text="Je suis assis *sur* une chaise, *sur* un banc." translation="I am sitting on a chair, on a bench." />
      <Rule>On dit :</Rule>
      <Example text="Je suis *dans* la cour de l'école." translation="I am in the school yard." />
      <Example text="Je me promène *sur* la route." translation="I am on the highway." />
      <Example text="Je me promène *dans* la rue." translation="I am walking in/on the street." />
      <Nb>
        noter la différence entre :
        <br /> l&apos;anglais britannique :
        <br /> – to walk in the street
        <br /> – to live in Downing Street
        <br /> et l&apos;anglais américain :
        <br /> – to walk on the street
        <br /> – to live on Wall Street
      </Nb>
      <AttentionBox>
        <p>On traduira :</p>
        <p><em>I am on the bus.</em> par Je suis dans le bus.</p>
        <p><em>I am on the train.</em> par Je suis dans le train.</p>
        <p><em>I am on the subway.</em> par Je suis dans le métro.</p>
        <p><em>I am on the phone.</em> par Je suis au téléphone.</p>
        <p>(« Sur le bus », « sur le train » ou « sur le métro » voudrait dire que l&apos;on est sur le toit du véhicule.)</p>
      </AttentionBox>

      <TealHead>b. Dans et en</TealHead>
      <Rule><em>Dans</em> marque l&apos;espace intérieur, physique et matériel, alors que <em>en</em> a tendance à marquer une intériorité psychologique.</Rule>
      <Example text="Voilà ce que je ressens *en* moi." />
      <Example text="Il y a quelque chose de caché *dans* mon moteur." />
      <Rule>
        Quand il s&apos;agit des moyens de locomotion, on utilise <em>en</em> devant les noms non déterminés (aller en avion, en auto, en bateau, en train, etc.) et l&apos;on emploie <em>dans</em> quand le nom est déterminé.
      </Rule>
      <Example text="Je suis venu *en* voiture." />
      <Example text="Je suis venu *dans* la voiture de mon frère." />

      <TealHead>c. Dans et à</TealHead>
      <Rule>
        Quand il s&apos;agit des points cardinaux, on utilise <em>à</em> pour indiquer une direction (alors que l&apos;anglais n&apos;utilise pas de préposition) mais <em>dans</em> pour indiquer une région située à l&apos;intérieur d&apos;un pays.
      </Rule>
      <Example text="Montréal est situé *au* nord des États-Unis." translation="(Et non pas dans le nord des États-Unis = in the north of the USA.)" />

      <TealHead>d. Notez que l&apos;on dit :</TealHead>
      <Rule>– boire <em>dans</em> un verre = to drink from/out of a glass.</Rule>
      <Rule>– manger <em>dans</em> une assiette = to eat from a plate.</Rule>
      <Rule>– prendre qqch. <em>dans</em> sa poche = to take something out of one&apos;s pocket.</Rule>

      <ExerciseBox title="B. Traduisez.">
        {exerciseB.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>{sentence}</ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page141() {
  return (
    <TextbookPage pageNumber={141}>
      <Subhead text="II. 2 Prépositions et noms de pays" />
      <TealHead>a. Règle générale</TealHead>
      <Rule>Le lieu où l&apos;on est ou le lieu où l&apos;on va se marque par :</Rule>
      <SquareItem>
        <p><em>en</em> devant les noms féminins ou les noms masculins singuliers commençant par une voyelle.</p>
        <Example text="Je vais *en* Louisiane puis *en* Ohio." />
      </SquareItem>
      <SquareItem>
        <p><em>au/aux</em> devant les noms masculins.</p>
        <Example text="Il part *au* Mexique dans un mois." />
        <Example text="Elle est allée *aux* États-Unis." />
      </SquareItem>
      <SquareItem>
        <p><em>à</em> devant les noms de ville.</p>
        <Example text="Nous vivons *à* New York depuis deux ans." />
      </SquareItem>
      <Rule>Le lieu d&apos;où l&apos;on vient se marque par :</Rule>
      <SquareItem>
        <p><em>de/d&apos;</em> devant les noms féminins ou les noms masculins singuliers commençant par une voyelle.</p>
        <Example text="Je reviens *de* Pologne ; je reviens *d'*Irak." />
      </SquareItem>
      <SquareItem>
        <p><em>du/des</em> devant les noms de pays masculins.</p>
        <Example text="Je reviens *du* Brésil, *du* Japon, *des* États-Unis." />
      </SquareItem>
      <SquareItem>
        <p><em>de/d&apos;</em> devant les noms de ville.</p>
        <Example text="Je reviens *de* Bordeaux, *de* Dakar, *d'*Ankara." />
      </SquareItem>

      <TealHead>b. Exceptions : les noms d&apos;îles</TealHead>
      <SquareItem>
        <p>Les noms d&apos;îles féminins suivent souvent la règle des noms de pays féminins (<em>en</em> ou <em>de</em>).</p>
        <Example text="Je vais *en* Crète ; je suis *en* Corse. Je reviens *de* Crète, *de* Corse." />
      </SquareItem>
      <SquareItem>
        <p>Les noms d&apos;îles masculins prennent la préposition <em>à</em> ou <em>de</em> (comme les noms de villes).</p>
        <Example text="Je vais *à* Cuba, *à* Madagascar." />
        <Example text="Je reviens *de* Cuba, *de* Madagascar." />
      </SquareItem>
      <SquareItem>
        <p>Les noms d&apos;îles (archipels ou groupes d&apos;îles) prennent la préposition <em>au</em> ou <em>de</em> combinée à l&apos;article défini (<em>aux</em> ou <em>des</em>).</p>
        <Example text="Je vais *aux* Antilles. Je reviens *des* Philippines." />
      </SquareItem>
    </TextbookPage>
  );
}

function Page142() {
  return (
    <TextbookPage pageNumber={142} pageNumberSide="left">
      <Subhead text="II. 3 La notion de distance" />
      <Rule>
        Pour indiquer la distance d&apos;un point à un autre, on est obligé, en français, d&apos;utiliser la préposition <em>à</em>.
      </Rule>
      <Example text="Montréal est *à* 500 km de Toronto." translation="Montreal is 500 km from Toronto." />
      <Example text="J'habite *à* deux pas d'ici." translation="I live just steps from here (very close to)." />

      <SectionBar title="III. Pièges à éviter" />
      <Gloss fr="Après avoir appris nos leçons, ils regardaient une émission *à* la télévision." en="After learning his lessons, he watched a programme on TV." />
      <Gloss fr="Nous louons notre poste de télé 8 euros *par* jour." en="We rent our TV 8 euros a day." />

      <Subhead text="III. 1 Attention à la traduction de *before* et *after*" />
      <TealHead>a. Il ne faut pas confondre <em>avant</em> et <em>devant</em>.</TealHead>
      <Rule><em>Devant</em> ne peut pas introduire un complément de temps.</Rule>
      <Example text="Je viendrai te voir *avant* 5 heures. (temps)" />
      <Example text="Je te rencontrerai *devant* le théâtre. (lieu)" />
      <TealHead>b. <em>Avant</em> est relié à l&apos;infinitif par la préposition <em>de</em> : <em>avant de</em> + infinitif. Il est immédiatement suivi de l&apos;infinitif.</TealHead>
      <Example text="*Avant de* quitter la salle." translation="Before leaving the room." />
      <TealHead>c. Si <em>après</em> est suivi d&apos;un infinitif, cet infinitif est un infinitif passé.</TealHead>
      <Example text="Après avoir quitté la pièce…" translation="After leaving the room…" />
      <AttentionBox>
        <p><em>Avant</em> et <em>après</em> ne sont jamais suivis d&apos;un participe présent. On ne peut pas dire : « Après quittant la salle… »</p>
      </AttentionBox>

      <Subhead text="III. 2 Notez bien l'emploi des prépositions dans certaines expressions." />
      <Rule>a. On regarde un reportage, un film, etc. <em>à</em> la télévision (on TV).</Rule>
      <Rule>
        b. On loue quelque chose <em>à</em> l&apos;heure, <em>à</em> la journée, <em>au</em> mois, <em>à</em> l&apos;année mais on paie tant de l&apos;heure (ou l&apos;heure), par jour, par mois, par an.
      </Rule>
      <Example text="L'agence loue des voitures *à* la journée." translation="The agency rents cars by the day." />
      <Example text="L'agence loue une Peugeot 30 euros *par* jour." translation="The agency rents a Peugeot 30 euros per day." />
      <Example text="Je loue un pédalo et je paie 5 euros l'heure (ou de l'heure)." translation="I rent a pedalo and I pay 5 euros an hour." />
      <Nb>
        Rappel : on ne forme pas de complément de nom avec une préposition de lieu (→ chapitre 5, II. 1, p. 42). <em>The crowd around him was shouting. La foule qui l&apos;entourait criait.</em>
      </Nb>
    </TextbookPage>
  );
}

function Page143() {
  return (
    <TextbookPage pageNumber={143}>
      <Subhead text="III. 3 Après une conjonction de coordination" />
      <Rule>Il faut répéter, en général, la préposition de lieu.</Rule>
      <Example text="Je n'irai pas *chez* lui mais *chez* vous." />

      <ExerciseBox title="C. Traduisez.">
        {exerciseC.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>{sentence}</ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="D. Complétez avec la préposition qui convient.">
        {exerciseD.map((parts, index) => (
          <ExerciseItem key={parts[0]} n={index + 1}>
            {parts.map((part, partIndex) => (
              <span key={`${part}-${partIndex}`}>
                {part}
                {partIndex < parts.length - 1 ? <Blank width={partIndex === 0 ? "3.5rem" : "3rem"} /> : null}
              </span>
            ))}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="E. Traduisez.">
        {exerciseE.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>{sentence}</ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter17() {
  return (
    <div className="space-y-8 py-8">
      <Page138 />
      <Page139 />
      <Page140 />
      <Page141 />
      <Page142 />
      <Page143 />
    </div>
  );
}
