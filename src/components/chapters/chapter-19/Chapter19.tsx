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
  SquareItem,
  Subhead,
  TextbookPage,
} from "@/components/textbook";
import {
  chapter19,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseD,
  exerciseE,
  overview,
} from "@/content/chapters/19";

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

function DashList({
  items,
  columns = 1,
}: {
  items: readonly string[];
  columns?: 1 | 2 | 3;
}) {
  const cols =
    columns === 3 ? "sm:grid-cols-3" : columns === 2 ? "sm:grid-cols-2" : "";
  return (
    <ul className={`my-2 grid grid-cols-1 gap-x-6 gap-y-0.5 text-[15px] leading-relaxed ${cols}`}>
      {items.map((item) => (
        <li key={item}>
          – <Rich text={item} />
        </li>
      ))}
    </ul>
  );
}

function Page149() {
  return (
    <TextbookPage pageNumber={149}>
      <ChapterHeader number={chapter19.number} title={chapter19.title} />
      <OverviewBlock />
      <SectionBar title="I. Verbes suivis de la préposition « à »" />
      <Example text="Elle a réussi *à* obtenir le silence." centered />
      <Example text="J'ai *à* travailler." centered />

      <Subhead text="I. 1 Liste des verbes concernés" />
      <Rule>
        Certains verbes sont reliés à l&apos;infinitif complément par la préposition <em>à</em>. Généralement ces verbes marquent un effort, une tension.
      </Rule>
      <Rule>On notera en particulier :</Rule>
      <DashList
        items={[
          "chercher *à* (faire plaisir, etc.) ;",
          "apprendre *à* (écrire, etc.) ;",
          "consentir *à* (recevoir un visiteur, etc.) ;",
          "enseigner *à* (respecter la loi, etc.) ;",
          "réussir *à* (obtenir un poste, etc.) ;",
          "hésiter *à* (partir, etc.).",
        ]}
      />
      <p className="text-right">
        <CrossRef>annexes, p. 342-343</CrossRef>
      </p>
    </TextbookPage>
  );
}

