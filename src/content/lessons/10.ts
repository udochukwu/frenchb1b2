import type { Lesson } from "./types";

export const lesson10: Lesson = {
  title: "Personal pronouns",
  intro:
    "A French personal pronoun changes shape with its job in the sentence. The same person can be a subject, a direct object, an indirect object, or a stressed form after a preposition. This chapter is the map: the four columns, then *y* and *lui* after *à*, *en* after *de*, the invariable *le*, where the pronouns sit, and when you must keep the tonic form.",
  sections: [
    {
      heading: "I. 1 The four forms",
      paragraphs: [
        "Read the table by person. Subject, direct object, indirect object, tonic: *je / me / me / moi* ; *tu / te / te / toi* ; *il / le (l') / lui / lui* ; *elle / la / lui / elle* ; *nous / nous / nous / nous* ; *vous / vous / vous / vous* ; *ils / les / leur / eux* ; *elles / les / leur / elles*. A last row has no subject: direct *se (s')*, indirect *se (s')*, tonic *soi*.",
        "*Le* becomes *l'* before a vowel or a mute *h*: *elle l'est*.",
      ],
      examples: [
        { fr: "Il *me* voit, se dirige vers *moi* et *me* dit bonjour." },
        { fr: "je → *me* / *me* / *moi*" },
        { fr: "il → *le (l')* / *lui* / *lui*" },
        { fr: "ils → *les* / *leur* / *eux*" },
        { fr: "elles → *les* / *leur* / *elles*" },
        { fr: "*se (s')* / *se (s')* / *soi*" },
      ],
    },
    {
      heading: "I. 2 Nous and vous",
      paragraphs: [
        "The 1st and 2nd persons plural barely change. *Nous* and *vous* stay *nous* and *vous* whether they are subject, direct object, indirect object, or tonic.",
      ],
      examples: [
        { fr: "*nous* / *nous* / *nous* / *nous*" },
        { fr: "*vous* / *vous* / *vous* / *vous*" },
      ],
    },
    {
      heading: "I. 3 Reflexive se",
      paragraphs: [
        "*Se* (or *s'* before a vowel) points back to a 3rd-person subject, singular or plural. The subject pronoun and the reflexive pronoun are the same person or the same thing. The full reflexive verbs are in chapter 21.",
      ],
      examples: [
        { fr: "Il *se* lave." },
        { fr: "Elles *se* lèvent." },
      ],
    },
    {
      heading: "II. 1 Y for things",
      paragraphs: [
        "When *à* introduces a thing, an abstract noun, or a place name, replace that phrase with *y*. *Y* covers *à* + noun and also *au / aux* when the noun is not a person.",
      ],
      examples: [
        {
          fr: "Je m'habitue *à ma nouvelle maison*. → Je m'*y* habitue.",
          en: "chose",
        },
        {
          fr: "Je m'intéresse *à la philosophie*. → Je m'*y* intéresse.",
          en: "nom abstrait",
        },
        {
          fr: "Je vais *au Mexique*. → J'*y* vais.",
          en: "nom géographique",
        },
      ],
    },
    {
      heading: "II. 2 Lui and leur for people",
      paragraphs: [
        "A person after *à* is normally *lui* in the singular (masculine or feminine) and *leur* in the plural (masculine or feminine). Drop *à* and put the pronoun before the verb. You cannot say *Je téléphone à lui*.",
        "Attention: do not mix the pronoun *leur* with the possessive adjective. The indirect-object pronoun never takes an *s*. *Je leur téléphone* is the pronoun; *Leurs amis sont partis* is the possessive.",
        "Many French verbs need *à* where English has no preposition, or a different one. *To obey someone* is *obéir à quelqu'un*. *To telephone someone* is *téléphoner à quelqu'un*. *To think of* is *penser à* (the list is on p. 342).",
        "French often gives a thing as a direct object and a person as an indirect object. English folds the person in as a direct object. *Je donne un conseil à mon ami* → *Je lui donne un conseil* (I give him some advice). *Les parents promettent une récompense à leur fille* → *Les parents lui promettent une récompense*.",
      ],
      examples: [
        {
          fr: "Ce livre appartient *à mon père*. → Ce livre *lui* appartient.",
        },
        {
          fr: "Cette voiture appartient *à mes parents*. → Cette voiture *leur* appartient.",
        },
        { fr: "Je téléphone *à mon père*. → Je *lui* téléphone." },
        { fr: "Je *leur* téléphone.", en: "pronom personnel" },
        { fr: "*Leurs* amis sont partis.", en: "adjectif possessif" },
        {
          fr: "Je donne un conseil *à mon ami*. → Je *lui* donne un conseil.",
          en: "I give him some advice.",
        },
      ],
    },
    {
      heading: "II. 3 When à + tonic stays",
      paragraphs: [
        "For a person, you keep *à* plus the tonic pronoun in only two cases.",
        "First, when the direct object is already *me, te, se, nous,* or *vous* — very often with pronominal verbs. Two object pronouns from columns 1 and 3 of the order table cannot sit together, so *lui* and *leur* become *à* + tonic. *Le professeur s'adresse aux étudiants* → *Le professeur s'adresse à eux*. You cannot say « Le professeur se leur adresse ». *Elle nous envoie à son remplaçant* → *Elle nous envoie à lui*. You cannot say « Elle nous lui envoie ».",
        "Second, after a short list of verbs that keep *à*: *être à, faire attention à, penser à, prendre garde à, rêver à, tenir à*. *Je fais attention à la petite fille* → *Je fais attention à elle*. *Je pense à Paul* → *Je pense à lui*.",
      ],
      examples: [
        {
          fr: "Le professeur s'adresse *aux étudiants*. → Le professeur s'adresse *à eux*.",
        },
        {
          fr: "Elle nous envoie *à son remplaçant*. → Elle nous envoie *à lui*.",
        },
        {
          fr: "Je fais attention *à la petite fille*. → Je fais attention *à elle*.",
        },
        { fr: "Je pense *à Paul*. → Je pense *à lui*." },
      ],
    },
    {
      heading: "III. 1 En for an indefinite quantity",
      paragraphs: [
        "Use *en* to replace a noun introduced by a partitive (*du, de la, des*) or an indefinite article (*des*). The quantity is then unspecified, so the pronoun stands alone: *Je veux des cerises* → *j'en veux*.",
        "Compare that with a definite noun, which is the whole set. *Je veux des pommes* (unspecified) → *J'en veux* (I want some). *Je veux les pommes* (the whole amount) → *Je les veux* (I want them). *En* is not *les*.",
      ],
      examples: [
        { fr: "Je veux *des* pommes. → J'*en* veux.", en: "I want some." },
        { fr: "Je veux *les* pommes. → Je *les* veux.", en: "I want them." },
        { fr: "J'ai besoin de ta voiture ; j'*en* ai besoin." },
      ],
    },
    {
      heading: "III. 2 Keep the number or the adverb",
      paragraphs: [
        "If a numeral or a qualifying adjective completes the noun, or if a quantity adverb modifies it (*beaucoup, trop, peu*), replace the noun with *en* and keep the adjective or the adverb. *Elle a trois enfants* → *Elle en a trois*. *J'ai acheté trois bonnes pommes* → *J'en ai acheté trois bonnes*. *J'ai beaucoup de travail* → *J'en ai beaucoup*.",
      ],
      examples: [
        { fr: "Elle a *trois enfants*. → Elle *en* a trois." },
        {
          fr: "J'ai acheté *trois bonnes pommes*. → J'*en* ai acheté trois bonnes.",
        },
        { fr: "J'ai *beaucoup de travail*. → J'*en* ai beaucoup." },
      ],
    },
    {
      heading: "III. 3 De: things take en, people stay tonic",
      paragraphs: [
        "*En* also replaces a thing, an abstract noun, or a place name introduced by *de* (including *du*). *Je me souviens de ta première voiture* → *Je m'en souviens*. *J'ai peur de la mort* → *J'en ai peur*. *Je reviens du Brésil* → *J'en reviens*.",
        "A person introduced by *de* is different. Keep *de* and use the tonic pronoun. *J'ai peur de ce professeur* → *J'ai peur de lui*. *Je suis jalouse de ma sœur* → *Je suis jalouse d'elle*. The same split as *à*: things fold into *en*, people stay as *de* + *lui / elle / eux / elles*.",
      ],
      examples: [
        {
          fr: "Je me souviens *de ta première voiture*. → Je m'*en* souviens.",
          en: "chose",
        },
        { fr: "J'ai peur *de la mort*. → J'*en* ai peur.", en: "nom abstrait" },
        {
          fr: "Je reviens *du Brésil*. → J'*en* reviens.",
          en: "nom géographique",
        },
        { fr: "J'ai peur *de ce professeur*. → J'ai peur *de lui*." },
        { fr: "Je suis jalouse *de ma sœur*. → Je suis jalouse *d'elle*." },
        { fr: "Je me souviens de ton ami ; je me souviens de *lui*." },
      ],
    },
    {
      heading: "IV. 1 Le for an attribute",
      paragraphs: [
        "*Le* can stand for an adjective or a noun attribute after *être, sembler, devenir, paraître*. *Je suis généreux* → *Je le suis*. *Ils sont étudiants* → *Ils le sont*.",
        "In this job *le* never agrees. Feminine and plural attributes still take *le* (or *l'* before a vowel). *Ils sont américains* → *Ils le sont*. *Elles sont contentes* → *Elles le sont*. *Elle est absente* → *Elle l'est*.",
        "English drops the pronoun. French cannot. *Are you tired? Yes, I am* is *Es-tu fatiguée ? Oui, je le suis*.",
      ],
      examples: [
        { fr: "Je suis *généreux*. → Je *le* suis." },
        { fr: "Ils sont *étudiants*. → Ils *le* sont." },
        { fr: "Elles sont *contentes*. → Elles *le* sont." },
        { fr: "Elle est *absente*. → Elle *l'*est." },
        {
          fr: "Es-tu *fatiguée* ? Oui, je *le* suis.",
          en: "Are you tired? Yes, I am.",
        },
      ],
    },
    {
      heading: "IV. 2 Le for a whole clause",
      paragraphs: [
        "*Le* can also replace an entire clause that is the direct object. *Je veux que tu viennes demain à 8 heures* → *Je le veux*. The clause was the direct complement of *je veux*; *le* takes its place.",
      ],
      examples: [
        {
          fr: "Je veux (*que tu viennes demain à 8 heures*.) → Je *le* veux.",
        },
        {
          fr: "Sais-tu ce que je t'ai acheté pour Noël ? Oui, je *le* sais.",
        },
      ],
    },
    {
      heading: "IV. 3 Infinitive clauses: le or en",
      paragraphs: [
        "The direct object can be an infinitive clause. *Je veux partir demain* → *Je le veux*. *Elle espère être reçue à son examen* → *Elle l'espère*.",
        "Sometimes *de* in front of that infinitive is only a linking word, not a real preposition. *Permettre* is a direct transitive verb — you *permettre quelque chose* — so the pronoun is *le*. *Il me permet de sortir demain soir* → *Il me le permet*.",
        "If the verb must be built with *de* (the list is on p. 343), the infinitive is an indirect complement and the pronoun is *en*. *Se charger de* is always *se charger de quelque chose*. *Je me charge de lui trouver une chambre* → *Je m'en charge*.",
      ],
      examples: [
        { fr: "Je veux (*partir demain*.) → Je *le* veux." },
        {
          fr: "Elle espère *être reçue à son examen*. → Elle *l'*espère.",
        },
        { fr: "Il me permet *de sortir demain soir*. → Il me *le* permet." },
        {
          fr: "Je me charge *de lui trouver une chambre*. → Je m'*en* charge.",
        },
      ],
    },
    {
      heading: "V. 1 Where object pronouns sit",
      paragraphs: [
        "Direct and indirect object pronouns come before the verb, except in the affirmative imperative (V. 2). *Je les lui prêterai*. *Je ne la leur ai pas montrée*. *Ne me les perdez pas* — negation does not change the place.",
        "Two pronouns follow a fixed order, column by column: (1) *me, te, se, nous, vous* ; (2) *le, la, les* ; (3) *lui, leur* ; (4) *y* ; (5) *en*. *Je lui en donne*. *Ils me la prêtent*. *Ne m'en donnez pas !* *Il ne les y conduit pas*.",
        "Never combine two pronouns from the same column, and never combine column 1 with column 3. In that last case *lui* and *leur* become *à* plus the matching tonic pronoun (II. 3, a). *Elle me présente à lui*. *Elle s'adresse à eux*. *Il vous a présenté à moi*.",
      ],
      examples: [
        { fr: "Je *les lui* donne." },
        { fr: "Je ne *lui en* parle pas." },
        { fr: "Je *lui en* donne." },
        { fr: "Ils *me la* prêtent." },
        { fr: "Il ne *les y* conduit pas." },
        { fr: "Elle *me* présente *à lui*." },
        { fr: "Il *vous* a présenté *à moi*." },
      ],
    },
    {
      heading: "V. 2 Affirmative imperative",
      paragraphs: [
        "In the affirmative imperative the pronouns follow the verb, joined by hyphens. The direct object (*le, la, les*) comes before the indirect object. *Me* and *te* become *moi* and *toi*, except in front of *en*, where they become *m'* and *t'*.",
        "*Montre-moi ton livre* → *Montre-le-moi* (direct, then indirect). *Donnez-les-nous*. *Donnez-m'en*.",
      ],
      examples: [
        { fr: "Donne-*les*-*moi* maintenant." },
        { fr: "Montre-*moi* ton livre. → Montre-*le*-*moi*." },
        { fr: "Donnez-*les*-*nous*." },
        { fr: "Donnez-*m'en*." },
      ],
    },
    {
      heading: "V. 3 Subject inversion",
      paragraphs: [
        "The subject pronoun must invert with the verb in three cases. After direct speech, in the short clause that names the speaker: *Viens, dit-elle* (Come, she says). After *peut-être, aussi, sans doute,* or *à peine* at the start of the sentence: *Peut-être sera-t-il en retard*. In a direct question: *Pars-tu en vacances ?* The overview example *« Tu me les donneras demain », me dit-il* is the same incise pattern, with *me* as an indirect object in front of *dit*.",
      ],
      examples: [
        { fr: "« Tu *me les* donneras demain », *me* dit-il." },
        { fr: "Viens, *dit-elle*.", en: "Come, she says." },
        { fr: "*Peut-être* sera-*t-il* en retard." },
        { fr: "Pars-*tu* en vacances ?" },
        { fr: "Peut-être pourras-*tu* venir ce soir ?" },
      ],
    },
    {
      heading: "VI. 1 Tonic form after a preposition",
      paragraphs: [
        "The tonic form — also called the disjunctive personal pronoun — is what you use after a preposition. *Pierre est venu avec ses amis* → *Pierre est venu avec eux*. *Ils ont dormi chez leur tante* → *Ils ont dormi chez elle*. *Il vient avec moi*.",
        "If the preposition is *à* or *de*, the rule is the harder one in II and III (pages 76 to 79): things become *y* or *en*, and people often stay as *à / de* + tonic.",
      ],
      examples: [
        { fr: "Il vient avec *moi*." },
        { fr: "Pierre est venu *avec ses amis*. → Pierre est venu *avec eux*." },
        {
          fr: "Ils ont dormi *chez leur tante*. → Ils ont dormi *chez elle*.",
        },
      ],
    },
    {
      heading: "VI. 2 Emphasis",
      paragraphs: [
        "The tonic form also carries emphasis: *c'est… qui/que*, a bare *… qui/que*, and *il n'y a que…*. *Ah, j'ai fini mon travail ; toi pas* (I have finished my work; you haven't). *Ce sont eux qui m'ont prêté leur maison* (They are the ones who lent me their house). *Il n'y a que toi qui puisses le faire* (You are the only one who can do it).",
      ],
      examples: [
        {
          fr: "*Ah*, j'ai fini mon travail ; *toi* pas.",
          en: "I have finished my work; you haven't.",
        },
        {
          fr: "*Ce sont eux* qui m'ont prêté leur maison.",
          en: "They are the ones who lent me their house.",
        },
        {
          fr: "Il n'y a que *toi* qui puisses le faire.",
          en: "You are the only one who can do it.",
        },
      ],
    },
    {
      heading: "VI. 3 Comparison",
      paragraphs: [
        "The second term of a comparison is the tonic pronoun. *Il est plus riche que moi*. *Elles sont aussi intelligentes qu'eux*.",
      ],
      examples: [
        { fr: "Il est plus riche que *moi*." },
        { fr: "Elles sont aussi intelligentes qu'*eux*." },
      ],
    },
    {
      heading: "VI. 4 Soi, and lui-même",
      paragraphs: [
        "Use tonic *soi* when the pronoun points back to *on* or to an indefinite subject: *chacun, tout le monde, personne*. *On a toujours besoin d'un plus petit que soi*. *Chacun travaille pour soi*.",
        "A precise subject takes *lui*, not *soi*: *Jacques travaille pour lui*, because Jacques is a specific person.",
        "*Lui* out of context could be someone other than Jacques. To mark that the complement is the same person as the subject, add *même* (plural *mêmes*). *L'étudiant travaille pour lui-même*. *Elles travaillent pour elles-mêmes*.",
      ],
      examples: [
        { fr: "On a toujours besoin d'un plus petit que *soi*." },
        { fr: "Chacun travaille pour *soi*." },
        { fr: "Jacques travaille pour *lui*." },
        { fr: "L'étudiant travaille pour *lui-même*." },
        { fr: "Elles travaillent pour *elles-mêmes*." },
      ],
    },
  ],
};
