import {
  AttentionBox,
  ChapterHeader,
  CrossRef,
  Example,
  ExerciseBox,
  ExerciseItem,
  Nb,
  Rich,
  Rule,
  SectionBar,
  SquareItem,
  Subhead,
  Term,
  TextbookPage,
} from "@/components/textbook";
import {
  adverbsOfPlace,
  chapter8,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseD,
  exerciseE,
  exerciseF,
  exerciseG,
  exerciseH,
  irregularAdverbs,
  overview,
  prepositions,
} from "@/content/chapters/08";

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

function Bilingual({ fr, en }: { fr: string; en: string }) {
  return (
    <p className="mb-1 text-[15px] italic text-tb-example">
      <Rich text={fr} />
      <span className="mt-0.5 block not-italic text-tb-muted">{en}</span>
    </p>
  );
}

function Page61() {
  return (
    <TextbookPage pageNumber={61}>
      <ChapterHeader number={chapter8.number} title={chapter8.title} />
      <OverviewBlock />

      <SectionBar title="I. Nature et fonction" />

      <Example
        centered
        text="Je vais *très* bien."
        translation="I am very well."
      />
      <Example
        centered
        text="Je pose mon livre sur la table ; je pose mon livre *dessus*."
        translation="I place (put) my book on the table; I place (put) my book on it."
      />

      <Subhead text="I. 1 L'adverbe est un mot *invariable*." />
      <Rule>Il modifie :</Rule>
      <p className="mb-1 text-[15px] text-tb-ink">
        – un verbe.{" "}
        <em className="text-tb-example">
          <Rich text="Je travaille *bien*." />
        </em>
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">
        – un adjectif.{" "}
        <em className="text-tb-example">
          <Rich text="Elle est *assez* jolie." />
        </em>
      </p>
      <p className="mb-3 text-[15px] text-tb-ink">
        – un autre adverbe.{" "}
        <em className="text-tb-example">
          <Rich text="Je vais *très* bien." />
        </em>
      </p>

      <Subhead text="I. 2 Suivant le sens, on peut classer les adverbes en :" />
      <p className="mb-2 text-[15px] text-tb-ink">
        a. adverbes de <Term>lieu</Term> : <em>ici, là, ailleurs, loin…</em>
      </p>
      <p className="mb-2 text-[15px] text-tb-ink">
        b. adverbes de <Term>temps</Term> :{" "}
        <em>alors, aujourd&apos;hui, demain, ensuite, enfin, quelquefois…</em>
      </p>
      <p className="mb-2 text-[15px] text-tb-ink">
        c. adverbes de <Term>quantité</Term> :{" "}
        <em>plus, beaucoup, moins…</em>
      </p>
      <p className="text-[15px] text-tb-ink">
        d. adverbes d&apos;<Term>intensité</Term> :{" "}
        <em>
          si (il est si riche), bien (il est bien poli)…
        </em>
      </p>
    </TextbookPage>
  );
}

