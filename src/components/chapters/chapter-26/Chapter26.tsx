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
  chapter26,
  endings,
  exerciseA,
  exerciseE,
  exerciseF,
  exerciseG,
  overview,
} from "@/content/chapters/26";

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

function Page200() {
  return (
    <TextbookPage pageNumber={200} pageNumberSide="left">
      <ChapterHeader number={chapter26.number} title={chapter26.title} />
      <OverviewBlock />
      <SectionDivider title="I. Formation" />
      <Example
        centered
        text="Nous voulions partir de bonne heure et nos bagages étaient prêts."
      />

      <Subhead text="I. 1 Les terminaisons" />
      <Rule>
        Les terminaisons de l&apos;imparfait sont identiques pour tous les
        verbes :
      </Rule>
      <div className="my-2 grid max-w-md grid-cols-2 gap-x-8 pl-4 text-[15px] italic text-tb-example">
        {endings.map((row) => (
          <div key={row[0]} className="contents">
            <span>{row[0]}</span>
            <span>{row[1]}</span>
          </div>
        ))}
      </div>

      <Subhead text="I. 2 Le radical" />
      <ArrowItem>
        On forme l&apos;imparfait d&apos;un verbe à partir du{" "}
        <Rich text="*radical de la 1re personne du pluriel*" /> du présent.
      </ArrowItem>
      <Example text="nous voul-ons → nous voulions" />
      <Example text="nous all-ons → nous allions" />
      <ArrowItem>
        <span className="font-semibold">Une exception importante :</span>
      </ArrowItem>
      <Rule>
        Le radical utilisé pour le verbe <Rich text="*être*" /> est{" "}
        <Rich text="*ét-*" /> : j&apos;étais, tu étais, il/elle était, etc.
      </Rule>
      <AttentionBox>
        <p>
          Les verbes en <Rich text="*-ier*" /> (
          <Rich text="*étudier, se réfugier*" />, etc.) gardent le{" "}
          <Rich text="*i*" /> du radical à l&apos;imparfait.
        </p>
        <Example text="Nous étudi-ions ; vous vous réfugi-iez." />
      </AttentionBox>
    </TextbookPage>
  );
}

