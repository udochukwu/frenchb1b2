import {
  AttentionBox,
  ChapterHeader,
  CrossRef,
  Example,
  ExerciseBox,
  ExerciseItem,
  Highlight,
  Nb,
  Rich,
  Rule,
  SectionBar,
  Subhead,
  TextbookPage,
} from "@/components/textbook";
import {
  chapter20,
  exerciseA,
  exerciseB,
  exerciseC,
  exerciseD,
  overview,
} from "@/content/chapters/20";
import type { ReactNode } from "react";

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

function Point({ label, children }: { label: string; children?: ReactNode }) {
  return (
    <div className="mt-3">
      <p className="text-[15px] leading-[1.65] text-tb-ink">
        <span className="font-bold text-tb-teal">{label}</span>
        {children ? <> {children}</> : null}
      </p>
    </div>
  );
}

function Page155() {
  return (
    <TextbookPage pageNumber={155}>
      <ChapterHeader number={chapter20.number} title={chapter20.title} />
      <OverviewBlock />
      <SectionBar title="I. Construction et sens" />
      <Example text="De quoi s'agit-il ?" centered />
      <Example text="Nous nous sommes approchés de lui." centered />
      <Example text="J'ai entendu parler de ce restaurant." centered />
      <Example text="J'ai entendu dire qu'il viendrait." centered />
      <Example text="Vous pouvez vous joindre à nous." centered />
      <Example text="Je pense *à* toi ; tu me manques beaucoup." centered />
      <Rule>Notez bien la construction et le sens des expressions et verbes suivants :</Rule>

      <Subhead text="I. 1 Agir" />
      <Point label="a. Agir :">exercer une action, se comporter (to act).</Point>
      <Gloss fr="Ils ont *agi* avec rapidité." en="They acted quickly." />
      <Gloss fr="Tu as *agi* avec prudence." en="You acted cautiously." />
      <Point label="b. Il s'agit de :">
        le verbe <em>agir</em>, à la forme pronominale, est impersonnel, c&apos;est-à-dire que le sujet, qui est toujours <em>il</em>, ne peut pas être remplacé par un nom.
      </Point>
      <Gloss fr="Il s'agit *d'*une épidémie." en="It's an epidemic." />
      <Gloss fr="Il s'agit *d'*agir vite." en="It's important to act quickly." />

      <AttentionBox>
        <p>
          Pour traduire <em>The poem (story, play, etc.) is about the love between a king and a queen</em>, on ne peut pas dire : « Le poème (l&apos;histoire, la pièce, etc.) s&apos;agit de l&apos;amour d&apos;un roi et d&apos;une reine. »
        </p>
        <p>
          On dira : <em>Il s&apos;agit, dans ce poème, de l&apos;amour d&apos;un roi et d&apos;une reine.</em>
        </p>
        <p>Ou encore :</p>
        <Example text="Le poème a pour sujet l'amour d'un roi et d'une reine." />
        <Example text="Le poème traite de (parle de) l'amour d'un roi et d'une reine." />
      </AttentionBox>
    </TextbookPage>
  );
}

