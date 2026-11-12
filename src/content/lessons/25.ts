import type { Lesson } from "./types";

export const lesson25: Lesson = {
  title: "The passé composé and the passé simple",
  intro:
    "The passé composé is the everyday past of a finished action. Most verbs take avoir; pronominal verbs and a short list of intransitives take être; a handful can take either. The passé simple is the written narrative past of the third person. The two tenses do not mix in one story, because one still touches the present and the other does not.",
  sections: [
    {
      heading: "I. 1 The auxiliary avoir",
      paragraphs: [
        "Most French verbs build the passé composé with the past participle and avoir. In particular, every transitive verb and every impersonal verb takes avoir. J'ai mangé ; il a lu ; nous avons étudié ; il a plu ; il a fallu partir. Caroline a acheté des chaussures.",
      ],
      examples: [
        { fr: "J'ai mangé ; il a lu ; nous avons étudié ; il a plu ; il a fallu partir." },
        { fr: "Caroline a acheté des chaussures." },
      ],
    },
    {
      heading: "I. 2 The auxiliary être",
      paragraphs: [
        "Every pronominal verb is built with être. Marc s'est lavé les mains. Elle s'est coupé les cheveux. Je me suis ennuyé.",
        "A small number of intransitive verbs, verbs with no direct object, also take être: aller, arriver, descendre, devenir, entrer, monter, mourir, naître, partir, passer, rentrer, rester, retourner, sortir, tomber, venir and its compounds (survenir, and so on). Danielle est partie à Québec. Jacques est arrivé en retard. Paul est allé au cinéma hier soir. Anne est sortie.",
      ],
      examples: [
        { fr: "Marc s'est lavé les mains." },
        { fr: "Elle s'est coupé les cheveux." },
        { fr: "Je me suis ennuyé." },
        {
          fr: "aller, arriver, descendre, devenir, entrer, monter, mourir, naître, partir, passer, rentrer, rester, retourner, sortir, tomber, venir",
        },
        { fr: "Danielle est partie à Québec." },
        { fr: "Jacques est arrivé en retard." },
      ],
    },
    {
      heading: "I. 3 Avoir or être",
      paragraphs: [
        "A few verbs take avoir or être: descendre, monter, rentrer, retourner, sortir. They take avoir when they have a direct object. Il est descendu tout de suite means he came down at once. Il a descendu la valise means he brought down the suitcase. Anne est sortie ; son frère a sorti la voiture.",
      ],
      examples: [
        { fr: "Il est descendu tout de suite." },
        { fr: "Il a descendu la valise." },
        { fr: "Anne est sortie ; son frère a sorti la voiture." },
      ],
    },
    {
      heading: "II. 1 What the passé composé is worth",
      paragraphs: [
        "The passé composé says a past action is finished, accomplished, and still more or less tied to the moment of speaking.",
        "It can express the present result of a past action. J'ai changé d'avis: I changed my mind, or I have changed my mind. J'ai compris: I understood, or I have understood. Il a cessé de fumer: he stopped smoking, or he has stopped smoking.",
        "It can also mark a past fact that took place in a stretch of time that is not yet over when one speaks. The expressions are ce matin, aujourd'hui, ce mois-ci, cette année, and so on. Je lui ai téléphoné ce matin: I phoned him this morning. Je l'ai rencontré ce matin.",
      ],
      examples: [
        { fr: "J'ai changé d'avis." },
        { fr: "J'ai compris." },
        { fr: "Il a cessé de fumer." },
        { fr: "Je lui ai téléphoné ce matin." },
      ],
    },
    {
      heading: "II. 2 Passé composé and passé simple",
      paragraphs: [
        "In modern French the passé composé very often replaces the passé simple, especially in speech. The manual points to III. 1, page 198. It then loses the specific values of II. 1 and simply states a past event, completely over, recent or distant.",
        "It is the past tense most often used in a story told in the first or second person. Je suis allé faire des courses et j'ai pris le bus pour rentrer.",
      ],
      examples: [
        { fr: "Je suis allé faire des courses et j'ai pris le bus pour rentrer." },
      ],
    },
    {
      heading: "II. 3 Imperfect and passé composé",
      paragraphs: [
        "A series of imperfects marks simultaneity. A series of verbs in the passé composé marks succession.",
        "Il faisait beau, la mer était calme, les oiseaux chantaient et le soleil brillait: the weather was fine, the sea was calm, the birds were singing and the sun was shining, all at once.",
        "Il s'est levé, il est allé à la cuisine, il s'est préparé son petit déjeuner et il a fait couler son bain: he got up, went to the kitchen, prepared his breakfast and ran a bath, one action after another.",
      ],
      examples: [
        { fr: "Il faisait beau, la mer était calme, les oiseaux chantaient et le soleil brillait." },
        { fr: "Il s'est levé, il est allé à la cuisine, il s'est préparé son petit déjeuner et il a fait couler son bain." },
      ],
    },
    {
      heading: "III. 1 What the passé simple is worth",
      paragraphs: [
        "The passé simple marks a finished action that no longer has a direct link with the moment of speaking. La guerre éclata en 1914. Un enfant arriva vers elles.",
        "It is used above all in writing, in stories in the third person, singular or plural. It is little used at the other persons, where the passé composé replaces it (II. 2, page 197). At the third person it is very often used in narration, and it remains a living tense with a value of its own.",
      ],
      examples: [
        { fr: "La guerre éclata en 1914." },
        { fr: "Un enfant arriva vers elles." },
      ],
    },
    {
      heading: "III. 2 How the passé simple is formed",
      paragraphs: [
        "Regular -er verbs form the passé simple with the endings -ai, -as, -a, -âmes, -âtes, -èrent.",
        "The letter g before a becomes ge: il mangea, elle déménagea. The letter c before a becomes ç: il avança, elle commença. The forms of the main verbs are in the conjugation tables.",
        "In a story in the past, it is rare to mix the passé simple and the passé composé. The time perspective is not the same: the passé composé ties the past to the present, while the passé simple detaches the past from the present.",
      ],
      examples: [
        { fr: "-ai, -as, -a, -âmes, -âtes, -èrent" },
        { fr: "Il mangea, elle déménagea." },
        { fr: "Il avança, elle commença." },
      ],
    },
  ],
};
