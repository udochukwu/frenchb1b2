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
  chapter25,
  etreVerbs,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseE,
  exerciseG,
  exerciseH,
  overview,
} from "@/content/chapters/25";

function OverviewBlock() {
  return (
    <div className="mx-auto max-w-[40rem] space-y-3 text-center">
      {overview.map((section) => (
        <div key={section.roman}>
          <p className="text-[16px] font-semibold text-tb-teal">
            {section.roman} {section.title}
          </p>
          {section.lines.map((line) => (
            <p key={line.fr} className="text-[14.5px] leading-relaxed text-tb-example italic">
              {line.fr}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

function WithBlanks({ text }: { text: string }) {
  const parts = text.split("___");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 ? <Blank width="5.5rem" /> : null}
        </span>
      ))}
    </>
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

function Page195() {
  return (
    <TextbookPage pageNumber={195}>
      <ChapterHeader number={chapter25.number} title={chapter25.title} />
      <OverviewBlock />
      <SectionDivider title="I. Formes du passé composé : choix de l'auxiliaire" />
      <Example centered text="Caroline a acheté des chaussures." />
      <Example centered text="Paul est allé au cinéma hier soir." />
      <Example centered text="Jacques s'est lavé les mains." />
      <Example centered text="Anne est sortie ; son frère a sorti la voiture." />

      <Subhead text="I. 1 Emploi de l'auxiliaire avoir" />
      <Rule>
        On construit le passé composé de la majorité des verbes français avec le
        participe passé et l&apos;auxiliaire <Rich text="*avoir*" />. On construit
        notamment avec <Rich text="*avoir*" /> tous les verbes{" "}
        <Rich text="*transitifs*" /> et tous les verbes{" "}
        <Rich text="*impersonnels*" />.
      </Rule>
      <Example text="J'ai mangé ; il a lu ; nous avons étudié ; il a plu ; il a fallu partir." />

      <Subhead text="I. 2 Emploi de l'auxiliaire être" />
      <ArrowItem>
        Tous les verbes <Rich text="*pronominaux*" /> sont construits avec
        l&apos;auxiliaire <Rich text="*être*" />.
      </ArrowItem>
      <Example text="Marc s'est lavé les mains." />
      <Example text="Elle s'est coupé les cheveux." />
      <Example text="Je me suis ennuyé." />
      <ArrowItem>
        On construit avec l&apos;auxiliaire <Rich text="*être*" /> un petit nombre
        de verbes <Rich text="*intransitifs*" /> (ces verbes n&apos;ont pas de
        complément d&apos;objet) :
      </ArrowItem>
    </TextbookPage>
  );
}

function Page196() {
  return (
    <TextbookPage pageNumber={196} pageNumberSide="left">
      <Rule>{etreVerbs}</Rule>
      <Example text="Danielle est partie à Québec." />
      <Example text="Jacques est arrivé en retard." />

      <Subhead text="I. 3 Emploi de l'auxiliaire avoir ou être" />
      <Rule>
        Un petit nombre de verbes (
        <Rich text="*descendre, monter, rentrer, retourner, sortir*" />) sont
        construits avec <Rich text="*avoir*" /> ou <Rich text="*être*" />. Ils
        sont construits avec <Rich text="*avoir*" /> s&apos;ils ont un{" "}
        <Rich text="*complément d'objet*" />.
      </Rule>
      <Example text="Il est descendu tout de suite." translation="He came down at once." />
      <Example text="Il a descendu la valise." translation="He brought down the suitcase." />

      <ExerciseBox title="A. Complétez le texte suivant par l'auxiliaire voulu mis à la forme correcte.">
        <p>
          <WithBlanks text={exerciseA} />
        </p>
      </ExerciseBox>

      <SectionDivider title="II. Emploi du passé composé" />
      <Example centered text="J'ai compris." translation="I understood." />
      <Example centered text="Je l'ai rencontré ce matin." translation="I met him this morning." />
      <Example centered text="La guerre a éclaté en 1914." translation="War broke out in 1914." />

      <Subhead text="II. 1 Valeur du passé composé" />
      <Rule>
        On utilise le passé composé pour indiquer qu&apos;une action passée est{" "}
        <Rich text="*achevée*" />, <Rich text="*accomplie*" />, et qu&apos;elle
        est encore plus ou moins <Rich text="*reliée*" /> au moment présent de
        l&apos;énonciation :
      </Rule>
      <Rule>
        <span className="font-semibold">a. </span>
        soit parce que le passé composé exprime le{" "}
        <Rich text="*résultat présent*" /> d&apos;une action passée.
      </Rule>
      <Example text="J'ai changé d'avis." translation="I changed my mind./I have changed my mind." />
      <Example text="J'ai compris." translation="I understood./I have understood." />
      <Example text="Il a cessé de fumer." translation="He stopped smoking./He has stopped smoking." />
    </TextbookPage>
  );
}

function Page197() {
  return (
    <TextbookPage pageNumber={197}>
      <Rule>
        <span className="font-semibold">b. </span>
        soit parce que le passé composé indique un{" "}
        <Rich text="*fait passé*" /> qui a eu lieu dans une période de temps{" "}
        <Rich text="*non encore révolue*" /> au moment où l&apos;on parle. On
        emploie alors des expressions comme <Rich text="*ce matin*" />,{" "}
        <Rich text="*aujourd'hui*" />, <Rich text="*ce mois-ci*" />,{" "}
        <Rich text="*cette année*" />, etc.
      </Rule>
      <Example text="Je lui ai téléphoné ce matin." translation="I phoned him this morning." />

      <Subhead text="II. 2 Passé composé et passé simple" />
      <Rule>
        En français moderne, le passé composé remplace très souvent le passé
        simple, surtout à l&apos;oral (
        <CrossRef>III. 1, page 198</CrossRef>). Il perd alors les valeurs
        spécifiques énoncées en II. 1 et il exprime simplement un événement
        passé, complètement révolu, récent ou éloigné.
      </Rule>
      <Rule>
        C&apos;est le temps du passé le plus souvent utilisé dans un récit à la 1
        <sup>re</sup> ou à la 2<sup>e</sup> personne.
      </Rule>
      <Example text="Je suis allé faire des courses et j'ai pris le bus pour rentrer." />

      <Subhead text="II. 3 Imparfait et passé composé" />
      <Rule>
        Alors qu&apos;une série d&apos;<Rich text="*imparfaits*" /> marque la{" "}
        <Rich text="*simultanéité*" />, une série de verbes au passé composé
        marque la <Rich text="*succession*" />.
      </Rule>
      <Rule>Comparez :</Rule>
      <Example
        text="Il faisait beau, la mer était calme, les oiseaux chantaient et le soleil brillait."
        translation="The weather was fine, the sea was calm, the birds were singing and the sun was shining."
      />
      <Rule>et :</Rule>
      <Example
        text="Il s'est levé, il est allé à la cuisine, il s'est préparé son petit déjeuner et il a fait couler son bain."
        translation="He got up, went to the kitchen, prepared his breakfast and ran a bath."
      />

      <ExerciseBox title="B. À l'aide des éléments donnés, composez de courtes phrases au passé composé.">
        <Items items={exerciseB} />
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page198() {
  return (
    <TextbookPage pageNumber={198} pageNumberSide="left">
      <SectionDivider title="III. Passé simple" />
      <Example centered text="La guerre éclata en 1914." translation="War broke out in 1914." />
      <Example centered text="Un enfant arriva vers elles." translation="A child came towards them." />

      <Subhead text="III. 1 Valeur du passé simple" />
      <Rule>
        Le <Rich text="*passé simple*" /> marque une{" "}
        <Rich text="*action achevée*" /> et qui n&apos;a{" "}
        <Rich text="*plus de rapport direct*" /> avec le moment de
        l&apos;énonciation.
      </Rule>
      <Rule>
        Ce temps est surtout employé à l&apos;écrit, dans les récits à la 3
        <sup>e</sup> personne (du singulier ou du pluriel). Il est peu employé
        aux autres personnes (il est alors remplacé par le passé composé,{" "}
        <CrossRef>II. 2, page 197</CrossRef>). Mais, à la 3<sup>e</sup> personne,
        il est très souvent utilisé dans les narrations et il reste un temps
        vivant, qui a sa valeur propre.
      </Rule>

      <Subhead text="III. 2 Formation du passé simple" />
      <ArrowItem>
        Le passé simple des verbes réguliers en <Rich text="*-er*" /> se forme à
        l&apos;aide des terminaisons :{" "}
        <Rich text="*-ai ; -as ; -a ; -âmes ; -âtes ; -èrent*" />.
      </ArrowItem>
      <ArrowItem>
        La lettre <Rich text="*g*" /> devant <em>a</em> devient <Rich text="*ge*" />.
      </ArrowItem>
      <Example text="Il mangea, elle déménagea." />
      <ArrowItem>
        La lettre <Rich text="*c*" /> devant <em>a</em> devient <Rich text="*ç*" />.
      </ArrowItem>
      <Example text="Il avança, elle commença." />
      <ArrowItem>
        On trouvera les formes des verbes principaux dans tous les tableaux de
        conjugaisons.
      </ArrowItem>
      <AttentionBox>
        <p>
          Dans un récit au passé, il est rare de{" "}
          <Rich text="*mélanger le passé simple et le passé composé*" />. La
          perspective temporelle n&apos;est pas la même : le{" "}
          <Rich text="*passé composé*" /> relie le passé au présent alors que le{" "}
          <Rich text="*passé simple*" /> détache le passé du présent.
        </p>
      </AttentionBox>

      <ExerciseBox title="C. Donnez le passé simple des verbes suivants à la 3e personne du singulier et du pluriel :">
        <p>{exerciseC}</p>
      </ExerciseBox>
      <ExerciseBox title="D. Sur le modèle suivant, composez cinq couples de phrases qui montrent que certains verbes peuvent utiliser l'auxiliaire « être » et l'auxiliaire « avoir » (→ I. 3, p. 196).">
        <Example text="Je suis sorti du cinéma à 7 heures." />
        <Example text="J'ai sorti le matériel de camping." />
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page199() {
  return (
    <TextbookPage pageNumber={199}>
      <ExerciseBox title="E. Mettez au passé composé les phrases suivantes.">
        <Items items={exerciseE} />
      </ExerciseBox>
      <ExerciseBox title="F. Composez cinq phrases qui montrent bien qu'une action achevée a eu lieu dans une période de temps non encore révolue (→ II. 1 b, p. 197).">
        <Example text="Cette année nous sommes allés en Europe." />
      </ExerciseBox>
      <ExerciseBox title="G. Traduisez.">
        <Items items={exerciseG} />
      </ExerciseBox>
      <ExerciseBox title="H. Traduisez.">
        <p>{exerciseH}</p>
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter25() {
  return (
    <div className="space-y-8 py-8">
      <Page195 />
      <Page196 />
      <Page197 />
      <Page198 />
      <Page199 />
    </div>
  );
}