function Page62() {
  return (
    <TextbookPage pageNumber={62} pageNumberSide="left">
      <p className="mb-2 text-[15px] text-tb-ink">
        e. adverbes d&apos;<Term>affirmation</Term>, de <Term>négation</Term> ou
        de <Term>doute</Term> : <em>oui, non, peut-être, si, ne… pas…</em>
      </p>
      <p className="mb-4 text-[15px] text-tb-ink">
        f. adverbes de <Term>manière</Term> :{" "}
        <em>vite, ensemble, bien, mal</em> et adverbes en{" "}
        <Term>-ment</Term> : <em>tranquillement, joyeusement</em>, etc.
      </p>

      <Subhead text="I. 3 Il ne faut pas confondre *préposition de lieu* et *adverbe de lieu*." />
      <Rule>
        – Une <Term>préposition</Term> introduit un nom ou un pronom.
      </Rule>
      <p className="mb-3 pl-5 text-[15px] italic text-tb-example">
        <Rich text="Je pose mon livre *sur* la table." />
      </p>
      <Rule>
        – Un <Term>adverbe</Term> n&apos;introduit jamais un nom ni un pronom.
      </Rule>
      <p className="mb-4 pl-5 text-[15px] italic text-tb-example">
        <Rich text="Je pose mon livre *dessus*." />
      </p>

      <div className="mb-4 grid max-w-lg grid-cols-2 gap-x-10 text-[14.5px]">
        <div>
          <p className="mb-1 font-semibold text-tb-teal">Prépositions :</p>
          <ul className="space-y-0.5 italic text-tb-example">
            {prepositions.map((item) => (
              <li key={item}>– {item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-1 font-semibold text-tb-teal">Adverbes :</p>
          <ul className="space-y-0.5 italic text-tb-example">
            {adverbsOfPlace.map((item) => (
              <li key={item}>– {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <AttentionBox>
        <p>
          <span className="font-semibold">a. </span>
          Il ne faut pas utiliser un adverbe à la place d&apos;une préposition.
          On ne peut pas dire :
        </p>
        <p className="italic text-tb-example">
          *« Je suis dehors la maison. »
          <br />
          *« La cave est dessous la maison. »
        </p>
        <p>On dira :</p>
        <p className="italic text-tb-example">
          <Rich text="Je suis *hors de* la maison." />{" "}
          <span className="not-italic text-tb-muted">
            (Je suis à l&apos;extérieur de la maison.)
          </span>
        </p>
        <p className="italic text-tb-example">
          <Rich text="La cave est *sous* (*en dessous de*) la maison." />
        </p>
        <p>
          <span className="font-semibold">b. </span>
          Un adverbe de lieu ne peut pas modifier un nom. On ne peut pas
          traduire : <em>The room above is empty</em>, par :{" "}
          <em>*« La salle au-dessus est vide. »</em>
          <CrossRef>chapitre 5, II. 2, p. 43</CrossRef>
        </p>
        <p>
          Une exception : l&apos;adverbe <Term>bien</Term> peut modifier un nom
          ou un pronom.
        </p>
        <p className="italic text-tb-example">
          <Rich text="C'est une femme *bien*." />{" "}
          <span className="not-italic text-tb-muted">
            (= C&apos;est une femme admirable.)
          </span>
        </p>
        <p className="italic text-tb-example">
          <Rich text="C'est quelqu'un de *bien*." />
        </p>
        <p>
          Il peut être utilisé comme attribut avec le verbe <em>être</em>.
        </p>
        <p className="italic text-tb-example">
          <Rich text="Je suis *bien*." />{" "}
          <span className="not-italic text-tb-muted">
            (= à l&apos;aise ; je me sens à l&apos;aise)
          </span>
        </p>
      </AttentionBox>

      <ExerciseBox title="A. Traduisez.">
        {exerciseA.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page63() {
  return (
    <TextbookPage pageNumber={63}>
      <SectionBar title={'II. L\'adverbe « tout »'} />

      <Example centered text="Nous sommes *tout* perdus." />
      <Example
        centered
        text="La terre était *toute* recouverte de neige."
      />

      <Subhead text="II. 1 *Tout* est adverbe quand il marque l'intensité." />
      <Rule>
        Il a alors le sens de « entièrement », « tout à fait ».
      </Rule>
      <p className="mb-4 text-[15px] italic text-tb-example">
        <Rich text="Nous sommes *tout* perdus." />
      </p>

      <Subhead text="II. 2 L'adverbe *tout* est invariable." />
      <Rule>
        Seule exception : devant un mot féminin commençant par une voyelle ou un{" "}
        <em>h aspiré</em>, il varie en genre et en nombre. On dira donc :
      </Rule>
      <p className="text-[15px] italic text-tb-example">
        <Rich text="Ils sont *tout* étonnés." />
      </p>
      <p className="mb-3 text-[15px] italic text-tb-example">
        <Rich text="Elles sont *tout* étonnées." />
      </p>
      <p>Mais on dira :</p>
      <p className="text-[15px] italic text-tb-example">
        <Rich text="Elles sont *toutes* honteuses." />{" "}
        <span className="not-italic text-tb-muted">
          (= tout à fait honteuses)
        </span>
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        <Rich text="La terre était *toute* recouverte de neige." />
      </p>

      <Subhead text="II. 3 Rappel" />
      <Rule>
        Tout peut être aussi un adjectif, un nom ou un pronom.
        <CrossRef>chapitre 15, p. 121</CrossRef>
      </Rule>

      <SectionBar title="III. Place des adverbes" />

      <Example
        centered
        text="Elle sait *toujours* tout."
        translation="She always knows everything."
      />
      <Example
        centered
        text="Ils ont *beaucoup* aimé le spectacle."
        translation="They enjoyed the show very much."
      />

      <Subhead text="III. 1 L'adverbe se place généralement *après* le verbe qu'il modifie." />
      <Rule>
        Contrairement à l&apos;anglais, l&apos;adverbe ne sépare jamais le sujet
        de son verbe.
      </Rule>
      <Bilingual
        fr="Elle sait *toujours* tout."
        en="She always knows everything."
      />
      <p className="mt-2 text-[15px] font-semibold text-tb-ink">Exceptions :</p>
      <p className="mb-1 text-[15px] text-tb-ink">
        a. <Term>aussi</Term> :{" "}
        <em className="text-tb-example">
          <Rich text="Cet homme *aussi* a raison." />
        </em>
      </p>
      <p className="text-[15px] text-tb-ink">
        b. la particule négative <Term>ne</Term> peut se placer entre le sujet
        et le verbe.
        <CrossRef>chapitre 38, II., p. 287</CrossRef>
      </p>
    </TextbookPage>
  );
}

function Page64() {
  return (
    <TextbookPage pageNumber={64} pageNumberSide="left">
      <Subhead text="III. 2 Avec un verbe à un *temps composé*" />
      <Rule>
        <span className="font-semibold">a. </span>
        L&apos;adverbe se place généralement <Term>après l&apos;auxiliaire</Term>
        , entre l&apos;auxiliaire et le participe passé. On fera attention en
        particulier à la traduction des adverbes de <Term>quantité</Term> qui,
        en anglais, se placent généralement en fin de phrase.
      </Rule>
      <Bilingual
        fr="Ils ont *beaucoup* aimé le spectacle."
        en="They enjoyed the show very much."
      />
      <Rule>
        <span className="font-semibold">b. </span>
        Mais les adverbes de <Term>temps</Term> (
        <em>aujourd&apos;hui, demain, tôt, tard, tout de suite</em>, etc.) et
        les adverbes de <Term>lieu</Term> (<em>ici, là, dehors</em>, etc.)
        viennent généralement <Term>après le participe passé</Term>.
      </Rule>
      <p className="text-[15px] italic text-tb-example">
        <Rich text="Nous l'avons rencontré *hier*." />
      </p>
      <p className="mb-3 text-[15px] italic text-tb-example">
        <Rich text="Vous avez dansé *dehors*." />
      </p>
      <Nb>
        les adverbes de <em>temps</em>, lorsqu&apos;ils sont mis en valeur,
        peuvent être placés en début de phrase.
      </Nb>
      <p className="text-[15px] italic text-tb-example">
        <Rich text="*Hier* nous sommes allés à la mer." />
      </p>
      <p className="mb-2 text-[15px] italic text-tb-example">
        <Rich text="*Demain* nous irons à la campagne." />
      </p>
      <Nb>
        Lorsque le participe passé est court et que l&apos;adverbe en -ment est
        long, on place souvent l&apos;adverbe après le participe passé, pour des
        raisons de rythme.
      </Nb>
      <p className="text-[15px] italic text-tb-example">
        <Rich text="Il est parti *rapidement*." />
      </p>
      <p className="mb-4 text-[15px] text-tb-ink">
        Mais :{" "}
        <em className="text-tb-example">
          <Rich text="Il est *vite* parti." />
        </em>
      </p>

      <Subhead text="III. 3 L'adverbe *précède* généralement l'adjectif ou l'adverbe qu'il modifie." />
      <p className="text-[15px] italic text-tb-example">
        <Rich text="Cette pièce est *très* drôle." />
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        <Rich text="Ce film est *admirablement bien* joué." />
      </p>

      <Subhead text="III. 4 Place de la locution adverbiale" />
      <Rule>
        La locution adverbiale (c&apos;est-à-dire un groupe de mots qui équivaut
        à un adverbe) se place <Term>après le participe passé</Term>.
      </Rule>
      <p className="text-[15px] italic text-tb-example">
        <Rich text="Il est parti *à notre insu*." />
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        <Rich text="Anita a fumé *en cachette*." />
      </p>

      <ExerciseBox title="B. Mettez l'adverbe à la place qui convient.">
        {exerciseB.map((item, i) => (
          <ExerciseItem key={item.adv} n={i + 1}>
            ({item.adv}) {item.sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page65() {
  return (
    <TextbookPage pageNumber={65}>
      <SectionBar title="IV. Les degrés de l'adverbe" />

      <Example
        centered
        text="C'est elle qui travaille *le mieux*."
        translation="She is the one who works the best."
      />
      <Example
        centered
        text="*Plus* il est fatigué, *plus* il fait d'erreurs."
        translation="The tireder he is, the more errors he makes."
      />

      <Subhead text="IV. 1 Comparatif et superlatif de l'adverbe" />
      <Rule>
        Quelques adverbes de temps (<em>souvent, longtemps</em>) et tous les
        adverbes de manière (sauf <em>ensemble</em>) peuvent, comme les
        adjectifs, se mettre :
      </Rule>
      <p className="text-[15px] text-tb-ink">
        – au comparatif d&apos;égalité :{" "}
        <em className="text-tb-example">
          <Rich text="*aussi* longtemps" />
        </em>
        .
      </p>
      <p className="text-[15px] text-tb-ink">
        – au comparatif d&apos;infériorité :{" "}
        <em className="text-tb-example">
          <Rich text="*moins* longtemps" />
        </em>
        .
      </p>
      <p className="text-[15px] text-tb-ink">
        – au comparatif de supériorité :{" "}
        <em className="text-tb-example">
          <Rich text="*plus* longtemps" />
        </em>
        .
      </p>
      <p className="mb-4 text-[15px] text-tb-ink">
        – au superlatif :{" "}
        <em className="text-tb-example">
          <Rich text="*le plus* longtemps, *le moins* longtemps, *très* longtemps" />
        </em>
        .
      </p>

      <Subhead text="IV. 2 Comparatifs et superlatifs irréguliers" />
      <Rule>
        Quatre adverbes ont un comparatif et un superlatif irréguliers.
      </Rule>
      <table className="mb-4 w-full max-w-lg border-collapse text-[14.5px]">
        <thead>
          <tr className="border-b border-tb-cyan/40 text-left text-tb-teal">
            <th className="py-1.5 pr-3 font-semibold" />
            <th className="py-1.5 pr-3 font-semibold">Comparatif</th>
            <th className="py-1.5 font-semibold">Superlatif</th>
          </tr>
        </thead>
        <tbody>
          {irregularAdverbs.map((row) => (
            <tr key={row.base} className="border-b border-tb-cyan/20">
              <td className="py-1.5 pr-3 italic text-tb-example">{row.base}</td>
              <td className="py-1.5 pr-3 italic text-tb-example">
                {row.comparative}
              </td>
              <td className="py-1.5 italic text-tb-example">
                {row.superlative}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[15px] italic text-tb-example">
        <Rich text="Je l'aime *beaucoup*. Tu l'aimes *plus*. C'est lui qui l'aime *le plus*." />
      </p>
      <p className="mb-4 text-[15px] italic text-tb-example">
        <Rich text="Il travaille *bien*. Tu travailles *mieux*. C'est elle qui travaille *le mieux*." />
      </p>

      <Subhead text="IV. 3 Rapports entre les degrés (*plus… plus…, moins… moins…*)" />
      <SquareItem>
        <p>
          Pour indiquer qu&apos;il y a un rapport entre une augmentation et une
          autre, entre deux diminutions ou entre une augmentation et une
          diminution, l&apos;anglais utilise le comparatif précédé de
          l&apos;article défini (<em>the richer he gets, the … he becomes</em>)
          ou les expressions :
        </p>
      </SquareItem>
      <div className="mb-3 grid max-w-lg grid-cols-2 gap-x-6 text-[14.5px] italic text-tb-example">
        <p>– the more… the more…</p>
        <p>– the more… the less…</p>
        <p>– the less… the less…</p>
        <p>– the less… the more…</p>
      </div>
      <SquareItem>
        <p>
          Le français n&apos;utilise pas l&apos;article ; il utilise les
          structures suivantes :
        </p>
      </SquareItem>
      <div className="mb-3 grid max-w-lg grid-cols-2 gap-x-6 text-[14.5px] italic text-tb-example">
        <p>
          – <Rich text="*moins… moins…*" />
        </p>
        <p>
          – <Rich text="*plus… moins…*" />
        </p>
        <p>
          – <Rich text="*plus… plus…*" />
        </p>
        <p>
          – <Rich text="*moins… plus…*" />
        </p>
      </div>
      <Bilingual
        fr="*Plus* il parle, *plus* il nous persuade."
        en="The more he says, the more he convinces us."
      />
      <Bilingual
        fr="*Plus* il boit de café, *moins* il dort."
        en="The more coffee he drinks, the less he sleeps."
      />
    </TextbookPage>
  );
}

function Page66() {
  return (
    <TextbookPage pageNumber={66} pageNumberSide="left">
      <AttentionBox>
        <p>
          En français, non seulement il n&apos;y a pas d&apos;article devant{" "}
          <Term>plus</Term> ou <Term>moins</Term>, mais le sujet est tout de
          suite placé après l&apos;adverbe <em>plus</em> ou <em>moins</em>.
        </p>
        <Bilingual
          fr="*Plus* il est fatigué, *plus* il fait d'erreurs."
          en="The more tired he is, the more mistakes he makes."
        />
        <p>Retenez bien la phrase type :</p>
        <Bilingual
          fr="*Plus* il est satisfait, *plus* je suis heureux."
          en="The more satisfied he is, the happier I am."
        />
      </AttentionBox>

      <Subhead text="IV. 4 « De plus en plus »" />
      <Rule>
        <span className="font-semibold">a. </span>
        Pour indiquer une <Term>progression</Term> ou une{" "}
        <Term>diminution constante</Term>, l&apos;anglais utilise « more and
        more », « less and less » ou deux comparatifs « to get richer and
        richer ». Ces expressions sont traduites en français par :{" "}
        <Term>de plus en plus</Term>, <Term>de moins en moins</Term>.
      </Rule>
      <Bilingual
        fr="Nous devons travailler *de plus en plus*."
        en="We must work more and more."
      />
      <Bilingual
        fr="Il fait *de moins en moins* attention."
        en="He pays less and less attention."
      />
      <Rule>
        <span className="font-semibold">b. </span>
        Cette tournure peut introduire un adjectif ou un adverbe.
      </Rule>
      <Bilingual
        fr="Elle est *de plus en plus* riche."
        en="She gets richer and richer."
      />
      <Bilingual
        fr="Il travaille *de plus en plus* vite."
        en="He works faster and faster."
      />
      <Bilingual
        fr="Il est *de moins en moins* timide."
        en="He is less and less shy."
      />
      <Rule>
        <span className="font-semibold">c. </span>
        La tournure « de plus en plus » ne peut s&apos;employer qu&apos;avec les
        adjectifs et les adverbes qui ont un comparatif régulier.
      </Rule>
      <Rule>
        – Avec l&apos;adjectif <Term>bon</Term>, on remplacera la tournure par{" "}
        <Term>s&apos;améliorer</Term>.
      </Rule>
      <Bilingual
        fr="Ses notes *s'améliorent*."
        en="His grades are getting better."
      />
      <Rule>
        – Avec l&apos;adjectif <Term>mauvais</Term>, on peut utiliser le verbe{" "}
        <Term>empirer</Term>.
      </Rule>
      <Bilingual
        fr="La situation *empire*."
        en="The situation is getting worse."
      />
      <Rule>
        – Avec l&apos;adverbe <Term>bien</Term> on utilise la tournure{" "}
        <Term>de mieux en mieux</Term>.
      </Rule>
      <Bilingual
        fr="Il travaille *de mieux en mieux*."
        en="He is working better and better."
      />
      <Rule>
        – Avec l&apos;adverbe <Term>mal</Term> on utilise rarement la tournure{" "}
        <em>de pire en pire</em> ou <em>de pis en pis</em>. On utilise plutôt{" "}
        <Term>de plus en plus mal</Term>.
      </Rule>
      <Bilingual
        fr="Il travaille *de plus en plus mal*. (*Il travaille de pire en pire.*)"
        en="He is working more and more badly."
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

function Page67() {
  return (
    <TextbookPage pageNumber={67}>
      <ExerciseBox title="D. Mettez l'adverbe à la place qui convient.">
        {exerciseD.map((item, i) => (
          <ExerciseItem key={item.adv} n={i + 1}>
            ({item.adv}) {item.sentence}
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

      <ExerciseBox title="F. Traduisez.">
        {exerciseF.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="G. Traduisez.">
        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
          {exerciseG.map((item, i) => (
            <ExerciseItem key={item} n={i + 1}>
              {item}
            </ExerciseItem>
          ))}
        </div>
      </ExerciseBox>

      <ExerciseBox title={'H. Traduisez en utilisant l\'adverbe « tout ».'}>
        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
          {exerciseH.map((item, i) => (
            <ExerciseItem key={item} n={i + 1}>
              {item}
            </ExerciseItem>
          ))}
        </div>
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter8() {
  return (
    <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">
      <Page61 />
      <Page62 />
      <Page63 />
      <Page64 />
      <Page65 />
      <Page66 />
      <Page67 />
    </div>
  );
}
