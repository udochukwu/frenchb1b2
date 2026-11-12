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
  chapter29,
  exerciseC,
  exerciseD,
  exerciseE,
  exerciseF,
  overview,
} from "@/content/chapters/29";

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

function Page219() {
  return (
    <TextbookPage pageNumber={219}>
      <ChapterHeader number={chapter29.number} title={chapter29.title} />
      <OverviewBlock />
      <SectionDivider title="I. Emplois du plus-que-parfait" />
      <Example centered text="Je ne savais pas ; on ne me l'avait pas dit." />
      <Example centered text="On ne savait pas qu'il avait menti." />

      <Subhead text="I. 1 La notion d'antériorité" />
      <Rule>
        Pour exprimer l&apos;antériorité d&apos;un fait passé (A) (plus éloigné
        dans le temps) par rapport à un autre fait passé (B) (moins éloigné dans
        le temps), on utilise le <Rich text="*plus-que-parfait*" /> dans les cas
        énoncés plus loin.
      </Rule>
      <div className="my-3 grid grid-cols-3 text-center text-[13.5px] text-tb-ink">
        <span>A</span>
        <span>B</span>
        <span>présent</span>
        <span>(action passée 1)</span>
        <span>(action passée 2)</span>
        <span />
      </div>
      <Rule>
        <span className="font-semibold">a. </span>
        Lorsque l&apos;on a deux propositions{" "}
        <Rich text="*indépendantes juxtaposées*" />.
      </Rule>
      <Example text="Je ne le savais pas ; on ne me l'avait pas dit." />
      <p className="mb-2 text-[14px] text-tb-muted">(B) &nbsp;&nbsp; (A)</p>
      <Rule>
        <span className="font-semibold">b. </span>
        Lorsque l&apos;on a une proposition subordonnée{" "}
        <Rich text="*relative*" />.
      </Rule>
      <Example text="Il m'a réclamé la vidéo qu'il m'avait prêtée." />
      <p className="mb-2 text-[14px] text-tb-muted">(B) &nbsp;&nbsp; (A)</p>
    </TextbookPage>
  );
}

function Page220() {
  return (
    <TextbookPage pageNumber={220} pageNumberSide="left">
      <Rule>
        <span className="font-semibold">c. </span>
        Lorsque l&apos;on a une proposition <Rich text="*complétive*" />.
      </Rule>
      <Example text="On ne savait pas qu'il avait menti." />
      <p className="mb-2 text-[14px] text-tb-muted">(B) &nbsp;&nbsp; (A)</p>

      <Subhead text="I. 2 Le subjonctif" />
      <Rule>
        Lorsque le verbe de la subordonnée est au{" "}
        <Rich text="*subjonctif*" />, la règle est différente. Le subjonctif
        plus-que-parfait étant inusité, on emploie couramment le{" "}
        <Rich text="*passé composé du subjonctif*" /> pour exprimer
        l&apos;antériorité (A) par rapport à un fait passé (B).
      </Rule>
      <Example
        text="J'ai regretté qu'il ne m'ait pas prévenu."
        translation="I was sorry that he had not told me."
      />
      <p className="mb-2 text-[14px] text-tb-muted">(B) &nbsp;&nbsp; (A)</p>

      <ExerciseBox title="A. Mettez au temps du passé qui convient pour marquer l'antériorité.">
        <ExerciseItem n={1}>
          Dominique s&apos;est aperçue que Sylvie (déménager) <Blank /> le mois
          précédent.
        </ExerciseItem>
        <ExerciseItem n={2}>
          C&apos;était un ami que je (rencontrer) <Blank /> le mois précédent.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Il voulait retrouver la jeune fille qu&apos;il (voir) <Blank /> la
          veille.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Elle nous a dit qu&apos;elle (passer) <Blank /> de belles vacances.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Elles étaient contentes que nous (apporter) <Blank /> des fleurs.
        </ExerciseItem>
      </ExerciseBox>

      <SectionDivider title="II. Antériorité et subordonnées de temps" />
      <Example centered text="Il avait mangé quand je suis arrivé." />
      <Example centered text="Quand il eut mangé, j'arrivai." />
      <Example centered text="Quand il a eu mangé, je suis arrivé." />
      <Example centered text="Quand il avait mangé, j'arrivais." />

      <Subhead text="II. 1 Concordance des temps" />
      <Rule>
        Quand, pour marquer l&apos;<Rich text="*antériorité*" /> d&apos;un fait
        passé par rapport à un autre fait passé, on utilise une phrase qui
        contient une subordonnée circonstancielle de <Rich text="*temps*" />,
        introduite par <Rich text="*quand*" /> ou ses substituts (lorsque, dès
        que, aussitôt que, etc.), le jeu des temps est assez complexe.
      </Rule>
      <Rule>
        Nous donnons plus loin les principales combinaisons de temps possibles.
        Pour des raisons de clarté, on considérera toujours, dans les exemples
        donnés, que l&apos;action A (manger) est antérieure à l&apos;action B
        (arriver).
      </Rule>
      <Example text="Il a mangé puis je suis arrivé." />
    </TextbookPage>
  );
}

