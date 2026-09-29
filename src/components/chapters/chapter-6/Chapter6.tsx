import {
  AttentionBox,
  Blank,
  ChapterHeader,
  Example,
  ExerciseBox,
  ExerciseItem,
  Rich,
  Rule,
  SectionBar,
  Subhead,
  Term,
  TextbookPage,
} from "@/components/textbook";
import {
  beforeNounAdjectives,
  chapter6,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseD,
  exerciseE,
  exerciseG,
  exerciseH,
  irregularFeminines,
  overview,
  senseChangeAdjectives,
} from "@/content/chapters/06";

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

function Page46() {
  return (
    <TextbookPage pageNumber={46} pageNumberSide="left">
      <ChapterHeader number={chapter6.number} title={chapter6.title} />
      <OverviewBlock />

      <SectionBar title="I. Place" />
      <Example
        centered
        text="L'étudiante *américaine* cherche à louer une *jolie* chambre *meublée*."
        translation="The American student is looking for a nice furnished room to rent."
      />

      <Subhead text="I. 1 L'adjectif se place après le nom" />
      <Rule>
        Contrairement à l&apos;anglais, en français la majorité des{" "}
        <span className="underline">adjectifs qualificatifs</span> sont placés{" "}
        <Term>après le nom</Term>.
      </Rule>
      <Rule>En particulier, on place après le nom :</Rule>
      <p className="mb-1 text-[15px] font-semibold text-tb-ink">
        a. les adjectifs de forme et de couleur :
      </p>
      <p className="pl-5 text-[15px] italic text-tb-example">
        Une pièce <Rich text="*rectangulaire*" />.
      </p>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        Une robe <Rich text="*rose*" />.
      </p>
      <p className="mb-1 text-[15px] font-semibold text-tb-ink">
        b. les adjectifs qui marquent une catégorie (géographique, religieuse,
        sociale, historique, etc.) :
      </p>
      <p className="pl-5 text-[15px] italic text-tb-example">
        Du fromage <Rich text="*suisse*" />.
      </p>
      <p className="pl-5 text-[15px] italic text-tb-example">
        Un enfant <Rich text="*juif*" />.
      </p>
      <p className="pl-5 text-[15px] italic text-tb-example">
        La classe <Rich text="*ouvrière*" />.
      </p>
      <p className="pl-5 text-[15px] italic text-tb-example">
        Une église <Rich text="*médiévale*" />.
      </p>
    </TextbookPage>
  );
}