function Page201() {
  return (
    <TextbookPage pageNumber={201}>
      <ExerciseBox title="A. Donnez l'imparfait (3e personne du singulier) des verbes suivants.">
        {exerciseA.map((verb, i) => (
          <ExerciseItem key={verb} n={i + 1}>
            {verb}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionDivider title="II. Emplois" />
      <Example
        centered
        text="Il faisait beau ; le soleil brillait ; elle était contente."
      />
      <Example centered text="Je suis venu hier ; j'ai attendu longtemps." />

      <Subhead text="II. 1 Valeur de l'imparfait" />
      <Rule>
        Contrairement au passé composé ou au passé simple, l&apos;imparfait
        exprime une action ou un état passés <Rich text="*non achevés*" />, dont
        la <Rich text="*durée n'est pas précise*" />. L&apos;imparfait nous
        replonge dans le passé ; le <Rich text="*début*" /> et/ou la{" "}
        <Rich text="*fin*" /> de l&apos;action reste(nt) imprécis.
      </Rule>

      <Subhead text="II. 2 On emploie ce temps pour indiquer au passé :" />
      <Rule>
        <span className="font-semibold">a. </span>
        <Rich text="*une action passée en cours*" /> (il correspond souvent,
        dans ce cas, à la périphrase anglaise was/were + -ing) :
      </Rule>
      <Example text="Elle parlait." translation="She was talking." />
      <Rule>
        <span className="font-semibold">b. </span>
        <Rich text="*un état psychologique, un caractère*" /> :
      </Rule>
      <Example text="Il était content." translation="He was happy." />
      <Rule>
        <span className="font-semibold">c. </span>
        <Rich text="*un décor, une situation*" /> :
      </Rule>
      <Example text="La rue était fort animée. Les décorations de Noël donnaient un air de fête à toute la ville." />
      <p className="mb-2 text-[14.5px] text-tb-muted">
        The street was very busy. The Christmas decorations lent the town a
        festive air.
      </p>
      <Rule>
        <span className="font-semibold">d. </span>
        <Rich text="*une action cadre*" /> où peut intervenir une action
        nouvelle, ponctuelle (qui, elle, est présentée au passé composé ou au
        passé simple) :
      </Rule>
      <Example text="Il traversait la rue quand, soudain, il entendit crier." />
      <p className="mb-2 text-[14.5px] text-tb-muted">
        He was crossing the street when suddenly he heard shouting.
      </p>

      <Subhead text="II. 3 Cas où l'on n'emploie pas l'imparfait" />
      <Rule>
        On n&apos;emploie pas l&apos;imparfait si, pour exprimer une action qui
        n&apos;a eu lieu <Rich text="*qu'une fois*" />, on précise les limites
        de cette action :
      </Rule>
    </TextbookPage>
  );
}

function Page202() {
  return (
    <TextbookPage pageNumber={202} pageNumberSide="left">
      <Rule>
        <span className="font-semibold">a. </span>
        soit en marquant le <Rich text="*début*" /> ou la{" "}
        <Rich text="*fin*" /> de cette action ;
      </Rule>
      <Rule>
        <span className="font-semibold">b. </span>
        soit en précisant l&apos;action par une{" "}
        <Rich text="*date*" /> ou par une <Rich text="*durée mesurée*" /> (un
        jour, un mois, deux heures, etc.).
      </Rule>
      <Rule>
        De plus, pour indiquer une action <Rich text="*non répétée*" />, on
        n&apos;utilise pas l&apos;imparfait avec l&apos;adverbe{" "}
        <Rich text="*longtemps*" />.
      </Rule>
      <Rule>
        Dans ces trois cas, on utilise le <Rich text="*passé composé*" /> ou le{" "}
        <Rich text="*passé simple*" />.
      </Rule>
      <Example text="Je suis venu hier." translation="I came yesterday." />
      <Example
        text="J'ai travaillé pendant 20 ans dans ce bureau."
        translation="I worked for 20 years in this office."
      />
      <Example
        text="À partir de ce jour-là, j'ai cessé de fumer."
        translation="From that day on, I stopped smoking."
      />
      <Example
        text="J'ai attendu longtemps."
        translation="I waited a long time."
      />

      <AttentionBox>
        <p>
          On n&apos;utilise pas l&apos;imparfait quand, pour une action non
          répétée, on signale nettement le <Rich text="*début*" /> de
          l&apos;action ; par exemple, quand la phrase commence par{" "}
          <Rich text="*soudain*" />, <Rich text="*à ce moment-là*" />,{" "}
          <Rich text="*alors*" />, ou par une proposition temporelle qui
          précise nettement le <Rich text="*début*" /> de l&apos;action.
        </p>
        <Example
          text="Lorsqu'il est entré, tout le monde s'est levé."
          translation="When he entered, everyone rose."
        />
        <Example
          text="Alors, tout le monde s'est levé."
          translation="Then [at that moment] everyone rose."
        />
      </AttentionBox>

      <ExerciseBox title="B. Mettez au temps du passé qui convient.">
        <ExerciseItem n={1}>
          À mon arrivée, il (venir) <Blank width="7rem" /> à ma rencontre.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Pendant trois heures, je (attendre) <Blank width="7rem" /> sans me
          décourager.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Il (être) <Blank width="6rem" /> cinq heures ; les gens (boire){" "}
          <Blank width="6rem" /> aux terrasses des cafés ; les flâneurs (se
          promener) <Blank width="6rem" /> dans les rues.
        </ExerciseItem>
      </ExerciseBox>

      <SectionDivider title="III. Imparfait de répétition" />
      <Example
        centered
        text="Il venait le 1er janvier."
        translation="He used to come on January 1."
      />
      <Example
        centered
        text="Il est venu le 1er janvier."
        translation="He came on January 1."
      />

      <Subhead text="III. 1 L'idée de répétition" />
      <ArrowItem>
        On peut utiliser l&apos;imparfait tout en précisant{" "}
        <Rich text="*le jour, l'heure*" /> de l&apos;action ou{" "}
        <Rich text="*le lieu*" /> de l&apos;action mais, dans ce cas,{" "}
        <Rich text="*l'imparfait*" /> marque l&apos;idée de{" "}
        <Rich text="*répétition*" />.
      </ArrowItem>
      <ArrowItem>Comparez :</ArrowItem>
      <Example text="Il venait le 1er janvier." translation="(Il avait l'habitude de venir tous les 1er janvier.)" />
      <Example text="Il est venu un 1er janvier." translation="(Un 1er janvier précis.)" />
    </TextbookPage>
  );
}

function Page203() {
  return (
    <TextbookPage pageNumber={203}>
      <ArrowItem>De même :</ArrowItem>
      <Example
        text="Il a dormi longtemps."
        translation="(un fait considéré comme occasionnel)"
      />
      <p className="mb-2 text-[14.5px] text-tb-muted">He slept for a long time.</p>
      <Example
        text="Il dormait longtemps."
        translation="(un fait considéré comme habituel)"
      />
      <p className="mb-2 text-[14.5px] text-tb-muted">
        He used to sleep for a long time.
      </p>

      <Subhead text="III. 2 L'idée de répétition dans une période limitée" />
      <ArrowItem>
        Si un fait <Rich text="*répété*" /> est lui-même englobé dans une{" "}
        <Rich text="*période de temps limitée avec précision*" />, on
        n&apos;utilise pas l&apos;imparfait (on utilise alors le{" "}
        <Rich text="*passé composé*" /> ou le <Rich text="*passé simple*" />).
      </ArrowItem>
      <Example text="Il manquait les cours quatre fois par mois." />
      <p className="mb-2 text-[14.5px] text-tb-muted">
        He used to miss class four times a month.
      </p>
      <Rule>
        (On signale la répétition sans préciser la période globale de toutes
        les absences. Pendant combien de mois a-t-il été absent ? On n&apos;en
        sait rien.)
      </Rule>
      <ArrowItem>Mais on dira :</ArrowItem>
      <Example text="Il a manqué les cours quatre fois le mois dernier." />
      <p className="mb-2 text-[14.5px] text-tb-muted">
        He missed class four times last month.
      </p>
      <Rule>
        (On signale bien la répétition : « quatre fois » mais on précise aussi
        la période globale dans laquelle s&apos;inscrit la répétition et cette
        période est envisagée comme unique.)
      </Rule>
      <ArrowItem>Autres exemples :</ArrowItem>
      <Example text="Il jouait du piano de 6 h à 8 h." translation="(imparfait de répétition)" />
      <p className="mb-2 text-[14.5px] text-tb-muted">
        He used to play the piano from 6 to 8 o&apos;clock.
      </p>
      <Example text="Il a joué du piano de 6 h à 8 h pendant toute une année." translation="(répétition mais située dans les limites d'une période globale)." />
      <p className="mb-2 text-[14.5px] text-tb-muted">
        He played the piano from 6 to 8 o&apos;clock for a year.
      </p>

      <ExerciseBox title="C. Ajoutez un complément circonstanciel de temps ou un adverbe qui accentue la nuance apportée par les temps employés.">
        <p>
          Il a pris l&apos;autobus (<em>ce matin</em>). → Il prenait
          l&apos;autobus <em>tous les matins</em>.
        </p>
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
          <div>
            <ExerciseItem n={1}>
              Je l&apos;ai rencontré.
              <br />
              Je le rencontrais.
            </ExerciseItem>
            <ExerciseItem n={2}>
              Nous sommes allés en vacances.
              <br />
              Nous allions en vacances.
            </ExerciseItem>
            <ExerciseItem n={3}>
              Elles sont allées au cinéma.
              <br />
              Elles allaient au cinéma.
            </ExerciseItem>
          </div>
          <div>
            <ExerciseItem n={4}>
              Elle est venue nous voir.
              <br />
              Elle venait nous voir.
            </ExerciseItem>
            <ExerciseItem n={5}>
              Papa nous a apporté un cadeau.
              <br />
              Papa nous apportait un cadeau.
            </ExerciseItem>
          </div>
        </div>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page204() {
  return (
    <TextbookPage pageNumber={204} pageNumberSide="left">
      <SectionDivider title="IV. Autres emplois" />
      <Example
        centered
        text="J'attendais depuis cinq heures quand il est arrivé."
        translation="I had been waiting for 5 hours when he arrived."
      />
      <Example
        centered
        text="Il a dit qu'il était fatigué."
        translation="He said he was tired."
      />
      <Example
        centered
        text="Si j'étais riche, je prendrais ma retraite."
        translation="If I were rich, I would retire."
      />

      <Subhead text="IV. 1 Imparfait et past-perfect" />
      <Rule>
        Lorsqu&apos;une action (A) commencée dans le passé n&apos;est pas
        terminée lorsqu&apos;une autre action au passé (B) commence, le
        français utilise l&apos;<Rich text="*imparfait*" /> (avec la
        préposition <Rich text="*depuis*" />, si l&apos;on veut préciser la
        durée ou la date). L&apos;anglais utilise le past-perfect à la{" "}
        <Rich text="*forme progressive*" /> (schéma : had been + (work)-ing
        avec la préposition since ou for).
      </Rule>
      <div className="my-3 grid grid-cols-3 text-center text-[14px] text-tb-ink">
        <span>Passé 1</span>
        <span>Passé 2</span>
        <span>Présent</span>
      </div>
      <div className="mb-3 grid grid-cols-[1fr_1fr_auto] items-end gap-2 text-center text-[14px]">
        <div>
          <div className="border-b border-tb-ink pb-1">A</div>
        </div>
        <div>
          <div className="border-b border-tb-ink pb-1">B</div>
        </div>
        <span className="pb-1 text-tb-muted">Présent</span>
      </div>
      <div className="mb-4 grid gap-2 sm:grid-cols-2">
        <Example
          text="J'attendais depuis cinq heures"
          translation="I had been waiting for five hours (since five o'clock)"
        />
        <Example text="quand il est arrivé." translation="when he arrived." />
      </div>

      <Subhead text="IV. 2 L'imparfait dans le discours indirect" />
      <ArrowItem>
        On utilise parfois l&apos;<Rich text="*imparfait*" /> dans le{" "}
        <Rich text="*discours indirect*" /> quand le verbe de déclaration est à
        un temps du passé (
        <CrossRef>chapitre 36, III. 2, p. 276</CrossRef>).
      </ArrowItem>
      <Example
        text="Il a dit : « Je suis fatigué. »"
        translation='He said : "I am tired."'
      />
      <Example
        text="Il a dit qu'il était fatigué."
        translation="He said he was tired."
      />

      <Subhead text="IV. 3 L'imparfait et l'hypothèse" />
      <ArrowItem>
        On utilise parfois l&apos;<Rich text="*imparfait*" /> dans une
        subordonnée d&apos;<Rich text="*hypothèse*" /> (
        <CrossRef>chapitre 32, I. 1, p. 244</CrossRef>).
      </ArrowItem>
      <Example
        text="Si j'étais riche, je prendrais ma retraite."
        translation="If I were rich, I would retire."
      />
      <ArrowItem>
        On utilise parfois aussi l&apos;imparfait après{" "}
        <Rich text="*même si*" /> et <Rich text="*comme si*" /> (
        <CrossRef>chapitre 32, I. 2, p. 246 et III. 2, p. 247</CrossRef>).
      </ArrowItem>
      <Example
        text="Même si j'étais riche, je ne prendrais pas ma retraite."
        translation="Even if I were rich, I would not retire."
      />
      <Example
        text="Elle fait comme si elle n'avait pas d'argent."
        translation="She acts as if she had no money."
      />

      <ExerciseBox title="D. Mettez les verbes au temps du passé qui convient.">
        <ExerciseItem n={1}>
          [jouer] Ils <Blank width="7rem" /> depuis une heure quand on les a
          appelés.
        </ExerciseItem>
        <ExerciseItem n={2}>
          [donner] Même si tu me le <Blank width="7rem" />, je ne le prendrais
          pas.
        </ExerciseItem>
        <ExerciseItem n={3}>
          [vouloir] Le chien s&apos;avance vers nous, comme s&apos;il{" "}
          <Blank width="7rem" /> nous mordre.
        </ExerciseItem>
        <ExerciseItem n={4}>
          [savoir] Il a déclaré qu&apos;il ne <Blank width="7rem" /> rien.
        </ExerciseItem>
        <ExerciseItem n={5}>
          [sonner] Le gardien dormait profondément quand le téléphone{" "}
          <Blank width="7rem" />.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page205() {
  return (
    <TextbookPage pageNumber={205}>
      <ExerciseBox title="E. Traduisez.">
        {exerciseE.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
      <ExerciseBox title="F. Transposez le texte suivant au passé en utilisant le temps qui convient (imparfait ou passé composé).">
        <p>{exerciseF}</p>
      </ExerciseBox>
      <ExerciseBox title="G. Traduisez.">
        <p>{exerciseG}</p>
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter26() {
  return (
    <div className="space-y-8 py-8">
      <Page200 />
      <Page201 />
      <Page202 />
      <Page203 />
      <Page204 />
      <Page205 />
    </div>
  );
}
