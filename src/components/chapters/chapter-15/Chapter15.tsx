import type { ReactNode } from "react";
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
  TextbookPage,
} from "@/components/textbook";
import {
  chapter15,
  exerciseB,
  exerciseC,
  exerciseG,
  exerciseI,
  overview,
} from "@/content/chapters/15";

function OverviewBlock() {
  return (
    <div className="mx-auto max-w-[38rem] space-y-4 text-center">
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

function Gloss({ fr, en }: { fr: string; en: string }) {
  return (
    <p className="mb-1 text-[15px] italic text-tb-example">
      <Rich text={fr} />
      <span className="not-italic text-tb-muted"> {en}</span>
    </p>
  );
}

function Xref({ children }: { children: ReactNode }) {
  return (
    <span className="whitespace-nowrap font-medium text-tb-cyan">
      → {children}
    </span>
  );
}

function Page122() {
  return (
    <TextbookPage pageNumber={122} pageNumberSide="left">
      <ChapterHeader number={chapter15.number} title={chapter15.title} />
      <OverviewBlock />
    </TextbookPage>
  );
}

function Page123() {
  return (
    <TextbookPage pageNumber={123}>
      <SectionBar title="I. Adjectifs et pronoms" />
      <Example centered text="Certaines personnes ne savent pas garder un secret." />
      <Example centered text="Chaque pays est responsable de la pollution." />
      <Example centered text="Chacun doit prendre des mesures pour la combattre." />

      <Subhead text="I. 1 Il faut distinguer adjectifs et pronoms indéfinis" />
      <Rule>
        Aucun, autre, certain, même, nul, plusieurs, tel et tout peuvent être
        adjectifs indéfinis ou pronoms indéfinis.
      </Rule>
      <SquareItem>
        <p>
          Ils sont <Rich text="*adjectifs*" /> quand ils précèdent un nom et
          qu&apos;ils déterminent ce nom.
        </p>
      </SquareItem>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Aucun (Nul)* homme n'est capable d'accomplir un tel exploit." />
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Certains* étudiants sont bilingues." />
      </p>
      <Nb>
        à l&apos;exception de <em>autre</em>, de <em>même</em> et de{" "}
        <em>tout</em> (<em>les autres enfants</em>, <em>les mêmes enfants</em>,{" "}
        <em>tous les enfants</em>), les adjectifs indéfinis ne sont pas
        accompagnés de l&apos;article défini.
      </Nb>
      <SquareItem>
        <p>
          Ils sont <Rich text="*pronoms*" /> quand ils remplacent un nom.
        </p>
      </SquareItem>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Nul* n'est censé ignorer la loi." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Certaines* vous diront la vérité." />
      </p>

      <Subhead text="I. 2 Problèmes de traduction" />
      <SquareItem>
        <p>
          Quand <Rich text="*each*" /> est <Rich text="*adjectif*" />, on le
          traduit par <Rich text="*chaque*" /> (forme unique du masculin et du
          féminin).
        </p>
      </SquareItem>
      <Gloss
        fr="*Chaque* pays envoie deux délégués au congrès."
        en="Each country is sending two delegates to the congress."
      />
      <SquareItem>
        <p>
          Quand <Rich text="*each*" /> est <Rich text="*pronom*" />, on le
          traduit par <Rich text="*chacun*" /> ou par <Rich text="*chacune*" />{" "}
          (selon le genre du nom qu&apos;il remplace).
        </p>
      </SquareItem>
      <Gloss
        fr="*Chacun* restera trois jours dans la capitale."
        en="Each (one) will stay three days in the capital."
      />
      <SquareItem>
        <p>
          <Rich text="*Everyone*" /> ou <Rich text="*everybody*" /> suivis de{" "}
          <em>who</em> ou de <em>whom</em> sont traduits par{" "}
          <Rich text="*tous ceux qui*" />, <Rich text="*tous ceux que*" />.
        </p>
      </SquareItem>

      <ExerciseBox title="A. Dans les phrases suivantes, repérez l'indéfini. Dites s'il s'agit d'un adjectif ou d'un pronom.">
        <ExerciseItem n={1}>
          Tous les enfants étaient présents à la petite fête mais certains ont
          dû partir tôt.
        </ExerciseItem>
        <ExerciseItem n={2}>
          J&apos;ai fait les mêmes exercices que toi.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Certains étudiants sèchent souvent les cours.
        </ExerciseItem>
        <ExerciseItem n={4}>
          J&apos;ai vu quelques films intéressants dont plusieurs en version
          originale.
        </ExerciseItem>
        <ExerciseItem n={5}>
          J&apos;ai entendu plusieurs chansons de Brassens ; je les ai toutes
          aimées.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page124() {
  return (
    <TextbookPage pageNumber={124} pageNumberSide="left">
      <SectionBar title="II. Rien, personne, aucun, nul" />
      <Example centered text="Rien ne va plus." />
      <Example centered text="Personne ne te le dira." />

      <Subhead text="II. 1 Emploi de la négation" />
      <Rule>
        Il ne faut pas oublier la négation <Rich text="*ne*" /> dans une phrase
        avec <Rich text="*rien*, *personne*, *aucun*" /> et{" "}
        <Rich text="*nul*" />.
      </Rule>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Rien ne* l'intéresse." />
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Personne ne* l'a vu." />
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Elle *n'a* fait *aucune* faute." />
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Nul ne* te reprochera cette initiative." />
      </p>
      <AttentionBox>
        <p>
          En présence de <Rich text="*rien*, *personne*, *aucun*, *nul*" />, on
          n&apos;utilise jamais la négation composée{" "}
          <Rich text="*ne… pas*" />. On utilise seulement{" "}
          <Rich text="*ne*" />.
        </p>
      </AttentionBox>

      <Subhead text="II. 2 Transformation due à la négation" />
      <Rule>
        Dans une phrase négative, on n&apos;emploie jamais{" "}
        <Rich text="*quelqu'un*" /> ni <Rich text="*quelque chose*" /> comme{" "}
        <Rich text="*complément*" /> de verbe. On utilise alors{" "}
        <Rich text="*ne… personne*" /> ou <Rich text="*ne… rien*" />.
      </Rule>
      <AttentionBox>
        <p>On ne traduira pas : I didn&apos;t see anything par :</p>
        <p>*« Je n&apos;ai pas vu quelque chose »,</p>
        <p>ni I didn&apos;t see anyone par :</p>
        <p>*« Je n&apos;ai pas vu quelqu&apos;un. »</p>
        <p>On traduira par : « Je n&apos;ai rien vu. »</p>
        <p>« Je n&apos;ai vu personne. »</p>
      </AttentionBox>
      <Nb>
        lorsque <em>rien</em> et <em>personne</em> sont compléments d&apos;objet
        direct, <em>rien</em> se place après l&apos;auxiliaire et{" "}
        <em>personne</em> se place après le participe passé (
        <Xref>II. 2 et Attention, p. 288</Xref>).
      </Nb>

      <ExerciseBox title="B. Traduisez.">
        {exerciseB.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page125() {
  return (
    <TextbookPage pageNumber={125}>
      <SectionBar title="III. Tout" />
      <Example centered text="Tous les hommes sont égaux." />
      <Example centered text="Tout le monde vous le dira." />
      <Example centered text="Il nous rendait visite tous les jours." />

      <Subhead text="III. 1 Tout, tous, toute et toutes" />
      <SquareItem>
        <p>
          <Rich text="*Tout*" /> (masculin singulier) fait au masculin pluriel :{" "}
          <Rich text="*tous*" /> (sans t !).
        </p>
      </SquareItem>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Tous* les hommes sont égaux." />
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Tous* vous le diront." />
      </p>
      <SquareItem>
        <p>
          <Rich text="*Toute*" /> (féminin singulier) fait au féminin pluriel :{" "}
          <Rich text="*toutes*" />.
        </p>
      </SquareItem>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Toutes* les femmes sont libres." />
      </p>

      <Subhead text="III. 2 Emploi d'un article" />
      <SquareItem>
        <p>
          En général, <Rich text="*tout*" />, adjectif indéfini, est suivi de
          l&apos;<Rich text="*article défini*" />.
        </p>
      </SquareItem>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        Charles a dormi <Rich text="*tout l'après-midi*" />.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        Il a répondu à <Rich text="*toutes les* questions" />.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        Je joue au tennis <Rich text="*tous les* matins" />.
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        Ils ont fait <Rich text="*toute la* vaisselle" />.
      </p>
      <Nb>
        <em>tout</em> et <em>toute</em> (adjectifs singuliers) peuvent être,
        selon le sens, suivis de l&apos;article défini ou non. On distinguera :
      </Nb>
      <Gloss
        fr="*Toute la* journée a été agréable (= la journée entière)."
        en="The whole day was pleasant."
      />
      <Gloss
        fr="*Toute* journée vous sera payée (= chaque journée)."
        en="You will be paid for every day."
      />
      <SquareItem>
        <p>
          <Rich text="*Tous*" /> et <Rich text="*toutes*" /> (pronoms pluriels)
          ne sont jamais suivis de l&apos;article.
        </p>
      </SquareItem>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Toutes* / *Tous* vous remercieront." />
      </p>
      <AttentionBox>
        <SquareItem>
          <p>
            <Rich text="*Tous*" /> et <Rich text="*toutes*" /> (pronoms) ne sont
            généralement pas situés entre le sujet et le verbe.
          </p>
        </SquareItem>
        <Gloss fr="Ils sont *tous* venus." en="They all came." />
        <SquareItem>
          <p>
            Lorsque <Rich text="*tous*" /> est pronom, il faut prononcer le{" "}
            <Rich text="*-s*" /> final.
          </p>
        </SquareItem>
      </AttentionBox>

      <Subhead text="III. 3 Tout = pronom singulier" />
      <Rule>
        Lorsque <Rich text="*tout*" /> est pronom singulier, il représente
        toujours un inanimé ou une idée (= everything) ; il ne représente jamais
        une personne.
      </Rule>
      <Gloss fr="*Tout* ira bien." en="Everything will go well." />
    </TextbookPage>
  );
}

function Page126() {
  return (
    <TextbookPage pageNumber={126} pageNumberSide="left">
      <Subhead text="III. 4 Tout(e) et tout" />
      <Rule>
        Il ne faut pas confondre <Rich text="*tout(e)*" /> (adjectif ou pronom
        indéfini) et <Rich text="*tout*" /> (adverbe) (
        <Xref>chapitre 8, II, p. 63</Xref>).
      </Rule>
      <Gloss
        fr="Elle est *tout* en colère."
        en="She is completely (totally) angry."
      />
      <AttentionBox>
        <p>
          <Rich text="*Tout le monde*" />, malgré son sens pluriel de collectif,
          est le sujet d&apos;un verbe au singulier.
        </p>
        <p className="italic text-tb-example">
          <Rich text="*Tout le monde* vous le dira." />
        </p>
      </AttentionBox>

      <Subhead text="III. 5 Répétition dans le temps" />
      <Rule>
        Quand il s&apos;agit d&apos;une répétition dans le temps,{" "}
        <Rich text="*every*" /> se traduit rarement par <Rich text="*chaque*" />{" "}
        et un nom singulier ; le français préfère utiliser{" "}
        <Rich text="*tous*, *toutes*" /> et un nom au pluriel.
      </Rule>
      <Gloss
        fr="Il nous rendait visite *tous les jours*."
        en="He used to visit us every day."
      />

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

function Page127() {
  return (
    <TextbookPage pageNumber={127}>
      <SectionBar title="IV. On" />
      <Example centered text="On a toujours besoin d'un plus petit que soi." />
      <Example centered text="Je me demande si on l'a vendu." />

      <Subhead text="IV. 1 Le pronom on est toujours sujet d'un verbe." />
      <Rule>
        Dans une phrase à valeur généralisante, l&apos;anglais{" "}
        <Rich text="*one*" />, <Rich text="*complément d'objet*" />, se traduit
        par <Rich text="*vous*" />.
      </Rule>
      <Gloss fr="Cela *vous* fait réfléchir." en="It makes one wonder." />

      <Subhead text="IV. 2 On est un pronom de la 3e personne du singulier." />
      <p className="mb-1 text-[15px] text-tb-ink">Par conséquent :</p>
      <SquareItem>
        <p>
          le verbe s&apos;accorde au <Rich text="*singulier*" />.
        </p>
      </SquareItem>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*On vous verra*." />
      </p>
      <SquareItem>
        <p>
          lorsque le verbe a un <Rich text="*pronom réfléchi*" /> comme{" "}
          <Rich text="*complément*" />, le réfléchi est <Rich text="*se*" /> ou{" "}
          <Rich text="*soi*" />.
        </p>
      </SquareItem>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="On ne *se* trompe pas." />
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="On a toujours besoin d'un plus petit que *soi*." />
      </p>
      <SquareItem>
        <p>
          on demande le possessif 3<sup>e</sup> personne du singulier (
          <Rich text="*son*, *sa*, *ses*" />).
        </p>
      </SquareItem>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="On doit apprendre *ses* leçons tous les jours." />
      </p>

      <Subhead text="IV. 3 On, nous et vous" />
      <Rule>
        En français moderne, dans le langage familier,{" "}
        <Rich text="*on*" /> a tendance à remplacer <Rich text="*nous*" /> et{" "}
        <Rich text="*vous*" />. Dans ce cas, on peut faire l&apos;accord de
        l&apos;adjectif attribut au <Rich text="*pluriel*" />.
      </Rule>
      <Gloss fr="On est *tous* riches." en="We are all rich." />

      <Subhead text="IV. 4 Emploi d'un pronom de reprise" />
      <Rule>
        <Rich text="*On*" /> ne peut pas être repris par le pronom personnel{" "}
        <Rich text="*il*" />. Cette règle vaut aussi pour la plupart des
        pronoms indéfinis.
      </Rule>
      <p className="mb-1 text-[15px] text-tb-ink">
        On ne peut pas dire en bon français :
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">
        *« Quelqu&apos;un est venu à la porte ; il avait une lettre à la main. »
      </p>
      <p className="mb-2 text-[14.5px] text-tb-muted">
        Somebody came to the door; he had a letter in his hand.
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">
        Il faut répéter le pronom indéfini ou changer de construction :
      </p>
      <p className="mb-3 text-[15px] text-tb-ink">
        « <Rich text="*Quelqu'un*" /> est venu à la porte{" "}
        <Rich text="*et avait*" /> une lettre à la main. » (Ou : «{" "}
        <Rich text="*Quelqu'un*" /> …, une lettre à la main, etc.)
      </p>

      <Subhead text="IV. 5 Dans le langage soutenu" />
      <SquareItem>
        <p>
          Après <Rich text="*si*" />, <Rich text="*et*" />, <Rich text="*ou*" />{" "}
          et <Rich text="*que*" />, on utilise de préférence{" "}
          <Rich text="*l'on*" /> à <Rich text="*on*" />.
        </p>
      </SquareItem>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        On peut le faire <Rich text="*si l'on*" /> veut.
      </p>
      <SquareItem>
        <p>
          Cette règle ne s&apos;applique pas si le mot suivant commence par la
          lettre <Rich text="*l*" /> car les sonorités seraient désagréables ;
          on ne dira pas *« et l&apos;on l&apos;a vendu », on dira : « et on
          l&apos;a vendu ».
        </p>
      </SquareItem>

      <ExerciseBox title="D. Complétez par « on » ou « l'on » selon le cas.">
        <ExerciseItem n={1}>
          Je me demande si <Blank /> ne va pas arriver en retard.
        </ExerciseItem>
        <ExerciseItem n={2}>
          <Blank /> dira ce qu&apos;<Blank /> voudra, moi, je continue à penser
          le contraire.
        </ExerciseItem>
        <ExerciseItem n={3}>
          <Blank /> nous a dit qu&apos;<Blank /> pourrait camper à cet endroit.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Il faut que <Blank /> te dise la vérité ; <Blank /> n&apos;est pas
          d&apos;accord avec toi.
        </ExerciseItem>
        <ExerciseItem n={5}>
          <Blank /> a toujours besoin d&apos;un plus petit que soi.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page128() {
  return (
    <TextbookPage pageNumber={128} pageNumberSide="left">
      <SectionBar title="V. Quelque, quelqu'un, quelque chose" />
      <Example centered text="Quelques élèves étaient absents." />
      <Example centered text="Quelques-uns étaient malades." />
      <Example centered text="Il nous faut quelque chose d'intéressant." />

      <Subhead text="V. 1 L'adjectif quelque et les pronoms quelqu'un, quelque chose" />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        <Rich text="*Quelque*" /> et <Rich text="*quelques*" /> sont des{" "}
        <Rich text="*adjectifs*" /> indéfinis qui signifient{" "}
        <Rich text="*some*" /> ou <Rich text="*a few*" /> ; ils sont suivis du
        nom qu&apos;ils déterminent.
      </p>
      <Gloss
        fr="J'ai déjà lu *quelques* pages de ce roman policier."
        en="I have already read a few pages of this detective novel."
      />
      <p className="mb-2 mt-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        <Rich text="*Quelques-uns*" /> et <Rich text="*quelques-unes*" /> sont
        des <Rich text="*pronoms*" /> indéfinis qui remplacent un nom pluriel.
      </p>
      <Gloss
        fr="Les candidats inscrits sont nombreux mais *quelques-uns* ne viendront pas."
        en="A lot of candidates have registered but some won't come."
      />
      <Gloss
        fr="*Quelques-unes* des pages de ce roman sont illisibles."
        en="Some of the pages of this novel are unreadable."
      />
      <p className="mb-2 mt-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">c. </span>
        <Rich text="*Quelqu'un*" /> est un pronom singulier qui représente une
        personne d&apos;identité non précisée (someone, somebody).
      </p>
      <Gloss
        fr="*Quelqu'un* frappe à la porte."
        en="Someone's knocking at the door."
      />
      <p className="mb-2 mt-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">d. </span>
        <Rich text="*Quelque chose*" /> (something) est un pronom qui représente
        une chose inanimée non précisée.
      </p>
      <Gloss
        fr="J'ai *quelque chose* à vous dire."
        en="I have something to tell you."
      />
      <AttentionBox>
        <p>
          Lorsque <Rich text="*quelqu'un*" />, <Rich text="*quelque chose*" />,{" "}
          <Rich text="*rien*" /> et <Rich text="*personne*" /> sont suivis
          d&apos;un adjectif <Rich text="*qualificatif*" />, l&apos;adjectif
          qualificatif est précédé de la préposition <Rich text="*de*" /> et il
          se met au masculin singulier.
        </p>
        <Gloss
          fr="Il faut *quelqu'un d'intelligent* à ce poste."
          en="We need someone intelligent for this job."
        />
        <Gloss
          fr="Je mange *quelque chose de bon*."
          en="I am eating something delicious."
        />
        <Gloss
          fr="*Rien de spécial* n'est arrivé."
          en="Nothing special happened."
        />
        <Gloss
          fr="Il n'y a *personne d'aussi courageux* qu'elle."
          en="There is no one as brave as her."
        />
      </AttentionBox>

      <ExerciseBox title="E. Complétez à l'aide d'un des indéfinis mentionnés dans la section V.">
        <ExerciseItem n={1}>
          Je ne prendrai pas tous ces livres ce soir ; je n&apos;en prendrai que{" "}
          <Blank />.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Il a fait <Blank /> remarques judicieuses.
        </ExerciseItem>
        <ExerciseItem n={3}>
          <Blank /> passagers eurent le mal de mer.
        </ExerciseItem>
        <ExerciseItem n={4}>
          <Blank /> n&apos;a pas fermé la porte.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Ils avaient <Blank /> dans la main mais je ne sais pas quoi.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page129() {
  return (
    <TextbookPage pageNumber={129}>
      <SectionBar title="VI. Autre" />
      <Example centered text="Les autres arriveront demain." />
      <Example centered text="D'autres arriveront demain." />
      <Example centered text="Avez-vous d'autres questions ?" />
      <Example centered text="Ils travaillent les uns pour les autres." />

      <Subhead text="VI. 1 Autre peut être adjectif ou pronom." />
      <p className="mb-1 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        Autre est adjectif quand il modifie un nom.
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Les autres* enfants sont restés en récréation." />
      </p>
      <p className="mb-1 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        Autre est pronom quand il remplace un nom.
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Les autres* sont restés en classe." />
      </p>

      <Subhead text="VI. 2 Les deux emplois du pronom pluriel autres" />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        Lorsque <Rich text="*autres*" /> représente{" "}
        <Rich text="*une quantité assez bien définie*" /> parce qu&apos;il
        signifie « all the others », c&apos;est-à-dire le reste d&apos;un groupe
        ou d&apos;un ensemble ou même le reste du monde, on utilise le pronom
        avec l&apos;article défini « les ».
      </p>
      <Gloss
        fr="Trois candidats ont été choisis. *Les autres* ont été éliminés."
        en="Three candidates were chosen. The others were eliminated."
      />
      <Gloss
        fr="Ne le dites pas *aux autres*. (aux = à + les)"
        en="Don't tell the others."
      />
      <Gloss
        fr="Il a pris l'argent *des autres*. (des = de + les)"
        en="He took the others' money."
      />
      <p className="mb-2 mt-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        Lorsque <Rich text="*autres*" /> représente{" "}
        <Rich text="*une quantité non définissable*" /> et signifie « (some)
        others », on utilise la préposition de (d&apos;) sans article.
      </p>
      <Gloss
        fr="Certains étudiants ont échoué ; *d'autres* ont réussi."
        en="Some students failed; others passed."
      />

      <AttentionBox>
        <p>
          On n&apos;utilise pas <Rich text="*des*" /> devant{" "}
          <Rich text="*autres*" /> mais <Rich text="*d'*" /> quand :
        </p>
        <p>
          <span className="font-semibold">a. </span>
          <Rich text="*autres*" /> est <Rich text="*pronom*" /> et marque une
          quantité indéterminée (cas VI. 2, b).
        </p>
        <Gloss
          fr="Ces documents ne sont pas les bons ; j'en veux *d'autres*."
          en="These documents are not the right ones; I want some others."
        />
        <p>
          <span className="font-semibold">b. </span>
          <Rich text="*autres*" /> est <Rich text="*adjectif*" />.
        </p>
        <Gloss
          fr="*D'autres* personnes vous diront le contraire."
          en="Other people will tell you otherwise."
        />
        <Gloss
          fr="Avez-vous *d'autres* questions à poser ?"
          en="Do you have any other questions?"
        />
      </AttentionBox>
      <Nb>
        le plus souvent <em>any</em> et <em>some</em> devant <em>other</em> ne
        se traduisent pas.
      </Nb>
      <p className="mt-2 text-[14.5px] text-tb-muted">
        Do you have some other children?{" "}
        <span className="italic text-tb-example">
          <Rich text="Avez-vous *d'autres* enfants ?" />
        </span>
      </p>
      <p className="text-[14.5px] text-tb-muted">
        No, I don&apos;t have any others.{" "}
        <span className="italic text-tb-example">
          <Rich text="Non, je *n'en ai pas d'autres*." />
        </span>
      </p>
    </TextbookPage>
  );
}

function Page130() {
  return (
    <TextbookPage pageNumber={130} pageNumberSide="left">
      <Subhead text="VI. 3 Les uns les autres et la réciprocité" />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        <Rich text="*Pour marquer la réciprocité*" />, on utilise généralement{" "}
        <Rich text="*le pronom réfléchi*" />.
      </p>
      <Gloss fr="Ils *se* battent." en="They are fighting (each other)." />
      <Gloss
        fr="Ils *se* surveillent."
        en="They are watching each other."
      />
      <p className="mb-2 text-[15px] text-tb-ink">
        On peut <Rich text="*insister*" /> en ajoutant la formule{" "}
        <Rich text="*les uns les autres*" />.
      </p>
      <Gloss
        fr="Ils se surveillent *les uns les autres*."
        en="They are watching each other."
      />
      <Gloss
        fr="Elles se félicitent *les unes les autres*."
        en="They are congratulating each other."
      />
      <p className="mb-2 mt-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        <Rich text="*Dans le cas d'un verbe qui se construit avec une préposition*" />
        , si on utilise la formule <Rich text="*les un(e)s les autres*" />, la
        préposition se place devant <Rich text="*les autres*" />.
      </p>
      <Gloss
        fr="Ils font attention *les uns aux autres*."
        en="They look out for each other."
      />
      <Gloss
        fr="Ils travaillent *les uns pour les autres*."
        en="They work for each other."
      />

      <ExerciseBox title="F. Complétez par les mots qui conviennent.">
        <ExerciseItem n={1}>
          Avez-vous <Blank /> autres coups de téléphone à donner ?
        </ExerciseItem>
        <ExerciseItem n={2}>
          Quelques-uns sont partis mais <Blank /> autres sont restés.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Je vous conseille de parler à <Blank /> autres personnes.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Elles s&apos;encourageaient <Blank /> les autres.
        </ExerciseItem>
        <ExerciseItem n={5}>
          On a toujours besoin les uns <Blank />.
        </ExerciseItem>
      </ExerciseBox>

      <SectionBar title="VII. Même" />
      <Example centered text="Ils font toujours les mêmes fautes." />
      <Example centered text="Elle est venue elle-même." />
      <Example centered text="Même eux ont fait une erreur." />

      <Subhead text="VII. 1 Place de même" />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        Lorsque l&apos;adjectif <Rich text="*même*" /> correspond à{" "}
        <Rich text="*same*" />, il est placé <Rich text="*devant le nom*" />.
      </p>
      <Gloss
        fr="Ils font toujours *les mêmes* fautes."
        en="They always make the same mistakes."
      />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        Lorsque <Rich text="*même*" /> correspond à{" "}
        <Rich text="*-self*" /> (himself, herself, ourselves, etc.), il est
        placé <Rich text="*après le nom*" /> ou, le plus souvent,{" "}
        <Rich text="*après le pronom*" />.
      </p>
      <Gloss
        fr="Elle est venue *elle-même*. (*en personne*)"
        en="She came herself."
      />
      <Rule>
        Dans les deux cas, <Rich text="*même*" /> s&apos;accorde avec le nom ou
        le pronom auquel il se rapporte.
      </Rule>
      <Gloss
        fr="Les directeurs *eux-mêmes* ont été congédiés."
        en="The managers themselves were fired."
      />
    </TextbookPage>
  );
}

function Page131() {
  return (
    <TextbookPage pageNumber={131}>
      <Subhead text="VII. 2 Confusion à éviter" />
      <Rule>
        On ne confondra pas <Rich text="*même*" /> (adjectif ou pronom indéfini)
        et l&apos;adverbe « <Rich text="*même*" /> » (toujours{" "}
        <Rich text="*invariable*" />) qui a le sens de{" "}
        <Rich text="*even*" />.
      </Rule>
      <Gloss
        fr="*Eux-mêmes* ont fait une erreur."
        en="They themselves made a mistake."
      />
      <Gloss
        fr="*Même* eux ont fait une erreur."
        en="Even they made a mistake."
      />

      <ExerciseBox title="G. Traduisez.">
        {exerciseG.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="H. Mettez « tout » (adjectif, pronom ou adverbe) à la forme qui convient.">
        <ExerciseItem n={1}>
          <Blank /> abus sera sévèrement puni.
        </ExerciseItem>
        <ExerciseItem n={2}>
          <Blank /> les bagages étaient prêts.
        </ExerciseItem>
        <ExerciseItem n={3}>
          <Blank /> les insecticides sont dangereux.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Elles étaient <Blank /> contentes d&apos;avoir été reçues à
          l&apos;examen.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Les étudiantes étaient contentes ; <Blank /> avaient été reçues à
          l&apos;examen.
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

export function Chapter15() {
  return (
    <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">
      <Page122 />
      <Page123 />
      <Page124 />
      <Page125 />
      <Page126 />
      <Page127 />
      <Page128 />
      <Page129 />
      <Page130 />
      <Page131 />
    </div>
  );
}