function Page47() {
  return (
    <TextbookPage pageNumber={47}>
      <p className="mb-1 text-[15px] font-semibold text-tb-ink">
        c. les adjectifs formés à partir d&apos;un{" "}
        <Term>participe</Term> (passé ou présent) :
      </p>
      <p className="pl-5 text-[15px] italic text-tb-example">
        Un ouvrier <Rich text="*spécialisé*" />.
      </p>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        Un travail <Rich text="*éreintant*" />.
      </p>
      <p className="mb-1 text-[15px] font-semibold text-tb-ink">
        d. les adjectifs suivis d&apos;un complément :
      </p>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        Un étudiant <Rich text="*fier de ses succès*" />.
      </p>
      <p className="mb-1 text-[15px] font-semibold text-tb-ink">
        e. les adjectifs <Term>polysyllabiques</Term> qualifiant un nom
        monosyllabique (un nom d&apos;une seule syllabe) :
      </p>
      <p className="mb-4 pl-5 text-[15px] italic text-tb-example">
        Un film <Rich text="*épouvantable*" />.
      </p>

      <Subhead text="I. 2 L'adjectif se place avant le nom" />
      <Rule>
        On place <Term>avant le nom</Term> un certain nombre d&apos;adjectifs
        d&apos;usage courant ; ces adjectifs sont souvent monosyllabiques.
      </Rule>
      <ul className="mb-3 grid grid-cols-3 gap-x-4 text-[15px] text-tb-ink">
        {beforeNounAdjectives.flat().map((word, i) =>
          word ? (
            <li key={`${word}-${i}`}>– {word}</li>
          ) : (
            <li key={`empty-${i}`} />
          ),
        )}
      </ul>
      <p className="pl-5 text-[15px] italic text-tb-example">
        Un <Rich text="*bon*" /> disque de jazz.
      </p>
      <p className="pl-5 text-[15px] italic text-tb-example">
        La <Rich text="*petite*" /> musique de nuit.
      </p>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        Un <Rich text="*nouveau*" /> magasin.
      </p>

      <AttentionBox>
        <p>
          – <em>Beau</em>, <em>nouveau</em> et <em>vieux</em> changent de forme
          devant un nom masculin singulier commençant par une{" "}
          <Term>voyelle</Term> ou un <Term>h muet</Term>.
        </p>
        <p className="italic text-tb-example">
          Un <Rich text="*bel*" /> arbre (de beaux arbres).
        </p>
        <p className="italic text-tb-example">
          Un <Rich text="*nouvel*" /> hôtel (de nouveaux hôtels).
        </p>
        <p className="italic text-tb-example">
          Un <Rich text="*vieil*" /> ami (de vieux amis).
        </p>
        <p>
          – Il en est de même des adjectifs <em>mou</em> (<em>mol</em>) et{" "}
          <em>fou</em> (<em>fol</em>) quand ils sont placés devant un nom
          masculin singulier commençant par une voyelle ou un h muet.
        </p>
        <p className="italic text-tb-example">
          Un <Rich text="*mol*" /> oreiller.
        </p>
        <p className="italic text-tb-example">
          Un <Rich text="*fol*" /> entêtement.
        </p>
      </AttentionBox>

      <Subhead text="I. 3 Quand il y a plusieurs adjectifs, ils gardent la place qu'ils occuperaient normalement." />
      <p className="text-[15px] italic text-tb-example">
        Une <Rich text="*belle*" /> robe <Rich text="*bleue*" /> (une belle robe
        ; une robe bleue).
      </p>
      <p className="text-[15px] italic text-tb-example">
        Une <Rich text="*gentille*" /> étudiante <Rich text="*allemande*" />{" "}
        (une gentille étudiante ; une étudiante allemande).
      </p>
      <p className="text-[15px] italic text-tb-example">
        Un <Rich text="*beau petit*" /> chien (un beau chien ; un petit chien).
      </p>
      <p className="text-[15px] italic text-tb-example">
        Une église <Rich text="*médiévale intéressante*" /> (une église
        médiévale ; une église intéressante).
      </p>
    </TextbookPage>
  );
}

