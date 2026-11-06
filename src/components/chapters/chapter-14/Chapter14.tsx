import type { ReactNode } from "react";
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
  SectionDivider,
  SquareItem,
  Subhead,
  TextbookPage,
} from "@/components/textbook";
import { chapter14, exerciseE, overview } from "@/content/chapters/14";

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

function Page116() {
  return (
    <TextbookPage pageNumber={116} pageNumberSide="left">
      <ChapterHeader number={chapter14.number} title={chapter14.title} />
      <OverviewBlock />

      <SectionDivider title="I. Adjectifs et pronoms" />
      <Example centered text="Cette jeune fille parle bien ; celle-ci parle mieux." />
      <Example centered text="Ces garçons étudient ; ceux-là ne font rien." />

      <Subhead text="I. 1 Il faut distinguer l'adjectif démonstratif et le pronom démonstratif." />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        <Rich text="*L'adjectif démonstratif*" /> détermine un nom ; il se place
        devant le nom avec lequel il s&apos;accorde en genre et en nombre.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Cette* jeune fille parle bien." />
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Ce* garçon écoute avec attention." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Ces* enfants sont calmes." />
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        <Rich text="*Le pronom démonstratif*" /> remplace un nom ; il
        s&apos;accorde en genre et en nombre avec le nom qu&apos;il remplace.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Celle-ci* parle bien." />
      </p>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Celui-ci* écoute avec attention." />
      </p>
    </TextbookPage>
  );
}

