import {
  AttentionBox,
  Blank,
  ChapterHeader,
  Example,
  ExerciseBox,
  ExerciseItem,
  Rule,
  SectionBar,
  Subhead,
  TealHead,
  Term,
  TextbookPage,
} from "@/components/textbook";
import {
  chapter4,
  exerciseA,
  exerciseB,
  exerciseD,
  exerciseE,
  exerciseG,
  genderMeaning,
  overview,
  spellingPairs,
} from "@/content/chapters/04";

function OverviewBlock() {
  return (
    <div className="mx-auto max-w-[32rem] space-y-4 text-center">
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
              {ex}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

function Choice({ options }: { options: string }) {
  return (
    <span className="font-medium text-tb-cyan">[{options}]</span>
  );
}

function Page31() {
  return (
    <TextbookPage pageNumber={31}>
      <ChapterHeader number={chapter4.number} title={chapter4.title} />
      <OverviewBlock />

      <SectionBar title="I. Formation et emploi du pluriel" />
      <div className="mb-4 space-y-1 rounded-md bg-tb-exercise px-4 py-3">
        <Example text="Mettez des *pneus neufs* à votre voiture." />
        <Example text="Nous avons assisté aux derniers *récitals* de cet artiste." />
        <Example text="Attention ! *Travaux* !" />
      </div>

      <TealHead>I. a Formation du pluriel</TealHead>
      <Rule>
        <span className="font-semibold">a. </span>
        En général, on forme le pluriel en ajoutant <Term>-s</Term>.
      </Rule>
      <p className="mb-3 text-[15px] italic text-tb-example">
        un livre → des livres ; la maison → les maisons
      </p>

      <Rule>
        <span className="font-semibold">b. </span>
        Les noms en <Term>-eu</Term> et <Term>-au</Term> prennent{" "}
        <Term>-eux</Term> et <Term>-aux</Term>, sauf <em>pneu</em> (des pneus)
        et <em>bleu</em> (des bleus).
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        J&apos;ai reçu la lettre de mes neveux.
      </p>
      <p className="mb-1 text-[15px] italic text-tb-example">
        J&apos;ai mis des pneus neufs à ma voiture.
      </p>
      <p className="mb-3 text-[15px] italic text-tb-example">
        Je me suis fait des bleus au bras.
      </p>

      <Rule>
        <span className="font-semibold">c. </span>
        Les noms en <Term>-al</Term> font leur pluriel en <Term>-aux</Term>,
        sauf <em>bal, carnaval, festival, récital</em> et <em>régal</em>.{" "}
        <em>Idéal</em> peut faire <em>idéals</em> ou <em>idéaux</em>.
      </Rule>
      <p className="mb-3 text-[15px] italic text-tb-example">
        un éditorial → des éditoriaux ; un cheval → des chevaux ; un bal → des
        bals ; un récital → des récitals
      </p>

      <Rule>
        <span className="font-semibold">d. </span>
        Les noms en <Term>-ail</Term> font généralement leur pluriel en{" "}
        <Term>-ails</Term>. Mais quelques mots comme <em>travail</em> et{" "}
        <em>vitrail</em> font leur pluriel en <Term>-aux</Term>.
      </Rule>
      <p className="text-[15px] italic text-tb-example">
        un chandail → des chandails ; un détail → des détails ; un travail → des
        travaux ; un vitrail → des vitraux
      </p>
    </TextbookPage>
  );
}

function Page32() {
  return (
    <TextbookPage pageNumber={32} pageNumberSide="left">
      <Rule>
        <span className="font-semibold">e. </span>
        Les noms en <Term>-ou</Term> ajoutent <Term>-ous</Term>, sauf :{" "}
        <em>bijou, caillou, chou, genou, hibou, joujou, pou</em>, qui prennent
        un <Term>-x</Term>.
      </Rule>
      <p className="mb-3 text-[15px] italic text-tb-example">
        Elle aime porter ses bijoux.
      </p>

      <Rule>
        <span className="font-semibold">f. </span>
        Contrairement à l&apos;anglais, les noms propres de personnes ne
        prennent pas de marque de pluriel.
      </Rule>
      <p className="mb-3 text-[15px] italic text-tb-example">
        The Smiths visited the Watsons. → Les Dupont ont rendu visite aux
        Durand.
      </p>

      <Rule>
        <span className="font-semibold">g. </span>
        Dans les noms composés, sont invariables : les verbes, adverbes,
        prépositions et pronoms ; les noms compléments du premier nom.
      </Rule>
      <p className="mb-3 text-[15px] italic text-tb-example">
        des timbres-poste ; des chefs-d&apos;œuvre
      </p>

      <Rule>
        <span className="font-semibold">h. </span>
        Dans un nom composé formé d&apos;un verbe et d&apos;un nom complément
        d&apos;objet, le nom est au singulier ou au pluriel selon le sens.
      </Rule>
      <p className="mb-3 text-[15px] italic text-tb-example">
        des gratte-ciel ; des casse-noisettes.
      </p>

      <Rule>
        <span className="font-semibold">i. </span>
        Notez que <em>monsieur, madame, mademoiselle</em> deviennent{" "}
        <em>messieurs, mesdames, mesdemoiselles</em> au pluriel.
      </Rule>

      <ExerciseBox title="A. Mettez les noms suivants au pluriel.">
        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
          {exerciseA.map((noun, i) => (
            <ExerciseItem key={noun} n={i + 1}>
              {noun}
            </ExerciseItem>
          ))}
        </div>
      </ExerciseBox>

      <Subhead text="I. 2 Emploi du pluriel" />
      <Rule>
        <span className="font-semibold">a. </span>
        Certains noms singuliers en anglais correspondent à des noms pluriels en
        français.
      </Rule>
      <ul className="mb-2 columns-2 text-[14.5px] italic text-tb-example">
        <li>furniture → les meubles</li>
        <li>hair → les cheveux</li>
        <li>applause → les applaudissements</li>
        <li>fruit → les fruits</li>
        <li>progress → les progrès</li>
        <li>information → les renseignements</li>
      </ul>
      <p className="mb-2 text-[15px] italic text-tb-example">
        You are making progress. → Vous faites des progrès.
      </p>
      <Rule>
        Notez aussi : to have homework = avoir des devoirs ; to take action =
        prendre des mesures ; « every Sunday », « every Monday » = tous les
        dimanches, tous les lundis.
      </Rule>
    </TextbookPage>
  );
}

function Page33() {
  return (
    <TextbookPage pageNumber={33}>
      <Rule>
        <span className="font-semibold">b. </span>
        Inversement, des noms pluriels en anglais peuvent correspondre à des
        noms singuliers en français.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        trousers = un pantalon (mais aussi des pantalons)
      </p>
      <p className="mb-1 text-[15px] italic text-tb-example">
        to eat grapes = manger du raisin
      </p>
      <p className="mb-3 text-[15px] italic text-tb-example">
        on Saturdays = le samedi{" "}
        <span className="not-italic text-tb-muted">
          (idée de répétition ; voir chapitre 1, II. 1, f, p. 17)
        </span>
      </p>

      <Rule>
        <span className="font-semibold">c. </span>
        Contrairement à l&apos;anglais, lorsque plusieurs personnes possèdent
        chacune un seul objet, on le considère individuellement et on le laisse
        au singulier.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        The men were smoking their pipes. → Les hommes fumaient leur pipe.
      </p>
      <p className="mb-3 text-[15px] italic text-tb-example">
        They worked very hard during their lives. → Ils ont travaillé très dur
        pendant leur vie.
      </p>

      <Rule>
        <span className="font-semibold">d. </span>
        Certains noms, dits <strong>collectifs</strong>, sont au singulier mais
        représentent plusieurs individus ou choses :{" "}
        <em>la foule ; le gouvernement ; le bétail…</em>
      </Rule>
      <AttentionBox>
        <p>
          Si un nom collectif est sujet, le verbe s&apos;accorde au singulier.
          On emploie des pronoms et des adjectifs au singulier.
        </p>
        <p className="italic text-tb-example">
          The government decided to uphold its position; they refuse to repeal
          the law. → Le gouvernement a décidé de maintenir sa position ; il
          refuse d&apos;abroger la loi.
        </p>
        <p className="italic text-tb-example">
          The crowd moved down the street; they were shouting their anger. → La
          foule avançait dans la rue ; elle hurlait sa colère.
        </p>
      </AttentionBox>

      <Rule>
        <span className="font-semibold">e. </span>
        Certains noms français sont <strong>toujours au pluriel</strong> :{" "}
        <em>
          les mathématiques, les ténèbres, les fiançailles, les funérailles, les
          environs, les vacances, les vivres
        </em>
        , et le mot <em>dépens</em> (dans <em>à mes dépens / à vos dépens</em>).
      </Rule>

      <Subhead text="I. 3 Pièges à éviter" />
      <Rule>
        <span className="font-semibold">a. </span>
        <Term>Gens</Term> ne peut pas être précédé d&apos;un nombre ni de
        l&apos;adjectif <em>quelques</em>. On remplace alors <em>gens</em>{" "}
        (toujours pluriel) par <em>personnes</em>.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        There were some people outside the door. → Il y avait des gens devant
        la porte.
      </p>
      <p className="mb-3 text-[15px] italic text-tb-example">
        There were ten people outside the door. → Il y avait dix personnes
        devant la porte.
      </p>

      <Rule>
        <span className="font-semibold">b. </span>
        <Term>Argent</Term>, au sens de « money », est toujours au singulier.
      </Rule>
      <p className="mb-1 text-[15px] italic text-tb-example">
        She gave me some money. → Elle m&apos;a donné de l&apos;argent.
      </p>
      <p className="text-[15px] italic text-tb-example">
        Money cannot buy happiness. → L&apos;argent ne fait pas le bonheur.
      </p>
    </TextbookPage>
  );
}

function Page34() {
  return (
    <TextbookPage pageNumber={34} pageNumberSide="left">
      <Rule>
        <em>Vacances</em> (holidays) est toujours au pluriel.{" "}
        <em>La police</em> désigne l&apos;institution.
      </Rule>

      <ExerciseBox title="B. Traduisez.">
        {exerciseB.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <SectionBar title="II. Genre des noms" />
      <Subhead text="II. 1 Genre et sexe" />
      <Rule>
        <span className="font-semibold">a. </span>
        Certains noms, en français, sont toujours masculins, même s&apos;ils se
        réfèrent à une personne de sexe féminin.
      </Rule>
      <p className="mb-2 text-[15px] italic text-tb-example">
        un bébé ; l&apos;assassin
      </p>
      <ul className="grid grid-cols-2 gap-x-6 text-[14.5px] italic text-tb-example sm:grid-cols-4">
        <li>un adversaire</li>
        <li>un agent</li>
        <li>un ange</li>
        <li>un tyran</li>
        <li>un guide</li>
        <li>un modèle</li>
        <li>un témoin</li>
        <li>un vainqueur</li>
      </ul>
    </TextbookPage>
  );
}

function Page35() {
  return (
    <TextbookPage pageNumber={35}>
      <Rule>
        <span className="font-semibold">b. </span>
        Inversement, certains noms sont toujours féminins, même s&apos;ils se
        réfèrent à une personne de sexe masculin :{" "}
        <em>
          une personne, une star, une victime, une sentinelle, une vedette
        </em>
        .
      </Rule>

      <Rule>
        <span className="font-semibold">c. </span>
        Certains noms ont la même forme mais deux genres, pour indiquer si l&apos;on
        parle d&apos;une femme ou d&apos;un homme.
      </Rule>
      <p className="mb-4 text-[15px] italic text-tb-example">
        un automobiliste / une automobiliste ; un collègue / une collègue
      </p>

      <Subhead text="II. 2 Genre et sens du nom" />
      <Rule>
        Certains noms changent de sens selon le genre.{" "}
        <em>Le poste</em> (the job/position) ≠ <em>la poste</em> (the post
        office).
      </Rule>
      <div className="mb-4 grid grid-cols-1 gap-1 text-[14.5px] sm:grid-cols-2">
        {genderMeaning.map(([m, mEn, f, fEn]) => (
          <p key={m} className="italic text-tb-example">
            {m}{" "}
            <span className="not-italic text-tb-muted">({mEn})</span> ≠ {f}{" "}
            <span className="not-italic text-tb-muted">({fEn})</span>
          </p>
        ))}
      </div>

      <Subhead text="II. 3 Les noms de pays" />
      <Rule>
        <span className="font-semibold">a. </span>
        Les noms de pays terminés par <Term>-e</Term> sont féminins (la
        France). Exceptions : <em>le Canada, le Québec, le Venezuela</em>.
        Autres masculins en -e : <em>le Mexique, le Zaïre, le Maine, le
        Mozambique</em>. <em>Israël</em> et <em>Oman</em> n&apos;ont pas
        d&apos;article.
      </Rule>
      <Rule>
        <span className="font-semibold">b. </span>
        Les noms de villes terminés par un <em>-e</em> muet tendent à être
        féminins (<em>La Rome</em>) ; les autres sont masculins (
        <em>Le Berlin</em>).
      </Rule>
    </TextbookPage>
  );
}

function Page36() {
  return (
    <TextbookPage pageNumber={36} pageNumberSide="left">
      <TealHead>II. 4 Particularités</TealHead>
      <Rule>
        <span className="font-semibold">c. Les noms d&apos;îles. </span>
        Masculin : généralement sans article (<em>Madagascar, Sumatra,
        Bornéo…</em>). Féminin : souvent en <Term>-e</Term> avec article (
        <em>La Corse, la Sicile, la Nouvelle-Zélande, l&apos;Irlande, la
        Grande-Bretagne</em>).
      </Rule>
      <Rule>
        <span className="font-semibold">a. Chose et personne. </span>
        Comme noms, ils sont féminins :{" "}
        <em>une belle chose ; une personne intéressante</em>. Comme pronoms
        indéfinis (<em>quelque chose</em> et <em>personne</em>), ils sont
        masculins :{" "}
        <em>J&apos;ai vu quelque chose de beau. Personne n&apos;est blessé.</em>
      </Rule>
      <Rule>
        <span className="font-semibold">b. Gens. </span>
        En français moderne, généralement masculin pluriel :{" "}
        <em>Tous les gens sont rassemblés. J&apos;ai rencontré des gens
        intéressants.</em> Exception : précédé immédiatement d&apos;un adjectif
        qualificatif, il devient féminin :{" "}
        <em>Je respecte toutes ces bonnes gens.</em>
      </Rule>

      <ExerciseBox title="C. Complétez par l'article défini ou indéfini.">
        <ExerciseItem n={1}>
          <Blank /> Beauce est une région fertile.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Ils ont hissé <Blank /> voile du bateau.
        </ExerciseItem>
        <ExerciseItem n={3}>
          <Blank /> Montréal des années 50.
        </ExerciseItem>
        <ExerciseItem n={4}>
          <Blank /> Mexique est un pays touristique.
        </ExerciseItem>
        <ExerciseItem n={5}>
          As-tu lu <Blank /> critique de ce film ?
        </ExerciseItem>
        <ExerciseItem n={6}>
          Pour faire marcher cet appareil, il faut lire <Blank /> mode
          d&apos;emploi.
        </ExerciseItem>
        <ExerciseItem n={7}>
          <Blank /> Sardaigne est au sud de <Blank /> Corse.
        </ExerciseItem>
        <ExerciseItem n={8}>
          J&apos;ai cassé <Blank /> manche de la casserole.
        </ExerciseItem>
        <ExerciseItem n={9}>
          Il occupe <Blank /> poste de diplomate à Rome.
        </ExerciseItem>
        <ExerciseItem n={10}>
          Il s&apos;était couché tellement tard qu&apos;il a dû faire{" "}
          <Blank /> somme après le déjeuner.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page37() {
  return (
    <TextbookPage pageNumber={37}>
      <SectionBar title="III. Faux amis et confusions" />
      <Example
        centered
        text="Le comité de littérature se réunira dans une autre salle."
      />

      <Subhead text="III. 1 Orthographe" />
      <Rule>
        Certains noms français ressemblent à des mots anglais mais
        s&apos;écrivent autrement.
      </Rule>
      <div className="mb-4 grid grid-cols-1 gap-1 text-[14.5px] sm:grid-cols-2">
        {spellingPairs.map(([fr1, en1, fr2, en2]) => (
          <p key={fr1} className="italic text-tb-example">
            {fr1}{" "}
            <span className="not-italic text-tb-muted">({en1})</span>
            {"  "}
            {fr2}{" "}
            <span className="not-italic text-tb-muted">({en2})</span>
          </p>
        ))}
      </div>

      <Subhead text="III. 2 Sens" />
      <Rule>Ne confondez pas :</Rule>
      <Rule>
        <span className="font-semibold">a. Nuit et soirée. </span>
        « J&apos;ai passé la soirée avec lui » n&apos;est pas « J&apos;ai passé
        la nuit avec lui ». <em>La nuit</em> ≈ 23 h jusqu&apos;au lever du
        soleil ; <em>la soirée</em> ≈ 19 h à 23 h / minuit.
      </Rule>
      <Rule>
        <span className="font-semibold">b. Chambre et pièce. </span>
        <em>Une chambre</em> is a bedroom ; <em>une pièce</em> is a general
        room.
      </Rule>
      <Rule>
        <span className="font-semibold">c. Librairie et bibliothèque. </span>
        <em>Une librairie</em> is a bookstore ; <em>une bibliothèque</em> is a
        library.
      </Rule>
      <Rule>
        <span className="font-semibold">d. Injure et blessure. </span>
        <em>Une injure</em> is an insulting word ; <em>une blessure</em> is a
        physical wound or injury.
      </Rule>
      <Rule>
        <span className="font-semibold">e. Position, poste et emploi. </span>
        <em>Position</em> refers to an opinion or a physical location (e.g.{" "}
        <em>position du bateau</em>), never to a job (<em>poste</em> or{" "}
        <em>emploi</em>).
      </Rule>
    </TextbookPage>
  );
}

function Page38() {
  return (
    <TextbookPage pageNumber={38} pageNumberSide="left">
      <Rule>
        <span className="font-semibold">f. Place. </span>
        Un poste / un emploi ; un espace public (square) ; un endroit désigné.
      </Rule>
      <Rule>
        <span className="font-semibold">g. Caractère et personnage. </span>
        <em>Le caractère</em> = temperament ; <em>un personnage</em> = a
        character in a book or play.
      </Rule>
      <Rule>
        <span className="font-semibold">h. Humeur et humour. </span>
        <em>Humeur</em> = mood ; <em>humour</em> = sense of humor.
      </Rule>
      <Rule>
        <span className="font-semibold">i. Monnaie et argent. </span>
        <em>L&apos;argent</em> = money in general ; <em>la monnaie</em> =
        change / coins.
      </Rule>

      <ExerciseBox title="D. Traduisez.">
        {exerciseD.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="E. Traduisez.">
        {exerciseE.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page39() {
  return (
    <TextbookPage pageNumber={39}>
      <ExerciseBox title="F. Dans les phrases suivantes, mettez les mots au genre qui convient.">
        <ExerciseItem n={1}>
          Je suis fatigué ; je vais faire <Choice options="un/une" /> somme.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Le vent se lève ; les marins hissent <Choice options="le/la" /> voile.
        </ExerciseItem>
        <ExerciseItem n={3}>
          J&apos;ai lu <Choice options="un/une" /> critique très{" "}
          <Choice options="positif/positive" /> de ce livre.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Il a un gros trou à <Choice options="son/sa" /> manche.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Je ne peux pas me servir de cet appareil ; j&apos;ai perdu{" "}
          <Choice options="le/la" /> mode d&apos;emploi.
        </ExerciseItem>
        <ExerciseItem n={6}>
          Quand je fais <Choice options="le/la" /> somme de tout ce que j&apos;ai
          acheté à Noël, je suis effaré !
        </ExerciseItem>
        <ExerciseItem n={7}>
          Il faut que j&apos;aille <Choice options="au/à la" /> poste porter ce
          paquet.
        </ExerciseItem>
        <ExerciseItem n={8}>
          Il a obtenu <Choice options="un/une" /> très{" "}
          <Choice options="bon/bonne" /> poste à l&apos;ambassade.
        </ExerciseItem>
        <ExerciseItem n={9}>
          J&apos;aimerais bien faire <Choice options="le/la" /> tour de la
          ville.
        </ExerciseItem>
        <ExerciseItem n={10}>
          La mariée avait <Choice options="un/une" />{" "}
          <Choice options="long/longue" /> voile.
        </ExerciseItem>
        <ExerciseItem n={11}>
          <Choice options="Le/La" /> manche de la casserole était{" "}
          <Choice options="brûlant/brûlante" />.
        </ExerciseItem>
        <ExerciseItem n={12}>
          Ce n&apos;est plus <Choice options="le/la" /> mode des jupes longues.
        </ExerciseItem>
        <ExerciseItem n={13}>
          J&apos;ai acheté <Choice options="un/une" /> livre de beurre.
        </ExerciseItem>
        <ExerciseItem n={14}>
          Sa petite sœur était <Choice options="un/une" /> bébé adorable.
        </ExerciseItem>
        <ExerciseItem n={15}>
          Jacques lui a apporté <Choice options="un/une" /> aide{" "}
          <Choice options="précieux/précieuse" />.
        </ExerciseItem>
      </ExerciseBox>

      <ExerciseBox title="G. Traduisez.">
        {exerciseG.map((sentence, i) => (
          <ExerciseItem key={sentence} n={i + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <ExerciseBox title="H. Mettez au pluriel les noms soulignés.">
        <ExerciseItem n={1}>
          J&apos;ai fini mon <u>travail</u>.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Le <u>bureau</u> sera fermé à 5 heures.
        </ExerciseItem>
        <ExerciseItem n={3}>
          L&apos;<u>enjeu</u> est important.
        </ExerciseItem>
        <ExerciseItem n={4}>
          J&apos;aime le petit <u>bal</u> du samedi soir.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Son <u>bijou</u> est faux.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page40() {
  return (
    <TextbookPage pageNumber={40} pageNumberSide="left">
      <ExerciseBox title='I. Complétez les phrases suivantes (en vous méfiant des « faux amis » signalés en III. 2).'>
        <ExerciseItem n={1}>
          Tais-toi ! Je suis de mauvaise <Blank width="6rem" />.
        </ExerciseItem>
        <ExerciseItem n={2}>
          Nous avons passé une agréable <Blank width="6rem" /> chez des amis.
        </ExerciseItem>
        <ExerciseItem n={3}>
          Il y a trois <Blank width="6rem" /> dans cet appartement.
        </ExerciseItem>
        <ExerciseItem n={4}>
          Je vais à la <Blank width="6rem" /> emprunter un roman.
        </ExerciseItem>
        <ExerciseItem n={5}>
          Je n&apos;ai pas assez d&apos;
          <Blank width="6rem" /> pour acheter un ordinateur.
        </ExerciseItem>
        <ExerciseItem n={6}>
          Le commerçant m&apos;a rendu la <Blank width="6rem" />.
        </ExerciseItem>
        <ExerciseItem n={7}>
          Hamlet est un <Blank width="6rem" /> célèbre de Shakespeare.
        </ExerciseItem>
        <ExerciseItem n={8}>
          Elle a un <Blank width="6rem" /> difficile ; elle se fâche facilement.
        </ExerciseItem>
        <ExerciseItem n={9}>
          Cette comédie a beaucoup d&apos;
          <Blank width="6rem" />.
        </ExerciseItem>
        <ExerciseItem n={10}>
          Le blessé souffrait d&apos;une grave <Blank width="6rem" />.
        </ExerciseItem>
        <ExerciseItem n={11}>
          Ces <Blank width="6rem" /> l&apos;ont profondément offensé.
        </ExerciseItem>
        <ExerciseItem n={12}>
          Rendez-vous sur la <Blank width="6rem" /> du village.
        </ExerciseItem>
        <ExerciseItem n={13}>
          Quelle est votre <Blank width="6rem" /> sur cette question ?
        </ExerciseItem>
        <ExerciseItem n={14}>
          J&apos;ai acheté ce livre dans une <Blank width="6rem" /> du quartier.
        </ExerciseItem>
        <ExerciseItem n={15}>
          Il est resté longtemps au chômage mais il vient de trouver un bon{" "}
          <Blank width="6rem" />.
        </ExerciseItem>
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter4() {
  return (
    <div className="space-y-6 py-8 sm:space-y-8 sm:py-12">
      <Page31 />
      <Page32 />
      <Page33 />
      <Page34 />
      <Page35 />
      <Page36 />
      <Page37 />
      <Page38 />
      <Page39 />
      <Page40 />
    </div>
  );
}
