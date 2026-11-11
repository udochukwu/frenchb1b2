import {
  AttentionBox,
  ChapterHeader,
  Example,
  ExerciseBox,
  ExerciseItem,
  Nb,
  Rich,
  Rule,
  SectionBar,
  Subhead,
  TealHead,
  TextbookPage,
} from "@/components/textbook";
import {
  chapter18,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseD,
  exerciseE,
  exerciseF,
  overview,
} from "@/content/chapters/18";

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

function Page144() {
  return (
    <TextbookPage pageNumber={144} pageNumberSide="left">
      <ChapterHeader number={chapter18.number} title={chapter18.title} />
      <OverviewBlock />
      <SectionBar title="I. L'infinitif complément et la construction directe" />
      <Gloss fr="Ils espèrent venir bientôt." en="They are hoping to come soon." />
      <Gloss fr="Je vais travailler." en="I am going to work." />
      <Gloss fr="Viens voir ce qui se passe." en="Come and see what's happening." />

      <Subhead text="I. 1 Liste des verbes concernés" />
      <Rule>
        Les verbes suivants, quand ils sont suivis d&apos;un infinitif complément, sont reliés à l&apos;infinitif directement (sans l&apos;intermédiaire d&apos;une préposition) :
      </Rule>
      <TealHead>a. les auxiliaires de mode : vouloir, savoir, pouvoir, devoir.</TealHead>
      <Example text="Je veux aller au cinéma." translation="I want to go to the movies." />
      <Example text="Je dois faire mes devoirs." translation="I have to do my homework (must do)." />
      <TealHead>b. faillir (almost, nearly).</TealHead>
      <Example text="La voiture a failli écraser le piéton." translation="The car nearly ran over the pedestrian." />
      <TealHead>
        c. Une série de verbes de sentiment comme espérer, préférer, désirer, oser, daigner, etc.
      </TealHead>
      <Example text="Elle désire faire l'ascension du mont Blanc." translation="She wants to climb Mont Blanc." />
      <Example text="J'ai osé tenir tête à mon patron." translation="I dared to confront my boss." />
    </TextbookPage>
  );
}

