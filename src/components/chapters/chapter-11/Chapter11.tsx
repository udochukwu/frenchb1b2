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
  SectionDivider,
  SquareItem,
  Subhead,
  Term,
  TextbookPage,
} from "@/components/textbook";
import {
  chapter11,
  exerciseB,
  exerciseC,
  exerciseD,
  exerciseE,
  exerciseF,
  exerciseG,
  exerciseI,
  overview,
} from "@/content/chapters/11";

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

function NoteLabel({ n }: { n?: string }) {
  return (
    <p className="mb-1 mt-4 text-[14.5px] font-semibold text-tb-teal">
      N. B.{n ? ` ${n}` : ""}
    </p>
  );
}

function Page85() {
  return (
    <TextbookPage pageNumber={85}>
      <ChapterHeader number={chapter11.number} title={chapter11.title} />
      <OverviewBlock />

      <SectionDivider title="I. Traduction de « it is »" />

      <p className="mb-1 text-center text-[14.5px] italic text-tb-example">
        <span className="not-italic text-tb-muted">
          Where is my pen? It is on the table.
        </span>{" "}
        <Rich text="Où est mon stylo ? *Il* est sur la table." />
      </p>
      <p className="mb-3 text-center text-[14.5px] italic text-tb-example">
        <span className="not-italic text-tb-muted">
          Where is my ring? It is on the table.
        </span>{" "}
        <Rich text="Où est ma bague ? *Elle* est sur la table." />
      </p>

      <Rule>
        Lorsque l&apos;on reprend par un pronom un objet ou une idée{" "}
        <Term>déjà mentionnés</Term>, on utilise comme sujet, selon les cas, le
        pronom personnel <Rich text="*il/elle*" /> ou le pronom{" "}
        <Rich text="*ce/cela*" />.
      </Rule>

      <Subhead text="I. 1 It représente un objet précis déjà mentionné" />
      <Rule>
        On traduit alors <Rich text="*it*" /> par <Rich text="*il*" /> ou{" "}
        <Rich text="*elle*" /> selon le genre qu&apos;a le nom en français.
      </Rule>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Où est mon livre ? → *Il* est dans le salon." />
      </p>
      <p className="pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Où est ta serviette ? → *Elle* est dans le tiroir." />
      </p>
    </TextbookPage>
  );
}