function Page221() {
  return (
    <TextbookPage pageNumber={221}>
      <Subhead text="II. 2 Cas numéro 1" />
      <Rule>
        — L&apos;action A (l&apos;action antérieure) est exprimée dans la{" "}
        <Rich text="*proposition principale*" /> ; le verbe de la principale se
        met alors au <Rich text="*plus-que-parfait*" />.
      </Rule>
      <Rule>
        — L&apos;action B (l&apos;action postérieure) est exprimée dans la
        subordonnée introduite par <Rich text="*quand*" /> ou{" "}
        <Rich text="*lorsque*" /> ; le verbe de la subordonnée se met au{" "}
        <Rich text="*passé composé*" /> ou au <Rich text="*passé simple*" />{" "}
        (selon les nuances apportées par ces deux temps{" "}
        <CrossRef>II et III, chapitre 25, p. 196-198</CrossRef>).
      </Rule>
      <Example text="Il avait mangé quand { je suis arrivé. / j'arrivai." />
      <Rule>
        Cette combinaison de temps suggère qu&apos;une durée{" "}
        <Rich text="*indéterminée*" /> sépare les deux actions.
      </Rule>
      <p className="mb-3 text-center text-[14.5px]">
        Schéma : &nbsp; A ________ / ________ B
      </p>

      <Subhead text="II. 3 Cas numéro 2" />
      <Rule>
        — L&apos;action A est exprimée dans la{" "}
        <Rich text="*proposition subordonnée*" /> (introduite par quand ou un
        substitut).
      </Rule>
      <Rule>
        — L&apos;action B est exprimée dans la proposition principale.
      </Rule>
      <Rule>Deux possibilités sont à envisager :</Rule>
      <Rule>
        <span className="font-semibold">a. </span>
        le verbe de l&apos;action A se met au{" "}
        <Rich text="*passé antérieur*" /> et le verbe de l&apos;action B se met
        alors au passé simple :
      </Rule>
      <Example text="Quand il eut mangé, j'arrivai." />
      <Rule>
        <span className="font-semibold">b. </span>
        le verbe de l&apos;action A se met au{" "}
        <Rich text="*passé surcomposé*" /> et le verbe de l&apos;action B se
        met au passé composé :
      </Rule>
      <Example text="Quand il a eu mangé, je suis arrivé." />
      <Rule>
        Ces combinaisons de temps suggèrent une succession plus ou moins
        immédiate entre les deux actions. De ce fait,{" "}
        <Rich text="*quand*" /> peut être remplacé par{" "}
        <Rich text="*dès que, aussitôt que*" /> et <Rich text="*après que*" />.
      </Rule>
      <p className="mb-2 text-center text-[14.5px]">
        Schéma : &nbsp; A ____ / ____ B
      </p>
      <Nb>
        le passé simple étant assez peu usité aux 1<sup>re</sup> et 2
        <sup>e</sup> personnes, on utilise (surtout dans la langue parlée) la
        combinaison II. 3 b (passé surcomposé/passé composé).
      </Nb>

      <Subhead text="II. 4 Cas numéro 3" />
      <Rule>
        — L&apos;action A est exprimée dans la subordonnée introduite par{" "}
        <Rich text="*quand*" /> (ou un substitut) et le verbe de cette
        subordonnée est au plus-que-parfait.
      </Rule>
      <Rule>
        — Le verbe de la principale (action B) se met alors à
        l&apos;imparfait.
      </Rule>
      <Example text="Quand il avait mangé, j'arrivais." />
    </TextbookPage>
  );
}

