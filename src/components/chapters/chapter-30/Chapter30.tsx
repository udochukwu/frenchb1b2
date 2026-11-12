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
  chapter30,
  exerciseI,
  exerciseJ,
  exerciseK,
  overview,
  subjunctiveVerbs,
} from "@/content/chapters/30";

function OverviewBlock() {
  return (
    <div className="mx-auto max-w-[42rem] space-y-3 text-center">
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

function Items({ items }: { items: readonly string[] }) {
  return (
    <>
      {items.map((item, i) => (
        <ExerciseItem key={item} n={i + 1}>
          {item}
        </ExerciseItem>
      ))}
    </>
  );
}

function Page226() {
  return (
    <TextbookPage pageNumber={226} pageNumberSide="left">
      <ChapterHeader number={chapter30.number} title={chapter30.title} />
      <OverviewBlock />
      <SectionDivider title="I. Formes" />
      <Example
        centered
        text="Je souhaite que vous arriviez de bonne heure."
        translation="I would like you to arrive early."
      />
      <Example
        centered
        text="Nous regrettons qu'il soit parti si tôt."
        translation="We are sorry that he left so early."
      />

      <Subhead text="I. 1 Les temps du subjonctif" />
      <Rule>
        Le subjonctif s&apos;emploie essentiellement au{" "}
        <Rich text="*présent*" /> et au <Rich text="*passé*" /> ; l&apos;imparfait
        du subjonctif (<Rich text="*qu'il parlât*" />, etc.) paraît de plus en
        plus archaïque.
      </Rule>

      <Subhead text="I. 2 Le subjonctif présent" />
      <ArrowItem>
        À quelques exceptions près (<Rich text="*aller*" />, etc.), le
        subjonctif présent se forme à l&apos;aide des terminaisons :{" "}
        <Rich text="*-e, -es, -e, -ions, -iez, -ent*" />.
      </ArrowItem>
      <ArrowItem>
        Les verbes du <Rich text="*1er groupe*" /> forment le subjonctif
        présent en ajoutant ces terminaisons au radical.
      </ArrowItem>
      <Example text="terminer → que je termine, que nous terminions" />
      <ArrowItem>
        Exception : le verbe <Rich text="*aller*" />, qui change de radical aux
        trois personnes du singulier et à la 3<sup>e</sup> personne du pluriel
        : que j&apos;aille, que nous allions.
      </ArrowItem>
    </TextbookPage>
  );
}

function Page227() {
  return (
    <TextbookPage pageNumber={227}>
      <Subhead text="I. 3 Le radical" />
      <Rule>
        De nombreux verbes ont, au subjonctif, un radical assez éloigné du
        radical de l&apos;infinitif. On notera en particulier :
      </Rule>
      <Rule>
        <span className="font-semibold">a. </span>
        la conjugaison des verbes <Rich text="*être*" /> et{" "}
        <Rich text="*avoir*" />.
      </Rule>
      <div className="my-2 grid grid-cols-2 gap-x-6 text-[14.5px] italic text-tb-example sm:grid-cols-4">
        <span>que je sois</span>
        <span>que nous soyons</span>
        <span>que j&apos;aie</span>
        <span>que nous ayons</span>
        <span>que tu sois</span>
        <span>que vous soyez</span>
        <span>que tu aies</span>
        <span>que vous ayez</span>
        <span>qu&apos;il/elle soit</span>
        <span>qu&apos;ils/elles soient</span>
        <span>qu&apos;il/elle ait</span>
        <span>qu&apos;ils/elles aient</span>
      </div>
      <Rule>
        <span className="font-semibold">b. </span>
        le subjonctif des verbes suivants :
      </Rule>
      {subjunctiveVerbs.map((line) => (
        <Example key={line} text={line} />
      ))}

      <Subhead text="I. 4 Le subjonctif passé" />
      <Rule>
        Le <Rich text="*subjonctif passé*" /> se forme à l&apos;aide de
        l&apos;auxiliaire <Rich text="*être*" /> ou <Rich text="*avoir*" /> au
        subjonctif et du participe passé du verbe.
      </Rule>
      <Example
        text="Il a regretté que je sois parti."
        translation="He was sorry that I had left."
      />
      <Example
        text="Je souhaite qu'il ait eu assez d'argent."
        translation="I hope that he had enough money."
      />
      <AttentionBox>
        <p>
          Bien choisir l&apos;auxiliaire (
          <CrossRef>chapitre 25, I., p. 195-196</CrossRef>).
        </p>
        <p>
          Tenir compte des règles d&apos;accord du participe passé (
          <CrossRef>chapitre 27, p. 206-211</CrossRef>).
        </p>
      </AttentionBox>

      <Subhead text="I. 5 Constructions avec le subjonctif" />
      <Rule>
        Sauf dans quelques formules de souhait (par exemple : « Vive la France
        ! » ou : « Sauve qui peut ! »), le subjonctif est toujours précédé de{" "}
        <Rich text="*que*" /> ou d&apos;une autre conjonction.
      </Rule>
      <Example text="Qu'il vienne !" translation="Let him come!" />
      <Example
        text="Pourvu qu'elle ait son train !"
        translation="I do hope she'll catch her train!"
      />
      <Example
        text="Je regrette qu'il ne soit pas là."
        translation="I am sorry he is not here."
      />

      <ExerciseBox title="A. Donnez le subjonctif présent de la personne indiquée.">
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
          <div>
            <ExerciseItem n={1}>savoir : que vous <Blank /></ExerciseItem>
            <ExerciseItem n={2}>attendre : que nous <Blank /></ExerciseItem>
            <ExerciseItem n={3}>craindre : que vous <Blank /></ExerciseItem>
            <ExerciseItem n={4}>partir : qu&apos;elle <Blank /></ExerciseItem>
            <ExerciseItem n={5}>pouvoir : qu&apos;ils <Blank /></ExerciseItem>
          </div>
          <div>
            <ExerciseItem n={6}>finir : qu&apos;elle <Blank /></ExerciseItem>
            <ExerciseItem n={7}>avoir : qu&apos;il <Blank /></ExerciseItem>
            <ExerciseItem n={8}>croire : que je <Blank /></ExerciseItem>
            <ExerciseItem n={9}>aller : que vous <Blank /></ExerciseItem>
            <ExerciseItem n={10}>devoir : que tu <Blank /></ExerciseItem>
          </div>
        </div>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page228() {
  return (
    <TextbookPage pageNumber={228} pageNumberSide="left">
      <SectionDivider title="II. Emploi du subjonctif dans la subordonnée conjonctive" />
      <Example
        centered
        text="J'exige qu'elle parte."
        translation="I demand that she leave."
      />
      <Example
        centered
        text="Nous acceptons ce travail, bien qu'il soit difficile."
        translation="We accept this work, even though it is difficult."
      />

      <Subhead text="II. 1 Verbes suivis du subjonctif" />
      <Rule>
        On emploie le subjonctif dans la proposition{" "}
        <Rich text="*subordonnée*" /> lorsque celle-ci dépend de{" "}
        <Rich text="*certaines catégories de verbes*" /> : les verbes qui ont
        une <Rich text="*valeur affective*" /> (les verbes de{" "}
        <Rich text="*sentiment*" /> et d&apos;<Rich text="*émotion*" />, par
        exemple <Rich text="*craindre*" />), les verbes qui marquent une{" "}
        <Rich text="*obligation*" /> (par exemple <Rich text="*exiger*" />) et
        les verbes qui <Rich text="*mettent en cause la réalité*" /> (par
        exemple <Rich text="*douter*" />).
      </Rule>
      <Rule>
        La conjonction qui unit la principale et la subordonnée est{" "}
        <Rich text="*que*" />.
      </Rule>
      <Rule>
        <span className="font-semibold">a. </span>
        Ainsi, on met le subjonctif après les verbes :
      </Rule>
      <Rule>
        — de <Rich text="*crainte*" /> :
      </Rule>
      <Example
        text="Nous craignons (nous avons peur) qu'il parte."
        translation="We are afraid he will leave."
      />
      <Rule>— de <Rich text="*souhait*" /> :</Rule>
      <Example
        text="Je souhaite qu'il pleuve."
        translation="I wish it would rain. / I hope it will rain."
      />
      <Rule>
        — de <Rich text="*volonté*" /> et de <Rich text="*désir*" /> :
      </Rule>
      <Example text="Il veut (exige, demande, ordonne, désire, veut bien, tient à ce, consent à ce) que tu le raccompagnes." />
      <p className="mb-2 text-[14.5px] text-tb-muted">
        He wants (demands of, asks, orders, wishes, is willing for, is anxious
        for, allows) you to take him home.
      </p>
      <Rule>— de <Rich text="*nécessité*" /> :</Rule>
      <Example
        text="Il faut (il est nécessaire, il est indispensable) que tu sois au rendez-vous."
        translation="You must (it is necessary, indispensable that you) be at the meeting."
      />
      <Rule>— de <Rich text="*doute*" /> :</Rule>
      <Example text="Je doute qu'il vienne." translation="I doubt he will come." />
      <Rule>
        — de <Rich text="*dénégation*" /> et de <Rich text="*refus*" /> :
      </Rule>
      <Example
        text="Nous nions qu'il l'ait vu."
        translation="We deny that he saw him."
      />
      <Example
        text="Il refuse (il s'oppose à ce) que nous allions au cinéma."
        translation="He refuses to let us go to the cinema. / He opposes our going to the cinema."
      />
      <Rule>
        — de <Rich text="*sentiment*" /> et d&apos;<Rich text="*émotion*" /> :
        aimer, aimer mieux, regretter, préférer, être triste, content, heureux
        que... :
      </Rule>
      <Example
        text="Je suis heureux que vous soyez venu."
        translation="I am pleased that you came."
      />
      <Rule>
        <span className="font-semibold">b. </span>
        On emploie aussi le <Rich text="*subjonctif*" /> après la formule
        impersonnelle <Rich text="*il est*" /> + adjectif + que qui marque une
        appréciation ou un jugement.
      </Rule>
      <Example
        text="Il est regrettable qu'il ait perdu son emploi."
        translation="It is regrettable that he lost his job."
      />
    </TextbookPage>
  );
}

function Page229() {
  return (
    <TextbookPage pageNumber={229}>
      <Example
        text="Il est rare que nous allions au cinéma en semaine."
        translation="It is rare that we go to the movies during the week."
      />
      <Rule>
        — Lorsque l&apos;adjectif marque la <Rich text="*certitude*" />, on
        utilise l&apos;<Rich text="*indicatif*" />.
      </Rule>
      <Example
        text="Il est certain que nous partirons demain."
        translation="It is certain that we will leave tomorrow."
      />
      <AttentionBox>
        <p>
          On ne peut pas dire : *« Il est mieux que nous partions ». On dit :{" "}
          <Rich text="*Il vaut mieux*" /> (<Rich text="*il est préférable*" />)
          que nous partions. It is better that we leave.
        </p>
        <p>
          Les verbes <Rich text="*croire, espérer*" /> et{" "}
          <Rich text="*penser*" /> à l&apos;<Rich text="*affirmatif*" /> veulent
          l&apos;indicatif. À la forme interrogative et négative, ces verbes
          sont suivis du subjonctif (nuances de subjectivité ou de doute).
        </p>
        <Example
          text="Je crois qu'il faut partir."
          translation="I think we should leave."
        />
        <Example
          text="Crois-tu qu'il faille partir ?"
          translation="Do you think we should leave?"
        />
        <p>
          L&apos;anglais utilise parfois l&apos;infinitif là où le français
          doit utiliser la conjonction <Rich text="*que*" /> et le subjonctif.
          C&apos;est le cas en particulier :
        </p>
        <p>
          <span className="font-semibold">a. </span>
          avec le verbe to want :
        </p>
        <Example text="I want him to answer my question. Je veux qu'il réponde à ma question." />
        <p>
          <span className="font-semibold">b. </span>
          avec certains adjectifs marquant un sentiment ou une volonté :
        </p>
        <Example text="We would be happy for you to join us." />
        <Example text="Nous serions heureux que tu te joignes à nous." />
      </AttentionBox>

      <ExerciseBox title="B. Complétez.">
        <ExerciseItem n={1}>
          Nous sommes heureux que vous (pouvoir) <Blank /> venir.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Il faut que tu (faire) <Blank /> tes devoirs.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Je doute qu&apos;ils (arriver) <Blank /> à l&apos;heure.
        </ExerciseItem>
        <ExerciseItem n={4}>
          J&apos;aime mieux que tu (savoir) <Blank /> tout de suite la vérité.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Nous espérons qu&apos;elles (venir) <Blank /> avec nous au théâtre.
        </ExerciseItem>
      </ExerciseBox>

      <Subhead text="II. 2 Conjonctions suivies du subjonctif" />
      <Rule>
        On emploie le <Rich text="*subjonctif*" /> dans la{" "}
        <Rich text="*subordonnée*" /> lorsque celle-ci est introduite par
        certaines <Rich text="*conjonctions*" />. On utilise nécessairement le
        subjonctif après les conjonctions suivantes :
      </Rule>
      <Rule>
        — de <Rich text="*but*" /> : pour que, afin que, de sorte que...
      </Rule>
      <Example
        text="Il a acheté cette tondeuse pour que tu t'en serves."
        translation="He bought this mower for you to use (so that you could use it)."
      />
    </TextbookPage>
  );
}

function Page230() {
  return (
    <TextbookPage pageNumber={230} pageNumberSide="left">
      <Rule>
        — de <Rich text="*restriction*" /> : à moins que, sans que...
      </Rule>
      <Example
        text="Nous irons en pique-nique à moins qu'il ne pleuve."
        translation="We will go for a picnic, unless it rains."
      />
      <Rule>
        — de <Rich text="*condition*" /> : pourvu que, à condition que...
      </Rule>
      <Example
        text="Nous irons le voir, à condition qu'il le veuille bien."
        translation="We will go to see him, so long as he wants us to."
      />
      <Rule>
        — de <Rich text="*concession*" /> : quoique, bien que...
      </Rule>
      <Example
        text="Nous sortons, bien qu'il pleuve."
        translation="We are going out although it is raining."
      />
      <Rule>
        — de <Rich text="*temps*" /> : en attendant que, jusqu&apos;à ce que,
        avant que...
      </Rule>
      <Example
        text="Dites-le-lui, avant qu'il ne parte."
        translation="Tell him before he leaves."
      />
      <Rule>
        — après la conjonction <Rich text="*que*" /> dans si... et que...
        (présentation d&apos;une deuxième hypothèse).
      </Rule>
      <Example
        text="Si je suis absent et que la porte soit fermée, sonnez chez le voisin."
        translation="If I am out and the door is locked, ring next door."
      />
      <Nb>
        certaines conjonctions (avant que, à moins que, de crainte que, de peur
        que) entraînent dans la subordonnée un « ne » dit{" "}
        <Rich text="*explétif*" /> qui est un reste de l&apos;ancien français
        mais qui n&apos;est pas une négation.
      </Nb>
      <Example
        text="Avant qu'ils ne partent, dites-leur de bien fermer la porte à clef."
        translation="Before they leave, tell them to lock the door."
      />
      <Example
        text="Ne lui demandez rien, à moins qu'il ne vous propose de vous aider."
        translation="Don't ask him for anything, unless he offers to help you."
      />

      <ExerciseBox title="C. Utilisez la conjonction mise entre parenthèses tout en gardant le sens général de la phrase.">
        <ExerciseItem n={1}>
          Nous irons au cinéma mais nous n&apos;irons pas si tu es en retard. (à
          moins que)
        </ExerciseItem>
        <ExerciseItem n={2}>
          Asseyons-nous ; il va arriver. (jusqu&apos;à ce que)
        </ExerciseItem>
        <ExerciseItem n={3}>
          Je lui ai fait une remarque ; il en tiendra compte. (pour que)
        </ExerciseItem>
        <ExerciseItem n={4}>
          Nous acceptons de le prendre avec nous mais il doit participer aux
          frais du voyage. (à condition que)
        </ExerciseItem>
        <ExerciseItem n={5}>
          Il est allé travailler ; il a la grippe. (bien que)
        </ExerciseItem>
      </ExerciseBox>

      <Subhead text="II. 3 Quelques constructions à noter" />
      <Rule>
        <span className="font-semibold">a. </span>
        <Rich text="*jusqu'à ce que*" /> veut le subjonctif mais{" "}
        <Rich text="*jusqu'au moment où*" /> veut l&apos;indicatif.
      </Rule>
      <Example text="Nous resterons avec lui jusqu'à ce qu'il parte." />
      <Example text="Nous resterons jusqu'au moment où il partira." />
      <Rule>
        <span className="font-semibold">b. </span>
        <Rich text="*Il semble que*" /> veut le subjonctif mais{" "}
        <Rich text="*il me (te, lui, nous, vous, leur) semble que*" /> entraîne
        l&apos;indicatif.
      </Rule>
      <Example text="Il semble que la situation soit désespérée." />
      <Example text="Il me semble que la situation est désespérée." />
    </TextbookPage>
  );
}

function Page231() {
  return (
    <TextbookPage pageNumber={231}>
      <Rule>
        <span className="font-semibold">c. </span>
        La construction <Rich text="*I wish*" /> + conditionnel n&apos;est pas
        directement transposable en français. <Rich text="*To wish*" /> se
        traduit par le verbe <Rich text="*souhaiter*" /> suivi du subjonctif ou
        par le conditionnel de <Rich text="*aimer bien, vouloir bien*" />, suivi
        du subjonctif.
      </Rule>
      <Example text="I wish it would rain. Je souhaite qu'il pleuve." />
      <Example text="I wish it would be warm. J'aimerais bien qu'il fasse chaud." />
      <Example text="I wish you could do it for me. Je voudrais bien que vous le fassiez pour moi." />
      <AttentionBox>
        <p>
          Si le <Rich text="*sujet*" /> de la subordonnée est le{" "}
          <Rich text="*même*" /> que celui de la principale :
        </p>
        <p>
          <span className="font-semibold">a. </span>
          on n&apos;utilise pas le subjonctif après les verbes de la série II.
          1, a. On utilise obligatoirement un infinitif.
        </p>
        <p>On ne peut pas dire : *« Je souhaite que je parte ».</p>
        <p>On dira : Je souhaite partir. I want to leave.</p>
        <p>
          On ne peut pas dire : *« Nous ne voulons pas que nous disions ce
          secret ».
        </p>
        <p>
          On dira : Nous ne voulons pas dire ce secret. We do not want to tell
          this secret.
        </p>
        <p>
          <span className="font-semibold">b. </span>
          certaines conjonctions de la série II. 2 suivies du subjonctif sont
          obligatoirement remplacées par une préposition suivie de
          l&apos;infinitif.
        </p>
        <p>Ainsi on remplace :</p>
        <p>— pour que + subjonctif par pour + infinitif</p>
        <p>— afin que + subjonctif par afin de + infinitif</p>
        <p>— avant que + subjonctif par avant de + infinitif</p>
        <p>— à moins que + subjonctif par à moins de + infinitif</p>
        <p>— à condition que + subjonctif par à condition de + infinitif</p>
        <p>
          On ne peut pas dire : *« Elle est venue afin qu&apos;elle obtienne une
          réponse ».
        </p>
        <p>
          On dira : Elle est venue afin d&apos;obtenir une réponse. She came to
          get an answer.
        </p>
        <p>
          On ne peut pas dire : *« Fermez la porte avant que vous (ne) partiez
          ».
        </p>
        <p>
          On dira : Fermez la porte avant de partir. Close the door before you
          leave.
        </p>
      </AttentionBox>
      <Nb>
        les conjonctions <Rich text="*quoique, bien que*" /> et{" "}
        <Rich text="*jusqu'à ce que*" /> sont toujours suivies du subjonctif
        même si le sujet du verbe de la subordonnée est le même que celui de la
        principale.
      </Nb>

      <ExerciseBox title="D. Commencez la phrase par les mots soulignés et utilisez un infinitif selon l'exemple suivant.">
        <p>
          Je passe cette journée avec vous. (Je suis heureux) → Je suis heureux
          de passer cette journée avec vous.
        </p>
        <ExerciseItem n={1}>Tu vas en vacances. (Tu es content)</ExerciseItem>
        <ExerciseItem n={2}>Nous sommes en retard. (Nous craignons)</ExerciseItem>
        <ExerciseItem n={3}>Vous devez partir. (Vous regrettez)</ExerciseItem>
        <ExerciseItem n={4}>Il trahit ses amis. (Il refuse)</ExerciseItem>
        <ExerciseItem n={5}>Elle ira en Italie à Noël. (Elle est ravie)</ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page232() {
  return (
    <TextbookPage pageNumber={232} pageNumberSide="left">
      <ExerciseBox title="E. Faites une phrase à l'aide d'une subordonnée au subjonctif.">
        <ExerciseItem n={1}>Elle va en vacances. (Tu es contente que...)</ExerciseItem>
        <ExerciseItem n={2}>Ils sont en retard. (Nous craignons que...)</ExerciseItem>
        <ExerciseItem n={3}>Il doit partir. (Vous regrettez que...)</ExerciseItem>
        <ExerciseItem n={4}>
          Nous trahissons ses amis. (Il ne veut pas que...)
        </ExerciseItem>
        <ExerciseItem n={5}>
          Elle ira en Italie à Noël. (Nous sommes ravis que...)
        </ExerciseItem>
      </ExerciseBox>

      <SectionDivider title="III. Emploi du subjonctif dans la subordonnée relative" />
      <Example centered text="C'est la seule personne qui puisse vous aider." />
      <Example centered text="Je cherche un livre qui soit écrit en français." />

      <Subhead text="III. 1 Notion de superlatif ou d'exclusivité" />
      <Rule>
        On utilise le subjonctif dans une proposition relative lorsque
        l&apos;antécédent est marqué par un <Rich text="*degré de supériorité*" />{" "}
        (le meilleur) ou par l&apos;idée d&apos;<Rich text="*exclusivité*" /> (le
        seul, la seule, etc.).
      </Rule>
      <Example
        text="C'est le meilleur exemple que j'aie trouvé."
        translation="It's the best example I could find."
      />
      <Example
        text="Le Président est la seule personne qui puisse vous aider."
        translation="The President is the only person who could help you."
      />

      <Subhead text="III. 2 Notion de doute" />
      <Rule>
        On utilise parfois le subjonctif dans une proposition relative pour
        signaler que l&apos;existence d&apos;un objet n&apos;est{" "}
        <Rich text="*pas entièrement assurée*" />.
      </Rule>
      <Rule>
        Si l&apos;on dit : « J&apos;achète une voiture qui{" "}
        <Rich text="*a*" /> des sièges en cuir », la réalité de cette voiture
        n&apos;est pas mise en cause.
      </Rule>
      <Rule>
        Si l&apos;on dit : « Je cherche une voiture qui{" "}
        <Rich text="*ait*" /> des sièges en cuir », l&apos;existence de cette
        voiture n&apos;est pas assurée. (La voiture existe peut-être mais je ne
        suis pas sûr de la trouver.)
      </Rule>
      <Rule>On notera de même la nuance qui existe entre :</Rule>
      <Example
        text="Je voudrais un livre qui me fasse faire des progrès."
        translation="I would like a book that would help me improve."
      />
      <Example
        text="Je lis un livre qui me fait faire des progrès."
        translation="I am reading a book that is helping me improve."
      />
    </TextbookPage>
  );
}

function Page233() {
  return (
    <TextbookPage pageNumber={233}>
      <SectionDivider title="IV. Les temps du subjonctif et leur emploi" />
      <Example centered text="Il faudrait qu'il fasse beau demain." />
      <Example centered text="Elle était contente que son amie lui ait écrit." />

      <Subhead text="IV. 1 Présent et passé composé" />
      <Rule>
        Dans la langue courante, on n&apos;utilise que deux temps du subjonctif
        : le <Rich text="*présent*" /> et le <Rich text="*passé composé*" />.
      </Rule>

      <Subhead text="IV. 2 Si le verbe de la principale est au présent :" />
      <Rule>
        <span className="font-semibold">a. </span>
        on utilise le subjonctif présent dans la subordonnée pour exprimer la
        notion de présent ou de futur simple.
      </Rule>
      <AttentionBox>
        <p>
          Il n&apos;y a pas de futur du subjonctif en français ; on utilise le
          subjonctif <Rich text="*présent*" /> pour exprimer un fait à venir.
        </p>
        <Example text="Je dis qu'il pleuvra demain. (indicatif futur)" />
        <Example text="→ Je souhaite qu'il pleuve demain. (subjonctif présent)" />
        <Example text="Mais : J'espère qu'il pleuvra demain." />
      </AttentionBox>
      <Rule>
        <span className="font-semibold">b. </span>
        on utilise le subjonctif <Rich text="*passé composé*" /> dans les
        autres cas (en particulier pour exprimer le passé et le futur
        antérieur).
      </Rule>
      <Rule>
        Comparez le jeu des temps entraînés par deux verbes au présent quand
        l&apos;un est suivi d&apos;un indicatif alors que l&apos;autre est suivi
        du subjonctif.
      </Rule>
      <div className="my-3 grid gap-4 sm:grid-cols-2 text-[14.5px] italic text-tb-example">
        <div>
          <p>Il dit</p>
          <p>qu&apos;il a plu.</p>
          <p>qu&apos;il pleut.</p>
          <p>qu&apos;il pleuvra demain.</p>
          <p>qu&apos;il aura plu avant 5 h.</p>
        </div>
        <div>
          <p>Il souhaite</p>
          <p>qu&apos;il ait plu.</p>
          <p>qu&apos;il pleuve.</p>
          <p>qu&apos;il pleuve demain.</p>
          <p>qu&apos;il ait plu avant 5 h.</p>
        </div>
      </div>

      <Subhead text="IV. 3 Si le verbe de la principale est au passé ou au conditionnel" />
      <Rule>
        On utilise alors le subjonctif <Rich text="*présent*" /> pour marquer
        la <Rich text="*simultanéité*" /> des deux actions (l&apos;action de la
        principale et l&apos;action de la subordonnée sont contemporaines
        l&apos;une de l&apos;autre) ou pour marquer la{" "}
        <Rich text="*postériorité*" /> (l&apos;action de la subordonnée est à
        venir par rapport à celle de la principale).
      </Rule>
      <Example text="Il voulait qu'on lui dise toute la vérité." />
      <p className="text-[14.5px] text-tb-muted">
        (idée de simultanéité, donc subjonctif présent)
      </p>
      <Example text="Il voulait que son amie vienne bientôt." />
      <p className="text-[14.5px] text-tb-muted">
        (idée de postériorité, donc subjonctif présent)
      </p>
      <Example text="Il aurait voulu que son amie soit avec lui." />
      <p className="text-[14.5px] text-tb-muted">
        (idée de simultanéité, donc subjonctif présent)
      </p>
    </TextbookPage>
  );
}

function Page234() {
  return (
    <TextbookPage pageNumber={234} pageNumberSide="left">
      <AttentionBox>
        <p>
          Conformément à la règle énoncée à la page précédente, une principale
          au passé n&apos;est pas obligatoirement suivie d&apos;une subordonnée
          au subjonctif passé.
        </p>
        <p>
          On utilise le subjonctif passé pour indiquer l&apos;
          <Rich text="*antériorité*" />.
        </p>
        <Example text="Il était content que son amie lui ait écrit." />
        <p>
          (idée d&apos;antériorité : l&apos;amie lui a écrit avant, donc
          subjonctif passé.)
        </p>
      </AttentionBox>
      <Nb>
        lorsque le verbe de la principale est au passé ou au conditionnel, le
        verbe de la subordonnée peut être à l&apos;imparfait du subjonctif («
        Il était content que son amie lui écrivit. » « J&apos;aurais voulu
        qu&apos;elle fût présente. ») mais ce temps est ressenti comme
        artificiel.
      </Nb>

      <ExerciseBox title="F. Complétez en mettant le verbe entre parenthèses au présent ou au passé du subjonctif.">
        <ExerciseItem n={1}>
          Il est regrettable que tu (oublier) <Blank /> ton portefeuille au
          bureau.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Il faudrait qu&apos;il (se presser) <Blank /> s&apos;il ne veut pas
          rater son train.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Christophe était heureux qu&apos;elle lui (annoncer) <Blank /> dès la
          veille au soir sa prochaine visite.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Penses-tu qu&apos;elle (pouvoir) <Blank /> venir pour mon prochain
          anniversaire ?
        </ExerciseItem>
        <ExerciseItem n={5}>
          Pensez-vous qu&apos;elle (arriver) <Blank /> dès hier soir ?
        </ExerciseItem>
      </ExerciseBox>
      <ExerciseBox title="G. Complétez les phrases en utilisant le subjonctif.">
        <ExerciseItem n={1}>
          J&apos;accepte à condition que vous me (donner) <Blank /> toutes les
          informations.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Elle assurera la présidence du comité jusqu&apos;à ce que les
          élections (avoir lieu) <Blank />.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Bien qu&apos;elle (formuler) <Blank /> de sérieuses objections, elle
          s&apos;est ralliée à la majorité.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Je lui annoncerai moi-même les résultats à moins que vous ne vous y
          (opposer) <Blank />.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Écrivez-lui une lettre avant qu&apos;elle ne (prendre) <Blank /> sa
          décision.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page235() {
  return (
    <TextbookPage pageNumber={235}>
      <ExerciseBox title="H. Complétez les phrases suivantes en utilisant le subjonctif d'un verbe de votre choix.">
        <ExerciseItem n={1}>
          Les parents ont refusé que leur enfant <Blank width="8rem" />.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Il est fort regrettable que tu ne <Blank width="8rem" />.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Je doute que ses notes <Blank width="8rem" />.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Nous serions heureux que vous <Blank width="8rem" />.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Il faut que les règlements <Blank width="8rem" />.
        </ExerciseItem>
      </ExerciseBox>
      <ExerciseBox title="I. Traduisez en utilisant un subjonctif ou un infinitif selon le cas.">
        <Items items={exerciseI} />
      </ExerciseBox>
      <ExerciseBox title="J. Traduisez.">
        <Items items={exerciseJ} />
      </ExerciseBox>
      <ExerciseBox title="K. Traduisez.">
        <Items items={exerciseK} />
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter30() {
  return (
    <div className="space-y-8 py-8">
      <Page226 />
      <Page227 />
      <Page228 />
      <Page229 />
      <Page230 />
      <Page231 />
      <Page232 />
      <Page233 />
      <Page234 />
      <Page235 />
    </div>
  );
}