function Page86() {
  return (
    <TextbookPage pageNumber={86} pageNumberSide="left">
      <Subhead text="I. 2 It représente une idée générale" />
      <Rule>
        On traduira alors <Rich text="*it*" /> par <Rich text="*ce*" /> ou{" "}
        <Rich text="*cela*" />. C&apos;est également le cas lorsque{" "}
        <Rich text="*it*" /> implique une généralisation ou sert de reprise à
        toute une proposition antérieure.
      </Rule>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        On utilise <Rich text="*ce*" /> (ou <Rich text="*c'*" />){" "}
        <Term>immédiatement</Term> devant le verbe <Term>être</Term>.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Nous passerons quinze jours en Norvège ; *ce* sera intéressant." />
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Je n'ai rien vu ; *c'est* dommage." />
      </p>
      <Rule>
        On garde la forme <Rich text="*ce*" /> devant le verbe{" "}
        <Term>être</Term> <Term>directement</Term> précédé de la négation{" "}
        <Rich text="*ne*" />.
      </Rule>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Nous avons attendu ; *ce* n'était pas agréable." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Si on m'accuse, *ce* ne sera pas juste." />
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        On utilise <Rich text="*cela*" /> dans les autres cas.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Il a répondu à côté de la question ; *cela* prouve qu'il n'a rien compris." />
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Il ne l'a même pas remerciée de son cadeau ; *cela* lui a fait de la peine." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Venir te voir dimanche prochain ? *Cela* ne me sera pas facile." />
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">c. </span>
        <Rich text="*ça*" /> remplace souvent <Rich text="*cela*" /> dans le
        langage parlé mais cette forme est à éviter à l&apos;écrit.
      </p>

      <NoteLabel n="1" />
      <Rule>
        Dans les deux cas (I. 1 et I. 2), le sujet « it » (
        <Rich text="*il, elle, ce, cela*" />) est un sujet{" "}
        <Term>réel</Term>.
      </Rule>
      <p className="mb-2 text-[14.5px] leading-[1.65] text-tb-ink">
        (Il représente un élément déjà mentionné ; il peut être remplacé par un
        nom.)
      </p>
      <SquareItem>
        <p>
          Dans le cas I. 1, on peut remplacer <Rich text="*il/elle*" /> par la
          répétition du nom.
        </p>
      </SquareItem>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Où est mon stylo ? → Mon stylo (*il*) est sur la table." />
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Où est ma bague ? → Ma bague (*elle*) est sur la table." />
      </p>
      <SquareItem>
        <p>
          Dans le cas I. 2, <Rich text="*cela*" /> peut être remplacé par un mot
          à valeur générale : cet objet, cette idée, cette action, cette
          attitude, etc.
        </p>
      </SquareItem>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Nous avons attendu pendant cinq heures ; *cela* (cette attente) n'était pas agréable." />
      </p>

      <NoteLabel n="2" />
      <Rule>
        On notera la différence de sens entre ces deux phrases :
      </Rule>
      <Gloss
        fr="L'orateur parlera en public ; *il* sera intéressant."
        en="The speaker will speak in public; he will be interesting."
      />
      <Gloss
        fr="L'orateur parlera en public ; *ce* sera intéressant."
        en="The speaker will speak in public; it (that) will be interesting."
      />
      <p className="mb-1 text-[15px] text-tb-ink">
        Dans le premier cas, le pronom personnel <Rich text="*il*" /> représente
        une personne.
      </p>
      <p className="mb-3 text-[15px] text-tb-ink">
        Dans le deuxième cas, <Rich text="*ce*" /> reprend l&apos;idée générale
        de discours.
      </p>

      <NoteLabel n="3" />
      <Rule>
        Lorsque, dans un contexte précis, on montre une personne ou une chose,
        on peut utiliser <Rich text="*c'est*" /> + nom singulier ou{" "}
        <Rich text="*ce sont*" /> + nom pluriel. Dans ce cas,{" "}
        <Rich text="*c'est/ce sont*" /> peut être remplacé par{" "}
        <Rich text="*voici*" />. (Il s&apos;agit de montrer et non pas de
        reprendre un nom déjà mentionné.)
      </Rule>
      <Gloss fr="*C'est* ma règle." en="It's (That's) my ruler." />
      <Gloss fr="*Ce sont* mes enfants." en="Those are my children." />
    </TextbookPage>
  );
}