function Page150() {
  return (
    <TextbookPage pageNumber={150} pageNumberSide="left">
      <Subhead text="I. 2 Le verbe avoir" />
      <Rule>
        Le verbe <em>avoir</em> suivi de <em>à</em> et d&apos;un infinitif marque une obligation, une contrainte, un besoin.
      </Rule>
      <Gloss fr="J'ai *à* travailler." en="I have to work." />
      <Gloss fr="J'ai beaucoup *à* faire." en="I have a lot to do." />
      <Gloss fr="Tu n'as rien *à* craindre." en="You have nothing to fear." />

      <Subhead text="I. 3 Le verbe être" />
      <SquareItem>
        <p>
          Le verbe <em>être</em> suivi de <em>à</em> et d&apos;un infinitif marque une nécessité, un devoir ou une tension psychologique.
        </p>
        <Gloss fr="C'est *à* prendre ou *à* laisser." en="Take it or leave it." />
        <Gloss fr="C'est un film *à* voir." en="It's a film you must see." />
      </SquareItem>
      <SquareItem>
        <p>
          Lorsque l&apos;infinitif est suivi d&apos;une subordonnée introduite par <em>que</em>, on utilise le sujet apparent <em>il</em>.
        </p>
        <Example text="Il est *à* craindre que vous soyez en retard. (= que vous soyez en retard est *à* craindre ; il ne peut pas être remplacé par un nom.)" />
      </SquareItem>

      <ExerciseBox title="A. Traduisez.">
        {exerciseA.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="II. Verbes suivis de la préposition « de »" />
      <Example text="Elle craint *d'*arriver trop tard." centered />
      <Example text="Je demande au témoin *de* dire la vérité." centered />

      <Subhead text="II. 1 Liste des verbes concernés" />
      <Rule>
        Certains verbes sont reliés à l&apos;infinitif complément par la préposition <em>de</em>.
      </Rule>
      <Rule>On notera en particulier :</Rule>
      <DashList
        columns={2}
        items={[
          "accuser *de* (copier sur le voisin, etc.) ;",
          "refuser *de* (subir un chantage, etc.) ;",
          "accepter *de* (répondre, etc.) ;",
          "décider *de* (partir en vacances, etc.) ;",
          "craindre *de* (faire de la peine, etc.) ;",
          "cesser *de* (parler, etc.).",
        ]}
      />
      <p className="text-right">
        <CrossRef>annexes, p. 343-344</CrossRef>
      </p>
    </TextbookPage>
  );
}

function Page151() {
  return (
    <TextbookPage pageNumber={151}>
      <Subhead text="II. 2 Différentes fonctions de la préposition de" />
      <SquareItem>
        <p>Il faut parfois distinguer :</p>
        <p>
          <span className="font-bold text-tb-teal">a. </span>
          si <em>de</em> est une simple préposition de liaison :
        </p>
        <Example text="Je crains *de* partir. (Si le complément est un nom, le verbe se construit directement : je crains ce départ.)" />
        <p>
          <span className="font-bold text-tb-teal">b. </span>
          si <em>de</em> est une préposition qui accompagne toujours le verbe :
        </p>
        <Example text="J'ai besoin *de* travailler. (Si le complément est un nom, le verbe se construit également avec *de* : j'ai besoin de ce travail.)" />
      </SquareItem>
      <SquareItem>
        <p>
          Si on remplace la proposition infinitive par un pronom, dans le premier cas, on utilise le pronom <em>le</em>.
        </p>
        <Example text="Je crains *de* partir. → Je *le* crains. (Question : Que crains-tu ?)" />
      </SquareItem>
      <SquareItem>
        <p>
          Dans le deuxième cas, on utilise le pronom <em>en</em>.
        </p>
        <Example text="J'ai besoin *de* partir. → J'*en* ai besoin. (Question : De quoi as-tu besoin ?)" />
        <p className="text-right">
          <CrossRef>chapitre 10, IV. 3, p. 80</CrossRef>
        </p>
      </SquareItem>

      <ExerciseBox title="B. Traduisez.">
        {exerciseB.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <Subhead text="II. 3 Construction" />
      <Rule>
        Certains verbes sont transitifs directs (par exemple, demander qqch., suggérer qqch., etc.) mais sont suivis d&apos;un complément indirect de personne s&apos;ils ont en même temps un complément direct de chose (demander qqch. à quelqu&apos;un, ordonner qqch. à quelqu&apos;un).
      </Rule>
      <AttentionBox>
        <p>
          Ces verbes, quand ils sont suivis d&apos;un infinitif complément précédé de <em>de</em>, mettent le complément de personne au régime indirect.
        </p>
        <Example
          text="Défendre *à* quelqu'un *de* marcher sur la pelouse."
          translation="To forbid someone to walk on the grass."
        />
        <Example
          text="Demander *à* quelqu'un *de* prendre rendez-vous."
          translation="To ask someone to make an appointment."
        />
      </AttentionBox>
      <Rule>
        Voici les verbes les plus courants. Il est utile de les connaître par cœur.
      </Rule>
      <DashList
        columns={3}
        items={[
          "commander",
          "dire",
          "promettre",
          "conseiller",
          "interdire",
          "proposer",
          "défendre",
          "pardonner",
          "reprocher",
          "demander",
          "permettre",
          "suggérer",
        ]}
      />
    </TextbookPage>
  );
}

function Page152() {
  return (
    <TextbookPage pageNumber={152} pageNumberSide="left">
      <ExerciseBox title="C. Traduisez.">
        {exerciseC.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="III. « À » ou « de » ?" />
      <Example text="Il s'attend *à* partir." centered />
      <Example text="Il attend *de* partir." centered />

      <Subhead text="III. 1 Préposition et sens du verbe" />
      <Rule>
        Certains verbes peuvent se construire avec la préposition <em>à</em>, la préposition <em>de</em> ou encore sans préposition, en changeant de sens.
      </Rule>
      <Rule>On notera en particulier :</Rule>
      <Example text="– Il s'attend *à* partir. = Il ne sera pas surpris *de* partir." />
      <p className="mb-1 text-[14.5px] text-tb-muted">He is expecting to leave.</p>
      <Example text="≠ Il attend *de* partir. = Il cherche *à* partir ; il est impatient *de* partir." />
      <p className="mb-1 text-[14.5px] text-tb-muted">He is waiting to leave.</p>
      <Gloss
        fr="– Il se décide *à* partir = Il prend enfin une décision."
        en="He makes up his mind to leave."
      />
      <Gloss
        fr="≠ Il décide *de* partir = Il prend une initiative."
        en="He decides to leave."
      />
      <p className="text-right">
        <CrossRef>annexes, p. 342-344</CrossRef>
      </p>

      <SectionBar title="IV. « Pour » + infinitif" />
      <Example text="Je travaille *pour* payer mes factures." centered />
      <Example text="Il est trop jeune *pour* voir ce film." centered />
      <Example text="Il a eu une contravention *pour* être allé trop vite." centered />

      <Subhead text="IV. 1 On utilise pour et un infinitif :" />
      <Rule>
        <span className="font-bold text-tb-teal">a. </span>
        pour exprimer un but, une intention ou un projet (to = in order to) :
      </Rule>
      <Gloss fr="Je travaille *pour* payer mes factures." en="I work to pay my bills." />
    </TextbookPage>
  );
}

function Page153() {
  return (
    <TextbookPage pageNumber={153}>
      <Rule>
        <span className="font-bold text-tb-teal">b. </span>
        après <em>trop</em> et <em>assez</em> + adjectif pour exprimer un résultat, une conséquence :
      </Rule>
      <Example
        text="Il est trop jeune *pour* rester seul à la maison."
        translation="He is too young to stay at home alone."
      />
      <Gloss
        fr="Elle est assez grande *pour* comprendre."
        en="She is old enough to understand."
      />

      <Rule>
        <span className="font-bold text-tb-teal">c. </span>
        après le verbe <em>suffire</em> et les adjectifs <em>suffisant</em> et <em>insuffisant</em> :
      </Rule>
      <Example
        text="Ces explications suffiront *pour* te guider."
        translation="These directions will suffice to guide you."
      />

      <Rule>
        <span className="font-bold text-tb-teal">d. </span>
        pour traduire <em>for</em> + the forme en <em>-ing</em> quand elle exprime une cause :
      </Rule>
      <Rule>
        Dans ce cas, l&apos;infinitif en français est un infinitif passé.
      </Rule>
      <Example
        text="Il a eu une prime *pour* être arrivé à l'heure."
        translation="He got a bonus for arriving on time."
      />

      <ExerciseBox title="D. Traduisez à l'aide d'un infinitif précédé de la préposition « de ».">
        {exerciseD.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="E. Traduisez à l'aide d'un infinitif précédé de la préposition « à ».">
        {exerciseE.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page154() {
  return (
    <TextbookPage pageNumber={154} pageNumberSide="left">
      <ExerciseBox title="Complétez les phrases suivantes à l'aide de la préposition qui convient.">
        <ExerciseItem n={1}>
          Ses complexes d&apos;infériorité l&apos;empêchent <Blank width="7rem" /> réussir.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Ses parents cherchent <Blank width="7rem" /> lui faire plaisir.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Je m&apos;amuse <Blank width="7rem" /> collectionner les boîtes d&apos;allumettes.
        </ExerciseItem>
        <ExerciseItem n={4}>
          La victime jura <Blank width="7rem" /> se venger.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Évitez <Blank width="7rem" /> prendre ce chemin.
        </ExerciseItem>
        <ExerciseItem n={6}>
          Permettez-moi <Blank width="7rem" /> vous présenter mon amie.
        </ExerciseItem>
        <ExerciseItem n={7}>
          Je vous promets <Blank width="7rem" /> vous téléphoner.
        </ExerciseItem>
        <ExerciseItem n={8}>
          Nous tenons <Blank width="7rem" /> assister à ce concert.
        </ExerciseItem>
        <ExerciseItem n={9}>
          Il s&apos;attend <Blank width="7rem" /> être élu au conseil municipal.
        </ExerciseItem>
        <ExerciseItem n={10}>
          Elle a demandé <Blank width="6rem" /> ses voisins <Blank width="6rem" /> faire moins de bruit.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter19() {
  return (
    <div className="space-y-8 py-8">
      <Page149 />
      <Page150 />
      <Page151 />
      <Page152 />
      <Page153 />
      <Page154 />
    </div>
  );
}