function Page117() {
  return (
    <TextbookPage pageNumber={117}>
      <SectionBar title="II. Formes de l'adjectif démonstratif" />
      <Example centered text="Ce tigre est dangereux ; cet animal est encore plus méchant." />
      <Example centered text="Cette recette est facile ; ces recettes sont plus difficiles." />

      <Subhead text="II. 1 Les formes de l'adjectif démonstratif sont les suivantes :" />
      <p className="mb-1 text-[15px] text-tb-ink">
        – <Rich text="*ce*" /> : devant un nom masculin singulier,
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">
        – <Rich text="*cette*" /> : devant un nom féminin singulier,
      </p>
      <p className="mb-3 text-[15px] text-tb-ink">
        – <Rich text="*ces*" /> : devant un nom pluriel (masculin ou féminin).
      </p>

      <AttentionBox>
        <SquareItem>
          <p>
            <Rich text="*Ce*" /> devient <Rich text="*cet*" /> devant un mot
            masculin commençant par une voyelle ou un h muet.
          </p>
        </SquareItem>
        <p className="italic text-tb-example">
          <Rich text="*Cet* autre ami ; *cet* animal ; *cet* hôpital." />
        </p>
        <SquareItem>
          <p>
            <Rich text="*Ce*" /> reste <Rich text="*ce*" /> devant un mot
            masculin commençant par un h aspiré.
          </p>
        </SquareItem>
        <p className="italic text-tb-example">
          <Rich text="*Ce* héros ; *ce* hasard." />
        </p>
        <SquareItem>
          <p>
            Le pluriel de <Rich text="*cette*" /> est <Rich text="*ces*" />. La
            forme *« cettes » n&apos;existe pas !
          </p>
        </SquareItem>
        <p className="italic text-tb-example">
          <Rich text="*Cette* fenêtre est ouverte." />
        </p>
        <p className="italic text-tb-example">
          <Rich text="*Ces* fenêtres sont ouvertes." />
        </p>
      </AttentionBox>

      <Subhead text="II. 2 Emploi des particules -ci et -là" />
      <SquareItem>
        <p>
          Pour opposer deux noms on ajoute parfois au nom précédé de
          l&apos;adjectif démonstratif la particule <Rich text="*-ci*" /> ou{" "}
          <Rich text="*-là*" />. <Rich text="*-ci*" /> et <Rich text="*-là*" />{" "}
          sont liés au nom par un trait d&apos;union ;{" "}
          <Rich text="*-ci*" /> indique généralement l&apos;objet{" "}
          <Rich text="*le plus proche*" /> ; <Rich text="*-là*" /> indique
          l&apos;objet <Rich text="*le plus éloigné*" />.
        </p>
      </SquareItem>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Je ne veux pas *ces légumes-ci* ; je veux *ces légumes-là*." />
      </p>
      <SquareItem>
        <p>
          L&apos;anglais, lui, utilise deux formes différentes : this/that ;
          these/those.
        </p>
      </SquareItem>
      <Gloss
        fr="*Ces livres-ci* sont à moi ; *ces livres-là* sont à vous."
        en="These books are mine; those books are yours."
      />

      <ExerciseBox title="A. Remplacez les pointillés par l'adjectif démonstratif qui convient.">
        <ExerciseItem n={1}>
          <Blank /> roman est passionnant.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Je ne connais pas <Blank /> étudiant.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Il n&apos;a pas su faire <Blank /> exercices.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Ne te mets pas devant <Blank /> haut-parleur.
        </ExerciseItem>
        <ExerciseItem n={5}>
          <Blank /> table est en chêne.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page118() {
  return (
    <TextbookPage pageNumber={118} pageNumberSide="left">
      <SectionBar title="III. Formes et emplois du pronom démonstratif" />
      <Example centered text="J'ai pris celui de mon ami." />
      <Example centered text="J'ai pris celui que tu m'as offert." />
      <Example centered text="J'ai pris celui-ci." />
      <Example centered text="Est-ce que cela t'ennuie ? Non, ça ne m'ennuie pas, c'est intéressant." />

      <Subhead text="III. 1 Formes" />
      <Rule>
        Le pronom démonstratif a les formes suivantes lorsqu&apos;il remplace :
      </Rule>
      <p className="mb-1 text-[15px] text-tb-ink">
        – un nom masculin singulier : <em>celui</em> ou <em>celui-ci</em>,{" "}
        <em>celui-là</em> ;
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">
        – un nom féminin singulier : <em>celle</em> ou <em>celle-ci</em>,{" "}
        <em>celle-là</em> ;
      </p>
      <p className="mb-1 text-[15px] text-tb-ink">
        – un nom masculin pluriel : <em>ceux</em> ou <em>ceux-ci</em>,{" "}
        <em>ceux-là</em> ;
      </p>
      <p className="mb-3 text-[15px] text-tb-ink">
        – un nom féminin pluriel : <em>celles</em> ou <em>celles-ci</em>,{" "}
        <em>celles-là</em>.
      </p>

      <Subhead text="III. 2 Emplois" />
      <p className="mb-2 font-semibold text-tb-ink">• Celui, celui-ci, celui-là</p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        <Rich text="*Lorsque le pronom démonstratif a un complément*" /> ou
        lorsqu&apos;il est complété par une préposition + autre, on utilise
        obligatoirement <Rich text="*la forme simple*" />.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        J&apos;ai emprunté le livre de mon ami. → J&apos;ai emprunté{" "}
        <Rich text="*celui*" /> de mon ami.
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        Je voudrais la cassette que vous m&apos;avez proposée. → Je voudrais{" "}
        <Rich text="*celle*" /> que vous m&apos;avez proposée.
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        <Rich text="*Lorsque le pronom démonstratif n'a pas de complément*" />{" "}
        ou lorsqu&apos;il n&apos;est pas complété par une proposition relative,
        on utilise obligatoirement <Rich text="*la forme composée*" />{" "}
        (celui-ci, celle-ci, celui-là, celle-là, etc.).
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Je ne veux pas ce livre ; je veux *celui-là*." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Ne me donnez pas ces pommes-ci ; donnez-moi *celles-là*." />
      </p>

      <ExerciseBox title="B. Complétez par la forme simple ou par la forme composée du pronom démonstratif.">
        <ExerciseItem n={1}>
          J&apos;aime beaucoup la robe de Catherine mais je n&apos;aime pas{" "}
          <Blank /> de Monique.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Luc aime les disques de jazz mais il n&apos;a jamais écouté <Blank />{" "}
          que tu lui as offerts.
        </ExerciseItem>
        <ExerciseItem n={3}>
          J&apos;ai vu cette exposition mais je n&apos;ai pas encore vu{" "}
          <Blank />.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Ils ont acheté une belle voiture mais <Blank /> est encore plus
          confortable.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Je préfère les lunettes de Chloé à <Blank /> de Bernadette.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page119() {
  return (
    <TextbookPage pageNumber={119}>
      <p className="mb-2 font-semibold text-tb-ink">• Celui-ci et celui-là</p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        En principe les formes en <Rich text="*-ci*" /> (celui-ci, celle-ci,
        etc.) marquent la proximité, alors que les formes en{" "}
        <Rich text="*-là*" /> marquent l&apos;éloignement. Mais, en français
        moderne, cette distinction n&apos;est pas toujours respectée.
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        Quand, pour rappeler deux noms que l&apos;on oppose, on traduit « the
        former », « the latter » par un pronom démonstratif,{" "}
        <Rich text="*celui-ci*" /> (celle-ci, etc.) correspond à « the latter »
        et <Rich text="*celui-là*" /> (celle-là, etc.) correspond à « the
        former ».
      </p>
      <p className="mb-1 text-[14.5px] text-tb-muted">
        I have met her previous and her current husband. I prefer the former to
        the latter.
      </p>
      <p className="mb-3 text-[14.5px] italic text-tb-example">
        <Rich text="J'ai rencontré son ancien mari et son mari actuel. Je préfère *celui-là* à *celui-ci*." />
      </p>

      <AttentionBox>
        <SquareItem>
          <p>
            On ne peut caractériser en français un pronom démonstratif ni par un
            participe présent ni par un participe passé. Pour traduire la
            tournure anglaise, on utilise une proposition relative.
          </p>
        </SquareItem>
        <p className="text-tb-muted">
          Those injured in the battle will stay in the hospital.{" "}
          <span className="italic text-tb-example">
            Ceux qui ont été blessés dans la bataille resteront à l&apos;hôpital.
          </span>
        </p>
        <p className="text-tb-muted">
          Only those travelling in first class may board now.{" "}
          <span className="italic text-tb-example">
            Seuls ceux qui voyagent en première classe peuvent embarquer
            maintenant.
          </span>
        </p>
        <SquareItem>
          <p>
            « The one » précédant un pronom relatif anglais ne peut pas se
            traduire par *l&apos;un/l&apos;une ; on le traduit par un pronom
            démonstratif.
          </p>
        </SquareItem>
        <p className="text-tb-muted">
          The one who gives the answer will get a prize.{" "}
          <span className="italic text-tb-example">
            Celui/celle qui donnera la réponse recevra un prix.
          </span>
        </p>
      </AttentionBox>

      <p className="mb-2 mt-4 font-semibold text-tb-ink">
        • Ceci, cela, ça et ce
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        Lorsqu&apos;on veut <Rich text="*représenter toute une proposition*" />,
        lorsqu&apos;on veut représenter non pas un objet individualisé mais{" "}
        <Rich text="*une idée générale*" /> ou vague, un concept, un sentiment,
        on utilise le pronom démonstratif <Rich text="*ceci*" /> ou{" "}
        <Rich text="*cela*" />.
      </p>
      <p className="mb-1 text-[14.5px] italic text-tb-example">
        Je vous propose de venir vous chercher à 5 heures et de vous conduire à
        la gare. Est-ce que <Rich text="*cela*" /> vous convient ? (
        <Rich text="*cela*" /> = tout ce que je propose.)
      </p>
      <p className="mb-2 text-[14.5px] text-tb-muted">
        I suggest that I pick you up at 5 to take you to the station. Is that
        alright with you?
      </p>
      <Gloss
        fr="Il a rapporté un bon bulletin scolaire à la maison ; *cela* a fait plaisir à ses parents."
        en="He took home a good report; that made his parents happy."
      />
      <Rule>
        En principe, <Rich text="*ceci*" /> désigne les choses dont il va être
        question et <Rich text="*cela*" /> les choses dont il a été question
        mais cette distinction n&apos;est pas toujours respectée.
      </Rule>
      <p className="mt-3 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        Très souvent, <Rich text="*dans le langage familier*" />,{" "}
        <Rich text="*cela*" /> peut être remplacé par la forme{" "}
        <Rich text="*ça*" />.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        Est-ce que <Rich text="*ça*" /> vous plaît ?
      </p>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Ça* va ?" />
      </p>
    </TextbookPage>
  );
}

function Page120() {
  return (
    <TextbookPage pageNumber={120} pageNumberSide="left">
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">c. </span>
        On n&apos;utilise <Rich text="*pas le démonstratif « cela/ça »*" />{" "}
        devant le verbe <Rich text="*être*" /> ; on utilise le démonstratif{" "}
        <Rich text="*ce*" /> (élidé en <Rich text="*c'*" /> devant une voyelle).
      </p>
      <Gloss
        fr="*Ce* serait courageux de sa part."
        en="That would be brave of him."
      />
      <Gloss fr="*C'est* intéressant." en="That's interesting." />
      <p className="mb-2 mt-3 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">d. </span>
        On utilise <Rich text="*le démonstratif ce*" /> devant une proposition
        relative sans antécédent précis (
        <Xref>chapitre 12, II. 1 et II. 2, p. 95-96</Xref>).
      </p>
      <Gloss
        fr="*Ce* que je veux, *c'est* que vous soyez à l'heure."
        en="What I want is for you to be on time."
      />

      <ExerciseBox title="C. Complétez par « ce », « c' » ou « cela ».">
        <ExerciseItem n={1}>
          <Blank /> qui l&apos;intéresse vraiment, <Blank /> est
          l&apos;informatique.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Je ne sais pas si <Blank /> est vrai mais <Blank /> semble bizarre.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Il n&apos;est pas venu ; <Blank /> est inquiétant.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Elle est en retard ; <Blank /> m&apos;étonne.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Arrêtez de fumer ! <Blank /> est mauvais pour la santé.
        </ExerciseItem>
      </ExerciseBox>

      <ExerciseBox title="D. Complétez les phrases suivantes par le démonstratif qui convient.">
        <ExerciseItem n={1}>
          <Blank /> semble incroyable. <Blank /> enfant est tombé du sixième
          étage et il n&apos;est même pas blessé !
        </ExerciseItem>
        <ExerciseItem n={2}>
          <Blank /> qui m&apos;ennuie, <Blank /> est que je n&apos;ai pas compris{" "}
          <Blank /> leçon de grammaire ; par contre j&apos;ai bien assimilé{" "}
          <Blank /> de la semaine dernière.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Quels sont <Blank /> qui étaient absents hier ?
        </ExerciseItem>
        <ExerciseItem n={4}>
          J&apos;aime les chaussures d&apos;Angela mais je préfère <Blank /> de
          Chantal.
        </ExerciseItem>
        <ExerciseItem n={5}>
          <Blank /> tableaux sont sûrement des faux !
        </ExerciseItem>
        <ExerciseItem n={6}>
          <Blank /> exposition est intéressante mais moins complète que{" "}
          <Blank /> de Montréal.
        </ExerciseItem>
        <ExerciseItem n={7}>
          <Blank /> professeur vient d&apos;Australie.
        </ExerciseItem>
        <ExerciseItem n={8}>
          Il a été congédié ; <Blank /> est tout à fait injuste.
        </ExerciseItem>
        <ExerciseItem n={9}>
          <Blank /> vieil hôpital va bientôt être démoli.
        </ExerciseItem>
        <ExerciseItem n={10}>
          Quelle couleur préfères-tu ? <Blank /> ou <Blank /> ?
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page121() {
  return (
    <TextbookPage pageNumber={121}>
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

export function Chapter14() {
  return (
    <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">
      <Page116 />
      <Page117 />
      <Page118 />
      <Page119 />
      <Page120 />
      <Page121 />
    </div>
  );
}
