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
import {
  adjectiveForms,
  chapter13,
  exerciseB,
  exerciseG,
  overview,
  pronounForms,
} from "@/content/chapters/13";

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

function Person({ text }: { text: string }) {
  const parts = text.split(/(1re|2e|3e)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part === "1re") return <Ord key={i} n="1" kind="re" />;
        if (part === "2e") return <Ord key={i} n="2" kind="e" />;
        if (part === "3e") return <Ord key={i} n="3" kind="e" />;
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function Ord({ n, kind }: { n: string; kind: "re" | "e" }) {
  return (
    <>
      {n}
      <sup>{kind}</sup>
    </>
  );
}

function AdjectiveTable() {
  return (
    <table className="mb-4 w-full border-collapse text-center text-[13.5px]">
      <thead>
        <tr className="text-tb-teal">
          <th className="border border-tb-cyan/40 px-2 py-1.5 font-semibold" rowSpan={2}>
            POSSESSEUR
          </th>
          <th className="border border-tb-cyan/40 px-2 py-1.5 font-semibold" colSpan={3}>
            POSSÉDÉ
          </th>
        </tr>
        <tr className="text-tb-teal">
          <th className="border border-tb-cyan/40 px-2 py-1 font-semibold">Masculin</th>
          <th className="border border-tb-cyan/40 px-2 py-1 font-semibold">Féminin</th>
          <th className="border border-tb-cyan/40 px-2 py-1 font-semibold">Pluriel</th>
        </tr>
      </thead>
      <tbody>
        {adjectiveForms.map((row) => (
          <tr key={row.person}>
            <td className="border border-tb-cyan/25 px-2 py-1 text-left">
              <Person text={row.person} />
            </td>
            <td className="border border-tb-cyan/25 px-2 py-1 italic text-tb-example">{row.m}</td>
            <td className="border border-tb-cyan/25 px-2 py-1 italic text-tb-example">{row.f}</td>
            <td className="border border-tb-cyan/25 px-2 py-1 italic text-tb-example">{row.p}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function PronounTable() {
  return (
    <table className="mb-4 w-full border-collapse text-center text-[12.5px]">
      <thead>
        <tr className="text-tb-teal">
          <th className="border border-tb-cyan/40 px-1.5 py-1.5 font-semibold" rowSpan={3}>
            POSSESSEUR
          </th>
          <th className="border border-tb-cyan/40 px-1.5 py-1.5 font-semibold" colSpan={4}>
            POSSÉDÉ
          </th>
        </tr>
        <tr className="text-tb-teal">
          <th className="border border-tb-cyan/40 px-1.5 py-1 font-semibold" colSpan={2}>
            Singulier
          </th>
          <th className="border border-tb-cyan/40 px-1.5 py-1 font-semibold" colSpan={2}>
            Pluriel
          </th>
        </tr>
        <tr className="text-tb-teal">
          <th className="border border-tb-cyan/40 px-1.5 py-1 font-semibold">Masculin</th>
          <th className="border border-tb-cyan/40 px-1.5 py-1 font-semibold">Féminin</th>
          <th className="border border-tb-cyan/40 px-1.5 py-1 font-semibold">Masculin</th>
          <th className="border border-tb-cyan/40 px-1.5 py-1 font-semibold">Féminin</th>
        </tr>
      </thead>
      <tbody>
        {pronounForms.map((row) => (
          <tr key={row.person}>
            <td className="border border-tb-cyan/25 px-1.5 py-1 text-left">
              <Person text={row.person} />
            </td>
            <td className="border border-tb-cyan/25 px-1.5 py-1 italic text-tb-example">{row.sm}</td>
            <td className="border border-tb-cyan/25 px-1.5 py-1 italic text-tb-example">{row.sf}</td>
            <td className="border border-tb-cyan/25 px-1.5 py-1 italic text-tb-example">{row.pm}</td>
            <td className="border border-tb-cyan/25 px-1.5 py-1 italic text-tb-example">{row.pf}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Page106() {
  return (
    <TextbookPage pageNumber={106} pageNumberSide="left">
      <ChapterHeader number={chapter13.number} title={chapter13.title} />
      <OverviewBlock />

      <SectionDivider title="I. Formes" />
      <Example centered text="On fête *son* anniversaire ; on fêtera *le mien* plus tard." />
      <Example centered text="J'ai *mon* livre ; prenez *le vôtre*." />

      <Subhead text="I. 1 Il faut distinguer l'adjectif possessif du pronom possessif" />
      <SquareItem>
        <p>
          <Rich text="*L'adjectif possessif*" /> est toujours suivi d&apos;un nom
          et il ne peut pas être précédé d&apos;un article.
        </p>
      </SquareItem>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="On fêtera *son* anniversaire le 6 mai." />
      </p>
      <SquareItem>
        <p>
          <Rich text="*Le pronom possessif*" />, lui, n&apos;est jamais suivi
          d&apos;un nom (il remplace le nom). Contrairement à l&apos;anglais, il
          est toujours précédé de l&apos;article défini.
        </p>
      </SquareItem>
      <Gloss
        fr="On fêtera *le mien* cinq jours plus tard."
        en="We will celebrate mine 5 days later."
      />
      <SquareItem>
        <p>On distinguera en particulier :</p>
      </SquareItem>
      <p className="mb-1 pl-8 text-[15px] text-tb-ink">
        – their : <Rich text="*leur*" /> (adjectif) et theirs :{" "}
        <Rich text="*le leur*, *la leur*, *les leurs*" /> (pronoms) ;
      </p>
      <p className="mb-1 pl-8 text-[15px] text-tb-ink">
        – our : <Rich text="*notre*" /> (adjectif) et ours :{" "}
        <Rich text="*le nôtre*, *la nôtre*, *les nôtres*" /> (pronoms) ;
      </p>
      <p className="mb-2 pl-8 text-[15px] text-tb-ink">
        – your : <Rich text="*votre*" /> (adjectif) et yours :{" "}
        <Rich text="*le vôtre*, *la vôtre*, *les vôtres*" /> (pronoms).
      </p>
      <Gloss
        fr="*Votre* anniversaire tombe un lundi ; *le vôtre* tombe un dimanche."
        en="Our birthday falls on a Monday, yours on a Sunday."
      />
    </TextbookPage>
  );
}

function Page107() {
  return (
    <TextbookPage pageNumber={107}>
      <ExerciseBox title="A. Indiquez si les mots soulignés sont des adjectifs ou des pronoms.">
        <ExerciseItem n={1}>
          Il a pris <u>ses lunettes</u> mais j&apos;ai oublié <u>les miennes</u>.
        </ExerciseItem>
        <ExerciseItem n={2}>
          J&apos;aime beaucoup <u>votre cardigan</u>.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Ces maisons coûtent cher mais ils ont acheté <u>la leur</u> à un prix
          intéressant.
        </ExerciseItem>
        <ExerciseItem n={4}>
          <u>Ses enfants</u> sont bien élevés ; <u>les leurs</u> sont un peu plus
          turbulents.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Avez-vous rendu <u>vos livres</u> ? Nous, nous n&apos;avons pas encore
          rendu <u>les nôtres</u>.
        </ExerciseItem>
      </ExerciseBox>

      <SectionBar title="II. Adjectif possessif" />
      <Example centered text="Merci de *ton* aimable invitation." />
      <Example centered text="Ils ont risqué *leur* vie." />

      <Subhead text="II. 1 Formes de l'adjectif possessif" />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        En français, l&apos;adjectif possessif s&apos;accorde en{" "}
        <Rich text="*genre*" /> et en <Rich text="*nombre*" /> avec le{" "}
        <Rich text="*nom*" /> qu&apos;il modifie, alors qu&apos;en anglais, il
        s&apos;accorde avec le possesseur et ne prend la marque du genre
        qu&apos;à la <Ord n="3" kind="e" /> personne du singulier (his/her).
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        Donc, en français, si <Rich text="*l'objet possédé*" /> est au féminin,
        l&apos;adjectif possessif est au féminin ; si{" "}
        <Rich text="*l'objet possédé*" /> est au pluriel, l&apos;adjectif
        possessif est au pluriel, etc.
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="J'aime *ta* jupe mais je n'aime pas *ton* corsage." />
      </p>
      <p className="mb-3 text-[15px] leading-[1.65] text-tb-ink">
        Le genre de l&apos;adjectif ne dépend pas du genre du possesseur ; il
        dépend du genre du <Rich text="*possédé*" />.
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        <Rich text="*Le radical de l'adjectif*" /> possessif dépend de la{" "}
        <Rich text="*personne du possesseur*" /> (
        <Ord n="1" kind="re" />, <Ord n="2" kind="e" />, <Ord n="3" kind="e" />{" "}
        personne, du singulier ou du pluriel).
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Je suis allé en vacances avec *mon* frère et *ma* sœur." />
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Nous sommes heureux car nous avons reçu *notre* cadeau." />
      </p>
      <p className="mb-3 text-[15px] leading-[1.65] text-tb-ink">
        En français, il faut donc à la fois tenir compte du{" "}
        <Rich text="*possesseur*" /> (singulier ou pluriel ?{" "}
        <Ord n="1" kind="re" />, <Ord n="2" kind="e" /> ou{" "}
        <Ord n="3" kind="e" /> personne ?) et du <Rich text="*possédé*" />{" "}
        (masculin ou féminin ? singulier ou pluriel ?).
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">c. </span>
        <Rich text="*Contrairement à l'anglais*" />, à la{" "}
        <Ord n="3" kind="e" /> personne du singulier, le français ne fait pas la
        différence entre un possesseur masculin (his watch) et un possesseur
        féminin (her watch).
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Il a perdu *sa* montre." />{" "}
        <span className="not-italic text-tb-muted">(his watch).</span>
      </p>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Elle a perdu *sa* montre." />{" "}
        <span className="not-italic text-tb-muted">(her watch).</span>
      </p>
    </TextbookPage>
  );
}

function Page108() {
  return (
    <TextbookPage pageNumber={108} pageNumberSide="left">
      <p className="mb-3 text-[15px] text-tb-ink">
        Voici un tableau des formes de l&apos;adjectif possessif.
      </p>
      <AdjectiveTable />

      <AttentionBox>
        <p>
          – Les formes *notres et *votres n&apos;existent pas. Il faut utiliser{" "}
          <Rich text="*nos*" /> et <Rich text="*vos*" />.
        </p>
        <p>
          – <Rich text="*Leur*" /> devant un nom féminin (singulier ou pluriel)
          n&apos;a pas de -e final.
        </p>
        <p className="italic text-tb-example">
          <Rich text="*Leur* robe ; *leurs* robes ; *leur* maison ; *leurs* maisons." />
        </p>
      </AttentionBox>

      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">d. </span>
        <Rich text="*Les adjectifs possessifs féminins*, *ma*, *ta*, *sa*" /> ne
        s&apos;utilisent pas devant un mot féminin commençant par une voyelle ou
        un h muet ; on utilise alors les formes <Rich text="*mon*, *ton*, *son*" />.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Mon* auto ; *ton* aimable invitation ; *son* amie." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Ma* belle auto ; *ta* sympathique invitation ; *sa* grande amie." />
      </p>

      <Subhead text="II. 2 Formes et emplois de ses, leur et leurs" />
      <SquareItem>
        <p>
          On utilise <Rich text="*ses*" /> lorsqu&apos;il y a{" "}
          <Rich text="*un seul possesseur*" /> (masculin ou féminin) et{" "}
          <Rich text="*plusieurs objets possédés*" />.
        </p>
      </SquareItem>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Il a vendu *ses* patins ; elle a vendu *ses* skis." />
      </p>
      <SquareItem>
        <p>
          On utilise <Rich text="*leur*" /> lorsqu&apos;il y a{" "}
          <Rich text="*plusieurs possesseurs*" /> (masculins ou féminins) et{" "}
          <Rich text="*un seul objet possédé*" />.
        </p>
      </SquareItem>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Guy et Anne vendent *leur* maison." />{" "}
        <span className="not-italic text-tb-ink">
          (Ils possèdent ensemble un seul objet.)
        </span>
      </p>
      <SquareItem>
        <p>
          On utilise <Rich text="*leurs*" /> lorsqu&apos;il y a{" "}
          <Rich text="*plusieurs possesseurs*" /> (masculins ou féminins) et{" "}
          <Rich text="*plusieurs objets possédés*" />.
        </p>
      </SquareItem>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Mes enfants ont cassé *leurs* jouets." />{" "}
        <span className="not-italic text-tb-ink">
          (Dans ce cas, les enfants possèdent plusieurs jouets.)
        </span>
      </p>

      <AttentionBox>
        <p>
          Lorsqu&apos;on parle de plusieurs possesseurs mais que chaque
          possesseur n&apos;a qu&apos;un seul objet, l&apos;anglais utilise
          souvent le pluriel pour le possédé car il envisage la somme des objets
          possédés. Le français, lui, utilise généralement le{" "}
          <Rich text="*singulier*" />, surtout si le sens du nom implique
          l&apos;idée de singulier.
        </p>
        <Gloss
          fr="Ils ont risqué *leur* vie."
          en="(Chaque personne n'a qu'une vie.) They risked their lives."
        />
        <Gloss
          fr="Ils fumaient *leur* pipe."
          en="(Chacun fume une pipe.) They were smoking their pipes."
        />
      </AttentionBox>
    </TextbookPage>
  );
}

function Page109() {
  return (
    <TextbookPage pageNumber={109}>
      <ExerciseBox title="B. Traduisez.">
        {exerciseB.map((item, i) => (
          <ExerciseItem key={item} n={i + 1}>
            {item}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="C. Complétez les phrases suivantes par l'adjectif possessif qui convient.">
        <ExerciseItem n={1}>
          Anne n&apos;a pas fini <Blank /> exercices.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Mes enfants ont vendu tous <Blank /> disques.
        </ExerciseItem>
        <ExerciseItem n={3}>
          J&apos;ai vendu <Blank /> auto hier.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Ils ont prêté <Blank /> voiture.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Jacques a perdu <Blank /> belle montre.
        </ExerciseItem>
      </ExerciseBox>

      <SectionBar title="III. Pronom possessif" />
      <Example centered text="Prête-moi *ton* stylo ; j'ai oublié *le mien*." />
      <Example centered text="Je prendrai *mon* auto ; prenez *la vôtre*." />

      <Subhead text="III. 1 Formes du pronom possessif" />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        <Rich text="*Le pronom possessif*" /> est toujours précédé de
        l&apos;article défini.
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Le mien* ; *la mienne* ; *les nôtres*, etc." />
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        Lorsque le pronom possessif est précédé de la préposition{" "}
        <Rich text="*à*" /> ou de la préposition <Rich text="*de*" />, il faut
        faire <Rich text="*la contraction*" /> de l&apos;article défini
        (au/aux ; du/des).
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Je n'ai pas encore écrit à mes parents mais j'ai écrit *aux siens*." />
      </p>
      <p className="pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="J'ai entendu parler *des tiens*." />
      </p>
    </TextbookPage>
  );
}

function Page110() {
  return (
    <TextbookPage pageNumber={110} pageNumberSide="left">
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        Pour trouver la forme du pronom qui convient, il faut tenir compte du{" "}
        <Rich text="*possesseur*" /> (<Ord n="1" kind="re" />,{" "}
        <Ord n="2" kind="e" /> ou <Ord n="3" kind="e" /> personne du singulier ou
        du pluriel) et du <Rich text="*possédé*" /> (le pronom remplace-t-il un
        nom masculin ou féminin ? un nom singulier ou pluriel ?), contrairement
        à l&apos;anglais où on ne tient compte que du possesseur : mine, yours,
        his/hers, theirs.
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="J'ai retrouvé mes lunettes de soleil mais *mon frère* (3e personne du singulier) n'a pas retrouvé *les siennes*." />{" "}
        <span className="not-italic text-tb-ink">
          (remplace un nom féminin pluriel)
        </span>
      </p>

      <AttentionBox>
        <p>
          Il ne faut pas oublier l&apos;accent circonflexe sur les pronoms de la{" "}
          <Ord n="1" kind="re" /> et de la <Ord n="2" kind="e" /> personnes du
          pluriel :
        </p>
        <p>– le nôtre, la nôtre, les nôtres ;</p>
        <p>– le vôtre, la vôtre, les vôtres.</p>
      </AttentionBox>

      <p className="mb-3 text-[15px] text-tb-ink">
        Voici un tableau des formes du pronom possessif.
      </p>
      <PronounTable />

      <ExerciseBox title="D. Remplacez les pointillés par le pronom possessif qui convient.">
        <ExerciseItem n={1}>
          J&apos;ai pris mes responsabilités ; prenez <Blank />.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Nous avons nos documents ; ont-ils <Blank /> ?
        </ExerciseItem>
        <ExerciseItem n={3}>
          On nous a indiqué notre place ; Éric n&apos;est pas content de{" "}
          <Blank />.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Vous avez fait vos devoirs mais nous n&apos;avons pas fini <Blank />.
        </ExerciseItem>
        <ExerciseItem n={5}>
          J&apos;ai téléphoné à mes parents ; et vous, avez-vous téléphoné{" "}
          <Blank /> ?
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page111() {
  return (
    <TextbookPage pageNumber={111}>
      <SectionBar title="IV. Emplois" />
      <Example centered text="Il a mal à la tête." />
      <Example centered text="Levez la main droite." />
      <Example centered text="Il s'est rasé la moustache." />
      <Example centered text="Voici un de mes amis." />

      <Subhead text="IV. 1 Adjectif possessif ou article défini" />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        <Rich text="*Quand on parle des parties du corps et des facultés mentales*" />{" "}
        (la mémoire, la conscience, etc.) et que l&apos;identité du possesseur
        est clairement indiquée par le sens de la phrase, on remplace très
        souvent l&apos;adjectif possessif par{" "}
        <Rich text="*l'article défini*" />.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Il a mal *à la* tête." />
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Fermez *la* bouche." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Elle a *la* conscience tranquille." />
      </p>
      <SquareItem>
        <p>On garde l&apos;adjectif possessif :</p>
      </SquareItem>
      <p className="mb-1 pl-8 text-[15px] text-tb-ink">
        – quand le rapport de possession pourrait être ambigu ;
      </p>
      <p className="mb-1 pl-8 text-[15px] text-tb-ink">
        – quand le nom est <Rich text="*sujet*" />.
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="*Sa* bouche est bien dessinée." />
      </p>
      <p className="mb-1 pl-8 text-[15px] text-tb-ink">
        – quand le nom, c.o.d. d&apos;un verbe autre que{" "}
        <Rich text="*avoir*" />, est accompagné d&apos;un adjectif qualificatif.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Elle a fermé *les* yeux." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Elle a fermé *ses* grands yeux noirs." />
      </p>
      <SquareItem>
        <p>
          Quand le nom est accompagné des adjectifs <Rich text="*droit*" /> et{" "}
          <Rich text="*gauche*" /> ou quand il est complément de l&apos;auxiliaire{" "}
          <Rich text="*avoir*" />, on utilise <Rich text="*l'article défini*" />.
        </p>
      </SquareItem>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Levez *la* main droite." />
      </p>
      <p className="mb-3 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Elle a *les* cheveux longs." />
      </p>

      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        <Rich text="*Pour indiquer une possession*" />, l&apos;anglais utilise un
        adjectif possessif, alors que le français préfère souvent utiliser un{" "}
        <Rich text="*pronom possessif*" /> (ou un{" "}
        <Rich text="*pronom réfléchi*" />) et <Rich text="*l'article défini*" />.
      </p>
      <Gloss fr="Il *s'est* coupé *le* doigt." en="He cut his finger." />
      <Gloss
        fr="On *lui* a rasé *la* moustache."
        en="He had his moustache shaved off."
      />
      <Gloss fr="Elle *s'est* cassé *la* jambe." en="She broke her leg." />
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="Nous *nous* lavons *les* dents trois fois par jour." />
      </p>
      <p className="mb-3 pl-4 text-[14.5px] text-tb-muted">
        We brush our teeth three times a day.
      </p>
      <SquareItem>
        <p>
          On utilise aussi cette construction s&apos;il peut y avoir un doute
          sur l&apos;identité du possesseur. Par exemple, dans la phrase : « Il
          a touché sa joue », on ne sait pas s&apos;il s&apos;agit de sa joue à
          lui ou de la joue de quelqu&apos;un d&apos;autre. Pour éviter
          l&apos;ambiguïté, on dira : « Il <Rich text="*s'est*" /> touché{" "}
          <Rich text="*la*" /> joue » (pronom réfléchi ; le sujet est aussi le
          possesseur) ou « Il <Rich text="*lui*" /> a touché{" "}
          <Rich text="*la*" /> joue » (le sujet et le possesseur ne sont pas la
          même personne).
        </p>
      </SquareItem>
    </TextbookPage>
  );
}

function Page112() {
  return (
    <TextbookPage pageNumber={112} pageNumberSide="left">
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">c. </span>
        Lorsqu&apos;il s&apos;agit de traduire une attitude ou un aspect
        vestimentaire, on utilise en français{" "}
        <Rich text="*l'article défini*" /> au lieu de l&apos;adjectif possessif,
        si l&apos;identité du possesseur est clairement indiquée par le sens
        général de la phrase (alors que l&apos;anglais utilise l&apos;adjectif
        possessif et la préposition <Rich text="*with*" />).
      </p>
      <Gloss
        fr="Il dort *la* bouche ouverte."
        en="He sleeps with his mouth open."
      />
      <p className="mb-3 text-[15px] italic text-tb-example">
        <Rich text="Elles étaient assises *les* bras croisés." />{" "}
        <span className="not-italic text-tb-muted">
          They were sitting with their arms crossed.
        </span>
      </p>

      <ExerciseBox title="E. Complétez par l'adjectif possessif ou par l'article défini.">
        <ExerciseItem n={1}>
          Mon fils s&apos;est cassé <Blank /> jambe en descendant
          l&apos;escalier.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Il la regardait de <Blank /> petits yeux effrontés.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Jacques a <Blank /> cheveux gris.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Il s&apos;est foulé <Blank /> cheville gauche.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Cet enfant a de la fièvre : <Blank /> yeux brillent.
        </ExerciseItem>
      </ExerciseBox>

      <Subhead text="IV. 2 Mise en valeur du possesseur" />
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        On peut utiliser l&apos;adjectif <Rich text="*propre*" /> (own).
      </p>
      <Gloss
        fr="J'ai *mon propre* matériel."
        en="I have my own equipment."
      />
      <p className="mb-3 text-[15px] italic text-tb-example">
        <Rich text="Je vous ai répété *ses propres* mots." />{" "}
        <span className="not-italic text-tb-muted">
          I repeated his own words.
        </span>
      </p>
      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        Souvent, on reprend l&apos;adjectif possessif par le{" "}
        <Rich text="*pronom personnel tonique*" /> précédé de la préposition à.
      </p>
      <p className="mb-1 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="J'ai *mon* matériel *à moi*." />
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Il a *ses* idées *à lui*." />
      </p>
      <Rule>Cette tournure permet notamment d&apos;éviter les ambiguïtés.</Rule>
      <Gloss
        fr="J'aime bien *sa* montre *à lui*, mais je n'aime pas *la sienne à elle*."
        en="I like his watch but I don't like hers."
      />

      <Subhead text="IV. 3 Adjectif possessif ou pronom en" />
      <Rule>
        On peut remplacer l&apos;adjectif possessif par <Rich text="*en*" /> +{" "}
        <Rich text="*l'article défini*" /> quand le possesseur est un nom de
        chose situé dans la proposition qui précède.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        <Rich text="Je viens dans ce parc parce que j'*en* apprécie *la* tranquillité." />
      </p>
      <p className="mb-3 pl-4 text-[14.5px] text-tb-muted">
        (la tranquillité du parc) I come to this park because I like its
        tranquility.
      </p>

      <Subhead text="IV. 4 Problèmes de traduction" />
      <p className="text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">a. </span>
        <Rich text="*La construction anglaise*" /> « a friend of mine » ne peut
        pas être traduite littéralement. On traduira :
      </p>
    </TextbookPage>
  );
}

function Page113() {
  return (
    <TextbookPage pageNumber={113}>
      <p className="mb-1 text-[15px] text-tb-ink">
        – soit par : <Rich text="*un de mes* amis/*une de mes* amies" />.{" "}
        (L&apos;adjectif possessif est alors au pluriel.)
      </p>
      <p className="mb-2 text-[15px] text-tb-ink">
        – soit par : un(e) ami(e) <Rich text="*à moi*" />.
      </p>
      <p className="mb-3 text-[15px] text-tb-ink">
        A neighbour of ours.{" "}
        <Rich text="*Un de nos* voisins/*un* voisin *à nous*." />
      </p>

      <AttentionBox>
        <p>
          Après une conjonction de coordination, il faut, en général, répéter le
          possessif.
        </p>
        <p>
          His brother and sister.{" "}
          <span className="italic text-tb-example">
            <Rich text="*Son* frère et *sa* sœur." />
          </span>
        </p>
      </AttentionBox>

      <p className="mb-2 text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-semibold">b. </span>
        <Rich text="*La construction anglaise*" /> « This book is mine » ne peut
        pas être traduite littéralement. On traduira :
      </p>
      <p className="mb-1 text-[15px] leading-[1.65] text-tb-ink">
        – soit par le verbe <Rich text="*être*" /> suivi de la préposition{" "}
        <Rich text="*à*" /> et du <Rich text="*pronom personnel*" /> (forme
        tonique).
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Ce livre est *à moi*." />
      </p>
      <p className="mb-1 text-[15px] leading-[1.65] text-tb-ink">
        – soit par le verbe <Rich text="*être*" /> suivi du{" "}
        <Rich text="*pronom possessif*" />.
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Ce livre est *le mien*." />
      </p>
      <p className="mb-1 text-[15px] leading-[1.65] text-tb-ink">
        – soit par le verbe <Rich text="*appartenir*" /> précédé du pronom
        personnel objet indirect (forme non tonique).
      </p>
      <p className="mb-2 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="Ce livre *m'appartient*." />
      </p>
      <p className="mb-1 text-[15px] leading-[1.65] text-tb-ink">
        On peut aussi utiliser la formule c&apos;est/ce sont et{" "}
        <Rich text="*l'adjectif possessif*" />.
      </p>
      <p className="mb-4 pl-5 text-[14.5px] italic text-tb-example">
        <Rich text="C'est *mon* livre." />
      </p>

      <ExerciseBox title="F. Dites d'une autre façon.">
        <div className="grid grid-cols-2 gap-x-6">
          <div>
            <ExerciseItem n={1}>Ce document est à moi.</ExerciseItem>
            <ExerciseItem n={2}>Ce foulard vous appartient.</ExerciseItem>
            <ExerciseItem n={3}>Ces gants sont-ils à vous ?</ExerciseItem>
          </div>
          <div>
            <ExerciseItem n={4}>Ce sont nos photocopies.</ExerciseItem>
            <ExerciseItem n={5}>Cette montre est la mienne.</ExerciseItem>
          </div>
        </div>
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

function Page114() {
  return (
    <TextbookPage pageNumber={114} pageNumberSide="left">
      <ExerciseBox title="H. Remplacez les pointillés par l'adjectif ou le pronom possessif, selon les cas.">
        <ExerciseItem n={1}>
          J&apos;ai acheté <Blank /> robe dans un grand magasin ; Alice a acheté{" "}
          <Blank /> dans une boutique.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Ils ont appris <Blank /> leçons ; savez-vous <Blank /> ?
        </ExerciseItem>
        <ExerciseItem n={3}>
          Quand passez-vous <Blank /> examen de français ? Marc passe <Blank />{" "}
          le 9 mai.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Didier et Nicole ont vendu <Blank /> maison mais Gérald et Geneviève
          ne veulent pas vendre <Blank />.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Avez-vous vu <Blank /> auto ? Je l&apos;ai achetée parce que mon frère
          ne voulait plus me prêter <Blank />.
        </ExerciseItem>
        <ExerciseItem n={6}>
          Quels sont <Blank /> projets pour les grandes vacances ? Christèle ne
          m&apos;a pas dit quels étaient <Blank />.
        </ExerciseItem>
        <ExerciseItem n={7}>
          Nous aimons beaucoup <Blank /> appartement. Et vous, comment
          trouvez-vous <Blank /> ?
        </ExerciseItem>
        <ExerciseItem n={8}>
          Est-ce que tu as fini <Blank /> composition ? Moi, je n&apos;ai pas
          encore fini <Blank />.
        </ExerciseItem>
        <ExerciseItem n={9}>
          Alice est contente ; <Blank /> parents, <Blank /> frères et <Blank />{" "}
          sœur arrivent demain.
        </ExerciseItem>
        <ExerciseItem n={10}>
          Les enfants ont invité <Blank /> amis à jouer dans <Blank /> chambre.
        </ExerciseItem>
      </ExerciseBox>

      <ExerciseBox title="I. Inventez des phrases sur le modèle : Marc …… est coupé …… doigt.">
        <ExerciseItem n={1}>Annie – laver – mains.</ExerciseItem>
        <ExerciseItem n={2}>Le coureur – tordre – cheville.</ExerciseItem>
        <ExerciseItem n={3}>La petite fille – couper – cheveux.</ExerciseItem>
        <ExerciseItem n={4}>Le skieur – casser – jambe.</ExerciseItem>
        <ExerciseItem n={5}>Robert – fouler – poignet.</ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page115() {
  return (
    <TextbookPage pageNumber={115}>
      <ExerciseBox title="J. Complétez par « ses », « leur » ou « leurs ».">
        <ExerciseItem n={1}>
          Mes amis ont passé <Blank /> vacances en Colombie britannique.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Hélène a oublié <Blank /> lunettes.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Gérard a prêté <Blank /> patins à Pierre.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Ils ont raté <Blank /> avion.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Les touristes ont laissé <Blank /> bagages à la consigne.
        </ExerciseItem>
        <ExerciseItem n={6}>
          Les Dupont doivent rejoindre <Blank /> fille en Europe.
        </ExerciseItem>
        <ExerciseItem n={7}>
          Jean-Claude a reçu <Blank /> amis australiens.
        </ExerciseItem>
        <ExerciseItem n={8}>
          Ils ont envoyé <Blank /> enfants en colonie de vacances.
        </ExerciseItem>
        <ExerciseItem n={9}>
          Elle a fini <Blank /> recherches pour sa thèse.
        </ExerciseItem>
        <ExerciseItem n={10}>
          On a besoin de <Blank /> papiers quand on voyage.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter13() {
  return (
    <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">
      <Page106 />
      <Page107 />
      <Page108 />
      <Page109 />
      <Page110 />
      <Page111 />
      <Page112 />
      <Page113 />
      <Page114 />
      <Page115 />
    </div>
  );
}