function Page145() {
  return (
    <TextbookPage pageNumber={145}>
      <AttentionBox>
        <p><em>Espérer</em> et <em>sembler</em> suivis d&apos;un infinitif se construisent sans la préposition <em>de</em>.</p>
        <Example text="Il espère venir bientôt." translation="He hopes to come soon." />
        <Example text="Elle semble reprendre des forces." translation="She seems to be getting stronger." />
        <p>Il en est de même pour l&apos;expression <em>avoir beau</em>.</p>
        <Example text="Il a beau travailler fort, il ne réussit pas." translation="Although he works hard, he doesn't succeed." />
      </AttentionBox>

      <TealHead>
        d. Les verbes de mouvement qui indiquent un but comme aller, partir, venir, descendre, rentrer, etc. se construisent directement avec l&apos;infinitif.
      </TealHead>
      <Example text="Elle vient me voir. Je cours te rejoindre. Je monte me coucher." />
      <Rule>Une liste des principaux verbes suivis directement d&apos;un infinitif est donnée en annexe, page 341.</Rule>

      <AttentionBox>
        <p>
          Avec certains verbes (notamment <em>aller</em>, <em>venir</em>), l&apos;anglais, pour indiquer un but, utilise deux verbes de même forme (par exemple : deux impératifs) ou de même temps, reliés par <em>and</em>, alors que le français utilise <em>aller</em> ou <em>venir</em> suivi d&apos;un infinitif.
        </p>
        <Example text="Viens voir." translation="Come and see." />
        <Example text="Va chercher la voiture." translation="Go and get the car." />
        <Example text="Es-tu venu me demander quelque chose ?" translation="Did you come and ask for something?" />
      </AttentionBox>
      <Nb>
        La tournure <em>venir de</em> + infinitif existe en français mais elle marque un passé récent. On ne confondra pas :
      </Nb>
      <Example text="Elle vient de me voir." translation="She has just seen me." />
      <Example text="Elle vient me voir." translation="She is coming to see me." />

      <Subhead text="I. 2 Sujet du verbe conjugué et sujet de l'infinitif" />
      <Rule>
        L&apos;emploi de l&apos;infinitif après les verbes mentionnés ci-dessus signifie que le sujet du verbe conjugué et le sujet de l&apos;infinitif sont les mêmes.
      </Rule>
      <Example text="Je veux partir." translation="I want to leave." />
      <Example text="Il veut me demander de l'argent." translation="He wants to ask me for money." />
      <Rule>Si le sujet des deux verbes n&apos;est pas le même, on utilise une subordonnée introduite par <em>que</em>.</Rule>
      <Example text="Je veux que tu partes." translation="I want you to leave." />
      <Example text="Il veut que je lui donne de l'argent." translation="He wants me to give him some money." />

      <ExerciseBox title="A. Traduisez.">
        {exerciseA.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>{sentence}</ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page146() {
  return (
    <TextbookPage pageNumber={146} pageNumberSide="left">
      <SectionBar title="II. Les doubles constructions" />
      <Gloss fr="Elle dit l'avoir reconnu." en="She says (that) she recognised him." />
      <Example text="Elle dit qu'elle l'a reconnu." />
      <Gloss fr="J'entends les enfants chanter." en="I hear the children singing." />
      <Example text="J'entends les enfants qui chantent." />
      <Gloss fr="Il lui faut travailler. (Il doit travailler.)" en="He has to work. (must)" />
      <Example text="Il faut qu'il travaille." />

      <Subhead text="II. 1 Liste des verbes concernés" />
      <Rule>
        Les verbes de déclaration et d&apos;opinion (dire, croire, penser, etc.) peuvent avoir une double construction. Dans certains cas ils peuvent être suivis d&apos;un infinitif ou d&apos;une subordonnée introduite par <em>que</em>.
      </Rule>
      <Example text="Il avoue avoir tort. → Il avoue qu'il a tort." />
      <Example text="Je pense avoir tout dit. → Je pense que j'ai tout dit." />
      <Example text="Tu crois le savoir par cœur. → Tu crois que tu le sais par cœur." />
      <AttentionBox>
        <p>
          Cette double construction n&apos;est possible que si le sujet du verbe introducteur et le sujet du verbe suivant représentent une même personne. S&apos;ils représentent deux personnes différentes, l&apos;infinitif n&apos;est plus possible.
        </p>
        <Example text="Il dit que nous avons tort." translation="He says we are wrong." />
        <Example text="Je pense qu'il a tout dit." translation="I think he has said everything." />
        <Example text="Tu crois qu'il le sait par cœur." translation="You believe he knows it by heart." />
      </AttentionBox>

      <ExerciseBox title="B. Traduisez (si les deux constructions sont possibles, donnez-les).">
        {exerciseB.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>{sentence}</ExerciseItem>
        ))}
      </ExerciseBox>

      <Subhead text="II. 2 Les verbes de perception" />
      <Rule>
        Ces verbes (voir, entendre, écouter, sentir) se construisent avec l&apos;infinitif. On peut remplacer l&apos;infinitif par une proposition relative si le sujet du deuxième verbe est exprimé.
      </Rule>
      <Gloss fr="J'entends chanter." en="I hear singing." />
      <Gloss fr="J'entends les enfants chanter. (enfants = sujet de chanter.)" en="I hear the children singing." />
    </TextbookPage>
  );
}

function Page147() {
  return (
    <TextbookPage pageNumber={147}>
      <Example text="J'entends les enfants qui chantent." />
      <Example text="Je vois l'acteur pleurer." translation="I see the actor crying." />
      <Example text="Je vois l'acteur qui pleure." />
      <AttentionBox>
        <p>
          <em>Apercevoir</em> ne peut pas être construit avec l&apos;infinitif. On utilise une proposition relative.
        </p>
        <Example text="J'aperçois les enfants qui arrivent." translation="I notice the children arriving." />
      </AttentionBox>

      <Subhead text="II. 3 Le verbe « falloir »" />
      <Rule>
        Le verbe <em>falloir</em> (il faut, il faudra, il a fallu, etc.) est un verbe impersonnel ; le vrai sujet de l&apos;infinitif n&apos;est pas exprimé et c&apos;est le contexte qui éclaire le sens. <em>Il faut partir</em> peut signifier : <em>Je dois partir</em>, <em>vous devez partir</em>, etc. Pour éviter les ambiguïtés on peut :
      </Rule>
      <TealHead>
        a. soit ajouter un pronom personnel complément à « il faut » et garder l&apos;infinitif :
      </TealHead>
      <Example text="Il me faut partir." translation="I must go." />
      <Example text="Il leur faut partir." translation="They must go." />
      <TealHead>
        b. soit préférer l&apos;emploi de la subordonnée introduite par <em>que</em> (verbe au subjonctif) :
      </TealHead>
      <Example text="Il faut que je parte." translation="I must go." />
      <Example text="Il faut que vous partiez." translation="You must go." />

      <ExerciseBox title="C. Dites d'une autre façon, en utilisant la proposition relative.">
        {exerciseC.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>{sentence}</ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="D. Dites d'une autre façon en utilisant l'infinitif.">
        {exerciseD.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>{sentence}</ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page148() {
  return (
    <TextbookPage pageNumber={148} pageNumberSide="left">
      <ExerciseBox title="E. Traduisez.">
        {exerciseE.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>{sentence}</ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="F. Traduisez en utilisant l'expression « avoir beau ». ">
        {exerciseF.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>{sentence}</ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter18() {
  return (
    <div className="space-y-8 py-8">
      <Page144 />
      <Page145 />
      <Page146 />
      <Page147 />
      <Page148 />
    </div>
  );
}