function Page156() {
  return (
    <TextbookPage pageNumber={156} pageNumberSide="left">
      <Subhead text="I. 2 Approcher" />
      <Point label="a. Approcher (de) (to get closer)">
        signifie devenir plus proche ou se rapprocher d&apos;un endroit, d&apos;un but, d&apos;un objectif. (Parfois le verbe s&apos;utilise sans complément.)
      </Point>
      <Gloss fr="Nous approchons *de* la ville." en="We are getting closer to the town." />
      <Gloss fr="Ne vous découragez pas : nous approchons." en="Don't despair: we are getting closer." />
      <Point label="b. Approcher quelque chose (to bring something closer)">
        signifie déplacer un objet pour le rendre plus proche (to bring near).
      </Point>
      <Gloss fr="Approchez les chaises." en="Bring the chairs closer. (Draw up the chairs.)" />
      <Point label="c. S'approcher de quelque chose/de quelqu'un (to approach something/someone)">
        signifie devenir plus proche.
      </Point>
      <Gloss fr="Elle s'approcha *de* la voiture." en="She approached the car." />
      <Gloss fr="L'inconnu s'approcha *de* la vendeuse." en="The stranger approached the saleswoman." />
      <Point label="d.">
        <em>Approcher</em> se construit avec un complément d&apos;objet direct de personne (approcher quelqu&apos;un) seulement dans le sens de contacter quelqu&apos;un, être en communication avec quelqu&apos;un (emploi assez rare).
      </Point>
      <Gloss
        fr="Je l'ai approché pour connaître son opinion."
        en="I approached him for his opinion/to get his opinion."
      />

      <Subhead text="I. 3 Convenir" />
      <Point label="a. Convenir à (to suit)">
        signifie être adapté aux besoins, aux goûts de quelqu&apos;un.
      </Point>
      <Example text="Cette heure de rendez-vous me convient." />
      <p className="mb-1 text-[14.5px] text-tb-muted">
        That meeting time suits me (is fine for me).
      </p>
      <Point label="b. Convenir de + infinitif ou nom (to agree)">
        signifie « se mettre d&apos;accord » (<em>convenir</em>, dans ce sens, se construit avec l&apos;auxiliaire <em>être</em>).
      </Point>
      <Example text="Nous sommes convenus *de* nous rencontrer dans une semaine." />
      <p className="mb-1 text-[14.5px] text-tb-muted">We agreed to meet in a week&apos;s time.</p>

      <Subhead text="I. 4 Commencer" />
      <Point label="a. Commencer à faire quelque chose (to start doing something)">
        marque le début d&apos;une action.
      </Point>
      <Example text="Il commence *à* faire ses devoirs. (Il entreprend ses devoirs.)" />
      <p className="mb-1 text-[14.5px] text-tb-muted">He is starting to do his homework.</p>
      <Point label="b. Commencer par faire quelque chose (to start by doing something)">
        marque la première tâche entreprise parmi une série de tâches à accomplir.
      </Point>
      <Example text="Il a commencé *par* faire ses devoirs puis il a téléphoné à son copain et il est allé jouer au tennis." />
      <p className="mb-1 text-[14.5px] text-tb-muted">
        He started by doing his homework, then he called his friend and went to play tennis.
      </p>
    </TextbookPage>
  );
}

function Page157() {
  return (
    <TextbookPage pageNumber={157}>
      <Subhead text="I. 5 Consister" />
      <Point label="a. Consister en + nom (to consist of)">
        sert à préciser les éléments d&apos;un ensemble.
      </Point>
      <Gloss
        fr="Son repas consiste *en* une soupe et *en* une salade."
        en="His meal consists of soup and a salad."
      />
      <Point label="b. Consister à + infinitif (to consist in)">
        explique le sens du sujet, donne un équivalent du sujet.
      </Point>
      <Gloss
        fr="Votre travail consiste *à* répondre au téléphone."
        en="Your job consists in answering the phone."
      />

      <Subhead text="I. 6 Croire" />
      <Point label="a. Croire quelqu'un/quelque chose (to believe someone/something)">
        signifie penser que quelque chose est vrai ou que quelqu&apos;un dit la vérité.
      </Point>
      <Gloss fr="Je crois ta mère." en="I believe your mother." />
      <Point label="b.">
        Selon l&apos;usage, on dit : croire <em>en</em> Dieu, croire <em>en</em> quelqu&apos;un mais on dit croire <em>à</em> quelque chose et croire au diable, croire au Père Noël (to believe in).
      </Point>

      <Subhead text="I. 7 Dire" />
      <Point label="a.">Dire quelque chose à quelqu&apos;un (to tell someone something).</Point>
      <Point label="b.">
        Dire à quelqu&apos;un de faire quelque chose (to tell someone to do something).
      </Point>
      <Rule>
        Le verbe <em>dire</em> veut un complément indirect de la personne s&apos;il a déjà un complément direct de chose ou s&apos;il a comme complément un infinitif précédé de <em>de</em>.
      </Rule>
      <Rule>
        Les verbes qui ont la même construction sont indiqués en II. 3 page 151.
        <CrossRef>chapitre 19, II. 3, p. 151</CrossRef>
      </Rule>

      <Subhead text="I. 8 Échapper" />
      <Point label="a. Échapper à (quelque chose/quelqu'un)">
        signifie ne plus être sous l&apos;influence ni le contrôle de quelqu&apos;un/de quelque chose.
      </Point>
      <Gloss fr="Ces mots m'ont échappé." en="These words escaped me." />
      <Point label="b. S'échapper (de) (to escape)." />
      <Gloss
        fr="Le prisonnier s'est échappé (de la prison)."
        en="The prisoner escaped (from prison)."
      />
      <Point label="c.">
        Le verbe <em>échapper</em> n&apos;est pas transitif direct. On *« n&apos;échappe pas quelque chose ».
      </Point>
      <Point label="d.">
        Laisser échapper quelque chose se traduit par : to drop something.
      </Point>
      <Gloss
        fr="Par maladresse, il a laissé échapper le vase."
        en="Clumsily, he dropped the vase."
      />
    </TextbookPage>
  );
}

