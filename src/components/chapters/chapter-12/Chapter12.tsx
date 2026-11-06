import type { ReactNode } from "react";
import {
  AttentionBox,
  Blank,
  ChapterHeader,
  CrossRef,
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
  chapter12,
  exerciseA,
  exerciseE,
  exerciseG,
  exerciseN,
  exerciseO,
  exerciseP,
  exerciseQ,
  overview,
} from "@/content/chapters/12";

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

function Note({ n, children }: { n: string; children: ReactNode }) {
  return (
    <p className="mt-3 text-[14.5px] leading-relaxed text-tb-teal">
      <span className="font-semibold">N. B. {n} : </span>
      {children}
    </p>
  );
}

function Page94() {
  return (
    <TextbookPage pageNumber={94} pageNumberSide="left">
      <ChapterHeader number={chapter12.number} title={chapter12.title} />
      <OverviewBlock />

      <SectionDivider title="I. Formes" />
      <Example
        centered
        text="La femme *qui* m'a parlé s'appelle Brigitte Dubois."
      />
      <Example
        centered
        text="La femme *à laquelle* j'ai parlé est une voisine."
      />

      <Subhead text="I. 1 Le pronom relatif a deux séries de formes" />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        – Série a : <Rich text="*qui* – *que* – *quoi* – *dont* – *où*" />. Ces
        pronoms relatifs sont invariables.
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        – Série b :{" "}
        <Rich text="*lequel* – *laquelle* – *lesquels* – *lesquelles*" />. En
        général, on utilise ces pronoms <Term>après une préposition</Term>. Ces
        pronoms varient en genre et en nombre selon l&apos;antécédent (le mot
        qu&apos;ils représentent) ; ils peuvent se combiner aux prépositions{" "}
        <Rich text="*à*" /> et <Rich text="*de*" /> (
        <em>auquel, auxquels, duquel…</em>).
      </p>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Le livre *dans lequel* j'ai trouvé cet exercice..." />
      </p>
      <p className="pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="La question *à laquelle* il a répondu..." />
      </p>
    </TextbookPage>
  );
}