function Page87() {
  return (
    <TextbookPage pageNumber={87}>
      <SectionBar title="II. « Il est » / « C'est » + adjectif" />
      <Example centered text="*Il* est souhaitable que vous veniez." />
      <Example centered text="*Il* est bon de partir." />
      <Example centered text="*C'est* bon à manger." />

      <Subhead text="II. 1 Sujet apparent (il est)" />
      <SquareItem>
        <p>
          On utilise <Rich text="*il est*" /> lorsque l&apos;adjectif qui suit
          le verbe <Term>être</Term> introduit un infinitif précédé de la
          préposition <Rich text="*de*" /> ;
        </p>
      </SquareItem>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Il* est bon *de* partir." />
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Il* est préférable *d'*étudier avant le test." />
      </p>
      <SquareItem>
        <p>
          lorsque l&apos;adjectif qui suit le verbe <Term>être</Term> introduit
          une subordonnée commençant par <Rich text="*que*" />.
        </p>
      </SquareItem>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Il* est souhaitable *que* vous veniez." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Il* est important *que* vous nous téléphoniez." />
      </p>
      <Rule>
        Le <Rich text="*il*" /> de « il est » est un{" "}
        <Term>sujet apparent</Term> ; il ne remplace aucun nom ; il est «
        neutre » et sert seulement à annoncer le vrai sujet (l&apos;infinitif ou
        la subordonnée qui suit le verbe être). Le sujet apparent{" "}
        <Rich text="*il*" /> ne peut pas être remplacé par le mot{" "}
        <Term>chose</Term>.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="*Il* est bon de partir. = [Partir] est bon. Partir est donc le sujet réel." />
      </p>
      <p className="mb-2 pl-4 text-[14.5px] text-tb-muted">
        It&apos;s good to leave.
      </p>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="*Il* est souhaitable que vous veniez. = [Que vous veniez] est souhaitable." />
      </p>
      <p className="mb-4 pl-4 text-[14.5px] text-tb-muted">
        It is preferable that you should come.
      </p>

      <Subhead text="II. 2 Sujet réel (il/elle est ou c'est)" />
      <SquareItem>
        <p>
          Lorsque l&apos;adjectif qui suit le verbe <Term>être</Term> n&apos;est
          suivi de rien.
        </p>
      </SquareItem>
      <Gloss fr="*C'est* bon." en="It's/That's good." />
      <SquareItem>
        <p>
          Lorsque l&apos;adjectif qui suit le verbe <Term>être</Term> introduit
          un infinitif précédé de la préposition <Rich text="*à*" />.
        </p>
      </SquareItem>
      <Gloss fr="*C'est* bon *à* manger." en="It's/That's good to eat." />
      <Rule>
        Le sujet du verbe est un <Term>sujet réel</Term> et, dans ce cas, on
        applique les règles énoncées en I. 1 et en I. 2.
      </Rule>
      <SquareItem>
        <p>
          On utilise donc <Rich text="*il/elle est*" /> si le sujet reprend un
          nom précis, une référence déjà énoncée.
        </p>
      </SquareItem>
      <Gloss
        fr="Voici mon voisin ; *il* est agréable."
        en="Here is my neighbor, he is very pleasant."
      />
      <Gloss
        fr="Voici un fruit ; *il* est bon à manger maintenant."
        en="Here is some fruit; it is good to eat now."
      />
      <SquareItem>
        <p>
          On utilise <Rich text="*c'est*" /> si le sujet reprend, d&apos;une
          façon assez vague, une notion ou une activité exprimées par toute une
          phrase.
        </p>
      </SquareItem>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Je parle à mon voisin ; *c'est* agréable." />
      </p>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="J'apprends le français ; *c'est* intéressant." />
      </p>
    </TextbookPage>
  );
}

function Page88() {
  return (
    <TextbookPage pageNumber={88} pageNumberSide="left">
      <NoteLabel />
      <Rule>
        Dans le langage parlé, la distinction <Rich text="*il est/c'est*" /> +
        adjectif est peu marquée et l&apos;on emploie souvent{" "}
        <Rich text="*c'est*" /> dans les cas mentionnés en II. 1.
      </Rule>

      <ExerciseBox title="A. Mettez le pronom qui convient (niveau de langue de l'écrit).">
        <ExerciseItem n={1}>
          <Blank width="5.5rem" /> est rare que je reçoive des lettres telles
          que les vôtres.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Arrive à l&apos;heure ce soir. <Blank width="5.5rem" /> est important.
        </ExerciseItem>
        <ExerciseItem n={3}>
          <Blank width="5.5rem" /> est important de le prévenir.
        </ExerciseItem>
        <ExerciseItem n={4}>
          <Blank width="5.5rem" /> est triste à dire.
        </ExerciseItem>
        <ExerciseItem n={5}>
          <Blank width="5.5rem" /> serait intéressant de le savoir.
        </ExerciseItem>
      </ExerciseBox>

      <SectionBar title="III. Traduction de « he is » / « she is » + nom de profession et de nationalité" />
      <Example centered text="*Elle* est architecte." />
      <Example centered text="*C'est* une architecte renommée." />
      <Example centered text="*C'est* l'architecte la plus célèbre du pays." />

      <Subhead text="III. 1 Noms de profession" />
      <Rule>
        Si on emploie le pronom personnel <Rich text="*il*" /> (
        <Rich text="*elle, ils, elles*" />) + le verbe <Term>être</Term> + un
        nom de <Term>profession</Term> (<Term>de nationalité</Term>,{" "}
        <Term>de religion</Term>), ce dernier nom{" "}
        <Term>ne prend pas d&apos;article</Term>, contrairement à
        l&apos;anglais.
      </Rule>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*Il* est ingénieur. *Ils* sont ingénieurs." />
      </p>
      <p className="mb-2 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*Elle* est protestante. *Elles* sont protestantes." />
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">
        On ne peut pas traduire :{" "}
        <em>He is an engineer; she is a lawyer.</em>
      </p>
      <p className="text-[15px] text-tb-ink">
        par : *« Il est un ingénieur » ; *« elle est une avocate ».
      </p>

      <Subhead text="III. 2 Emploi des pronoms" />
      <Rule>
        Si le nom <Term>attribut</Term> est accompagné d&apos;un{" "}
        <Term>article</Term> (et éventuellement d&apos;un <Term>adjectif</Term>{" "}
        ou d&apos;une <Term>proposition relative</Term>), on ne peut pas
        utiliser le pronom personnel ; on utilise le démonstratif{" "}
        <Rich text="*ce*" /> (<Rich text="*c'*" />) devant le verbe{" "}
        <Term>être</Term>.
      </Rule>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*C'est* un ingénieur hautement qualifié." />
      </p>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*C'est* l'avocate la mieux payée du service." />
      </p>
      <p className="pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*C'est* une Française qui vient de Paris." />
      </p>
    </TextbookPage>
  );
}