function Page158() {
  return (
    <TextbookPage pageNumber={158} pageNumberSide="left">
      <Subhead text="I. 9 Entendre" />
      <Rule>Attention à la traduction de :</Rule>
      <Point label="a.">
        to hear of/about something/someone = entendre parler de quelque chose, de quelqu&apos;un.
      </Point>
      <Point label="b.">to hear that… = entendre dire que…</Point>
      <Rule>Dans les deux cas on est obligé d&apos;ajouter un infinitif.</Rule>
      <Gloss fr="J'ai souvent entendu parler de vous." en="I have often heard about you." />
      <Example text="J'ai entendu dire qu'on avait annulé la réunion." />
      <p className="mb-1 text-[14.5px] text-tb-muted">I heard that they cancelled the meeting.</p>
      <Point label="c.">
        Qu&apos;est-ce que tu entends par là ? = Qu&apos;est-ce que tu veux dire ? = What do you mean by that?
      </Point>

      <Subhead text="I. 10 Être d'accord" />
      <Rule>
        Entre <em>être d&apos;accord</em> et le <em>que</em> de la subordonnée, on intercale <em>pour dire</em>.
      </Rule>
      <Gloss
        fr="Je suis d'accord pour dire que c'est une erreur."
        en="I agree that it is a mistake."
      />

      <ExerciseBox title="A. Traduisez.">
        {exerciseA.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>

      <Subhead text="I. 11 Il y a" />
      <Rule>
        Le verbe de l&apos;expression <em>il y a</em> (there is, there are) peut être conjugué à tous les temps (il y avait, il y a eu, il y aura, etc.) mais il reste toujours au singulier.
      </Rule>
      <Gloss fr="Il y a beaucoup de candidats." en="There are a lot of candidates." />
      <Gloss fr="Il y aura beaucoup de candidats." en="There will be a lot of candidates." />

      <Subhead text="I. 12 Joindre" />
      <Point label="a.">
        On se joint à un groupe, à une personne (idée de solidarité, de collaboration) = to join a group or a person (ideologically).
      </Point>
      <Point label="b.">
        On rejoint un groupe, une personne (idée de distance abolie) = to join a group or a person (physically).
      </Point>
    </TextbookPage>
  );
}

function Page159() {
  return (
    <TextbookPage pageNumber={159}>
      <Subhead text="I. 13 Jouer = to play" />
      <Point label="a.">On joue d&apos;un instrument de musique.</Point>
      <Gloss fr="Elle joue *du* piano." en="She plays the piano." />
      <Point label="b.">On joue à un jeu ou à un sport.</Point>
      <Example text="Jouer *au* foot, *à* la balle, *au* hockey, *au* Monopoly, etc." />
      <p className="mb-1 text-[14.5px] text-tb-muted">
        To play soccer, ball, hockey, Monopoly, etc.
      </p>

      <Subhead text="I. 14 Manquer = to miss" />
      <Point label="a.">
        Attention à la traduction de <em>I miss you</em> = <em>Tu me manques</em>.
      </Point>
      <Rule>
        « Je te manque » voudrait dire : « Tu as besoin de moi. » = You miss me.
      </Rule>
      <Point label="b. Manquer quelque chose">
        = to miss something ; to fail to reach (train).
      </Point>
      <Gloss
        fr="Il a manqué son train (son avion, etc.)."
        en="He missed his train (his plane, etc.)."
      />
      <Point label="c. Manquer à quelque chose">
        = to fail (in) = ne pas respecter quelque chose.
      </Point>
      <Gloss fr="Il manque *à* tous ses devoirs." en="He fails in all his duties." />
      <Point label="d. Manquer de quelque chose">= to lack.</Point>
      <Gloss fr="Nous manquons *de* sucre." en="We lack (don't have any) sugar." />
      <Point label="e. Manquer de + infinitif">
        = faillir = to almost do something.
      </Point>
      <Example text="Il a manqué *de* tomber. = Il a failli tomber. / Il est presque tombé." />
      <p className="mb-1 text-[14.5px] text-tb-muted">He almost fell.</p>
      <Point label="f. Ne pas manquer de + infinitif">
        = ne pas oublier de = to not miss doing something (fail to do something).
      </Point>
      <Example text="Ne manquez pas *de* regarder cette émission." />
      <p className="mb-1 text-[14.5px] text-tb-muted">
        (Don&apos;t miss (watching) that programme. Don&apos;t fail to watch that programme.)
      </p>

      <Subhead text="I. 15 Marier = to marry" />
      <Point label="a.">
        Marier quelqu&apos;un veut dire « donner quelqu&apos;un en mariage » (to marry someone to someone).
      </Point>
      <Gloss fr="Le roi a marié sa fille." en="The king married his daughter." />
      <Point label="b.">
        Quand on veut indiquer qu&apos;une personne choisit de vivre avec une autre personne après mariage (to marry someone), on dit « se marier à » ou « épouser quelqu&apos;un ».
      </Point>
      <Example text="Il s'est marié *à* une riche héritière. / Il a épousé une riche héritière." />
      <p className="mb-1 text-[14.5px] text-tb-muted">He married a wealthy heiress.</p>
      <Point label="c. Se marier">= to get married.</Point>
      <Gloss fr="Elle se marie dans une semaine." en="She gets married in a week." />
    </TextbookPage>
  );
}

function Page160() {
  return (
    <TextbookPage pageNumber={160} pageNumberSide="left">
      <Subhead text="I. 16 Penser = to think" />
      <Point label="a. Penser quelque chose (to think something/have an opinion about)">
        signifie « être d&apos;un certain avis ».
      </Point>
      <Gloss fr="Voilà ce que je pense." en="Here is what I think." />
      <Point label="b. Penser à quelque chose, à quelqu'un">
        = to think of/about something, someone.
      </Point>
      <Gloss fr="Je pense *aux* vacances." en="I am thinking about (of) the holidays." />
      <AttentionBox>
        <p>
          On ne peut pas dire : *« Je pense des vacances ».
        </p>
      </AttentionBox>
      <Point label="c. Penser quelque chose de quelque chose ou de quelqu'un (to think something about/of something/someone)">
        signifie avoir une opinion au sujet de quelque chose ou de quelqu&apos;un.
      </Point>
      <Gloss fr="Que penses-tu *de* ce film ?" en="What do you think of this film?" />
      <Point label="d. Penser + infinitif (to intend)">
        signifie prévoir, avoir l&apos;intention de.
      </Point>
      <Gloss
        fr="Je pense partir de bonne heure."
        en="I think I'll leave early./I intend to leave early."
      />
      <Point label="e. Penser à + infinitif (to think to/not forget to)">
        signifie « ne pas oublier ».
      </Point>
      <Gloss fr="Pense *à* partir de bonne heure." en="Remember to leave early." />
      <Gloss fr="Pense *à* m'apporter ce livre." en="Please think to bring me that book." />

      <Subhead text="I. 17 Répondre" />
      <Point label="a. Répondre de quelque chose, de quelqu'un (to answer for/guarantee)">
        signifie se porter garant de.
      </Point>
      <Example text="Je réponds *de* son honnêteté et *de* son courage." />
      <p className="mb-1 text-[14.5px] text-tb-muted">I can answer for his honesty and courage.</p>
      <Point label="b. Répondre à quelque chose, à quelqu'un">
        = to answer something/someone (to respond to).
      </Point>
      <Example text="Il a répondu *à* sa lettre par retour du courrier." />
      <p className="mb-1 text-[14.5px] text-tb-muted">He answered her letter by return post.</p>
      <Gloss fr="En réponse *à* votre demande…" en="In response to your request…" />

      <Subhead text="I. 18 Servir = to serve" />
      <Point label="a. Servir quelqu'un">
        = être à la disposition de quelqu&apos;un, être le serviteur de quelqu&apos;un.
      </Point>
      <Gloss fr="Il a servi les invités." en="He served the guests." />
      <Point label="b. Servir de + nom (to serve as)">signifie remplacer.</Point>
      <Example text="Ce mouchoir en papier servira *de* serviette." />
      <p className="mb-1 text-[14.5px] text-tb-muted">
        This paper handkerchief will serve as a napkin.
      </p>
    </TextbookPage>
  );
}

function Page161() {
  return (
    <TextbookPage pageNumber={161}>
      <Point label="c. Servir à + infinitif (to serve to do)">
        signifie « avoir pour fonction, pour emploi ».
      </Point>
      <Gloss
        fr="Cet outil sert *à* faire des trous."
        en="This tool serves (is used) to make holes."
      />
      <Point label="d. Se servir de (to use)">signifie « utiliser ».</Point>
      <Gloss
        fr="Je me sers *de* cet outil pour faire des trous."
        en="I use this tool to make holes."
      />

      <Subhead text="I. 19 Tenir" />
      <Point label="a.">Tenir quelque chose = to hold something.</Point>
      <Point label="b. Tenir à quelque chose (to be fond of, cherish)">
        signifie « être attaché à quelque chose, à quelqu&apos;un » ; « attacher de l&apos;importance à quelque chose, à quelqu&apos;un ».
      </Point>
      <Gloss fr="Je tiens beaucoup *à* cette photographie." en="I cherish this photograph." />
      <Point label="c. Tenir à + infinitif (to be anxious to do, to insist on)">
        signifie « vouloir faire quelque chose » ; « désirer très fort faire quelque chose ».
      </Point>
      <Gloss
        fr="Je tiens *à* être présent."
        en="I am anxious to be there./I insist on being present."
      />
      <Point label="d. Tenir de quelque chose, de quelqu'un (to seem like, to take after)">
        signifie « ressembler à quelque chose, à quelqu&apos;un ».
      </Point>
      <Gloss
        fr="Ce changement subit tient *du* miracle."
        en="This sudden change seems miraculous."
      />
      <Gloss
        fr="Il tient *de* son oncle."
        en="He takes after his uncle (resembles) (in looks or character)."
      />
      <Point label="e. Se tenir">
        signifie « être debout » (to stand) ou « avoir une certaine attitude, se comporter » (to behave).
      </Point>
      <Gloss fr="Ils se tenaient devant la porte." en="They were standing in front of the door." />
      <Gloss fr="Tiens-toi droit." en="Stand up straight." />
      <Example text="Les enfants se sont bien tenus durant tout le repas." />
      <p className="mb-1 text-[14.5px] text-tb-muted">
        The children behaved well throughout the meal.
      </p>

      <ExerciseBox title="B. Traduisez.">
        {exerciseB.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

function Page162() {
  return (
    <TextbookPage pageNumber={162} pageNumberSide="left">
      <SectionBar title="II. Difficultés de traduction" />
      <Gloss fr="Puis-je vous poser une question ?" en="May I ask you a question?" />
      <Gloss fr="Je fais la cuisine." en="I am cooking." />
      <Gloss fr="Permettez-moi de me présenter." en="Let me introduce myself." />
      <Gloss fr="Détendez-vous." en="Relax!" />
      <Gloss fr="À quelle heure es-tu revenu ?" en="What time did you get back?" />

      <Subhead text="II. 1 To ask" />
      <Point label="a.">To ask a question se traduit par poser une question.</Point>
      <AttentionBox>
        <p>On ne *« demande » pas une question.</p>
        <Gloss fr="Puis-je vous poser une question ?" en="May I ask you a question?" />
      </AttentionBox>
      <Point label="b.">
        To ask for something = demander quelque chose (sans préposition).
      </Point>
      <Gloss fr="Il m'a demandé mon livre." en="He asked me for my book." />

      <Subhead text="II. 2 To assist" />
      <Point label="a.">
        To assist someone in doing something = aider quelqu&apos;un à faire quelque chose.
      </Point>
      <Point label="b. Assister à quelque chose (to be present, be witness, to attend)">
        signifie « être présent à quelque chose » ; « être témoin de quelque chose ».
      </Point>
      <Example text="J'ai assisté *au* concert qu'il a donné hier." />
      <p className="mb-1 text-[14.5px] text-tb-muted">
        I attended the concert he gave last night.
      </p>

      <Subhead text="II. 3 To complete" />
      <Point label="a.">
        To complete se traduit par <em>compléter</em> seulement dans le sens d&apos;ajouter un élément qui manque dans un ensemble.
      </Point>
      <Gloss fr="Ce chapeau complète l'ensemble." en="This hat completes the outfit." />
      <Point label="b.">
        To complete ne peut pas se traduire par <em>compléter</em> s&apos;il s&apos;agit de marquer le terme d&apos;une action, dans le sens de finir (un ouvrage, un discours), terminer (une maison, etc.), remplir (un formulaire, un questionnaire).
      </Point>
      <Gloss fr="J'ai fini l'exercice." en="I have completed the exercise." />
      <Example text="Les étudiants doivent remplir un formulaire d'inscription." />
      <p className="mb-1 text-[14.5px] text-tb-muted">
        Students must complete a registration form.
      </p>
    </TextbookPage>
  );
}

function Page163() {
  return (
    <TextbookPage pageNumber={163}>
      <Subhead text="II. 4 To confront" />
      <Point label="a.">
        To confront (an enemy, a danger, etc.) ne se traduit pas par *confronter. On dit affronter quelqu&apos;un, s&apos;opposer à quelqu&apos;un, tenir tête à quelqu&apos;un ou s&apos;expliquer avec quelqu&apos;un.
      </Point>
      <Example text="Je n'ai pas voulu m'opposer à lui pour une bricole comme ça." />
      <p className="mb-1 text-[14.5px] text-tb-muted">
        I didn&apos;t want to confront him over such a simple matter.
      </p>
      <Example text="Demain nos troupes vont affronter l'ennemi." />
      <p className="mb-1 text-[14.5px] text-tb-muted">
        Tomorrow our troops will confront the enemy.
      </p>
      <Point label="b.">
        To confront peut se traduire par <em>confronter</em> si le verbe a le sens de comparer (des résultats).
      </Point>
      <Gloss
        fr="Les savants ont confronté leurs résultats."
        en="The scientists confronted their results."
      />

      <Subhead text="II. 5 To cook" />
      <Point label="a.">
        To cook est traduit par <em>cuire</em> lorsque <em>cuire</em> est intransitif.
      </Point>
      <Example text="Un plat, une viande doit cuire pendant une heure." />
      <p className="mb-1 text-[14.5px] text-tb-muted">
        This dish, the meat must cook for an hour.
      </p>
      <Point label="b.">
        Mais lorsque le verbe est transitif direct, on traduit presque toujours par un autre verbe (faire, préparer).
      </Point>
      <Gloss fr="Je fais une tarte, je prépare un plat." en="I bake a tart, I cook a dish." />
      <Nb>
        une personne ne *cuit pas. On dira : Elle fait la cuisine, elle cuisine.
      </Nb>
      <Gloss fr="Je fais la cuisine." en="I am cooking." />

      <Subhead text="II. 6 To introduce" />
      <Point label="a.">
        <em>Introduire</em> signifie « placer à l&apos;intérieur ».
      </Point>
      <Gloss
        fr="Introduire une pièce dans la fente."
        en="Introduce a coin into the slot."
      />
      <Point label="b.">
        To introduce someone to someone ne se traduit pas par *introduire mais par présenter (quelqu&apos;un à quelqu&apos;un).
      </Point>
      <Gloss
        fr="Permettez-moi de vous présenter M. Dupont."
        en="Allow me to introduce you to Mr. Dupont."
      />

      <Subhead text="II. 7 To leave" />
      <Point label="a.">
        Pour indiquer un départ, si le verbe n&apos;a pas de complément d&apos;objet, on utilise le verbe <em>partir</em> ou le verbe <em>s&apos;en aller</em>.
      </Point>
      <Gloss fr="Je suis parti à 5 heures du matin." en="I left at 5 am." />
      <Point label="b.">
        Si le verbe a un complément d&apos;objet direct, on utilise le verbe <Highlight>quitter</Highlight>.
      </Point>
      <Gloss fr="J'ai quitté la maison." en="I left the house." />
    </TextbookPage>
  );
}

function Page164() {
  return (
    <TextbookPage pageNumber={164} pageNumberSide="left">
      <Subhead text="II. 8 To relax" />
      <Rule>
        Quand le sujet est une personne, on ne traduit pas to relax par *se relâcher. On utilise les verbes <em>se détendre</em>, <em>se décontracter</em>, <em>se relaxer</em>.
      </Rule>
      <Gloss fr="Je me détends." en="I am relaxing." />
      <Example text="Ils sont allés faire une promenade pour se décontracter." />
      <p className="mb-1 text-[14.5px] text-tb-muted">They went for a walk to relax.</p>

      <Subhead text="II. 9 To return" />
      <Point label="a.">
        To return peut se traduire parfois par <em>retourner</em> ; le verbe marque un éloignement par rapport au lieu où l&apos;on est et une direction vers un lieu d&apos;origine.
      </Point>
      <Gloss fr="Retourne par où tu es venu." en="Go back by the way you came." />
      <Rule>
        Mais <em>retourner</em> peut aussi signifier changer un objet de côté (to turn over).
      </Rule>
      <Example text="Retourner une crêpe, un steak dans une poêle." />
      <p className="mb-1 text-[14.5px] text-tb-muted">
        To turn a pancake, a steak over in the pan.
      </p>
      <Point label="b.">
        Quand on veut marquer un mouvement de rapprochement vers le lieu d&apos;origine, il faut utiliser <em>revenir</em>.
      </Point>
      <Example text="Elle est revenue *à* la maison vers 7 heures." />
      <p className="mb-1 text-[14.5px] text-tb-muted">
        She returned (came back) to the house around 7.
      </p>

      <Subhead text="II. 10 To support" />
      <Point label="a.">
        <em>Supporter</em> a un sens matériel (maintenir en place un objet) et un sens psychologique (souffrir, tolérer les remarques sarcastiques de quelqu&apos;un = to suffer, tolerate insults or sarcasm).
      </Point>
      <Point label="b.">
        Quand on veut montrer de la sympathie pour quelqu&apos;un, on dit soutenir quelqu&apos;un, encourager quelqu&apos;un.
      </Point>
      <Gloss
        fr="N'aie pas peur, on te soutiendra."
        en="Have no fear, we will support you (back you up)."
      />
      <Point label="c.">
        To support a family = faire vivre une famille, subvenir aux besoins d&apos;une famille.
      </Point>
      <Gloss fr="Elle doit faire vivre ses deux enfants." en="She has to support her two children." />

      <Subhead text="II. 11 To visit" />
      <Rule>
        On visite un monument, une ville mais on rend visite à une personne.
      </Rule>
      <Gloss fr="Je visite Venise." en="I visit Venice." />
      <Gloss fr="Je rends visite *à* ma tante." en="I visit my aunt." />
    </TextbookPage>
  );
}

function Page165() {
  return (
    <TextbookPage pageNumber={165}>
      <ExerciseBox title="C. Traduisez.">
        {exerciseC.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>
      <ExerciseBox title="D. Traduisez.">
        {exerciseD.map((sentence, index) => (
          <ExerciseItem key={sentence} n={index + 1}>
            {sentence}
          </ExerciseItem>
        ))}
      </ExerciseBox>
    </TextbookPage>
  );
}

export function Chapter20() {
  return (
    <div className="space-y-8 py-8">
      <Page155 />
      <Page156 />
      <Page157 />
      <Page158 />
      <Page159 />
      <Page160 />
      <Page161 />
      <Page162 />
      <Page163 />
      <Page164 />
      <Page165 />
    </div>
  );
}