function Page95() {
  return (
    <TextbookPage pageNumber={95}>
      <SquareItem>
        <p>
          Les pronoms relatifs de la série b sont très rarement utilisés en
          l&apos;absence d&apos;une préposition (
          <CrossRef>VI. 2, page 101</CrossRef>).
        </p>
      </SquareItem>
      <p className="mb-1 text-[15px] text-tb-ink">
        On ne dira donc pas : *« Mon frère, lequel s&apos;est acheté un nouvel
        équipement… »
      </p>
      <p className="mb-3 text-[15px] text-tb-ink">
        Il faut dire : « Mon frère <Rich text="*qui*" /> s&apos;est acheté un
        nouvel équipement… »
      </p>

      <Subhead text="I. 2 Non-omission du pronom relatif" />
      <Rule>
        Contrairement à l&apos;anglais, le pronom relatif objet ne peut pas être
        omis.
      </Rule>
      <Gloss
        fr="L'homme *que* je connais..."
        en="The man (that) I know..."
      />
      <Gloss
        fr="La question *à laquelle* j'ai répondu..."
        en="The question (that) I answered..."
      />
      <div className="mb-3">
        <Gloss
          fr="Le livre *dont* j'ai besoin..."
          en="The book (that) I need..."
        />
      </div>

      <ExerciseBox title="A. Traduisez.">
        {exerciseA.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="II. Pronom relatif et antécédent" />
      <Example centered text="L'élève *qui* a compris." />
      <Example centered text="Celui *qui* a compris." />
      <Example centered text="Voilà *ce que* j'ai compris." />

      <Subhead text="II. 1 L'antécédent" />
      <SquareItem>
        <p>
          Le pronom relatif en français a toujours un{" "}
          <Term>antécédent</Term> (nom ou pronom qu&apos;il représente). (Les
          formules du type « Qui vivra verra » sont des formules figées,
          utilisées dans les proverbes.)
        </p>
      </SquareItem>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="L'inspecteur *qui* a surveillé les travaux a envoyé un rapport." />
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Celui *qui* a surveillé les travaux a envoyé un rapport." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Lui, *qui* était si pressé, retarde maintenant les travaux." />
      </p>
      <SquareItem>
        <p>
          Lorsque l&apos;antécédent est le pronom indéfini <Rich text="*tout*" />,
          on appuie cet antécédent au moyen du pronom démonstratif{" "}
          <Rich text="*ce*" />.
        </p>
      </SquareItem>
      <Gloss
        fr="C'est *tout ce que* je peux vous dire."
        en="It is all I can tell you."
      />
      <Gloss
        fr="C'est *tout ce qui* lui plaît."
        en="That's all he likes."
      />
    </TextbookPage>
  );
}

function Page96() {
  return (
    <TextbookPage pageNumber={96} pageNumberSide="left">
      <ExerciseBox title="B. Dans les phrases suivantes, soulignez le pronom relatif (un trait) et son antécédent (deux traits).">
        <ExerciseItem n={1}>
          J&apos;ai reçu la lettre qu&apos;il m&apos;a envoyée.
        </ExerciseItem>
        <ExerciseItem n={2}>Ce que je craignais est arrivé.</ExerciseItem>
        <ExerciseItem n={3}>
          As-tu vu le film dont je t&apos;ai parlé ?
        </ExerciseItem>
        <ExerciseItem n={4}>
          La table sur laquelle nous mangeons est très fragile.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Les chiens sont des animaux auxquels nous nous attachons.
        </ExerciseItem>
      </ExerciseBox>

      <Subhead text="II. 2 Traduction de what" />
      <Rule>
        Puisque le pronom relatif a toujours un antécédent, on traduira{" "}
        <Term>what</Term>, relatif anglais, par <Term>deux</Term> mots en
        français : un antécédent (le pronom démonstratif <Rich text="*ce*" />)
        et le pronom relatif.
      </Rule>
      <Gloss
        fr="Je vois *ce que* vous voulez dire."
        en="I see what you mean."
      />
      <Gloss
        fr="Je comprends *ce qui* vous ennuie."
        en="I understand what bothers you."
      />
      <Nb>
        on ne confondra pas <em>what</em> relatif avec <em>what</em> exclamatif
        (<em>What a good teacher!</em> = Quel bon professeur !) ni avec{" "}
        <em>what</em> interrogatif qui, dans une interrogation indirecte, se
        traduit sans <Rich text="*ce*" />.
      </Nb>
      <p className="mb-1 mt-3 text-[15px] italic text-tb-example">
        Elle demande à quoi tu fais allusion.{" "}
        <span className="not-italic text-tb-ink">(interrogation indirecte)</span>
      </p>
      <p className="mb-2 pl-4 text-[14.5px] text-tb-muted">
        She asks what you are referring to.
      </p>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="Elle voit *ce à quoi* tu fais allusion." />{" "}
        <span className="not-italic text-tb-ink">(relatif)</span>
      </p>
      <p className="mb-1 pl-4 text-[14.5px] text-tb-muted">
        She can see what you are referring to.
      </p>
      <p className="mb-4 text-right text-[14px] text-tb-cyan">
        <CrossRef>V, p. 262</CrossRef>
      </p>

      <Subhead text="II. 3 Accord du pronom relatif" />
      <Rule>
        Le pronom relatif est du même <Term>genre</Term>, du même{" "}
        <Term>nombre</Term> et de la même <Term>personne</Term> que son
        antécédent.
      </Rule>
      <p className="mb-2 text-[15px] text-tb-ink">Par exemple :</p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        Si l&apos;antécédent est une 2<sup>e</sup> personne du pluriel, le
        pronom relatif sujet est, lui aussi, une 2<sup>e</sup> personne du
        pluriel et le verbe s&apos;accorde avec lui. Pour cette raison on dira :
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="C'est *vous qui êtes* récompensés." />
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="C'est *moi qui suis* arrivé le premier." />
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        Attention à l&apos;accord du verbe avec plusieurs pronoms personnels
        antécédents.
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Vous et moi, qui avons* le même âge, nous aimons les mêmes chansons." />
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">c. </span>
        Si l&apos;antécédent est masculin, le pronom relatif est masculin. Si
        l&apos;antécédent est féminin pluriel, le pronom relatif est féminin
        pluriel, etc.
      </p>
      <SquareItem>
        <p>
          Pour cette raison, si le pronom relatif est un{" "}
          <Term>complément d&apos;objet direct</Term>, il faut faire
          l&apos;accord du participe passé conjugué avec <Term>avoir</Term> dans
          la proposition relative.
        </p>
      </SquareItem>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Il m'a rendu les cinq dollars *que* je lui avais prêtés." />{" "}
        <span className="not-italic text-tb-ink">
          (<Rich text="*Que*" /> est un c.o.d. de prêter ;{" "}
          <Rich text="*que*" /> est masculin pluriel par son antécédent
          [dollars] → accord.)
        </span>
      </p>
    </TextbookPage>
  );
}

function Page97() {
  return (
    <TextbookPage pageNumber={97}>
      <ExerciseBox title="C. Mettez le verbe à la forme qui convient.">
        <ExerciseItem n={1}>
          Pour vous, qui (être) <Blank /> spécialiste, cette question est
          facile.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Est-ce vous qui (envoyer) <Blank /> le dossier ?
        </ExerciseItem>
        <ExerciseItem n={3}>
          Vous et moi, qui le (connaître) <Blank /> bien, sommes du même avis.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Toi, qui (savoir) <Blank /> tout, donne-moi la réponse.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Nous, qui (rester) <Blank /> à la maison, pourrons le recevoir quand
          il viendra.
        </ExerciseItem>
      </ExerciseBox>

      <SectionBar title="III. « Qui » et « que »" />
      <Example centered text="Les hommes *qui* l'aiment." />
      <Example centered text="Les hommes *que* nous aimons." />

      <Subhead text="III. 1 Le pronom qui" />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        <Rich text="*Qui*" />, pronom relatif, sujet du verbe, a pour antécédent{" "}
        <Term>une personne</Term> ou <Term>une chose</Term>.
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        <Rich text="*Qui*" />, précédé d&apos;une <Term>préposition</Term>, est
        un complément d&apos;objet indirect et ne peut représenter qu&apos;<Term>une personne</Term>.
      </p>
      <p className="mb-3 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">c. </span>
        Qui ne peut pas être élidé.
      </p>

      <Subhead text="III. 2 Le pronom que" />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        <Rich text="*Que*" />, pronom relatif, est toujours complément
        d&apos;objet direct du verbe (l&apos;antécédent peut être une personne
        ou une chose).
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        <Rich text="*Que*" /> n&apos;est <Term>jamais directement</Term> précédé
        d&apos;une préposition.
      </p>
      <p className="mb-1 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">c. </span>
        <Rich text="*Que*" /> est élidé devant une voyelle ou un h muet et
        devient « qu&apos; ».
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="L'enfant *qu'*il a vu." />
      </p>
      <p className="mb-1 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">d. </span>
        <Rich text="*Que*" />, <Term>complément d&apos;objet direct</Term>,
        entraîne l&apos;accord du participe passé du verbe conjugué avec{" "}
        <Term>avoir</Term>.
      </p>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Les enfants *qu'*il a vus." />
      </p>
    </TextbookPage>
  );
}

function Page98() {
  return (
    <TextbookPage pageNumber={98} pageNumberSide="left">
      <Subhead text="III. 3 Qui l' et qu'il" />
      <Rule>
        En raison des règles III. 1 et III. 2, on fera attention à ne pas
        confondre <Rich text="*qui l'*" /> (pronom relatif sujet) et{" "}
        <Rich text="*qu'il*" /> (pronom relatif objet direct).
      </Rule>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Les hommes *qui l'*aiment" /> (les hommes l&apos;aiment) :
        pronom relatif sujet + pronom personnel objet.
      </p>
      <p className="mb-3 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Les hommes *qu'il* aime" /> (il aime les hommes) : pronom
        relatif objet + pronom personnel sujet.
      </p>

      <ExerciseBox title="D. Utilisez le pronom relatif qui convient.">
        <ExerciseItem n={1}>
          Voici les devoirs <Blank /> elle a écrits.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Ce sont elles <Blank /> sont parties les premières.
        </ExerciseItem>
        <ExerciseItem n={3}>
          La personne <Blank /> il recommande vous téléphonera.
        </ExerciseItem>
        <ExerciseItem n={4}>
          C&apos;est ce <Blank /> il faut savoir.
        </ExerciseItem>
        <ExerciseItem n={5}>
          C&apos;est ce <Blank /> lui plaît.
        </ExerciseItem>
      </ExerciseBox>

      <SectionBar title="IV. « Dont » et « duquel »" />
      <Example centered text="Le livre *dont* je vous parle." />
      <Example centered text="Le livre à la page *duquel* je me réfère." />

      <Subhead text="IV. 1 Le choix du pronom" />
      <SquareItem>
        <p>
          Lorsque le pronom relatif représente un nom précédé de la préposition{" "}
          <Rich text="*de*" />, on a théoriquement le choix entre :
        </p>
      </SquareItem>
      <p className="mb-1 pl-8 text-[15px] text-tb-ink">
        – <Rich text="*de* + *lequel*" /> →{" "}
        <em>duquel, de laquelle, desquels, desquelles</em> ;
      </p>
      <p className="mb-1 pl-8 text-[15px] text-tb-ink">
        – <Rich text="*de* + *qui*" /> (quand l&apos;antécédent est une
        personne) ;
      </p>
      <p className="mb-1 pl-8 text-[15px] text-tb-ink">
        – <Rich text="*de* + *quoi*" /> (quand l&apos;antécédent est un pronom
        indéfini) ;
      </p>
      <p className="mb-2 pl-8 text-[15px] text-tb-ink">
        – <Rich text="*dont*" />.
      </p>
      <Rule>
        Mais en réalité, en français moderne, on emploie presque toujours{" "}
        <Rich text="*dont*" />.
      </Rule>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*Le livre dont* je vous parle." /> (parler d&apos;un livre)
      </p>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*La personne dont* vous m'avez présenté les parents." />{" "}
        (présenter les parents de la personne)
      </p>
      <p className="mb-3 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*Le goudron dont* la route est recouverte." /> (la route est
        recouverte de goudron)
      </p>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="*Ce dont* vous me parlez." /> (vous me parlez de cela)
      </p>
      <SquareItem>
        <p>
          Il y a un cas où l&apos;emploi de <Rich text="*dont*" /> est
          impossible : lorsque le pronom relatif est complément d&apos;un nom
          précédé par une <Term>préposition</Term>, on emploie la forme{" "}
          <Rich text="*duquel*, *de laquelle*" />, etc.
        </p>
      </SquareItem>
    </TextbookPage>
  );
}

function Page99() {
  return (
    <TextbookPage pageNumber={99}>
      <p className="mb-3 text-[14.5px] italic leading-[1.65] text-tb-example">
        <Rich text="Le livre *à la page duquel* je me réfère..." /> (Duquel
        représente <em>livre</em> mais il est complément du nom <em>page</em>{" "}
        qui est précédé d&apos;une préposition : je me réfère à la page du
        livre.)
      </p>

      <AttentionBox>
        <p>
          Dans ce cas, il faut bien faire attention à l&apos;ordre qui n&apos;est
          pas le même qu&apos;en anglais. On a le schéma suivant :
        </p>
        <p>
          Antécédent + préposition + nom +{" "}
          <Rich text="*duquel*" /> (<Rich text="*de laquelle*" />…)
        </p>
        <p>
          S&apos;il s&apos;agit d&apos;un antécédent de <Term>personne</Term>, on
          peut utiliser aussi <Rich text="*de qui*" />.
        </p>
        <p className="italic text-tb-example">
          <Rich text="Le spécialiste *sur les conseils duquel (de qui)* vous avez acheté cet ordinateur." />
        </p>
        <p>(Vous avez acheté cet ordinateur sur les conseils du spécialiste.)</p>
        <p className="text-tb-muted">
          The specialist on whose advice you bought this computer.
        </p>
        <p className="italic text-tb-example">
          <Rich text="Les spécialistes *sur les conseils desquels (de qui)* vous avez acheté cet ordinateur." />
        </p>
        <p className="text-tb-muted">
          The specialists on whose advice you bought this computer.
        </p>
        <p>Notez la différence avec :</p>
        <p className="italic text-tb-example">
          <Rich text="Le spécialiste *dont* vous avez écouté les conseils." />{" "}
          (Vous avez écouté les conseils du spécialiste.)
        </p>
        <p className="text-tb-muted">
          The specialist whose advice you listened to.
        </p>
      </AttentionBox>

      <Subhead text="IV. 2 Difficultés posées par la traduction de whose" />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        Avec l&apos;emploi de <Rich text="*dont*" />, il faut noter l&apos;ordre
        des mots en français dans la proposition relative. Après{" "}
        <Rich text="*dont*" />, l&apos;ordre reste en français{" "}
        <Term>sujet</Term>, <Term>verbe</Term>, <Term>c. o. d.</Term>
      </p>
      <p className="mb-1 pl-4 text-[14.5px] italic text-tb-example">
        <Rich text="Voici l'étudiante *dont* je vous ai transmis le c.v." />
      </p>
      <p className="mb-3 pl-4 text-[14.5px] text-tb-muted">
        Here is the student whose c.v. I sent you.
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        Comme le pronom relatif <Rich text="*dont*" /> marque déjà la
        possession, l&apos;emploi de l&apos;adjectif possessif devient redondant
        et doit être évité.
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">On ne peut pas dire :</p>
      <p className="mb-2 text-[15px] text-tb-ink">
        *« Ce sont des étudiants dont leurs études ont été financées par
        l&apos;État. »
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">Il faut dire :</p>
      <p className="mb-4 text-[15px] text-tb-ink">
        « Ce sont des étudiants <Rich text="*dont les*" /> études ont été
        financées par l&apos;État. »
      </p>

      <ExerciseBox title="E. Traduisez.">
        {exerciseE.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page100() {
  return (
    <TextbookPage pageNumber={100} pageNumberSide="left">
      <SectionBar title="V. « Où »" />
      <Example centered text="L'appartement *où* il vit est agréable." />
      <Example
        centered
        text="Le jour *où* je suis partie, il pleuvait à verse."
      />

      <Subhead text="V. 1 Le pronom où" />
      <SquareItem>
        <p>
          Lorsque l&apos;antécédent exprime <Term>le lieu</Term>, le pronom
          relatif <Rich text="*où*" /> remplace souvent les pronoms relatifs de
          la série b (<em>lequel</em>, etc.) précédés d&apos;une préposition de
          lieu.
        </p>
      </SquareItem>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Le tiroir *dans lequel* j'ai mis mon argent. → Le tiroir *où* j'ai mis mon argent." />
      </p>
      <SquareItem>
        <p>
          Il ne faut pas confondre <Rich text="*où*" /> et <Rich text="*ou*" />{" "}
          (conjonction de coordination).
        </p>
      </SquareItem>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="La salle de classe *où* il travaille." /> (où = dans
        laquelle) ≠ Il travaille dans la salle de classe{" "}
        <Rich text="*ou*" /> dans son bureau. (ou = ou bien)
      </p>
      <p className="mb-3 text-right text-[14px]">
        <CrossRef>IV, p. 337</CrossRef>
      </p>

      <AttentionBox>
        <p>
          Lorsque l&apos;antécédent exprime <Term>le temps</Term>, on utilise en
          français le pronom relatif <Rich text="*où*" /> ; on n&apos;utilise
          jamais l&apos;adverbe <Term>quand</Term>.
        </p>
        <Gloss
          fr="Le jour *où* je l'ai rencontré."
          en="The day when I met him."
        />
        <Gloss
          fr="Au moment *où* nous nous sommes levés."
          en="At the moment when we stood up."
        />
        <p>
          Contrairement à l&apos;usage anglais qui peut omettre{" "}
          <Term>when</Term> (<em>The day I met him. At the moment we stood up.</em>
          ), <Rich text="*où*" /> ne peut pas être omis.
        </p>
      </AttentionBox>

      <Subhead text="V. 2 Les pronoms d'où, dont et par où" />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        Pour marquer <Term>l&apos;origine</Term>, on emploie{" "}
        <Rich text="*d'où*" /> quand l&apos;antécédent est une{" "}
        <Term>chose</Term> et <Rich text="*dont*" /> quand l&apos;antécédent
        représente <Term>des personnes</Term>.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Le pays *d'où* je viens." />
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="La famille *dont* il descend." />
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        Pour marquer le passage dans un lieu ou la traversée, on utilise{" "}
        <Rich text="*par où*" />.
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Les villes *par où* nous sommes passés." />
      </p>

      <ExerciseBox title="F. Utilisez « où », « par où », « dont », « d'où » selon le sens de la phrase.">
        <ExerciseItem n={1}>
          Les villages <Blank /> nous sommes passés étaient très pittoresques.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Ça s&apos;est passé l&apos;été <Blank /> il faisait si chaud.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Voici la ville <Blank /> nous nous sommes arrêtés.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Le pays <Blank /> elle vient est situé à l&apos;est.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Les ancêtres <Blank /> il descend ont émigré au XVII<sup>e</sup>{" "}
          siècle.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page101() {
  return (
    <TextbookPage pageNumber={101}>
      <SectionBar title="VI. Pronom relatif et préposition" />
      <Example
        centered
        text="Les preuves *sur lesquelles* il s'appuie ne sont pas convaincantes."
      />
      <Example
        centered
        text="L'homme *pour lequel* il travaille est très exigeant."
      />
      <Example centered text="Il n'y a rien *sur quoi* s'asseoir." />

      <Subhead text="VI. 1 Place de la préposition" />
      <Rule>
        Contrairement à l&apos;anglais, la préposition qui porte sur le pronom
        relatif complément ne peut pas être rejetée à la fin de la proposition
        relative ; elle se place <Term>immédiatement devant</Term> le pronom
        relatif (qui n&apos;est jamais omis en français).
      </Rule>
      <Gloss
        fr="L'homme *pour lequel* je travaille est très exigeant."
        en="The man (that) I work for is very demanding."
      />
      <Gloss
        fr="La chaise *sur laquelle* je m'assieds est très confortable."
        en="The chair (that) I sit on is very comfortable."
      />

      <Subhead text="VI. 2 Structure de la proposition" />
      <SquareItem>
        <p>
          Dans une proposition relative avec préposition, l&apos;anglais peut
          utiliser deux structures :
        </p>
      </SquareItem>
      <p className="mb-1 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        préposition + <Term>which</Term> (antécédent chose).
      </p>
      <p className="mb-2 pl-5 text-[14.5px] text-tb-muted">
        The raquet with which I used to play was very heavy.
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">
        Ou préposition + <Term>whom</Term> (antécédent personne)
      </p>
      <p className="mb-2 pl-5 text-[14.5px] text-tb-muted">
        The person for whom I voted was elected.
      </p>
      <p className="mb-1 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        omission du pronom relatif et rejet de la préposition à la fin de la
        proposition.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] text-tb-muted">
        The raquet I used to play with was very heavy.
      </p>
      <p className="mb-3 pl-5 text-[14.5px] text-tb-muted">
        The person I voted for was elected.
      </p>
      <SquareItem>
        <p>
          Le français, lui, n&apos;a qu&apos;une structure : préposition +
          pronom relatif.
        </p>
      </SquareItem>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="La raquette *avec laquelle* je jouais était très lourde." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="La personne *pour laquelle/pour qui* j'ai voté a été élue." />
      </p>
      <Note n="1">
        Les pronoms relatifs de la série b (<em>lequel, laquelle…</em>) ne
        s&apos;emploient pas sans préposition sauf dans quelques rares cas, pour
        éviter une ambiguïté.
      </Note>
      <p className="mt-1 text-[14.5px] italic text-tb-example">
        <Rich text="Je suis venu avec ma nièce et ma cousine, *laquelle* était malade." />
      </p>
      <Note n="2">
        Après une préposition, on peut aussi utiliser le pronom relatif{" "}
        <Rich text="*qui*" /> lorsque l&apos;antécédent est une personne.
      </Note>
      <p className="mt-1 text-[14.5px] italic text-tb-example">
        <Rich text="Le patron *pour qui/pour lequel* je travaille..." />
      </p>

      <Subhead text="VI. 3 Le pronom quoi" />
      <Rule>
        Si l&apos;antécédent est un pronom indéfini (<em>rien, quelque chose,
        tout</em>, etc.) ou le démonstratif <Rich text="*ce*" />, on utilise le
        relatif <Rich text="*quoi*" /> après la préposition.
      </Rule>
      <Gloss
        fr="Il n'a rien *à quoi* s'accrocher."
        en="He has nothing to hang on to."
      />
      <Gloss
        fr="Je voudrais quelque chose *sur quoi* écrire."
        en="I would like something to write on."
      />
      <Gloss
        fr="Voici *ce à quoi* je m'attends."
        en="This is what I expect."
      />
    </TextbookPage>
  );
}

function Page102() {
  return (
    <TextbookPage pageNumber={102} pageNumberSide="left">
      <ExerciseBox title="G. Traduisez.">
        {exerciseG.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="H. Soulignez l'antécédent du pronom relatif.">
        <ExerciseItem n={1}>
          L&apos;employé à qui j&apos;ai téléphoné était très aimable.
        </ExerciseItem>
        <ExerciseItem n={2}>
          C&apos;est toi qui as acheté ce livre.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Ce qui m&apos;inquiète, c&apos;est son retard.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Voici l&apos;étudiant à qui j&apos;ai donné un A.
        </ExerciseItem>
        <ExerciseItem n={5}>
          L&apos;arbre sur lequel l&apos;oiseau a fait son nid menace de tomber.
        </ExerciseItem>
      </ExerciseBox>

      <ExerciseBox title="I. Complétez par le pronom relatif qui convient.">
        <ExerciseItem n={1}>
          Pensez à ce <Blank /> il vous dit.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Vous ne savez pas ce <Blank /> vous voulez.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Ils ne savent pas ce <Blank /> les attend.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Voici en quelques mots ce <Blank /> il s&apos;agit.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Voici quelque chose à <Blank /> je m&apos;oppose.
        </ExerciseItem>
      </ExerciseBox>

      <ExerciseBox title="J. Complétez par la préposition et le pronom relatif qui conviennent.">
        <ExerciseItem n={1}>
          Il voulait quelque chose <Blank width="8rem" /> il pourrait couper la
          corde.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Elle a acheté des ciseaux <Blank width="8rem" /> elle a coupé le fil.
        </ExerciseItem>
        <ExerciseItem n={3}>
          C&apos;est quelque chose <Blank width="8rem" /> on ne peut pas lutter.
        </ExerciseItem>
        <ExerciseItem n={4}>
          C&apos;est un fléau <Blank width="8rem" /> on ne peut pas lutter.
        </ExerciseItem>
        <ExerciseItem n={5}>
          C&apos;est ce <Blank width="8rem" /> nous nous attendions tous.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page103() {
  return (
    <TextbookPage pageNumber={103}>
      <ExerciseBox title="K. Dites si le participe doit s'accorder ou non et donnez la forme qui convient.">
        <ExerciseItem n={1}>
          Les fleurs que vous avez (acheter) <Blank /> sont déjà fanées.
        </ExerciseItem>
        <ExerciseItem n={2}>
          L&apos;actrice qui a (jouer) <Blank /> a été fort applaudie.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Les auto-stoppeuses que nous avons (prendre) <Blank /> en voiture
          allaient à Vancouver.
        </ExerciseItem>
        <ExerciseItem n={4}>
          La femme que tu as (voir) <Blank /> est la femme du patron.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Les médicaments que nous avons (acheter) <Blank /> l&apos;année
          dernière sont périmés.
        </ExerciseItem>
      </ExerciseBox>

      <ExerciseBox title="L. Remplacez les mots soulignés par les mots suggérés et changez le pronom relatif selon la construction du verbe.">
        <p className="mb-2">
          <u>C&apos;est une personne que j&apos;apprécie.</u> <Blank />{" "}
          j&apos;ai honte.
        </p>
        <p className="mb-3">
          → C&apos;est une personne dont j&apos;ai honte.
        </p>
        <p>
          <u>1. Voilà la ville que j&apos;ai visitée.</u>
        </p>
        <p>
          <Blank width="10rem" /> il est né.
        </p>
        <p>
          <Blank width="10rem" /> nous avons parlé.
        </p>
        <p className="mb-2">
          <Blank width="10rem" /> nous sommes passés.
        </p>
        <p>
          <u>2. C&apos;est un spectacle auquel il faut assister.</u>
        </p>
        <p>
          <Blank width="10rem" /> je recommande.
        </p>
        <p>
          <Blank width="10rem" /> a fait scandale.
        </p>
        <p className="mb-2">
          <Blank width="10rem" /> on parle.
        </p>
        <p>
          <u>3. Vous m&apos;avez donné un conseil qui m&apos;a été utile.</u>
        </p>
        <p>
          <Blank width="10rem" /> j&apos;ai oublié.
        </p>
        <p>
          <Blank width="10rem" /> j&apos;ai tenu compte.
        </p>
        <p className="mb-2">
          <Blank width="10rem" /> je ne m&apos;attendais pas.
        </p>
        <p>
          <u>4. C&apos;est un ami en qui tu peux avoir confiance.</u>
        </p>
        <p>
          <Blank width="10rem" /> j&apos;ai passé la soirée.
        </p>
        <p>
          <Blank width="10rem" /> me surprend toujours.
        </p>
        <p className="mb-2">
          <Blank width="10rem" /> je vous recommande chaleureusement.
        </p>
        <p>
          <u>5. Ce sont des résultats dont je suis satisfaite.</u>
        </p>
        <p>
          <Blank width="10rem" /> me satisfont.
        </p>
        <p>
          <Blank width="10rem" /> je suis fier.
        </p>
        <p>
          <Blank width="10rem" /> je m&apos;attendais.
        </p>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page104() {
  return (
    <TextbookPage pageNumber={104} pageNumberSide="left">
      <ExerciseBox title="M. Complétez à l'aide du pronom relatif qui convient.">
        <ExerciseItem n={1}>
          Je ne comprends toujours pas la raison pour <Blank /> il a quitté le
          pays.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Ce nouveau rythme de vie ne correspondait pas à celui <Blank /> il
          était habitué.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Je souhaite la bienvenue à tous ceux <Blank /> sont venus.
        </ExerciseItem>
        <ExerciseItem n={4}>
          L&apos;événement <Blank /> vous faites allusion a eu lieu le jour{" "}
          <Blank /> elle est partie.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Dites-moi le jour <Blank /> vous conviendrait.
        </ExerciseItem>
        <ExerciseItem n={6}>
          Dites-moi ce <Blank /> vous voulez.
        </ExerciseItem>
        <ExerciseItem n={7}>
          Les personnes chez <Blank /> il a été accueilli ont été très
          gentilles.
        </ExerciseItem>
        <ExerciseItem n={8}>
          La situation en face de <Blank /> nous nous trouvons est
          embarrassante.
        </ExerciseItem>
        <ExerciseItem n={9}>
          C&apos;est la réponse <Blank /> j&apos;attendais.
        </ExerciseItem>
        <ExerciseItem n={10}>
          C&apos;est la réponse à <Blank /> je m&apos;attendais.
        </ExerciseItem>
      </ExerciseBox>

      <ExerciseBox title="N. Traduisez.">
        {exerciseN.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page105() {
  return (
    <TextbookPage pageNumber={105}>
      <ExerciseBox title="O. Déterminez les noms suivants à l'aide d'une proposition relative. Le pronom relatif sera le complément (direct ou indirect, selon le cas) des verbes suggérés. Le sujet du verbe sera à votre choix.">
        <p className="mb-1 italic">
          L&apos;ami / faire ce voyage → L&apos;ami avec qui (avec lequel) je
          fais ce voyage.
        </p>
        <p className="mb-2 italic">
          Le restaurant / déjeuner → Le restaurant où nous déjeunons.
        </p>
        {exerciseO.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="P. Composez des phrases sur le modèle suivant :">
        <p className="mb-2 italic">
          Nous avons pris un petit déjeuner. → Le petit déjeuner que nous avons
          pris était vraiment délicieux.
        </p>
        {exerciseP.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="Q. Traduisez.">
        {exerciseQ.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter12() {
  return (
    <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">
      <Page94 />
      <Page95 />
      <Page96 />
      <Page97 />
      <Page98 />
      <Page99 />
      <Page100 />
      <Page101 />
      <Page102 />
      <Page103 />
      <Page104 />
      <Page105 />
    </div>
  );
}