function Page48() {
  return (
    <TextbookPage pageNumber={48} pageNumberSide="left">
      <Subhead text="I. 4 Certains adjectifs changent de sens selon qu'ils sont placés avant ou après le nom." />
      <Rule>
        Lorsqu&apos;ils ont un sens <Term>figuré</Term>, ils sont placés{" "}
        <Term>avant</Term> le nom ; lorsqu&apos;ils sont pris au sens{" "}
        <Term>propre</Term>, ils sont placés <Term>après</Term>.
      </Rule>
      <p className="text-[15px] italic text-tb-example">
        Une femme <Rich text="*pauvre*" /> : qui n&apos;a pas d&apos;argent (sens
        propre).
      </p>
      <p className="mb-3 text-[15px] italic text-tb-example">
        Une <Rich text="*pauvre*" /> femme : qui inspire la pitié (sens figuré).
      </p>
      <Rule>Parmi ces adjectifs il faut noter :</Rule>
      <ul className="mb-3 grid grid-cols-5 gap-x-2 text-[14.5px] text-tb-ink">
        {senseChangeAdjectives.flat().map((word) => (
          <li key={word}>– {word}</li>
        ))}
      </ul>
      <p className="text-[15px] italic text-tb-example">
        Un <Rich text="*ancien*" /> hôpital :{" "}
        <span className="not-italic text-tb-muted">a former hospital.</span>
      </p>
      <p className="text-[15px] italic text-tb-example">
        Un hôpital <Rich text="*ancien*" /> :{" "}
        <span className="not-italic text-tb-muted">an ancient hospital.</span>
      </p>
      <p className="text-[15px] italic text-tb-example">
        Un <Rich text="*brave*" /> homme :{" "}
        <span className="not-italic text-tb-muted">a kind man.</span>
      </p>
      <p className="text-[15px] italic text-tb-example">
        Une femme <Rich text="*brave*" /> (courageuse) :{" "}
        <span className="not-italic text-tb-muted">a brave woman.</span>
      </p>
      <p className="text-[15px] italic text-tb-example">
        Trois livres <Rich text="*différents*" /> :{" "}
        <span className="not-italic text-tb-muted">three different books.</span>
      </p>
      <p className="text-[15px] italic text-tb-example">
        <Rich text="*Différents*" /> livres :{" "}
        <span className="not-italic text-tb-muted">various books.</span>
      </p>
      <p className="text-[15px] italic text-tb-example">
        Le <Rich text="*dernier*" /> mois de l&apos;année :{" "}
        <span className="not-italic text-tb-muted">
          the last month of the year.
        </span>
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        Je l&apos;ai vue le mois <Rich text="*dernier*" /> :{" "}
        <span className="not-italic text-tb-muted">I saw her last month.</span>
      </p>

      <Subhead text="I. 5 Certains adjectifs peuvent se placer, indifféremment, devant ou après le nom sans changer de sens." />
      <p className="mb-2 text-[15px] italic text-tb-example">
        J&apos;ai vu une <Rich text="*magnifique*" /> voiture. = J&apos;ai vu une
        voiture <Rich text="*magnifique*" />.
      </p>
      <Rule>
        Mais si l&apos;adjectif est plus court que le nom, on a tendance à le
        placer <Term>avant</Term>.
      </Rule>
      <p className="mb-4 text-[15px] italic text-tb-example">
        Un <Rich text="*bref*" /> entretien.
      </p>

      <ExerciseBox title="A. Mettez les adjectifs à la place qui convient.">
        {exerciseA.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page49() {
  return (
    <TextbookPage pageNumber={49}>
      <ExerciseBox title="B. Traduisez.">
        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
          {exerciseB.map((item, i) => (
            <ExerciseItem key={item} n={i + 1}>
              {item}
            </ExerciseItem>
          ))}
        </div>
      </ExerciseBox>

      <SectionBar title="II. Féminins irréguliers" />
      <Example
        centered
        text="Elle adore la crème *fraîche* bien *épaisse*."
        translation="She loves very thick fresh cream."
      />

      <Subhead text="II. 1 Formation des adjectifs féminins réguliers" />
      <Rule>
        En général on forme le féminin des adjectifs en ajoutant un{" "}
        <Term>-e</Term> au masculin.
      </Rule>
      <p className="pl-5 text-[15px] italic text-tb-example">
        grand → grand<em className="not-italic text-tb-cyan">e</em>
      </p>
      <p className="mb-4 pl-5 text-[15px] italic text-tb-example">
        joli → joli<em className="not-italic text-tb-cyan">e</em>
      </p>

      <Subhead text="II. 2 Formation des adjectifs féminins irréguliers" />
      <div className="mb-4 grid grid-cols-1 gap-x-10 text-[15px] sm:grid-cols-2">
        {irregularFeminines.map(([m1, f1, m2, f2]) => (
          <div key={m1} className="contents">
            <p>
              – {m1} → <span className="text-tb-cyan">{f1}</span>
            </p>
            <p>
              – {m2} → <span className="text-tb-cyan">{f2}</span>
            </p>
          </div>
        ))}
      </div>

      <Subhead text="II. 3 Doublement de la consonne" />
      <Rule>
        Les adjectifs qui se terminent par <Term>-el</Term>, <Term>-eil</Term>,{" "}
        <Term>-en</Term> et <Term>-on</Term> doublent la consonne au féminin.
      </Rule>
      <div className="grid max-w-lg grid-cols-2 gap-x-8 text-[15px] italic text-tb-example">
        <p>
          cruel → cruell<span className="not-italic text-tb-cyan">e</span>
        </p>
        <p>
          ancien → ancienn<span className="not-italic text-tb-cyan">e</span>
        </p>
        <p>
          pareil → pareill<span className="not-italic text-tb-cyan">e</span>
        </p>
        <p>
          bon → bonn<span className="not-italic text-tb-cyan">e</span>
        </p>
      </div>
    </TextbookPage>
  );
}

function Page50() {
  return (
    <TextbookPage pageNumber={50} pageNumberSide="left">
      <SectionBar title="III. Pluriel" />
      <p className="text-center text-[15px] italic text-tb-example">
        Des joueurs <Rich text="*internationaux*" /> se rencontrent en matchs{" "}
        <Rich text="*amicaux*" />.
      </p>
      <p className="text-center text-[15px] italic text-tb-example">
        Elle s&apos;est acheté des pulls <Rich text="*bleu foncé*" />, des
        chaussures <Rich text="*orange*" /> et des gants{" "}
        <Rich text="*marron*" />.
      </p>
      <p className="text-center text-[15px] italic text-tb-example">
        Elle a acheté une robe, une écharpe, des chaussures et un manteau{" "}
        <Rich text="*verts*" />.
      </p>
      <p className="mb-4 text-center text-[15px] italic text-tb-example">
        Elle a de <Rich text="*beaux*" /> enfants.
      </p>

      <Subhead text="III. 1 Formation des adjectifs pluriels réguliers" />
      <Rule>
        En général on forme le pluriel des adjectifs en ajoutant un{" "}
        <Term>-s</Term>.
      </Rule>
      <p className="mb-4 pl-5 text-[15px] italic text-tb-example">
        grand → grands ; grande → grandes
      </p>

      <Subhead text="III. 2 Les adjectifs en -al" />
      <Rule>
        Ceux-ci forment leur féminin pluriel en <Term>-ales</Term> et leur
        masculin pluriel en <Term>-aux</Term>.
      </Rule>
      <p className="pl-5 text-[15px] italic text-tb-example">
        des navettes <Rich text="*spatiales*" />
      </p>
      <p className="mb-2 pl-5 text-[15px] italic text-tb-example">
        des cours <Rich text="*spéciaux*" />
      </p>
      <Rule>
        Une exception à noter : des chantiers <Rich text="*navals*" />.
      </Rule>

      <Subhead text="III. 3 Les adjectifs de couleur" />
      <Rule>
        Les adjectifs <Term>orange</Term> et <Term>marron</Term> et les
        adjectifs de couleur composés sont <Term>invariables</Term>.
      </Rule>
      <p className="pl-5 text-[15px] italic text-tb-example">
        des cravates <Rich text="*rose bonbon*" />
      </p>
      <p className="mb-2 pl-5 text-[15px] italic text-tb-example">
        des serviettes <Rich text="*bleu pâle*" />
      </p>
      <Rule>
        Notez que l&apos;on dit <Term>bleu marine</Term> et non pas{" "}
        <em>*bleu marin</em>.
      </Rule>
      <p className="mb-4 pl-5 text-[15px] italic text-tb-example">
        Elle a des gants <Rich text="*bleu marine*" />.
      </p>

      <Subhead text="III. 4 Accord de l'adjectif avec plusieurs noms" />
      <Rule>
        Quand un adjectif qualificatif se rapporte à plusieurs noms, si un de
        ces noms est <Term>masculin</Term>, l&apos;accord se fait au{" "}
        <Term>masculin pluriel</Term>.
      </Rule>
      <p className="text-center text-[15px] italic text-tb-example">
        Une robe, une veste et des chaussures <Rich text="*élégantes*" />.
      </p>
      <p className="mb-2 text-center text-[12px] text-tb-muted">
        (f)&nbsp;&nbsp;&nbsp;(f)&nbsp;&nbsp;&nbsp;(f)
      </p>
      <Rule>Mais on dira :</Rule>
      <p className="text-center text-[15px] italic text-tb-example">
        Une robe, une veste, des chaussures et un sac{" "}
        <Rich text="*élégants*" />.
      </p>
      <p className="mb-2 text-center text-[12px] text-tb-muted">
        (f)&nbsp;&nbsp;&nbsp;(f)&nbsp;&nbsp;&nbsp;(f)&nbsp;&nbsp;&nbsp;(m)
      </p>
      <Rule>
        Dans ce type de série, on met le nom masculin en dernier.
      </Rule>

      <Subhead text="III. 5 Transformation de l'article indéfini" />
      <Rule>
        Devant un adjectif qualificatif au pluriel,{" "}
        <Rich text="*des* devient *de*" />.
      </Rule>
      <p className="pl-5 text-[15px] italic text-tb-example">
        <Rich text="*des* enfants intelligents → *de* beaux enfants." />
      </p>
    </TextbookPage>
  );
}

function Page51() {
  return (
    <TextbookPage pageNumber={51}>
      <ExerciseBox title="C. Donnez la forme correcte de l'adjectif mis entre parenthèses.">
        {exerciseC.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="D. Traduisez.">
        {exerciseD.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="IV. Majuscule" />
      <Example
        centered
        text="Les *Canadiens* aiment la cuisine *chinoise*."
        translation="Canadians love Chinese food."
      />

      <Subhead text="IV. 1 Les adjectifs de nationalité" />
      <Rule>
        Ces adjectifs ne prennent pas de majuscule ; seuls les{" "}
        <Term>noms</Term> qui représentent des personnes prennent une majuscule.
      </Rule>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        la culture <Rich text="*grecque*" /> ; les <Rich text="*Grecs*" />
      </p>
      <Rule>
        Les noms de <Term>langue</Term> ne prennent pas de majuscule.
      </Rule>
      <p className="pl-5 text-[15px] italic text-tb-example">
        J&apos;apprends <Rich text="*le français*" />, j&apos;étudie{" "}
        <Rich text="*l'espagnol*" />.
      </p>
    </TextbookPage>
  );
}

function Page52() {
  return (
    <TextbookPage pageNumber={52} pageNumberSide="left">
      <ExerciseBox title="E. Traduisez.">
        {exerciseE.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="V. Particularités" />
      <Example
        centered
        text="Nous avons mangé de *gros petits pois*."
        translation="We ate large peas."
      />
      <Example
        centered
        text="L'ingénieur *chimiste* se sert de produits *chimiques*."
        translation="The chemical engineer uses chemical products."
      />

      <Subhead text="V. 1 Formation d'une unité lexicale" />
      <Rule>
        Certains adjectifs font corps avec le nom pour ne former qu&apos;une
        seule unité lexicale.
      </Rule>
      <Rule>
        a. C&apos;est le cas de certaines expressions comme :
      </Rule>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        des petits pois ; un petit déjeuner ; un jeune homme ; une étoile
        filante ; un grand magasin ; etc.
      </p>
      <Rule>
        b. C&apos;est le cas aussi des « adjectifs de relation ».
      </Rule>
      <Rule>
        Ces adjectifs, malgré leur forme, ne sont pas des adjectifs qualificatifs
        mais des « adjectifs de relation », qui font « bloc » avec le nom (une
        seule unité lexicale) à tel point qu&apos;ils ne peuvent pas être
        séparés du nom par le verbe <em>être</em>. Ces « adjectifs de relation »
        ne peuvent être mis ni au comparatif ni au superlatif. Par exemple on
        dira <em>une carte postale</em> (postcard) mais on ne pourra pas dire :{" "}
        *« cette carte est postale », *« cette carte est plus postale que la
        mienne ».
      </Rule>
      <Rule>Autres exemples :</Rule>
      <ul className="pl-5 text-[15px] italic text-tb-example">
        <li>
          – un journal <Rich text="*médical*" /> : a medical journal
        </li>
        <li>
          – une école <Rich text="*primaire*" /> : a primary school
        </li>
        <li>
          – un roman <Rich text="*policier*" /> : a detective novel
        </li>
        <li>
          – un bulletin <Rich text="*scolaire*" /> : a school report
        </li>
      </ul>
    </TextbookPage>
  );
}

function Page53() {
  return (
    <TextbookPage pageNumber={53}>
      <Subhead text="V. 2 Certains adjectifs se rapportent aux personnes mais pas aux choses." />
      <Rule>
        Par exemple, on ne traduira pas a sports car par : *« une voiture
        sportive » car <Term>sportif/sportive</Term> est un adjectif qui se
        rapporte à une <Term>personne</Term>. On traduira par :{" "}
        <Term>une voiture de sport</Term>.
      </Rule>
      <Rule>
        Human rights se traduira par :{" "}
        <Term>les droits de l&apos;homme</Term> ou{" "}
        <Term>les droits de la personne</Term> et non pas par : *« les droits
        humains ».
      </Rule>
      <Rule>
        Une personne peut être <Term>alcoolique</Term> mais une boisson, elle,
        est <Term>alcoolisée</Term>.
      </Rule>
      <Rule>
        Autres exemples : on traduira a medical student par{" "}
        <Term>un étudiant en médecine</Term>. (*« Un étudiant médical » n&apos;est
        pas possible alors que <em>un examen médical</em> est possible.)
      </Rule>
      <Rule>
        On ne peut pas traduire a chemical engineer par : *« un ingénieur
        chimique » (l&apos;expression voudrait dire qu&apos;il a été fait
        artificiellement !) ; on traduira par :{" "}
        <Term>un ingénieur en chimie</Term> ou par :{" "}
        <Term>un ingénieur chimiste</Term>.
      </Rule>
      <Rule>
        L&apos;adjectif <Term>comfortable</Term> ne peut pas être utilisé pour
        une personne. On traduira Make yourself comfortable par :{" "}
        <Term>Mettez-vous à l&apos;aise</Term>.
      </Rule>

      <ExerciseBox title="F. Complétez le texte suivant de façon logique par des adjectifs de votre choix.">
        <p>
          Franca est une <Blank /> Italienne de 19 ans. Elle vient d&apos;arriver
          à l&apos;aéroport <Blank /> de Toronto. Elle porte une <Blank /> robe{" "}
          <Blank /> et un imperméable <Blank />. Ses cheveux sont <Blank />. Des
          amis <Blank /> l&apos;attendent à l&apos;aéroport. Elle est{" "}
          <Blank /> de les revoir. Elle leur dit que le voyage a été un peu{" "}
          <Blank /> et <Blank />. Le repas n&apos;était pas <Blank /> mais les
          hôtesses étaient très <Blank />.
        </p>
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

function Page54() {
  return (
    <TextbookPage pageNumber={54} pageNumberSide="left">
      <ExerciseBox title="H. Donnez la forme correcte de l'adjectif placé entre parenthèses.">
        {exerciseH.map((item, i) => (
          <ExerciseItem key={item.adj} n={i + 1}>
            <span className="inline-block min-w-[8.5rem]">({item.adj}) :</span>{" "}
            {item.rest} <Blank width="6.5rem" />
            {item.after ? ` ${item.after}` : ""}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter6() {
  return (
    <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">
      <Page46 />
      <Page47 />
      <Page48 />
      <Page49 />
      <Page50 />
      <Page51 />
      <Page52 />
      <Page53 />
      <Page54 />
    </div>
  );
}