function Page222() {
  return (
    <TextbookPage pageNumber={222} pageNumberSide="left">
      <Rule>
        Cette combinaison de temps suggère obligatoirement l&apos;idée de{" "}
        <Rich text="*répétition*" />. C&apos;est pourquoi{" "}
        <Rich text="*quand*" /> peut être, dans ce cas-là, remplacé par{" "}
        <Rich text="*lorsque*" /> ou <Rich text="*chaque fois que*" />.
      </Rule>

      <Subhead text="II. 5 Remarques" />
      <Rule>
        Pour se repérer dans le jeu complexe des marques de l&apos;antériorité,
        il faut donc :
      </Rule>
      <Rule>
        — bien avoir à l&apos;esprit quelle est l&apos;action{" "}
        <Rich text="*antérieure*" /> à l&apos;autre.
      </Rule>
      <Rule>
        — savoir si cette action antérieure (A) se trouve dans la{" "}
        <Rich text="*principale*" /> (II. 2) ou dans la{" "}
        <Rich text="*subordonnée*" /> (II. 3 et II. 4) ;
      </Rule>
      <Rule>
        — savoir si <Rich text="*quand*" /> peut être remplacé par une autre
        conjonction. Dans tous les cas <Rich text="*quand*" /> peut être
        remplacé par son synonyme <Rich text="*lorsque*" />. Mais{" "}
        <Rich text="*lorsque*" /> ne peut pas être remplacé par{" "}
        <Rich text="*dès que, après que, aussitôt que*" />, lorsque
        l&apos;événement A est dans la <Rich text="*principale*" /> (II. 2, cas
        numéro 1). Pourquoi ? Parce qu&apos;il y aurait contradiction : les
        conjonctions <Rich text="*dès que, après que, aussitôt que*" />, qui
        impliquent l&apos;<Rich text="*antériorité*" />, ne peuvent pas
        introduire l&apos;événement B qui, lui, est postérieur à
        l&apos;événement A.
      </Rule>
      <Rule>
        <span className="font-semibold">f. </span>
        On emploie rarement le passé surcomposé avec l&apos;auxiliaire{" "}
        <Rich text="*être*" />. Le verbe <Rich text="*avoir*" /> ne se met pas
        lui-même au passé surcomposé (*il a eu eu).
      </Rule>
      <Rule>
        Quand on ne peut pas utiliser le passé surcomposé dans le cas II. 3 b,
        on utilise le <Rich text="*passé composé*" /> dans la subordonnée.
        Mais, pour marquer plus nettement l&apos;antériorité, on remplace
        souvent <Rich text="*quand*" /> par <Rich text="*après que*" /> ou{" "}
        <Rich text="*dès que*" />.
      </Rule>
      <Example text="Dès qu'il est arrivé, je l'ai appelé." />
      <Rule>
        Pour des raisons de clarté, nous avons toujours placé l&apos;événement
        A en début de phrase et l&apos;événement B en deuxième partie mais on
        peut inverser l&apos;ordre de présentation des événements sans changer
        le sens de la phrase.
      </Rule>
      <Rule>
        On peut dire : <Rich text="*Quand il avait mangé, j'arrivais*" />.
      </Rule>
      <Rule>
        ou : <Rich text="*J'arrivais quand il avait mangé*" />.
      </Rule>

      <ExerciseBox title="B. Mettez le verbe au temps qui convient.">
        <ExerciseItem n={1}>
          Quand il (toucher) <Blank /> sa paye, il allait déposer de
          l&apos;argent à la banque.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Dès qu&apos;il eut découvert le vol, il (aller) <Blank /> au
          commissariat de police.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Dès qu&apos;il (découvrir) <Blank /> le vol, il est allé au
          commissariat de police.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Elle avait déjà examiné cinq candidats quand je (arriver){" "}
          <Blank />.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Aussitôt qu&apos;il (téléphoner) <Blank />, nous sommes partis.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page223() {
  return (
    <TextbookPage pageNumber={223}>
      <SectionDivider title="III. Autres façons de marquer l'antériorité" />
      <Example centered text="Ayant mangé, je suis parti." />
      <Example centered text="Après avoir mangé, je suis parti." />
      <Example centered text="Il a mangé avant que je ne parte." />

      <Subhead text="III. 1 Participes et infinitif" />
      <ArrowItem>
        On peut marquer l&apos;antériorité à l&apos;aide du{" "}
        <Rich text="*participe présent*" /> de l&apos;auxiliaire{" "}
        <Rich text="*avoir*" /> ou <Rich text="*être*" /> suivi du{" "}
        <Rich text="*participe passé*" /> du verbe ; on peut aussi utiliser un{" "}
        <Rich text="*infinitif passé*" />.
      </ArrowItem>
      <AttentionBox>
        <p>
          Cette construction n&apos;est possible que si le{" "}
          <Rich text="*sujet*" /> du participe ou de l&apos;infinitif passé est
          le même que celui de la proposition principale.
        </p>
        <Example
          text="Ayant mangé, je suis allé au lit."
          translation="(C'est moi qui ai mangé et qui suis allé au lit = même sujet.) Having eaten, I went to bed."
        />
        <Example
          text="Après avoir mangé, je suis allé au lit."
          translation="After having eaten, I went to bed."
        />
        <p>
          Quand <Rich text="*après*" /> est suivi d&apos;un infinitif, il est
          toujours suivi d&apos;un <Rich text="*infinitif passé*" />.
        </p>
        <p>
          On peut utiliser <Rich text="*une fois*" /> suivi du{" "}
          <Rich text="*participe passé*" /> pour exprimer l&apos;
          <Rich text="*antériorité*" /> et insister sur l&apos;aspect{" "}
          <Rich text="*achevé*" /> de l&apos;action.
        </p>
        <Example
          text="Une fois sorti, j'ai poussé un « ouf » de soulagement."
          translation="Once I got outside, I heaved a sigh of relief."
        />
      </AttentionBox>

      <Subhead text="III. 2 Avant que/après que" />
      <Rule>
        Si l&apos;on considère deux actions successives A et B,{" "}
        <Rich text="*après que*" /> introduit l&apos;événement antérieur A et{" "}
        <Rich text="*avant que*" /> introduit l&apos;événement postérieur B.
      </Rule>
      <Rule>
        Soit deux événements successifs : Il a mangé d&apos;abord ; je suis
        arrivé ensuite.
      </Rule>
      <Rule>
        On peut exprimer la même réalité de deux façons, en changeant de point
        de vue :
      </Rule>
      <Example text="Je suis arrivé après qu'il a eu mangé." />
      <p className="text-[14px] text-tb-muted">
        <CrossRef>II. 3 b, page 221</CrossRef>
      </p>
      <Rule>ou :</Rule>
      <Example text="Il avait mangé avant que je n'arrive." />
      <Example text="Il a mangé avant que je n'arrive." />
      <Nb>
        <Rich text="*avant que*" /> est suivi du subjonctif.
      </Nb>
    </TextbookPage>
  );
}

function Page224() {
  return (
    <TextbookPage pageNumber={224} pageNumberSide="left">
      <h2 className="mb-4 text-center text-[18px] font-bold tracking-wide text-tb-cyan">
        RÉCAPITULATION
      </h2>
      <div className="mb-2 grid grid-cols-2 text-[14.5px] font-semibold text-tb-teal">
        <span>Événement A (antérieur)</span>
        <span>Événement B (postérieur)</span>
      </div>
      <Rule>
        <span className="font-semibold">1) </span>Plus-que-parfait &nbsp; quand
        → passé simple / → passé composé
      </Rule>
      <Example text="Il avait dîné quand → il sortit. / → il est sorti." />
      <Nb>
        ici, <Rich text="*quand*" /> ne peut être remplacé que par{" "}
        <Rich text="*lorsque*" />.
      </Nb>
      <Rule>
        <span className="font-semibold">2) a. </span>Quand + passé
        antérieur/passé simple
      </Rule>
      <Example text="Quand il eut dîné, il sortit." />
      <Rule>
        <span className="font-semibold">b. </span>Quand + passé
        surcomposé/passé composé
      </Rule>
      <Example text="Quand il a eu dîné, il est sorti." />
      <Nb>
        1 : dans les cas 2) a. et 2) b., <Rich text="*quand*" /> peut être
        remplacé par <Rich text="*dès que, aussitôt que, après que*" />.
      </Nb>
      <Nb>
        2 : quand le passé surcomposé est impossible (avec l&apos;auxiliaire{" "}
        <Rich text="*être*" />), on emploie le passé composé et{" "}
        <Rich text="*quand*" /> est remplacé par un substitut qui marque
        nettement l&apos;antériorité.
      </Nb>
      <Example text="Aussitôt que nous sommes arrivés, il est sorti." />
      <Rule>
        <span className="font-semibold">3) </span>Quand +
        plus-que-parfait/imparfait
      </Rule>
      <Example text="Quand il avait dîné, il sortait." />
      <Rule>
        <span className="font-semibold">4) </span>Après avoir/être + participe
        passé → passé simple / passé composé / imparfait
      </Rule>
      <Example text="Après être montée dans sa chambre, elle s'allongea." />
      <Example text="elle s'est allongée." />
      <Example text="elle s'allongeait." />
      <Nb>le sujet des deux parties de la phrase est le même.</Nb>
      <Rule>
        <span className="font-semibold">5) </span>Participe passé → passé
        simple / passé composé / imparfait
      </Rule>
      <Example text="Fatigué par son voyage, il se coucha de bonne heure." />
      <Example text="Ayant reçu le message, il est parti aussitôt." />
      <Example text="Étant parti trop tôt, il ne pouvait les revoir." />
      <Nb>le sujet des deux parties de la phrase est le même.</Nb>
      <Rule>
        <span className="font-semibold">6) </span>Passé simple, passé composé,
        imparfait &nbsp; avant de + infinitif (même sujet) / avant que +
        subjonctif (sujets différents)
      </Rule>
      <Example text="Il mangea / Il a mangé / Il mangeait avant de partir." />
      <Example text="avant que je n'arrive." />
    </TextbookPage>
  );
}

function Page225() {
  return (
    <TextbookPage pageNumber={225}>
      <ExerciseBox title="C. Combinez les paires de phrases en marquant l'antériorité ou la postériorité selon le contexte. (Certains mots seront redondants ; omettez-les.)">
        <Items items={exerciseC} />
      </ExerciseBox>
      <ExerciseBox title="D. Traduisez.">
        <Items items={exerciseD} />
      </ExerciseBox>
      <ExerciseBox title="E. Traduisez.">
        <Items items={exerciseE} />
      </ExerciseBox>
      <ExerciseBox title="F. Traduisez.">
        <Items items={exerciseF} />
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter29() {
  return (
    <div className="space-y-8 py-8">
      <Page219 />
      <Page220 />
      <Page221 />
      <Page222 />
      <Page223 />
      <Page224 />
      <Page225 />
    </div>
  );
}