function Page89() {
  return (
    <TextbookPage pageNumber={89}>
      <ExerciseBox title="B. Traduisez.">
        {exerciseB.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="IV. « Il est » et l'expression du temps" />
      <Example centered text="*Il* est cinq heures." />
      <Example centered text="*Il* fait froid." />
      <Example centered text="*C'est* le printemps." />

      <Subhead text="IV. 1 Le temps = time" />
      <Rule>
        Dans ce sens, on utilise le pronom <Rich text="*il*" /> et le verbe{" "}
        <Term>être</Term> quand il s&apos;agit d&apos;indiquer l&apos;heure.
      </Rule>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*Il* est 5 heures." />
      </p>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*Il* était minuit quand je me suis réveillé." />
      </p>
      <p className="mb-3 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Quelle heure est-*il* ?" />
      </p>

      <Subhead text="IV. 2 Le temps (atmosphérique) = weather" />
      <Rule>
        Cette notion s&apos;exprime à l&apos;aide de l&apos;expression
        impersonnelle <Rich text="*il fait*" />.
      </Rule>
      <p className="mb-2 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*Il* fait froid ; *il* fait chaud, etc." />
      </p>

      <AttentionBox>
        <p>
          Contrairement à l&apos;anglais, on n&apos;utilise pas le verbe{" "}
          <Term>être</Term> !
        </p>
        <p>
          « It&apos;s fine » et « it&apos;s cold » ne se traduisent pas par *«
          Il est beau » ; *« Il est froid ».
        </p>
        <p>
          On doit dire : <Rich text="*Il* fait beau ; *il* fait froid." />
        </p>
      </AttentionBox>

      <Subhead text="IV. 3 Saisons, années..." />
      <Rule>
        Lorsque l&apos;on se réfère aux <Term>saisons</Term>, aux{" "}
        <Term>années</Term>, aux <Term>parties du jour</Term> ou à des durées,
        on utilise le pronom démonstratif <Rich text="*ce*" /> (
        <Rich text="*c'*" />) et le verbe <Term>être</Term>.
      </Rule>
      <p className="pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*C'est* le printemps !" />
      </p>
      <p className="pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*C'était* en 1999." />
      </p>
      <p className="pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*C'est* le matin de Noël." />
      </p>
      <p className="mb-2 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*C'était* pendant la guerre de Sécession." />
      </p>
      <Nb>
        « it&apos;s light » et « it&apos;s dark » se traduisent par{" "}
        <em className="text-tb-example">il fait jour</em> et{" "}
        <em className="text-tb-example">il fait nuit</em>.
      </Nb>
    </TextbookPage>
  );
}

function Page90() {
  return (
    <TextbookPage pageNumber={90} pageNumberSide="left">
      <ExerciseBox title="C. Traduisez.">
        {exerciseC.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="V. « C'est… qui » / « C'est… que » et la mise en relief" />
      <Example centered text="*C'est* lui qui me l'a dit." />
      <Example centered text="*Ce sont* eux qui te le diront." />

      <Subhead text="V. 1 Pour mettre en relief un mot ou un groupe de mots" />
      <Rule>
        Lorsque l&apos;on veut mettre en relief un nom, un pronom ou toute une
        partie de phrase, on peut intercaler l&apos;élément dans la formule de
        mise en relief : <Rich text="*c'est… qui…*" />,{" "}
        <Rich text="*c'est… que…*" />, <Rich text="*ce sont… qui…*" />,{" "}
        <Rich text="*ce sont… que…*" />.
      </Rule>
      <Gloss
        fr="*C'est* mon cousin qui me l'a dit."
        en="It was my neighbour who told me."
      />
      <Gloss
        fr="*C'est* « viens ici » qu'il a dit."
        en='It was "come here" that he said.'
      />
      <Gloss
        fr="*C'est* ma voisine qui vous fera entrer."
        en="It is my neighbour who will let you in."
      />
      <Nb>
        la formule de mise en relief reste au <Term>présent</Term> en français,
        contrairement à l&apos;anglais.
      </Nb>

      <Subhead text="V. 2 C'est, ce sont" />
      <SquareItem>
        <p>
          La <Term>première partie</Term> de la formule de mise en relief est{" "}
          <Rich text="*c'est*" />. Mais, lorsque l&apos;on met en relief :
        </p>
      </SquareItem>
      <p className="mb-1 pl-8 text-[15px] text-tb-ink">
        – les pronoms personnels <Rich text="*eux/elles*" />,
      </p>
      <p className="mb-1 pl-8 text-[15px] text-tb-ink">
        – un nom pluriel non précédé d&apos;une préposition,
      </p>
      <p className="mb-2 pl-4 text-[15px] text-tb-ink">
        on utilise <Rich text="*ce sont*" /> (alors qu&apos;en anglais on garde
        le verbe au singulier).
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">On dira :</p>
      <Gloss
        fr="*C'est* aux enfants qu'il faut le dire."
        en="It is the children who must be told."
      />
      <Gloss
        fr="*C'est* nous qui en sommes responsables."
        en="It is we who are responsible."
      />
      <Gloss
        fr="*C'est* hier qu'il a parlé."
        en="It was yesterday that he spoke."
      />
      <p className="mb-1 mt-2 text-[15px] text-tb-ink">Mais on dira :</p>
      <Gloss
        fr="*Ce sont* leurs enfants qui ont cassé le carreau."
        en="It was their children who broke the window."
      />
      <Gloss
        fr="*Ce sont* eux qui le paieront."
        en="It is they who will pay for it."
      />
    </TextbookPage>
  );
}

function Page91() {
  return (
    <TextbookPage pageNumber={91}>
      <SquareItem>
        <p>Le deuxième élément de la formule de mise en relief est :</p>
      </SquareItem>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        le pronom <Rich text="*qui*" /> lorsque l&apos;élément mis en relief
        correspond au <Term>sujet</Term> du verbe qui suit.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*C'est* mon frère *qui* me l'a dit." /> (= mon frère me
        l&apos;a dit)
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Ce sont* ses parents *qui* le surveillent." /> (= ses
        parents le surveillent)
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        le pronom <Rich text="*que*" /> dans les autres cas.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*C'est* de mon frère *que* nous parlons." /> (Nous parlons
        de mon frère.)
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*C'est* mon frère *que* je félicite." /> (Je félicite mon
        frère.)
      </p>
      <p className="mb-4 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*C'est* pour elle *que* je suis venu." /> (Je suis venu pour
        elle.)
      </p>

      <ExerciseBox title="D. Mettez en relief le mot ou les mots soulignés.">
        {exerciseD.map((item, i) => (
          <ExerciseItem key={item.map((p) => p.text).join("")} n={i + 1}>
            <Spans parts={item} />
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="VI. « Il est » et « c'est » dans la phrase segmentée" />
      <Gloss
        fr="Ton père, *il* est patient ?"
        en="Your father, is he patient?"
      />
      <Gloss
        fr="Ce camion, *il* est difficile à conduire ?"
        en="This truck, is it difficult to drive?"
      />
      <Gloss
        fr="Les études, *c'est* toujours fatigant."
        en="Studying, it's always tiring."
      />

      <Subhead text="VI. 1 Emploi de la phrase segmentée" />
      <Rule>
        Souvent, dans la langue parlée, la phrase est plus ou moins
        désarticulée ; on exprime d&apos;abord l&apos;élément (le mot,
        l&apos;idée) qui est le plus important dans la pensée du locuteur et,
        après une pause, on le reprend par un pronom (selon les règles I. 1 et
        I. 2, pages 85-86).
      </Rule>
      <p className="pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Ton père, *il* va à la pêche ?" />
      </p>

      <Subhead text="VI. 2 Utilisation du pronom dans la phrase segmentée" />
      <SquareItem>
        <p>
          Parfois on segmente la phrase en annonçant un élément par un pronom.
        </p>
      </SquareItem>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Il* va à la pêche, ton père ?" />
      </p>
    </TextbookPage>
  );
}

function Page92() {
  return (
    <TextbookPage pageNumber={92} pageNumberSide="left">
      <SquareItem>
        <p>
          Bien sûr, on peut avoir des cas analogues d&apos;annonce ou de reprise
          dans les phrases segmentées utilisant le verbe <Term>être</Term>.
        </p>
      </SquareItem>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Ton père, *il* est patient ?" />
      </p>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Cette voiture, *elle* est difficile à conduire ?" />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Apprendre le français, *c'est* intéressant ?" />
      </p>
      <SquareItem>
        <p>
          On a tendance à généraliser <Rich text="*c'est*" /> quand il
          s&apos;agit de reprendre ou d&apos;annoncer un mot à valeur
          généralisante (les parents, le pouvoir, l&apos;armée, etc.), une
          activité sportive ou intellectuelle.
        </p>
      </SquareItem>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Le pouvoir, *c'est* dangereux." />
      </p>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Les parents, *c'est* jamais content." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Les études, *c'est* toujours fatigant." />
      </p>

      <ExerciseBox title="E. Mettez à la forme segmentée les phrases suivantes.">
        {exerciseE.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="F. Traduisez « it » à l'aide d'un pronom personnel.">
        {exerciseF.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="G. Traduisez à l'aide du pronom qui convient.">
        {exerciseG.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page93() {
  return (
    <TextbookPage pageNumber={93}>
      <ExerciseBox title="H. Complétez à l'aide du mot qui convient.">
        <ExerciseItem n={1}>
          Nous voulions aller au Canada mais cette année <Blank /> ne sera pas
          possible.
        </ExerciseItem>
        <ExerciseItem n={2}>
          <Blank /> est regrettable.
        </ExerciseItem>
        <ExerciseItem n={3}>
          <Blank /> est déjà minuit.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Il ne faut pas utiliser de médicaments périmés. <Blank /> serait trop
          dangereux.
        </ExerciseItem>
        <ExerciseItem n={5}>
          À cause des gens qui étaient autour de moi, il m&apos;était difficile{" "}
          <Blank width="3.5rem" /> me concentrer.
        </ExerciseItem>
        <ExerciseItem n={6}>
          C&apos;est difficile <Blank width="3.5rem" /> accepter.
        </ExerciseItem>
        <ExerciseItem n={7}>
          <Blank /> est à prévoir qu&apos;il dira non.
        </ExerciseItem>
        <ExerciseItem n={8}>
          Oui, c&apos;est <Blank width="3.5rem" /> prévoir.
        </ExerciseItem>
        <ExerciseItem n={9}>
          <Blank /> est difficile de travailler dans le bruit.
        </ExerciseItem>
        <ExerciseItem n={10}>
          Apprendre une langue étrangère, <Blank /> est utile.
        </ExerciseItem>
      </ExerciseBox>

      <ExerciseBox title="I. Traduisez.">
        {exerciseI.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter11() {
  return (
    <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">
      <Page85 />
      <Page86 />
      <Page87 />
      <Page88 />
      <Page89 />
      <Page90 />
      <Page91 />
      <Page92 />
      <Page93 />
    </div>
  );
}
