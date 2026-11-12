import type { Lesson } from "./types";

export const lesson24: Lesson = {
  title: "The imperative",
  intro:
    "The imperative has no expressed subject, and it exists at only three persons. Most forms copy the present indicative. The exceptions are the -s of the tu form, four irregular verbs, the past imperative, and the place of object pronouns, which flips between affirmative and negative commands.",
  sections: [
    {
      heading: "I. 1 The persons of the imperative",
      paragraphs: [
        "The imperative has no expressed subject and exists at only three persons: the tu form (Travaille !), the nous form (Partons !), and the vous form (Mangez !).",
      ],
      examples: [
        { fr: "Travaille !" },
        { fr: "Partons !" },
        { fr: "Mangez !" },
      ],
    },
    {
      heading: "I. 2 Present imperative and present indicative",
      paragraphs: [
        "In general, the present imperative copies the present indicative. Fais attention: tu fais becomes fais. Cours vite: tu cours becomes cours. Mangeons rapidement: nous mangeons becomes mangeons.",
      ],
      examples: [
        { fr: "tu fais → fais !" },
        { fr: "tu cours → cours !" },
        { fr: "nous mangeons → mangeons !" },
      ],
    },
    {
      heading: "I. 3 Particularities",
      paragraphs: [
        "At tu, verbs in -er, and the verbs ouvrir, cueillir, offrir, couvrir, and souffrir, take no -s unless they are followed by the object pronouns y or en. Mange des pommes becomes Manges-en. Va faire les courses becomes Vas-y.",
        "When y or en is the complement of a following infinitive, the tu form of those verbs does not take -s. Va chercher des fruits becomes Va en chercher. Va dormir à l'hôtel becomes Va y dormir.",
        "Four verbs have an irregular imperative. Avoir: aie, ayons, ayez. Être: sois, soyons, soyez. Savoir: sache, sachons, sachez. Vouloir: (veuille), (veuillons), veuillez. The forms in parentheses are the less usual ones.",
      ],
      examples: [
        { fr: "Mange des pommes. → Manges-en." },
        { fr: "Va faire les courses. → Vas-y." },
        { fr: "Va chercher des fruits. → Va en chercher." },
        { fr: "Va dormir à l'hôtel. → Va y dormir." },
        { fr: "aie, ayons, ayez" },
        { fr: "sois, soyons, soyez" },
        { fr: "sache, sachons, sachez" },
        { fr: "(veuille), (veuillons), veuillez" },
      ],
    },
    {
      heading: "I. 4 The past imperative",
      paragraphs: [
        "The past imperative is the present imperative of être or avoir plus the past participle. Finir: aie fini, ayons fini, ayez fini. Arriver: sois arrivé(e), soyons arrivé(e)s, soyez arrivé(e)s.",
        "It says the action must be completely finished by a stated moment in the future. English keeps a present imperative. Soyez arrivés quand il viendra: be there when he arrives, and make sure you have arrived when he comes. Ayez fini cette lettre avant cinq heures: finish this letter before 5 o'clock, and make sure you have finished.",
      ],
      examples: [
        { fr: "aie fini, ayons fini, ayez fini" },
        { fr: "sois arrivé(e), soyons arrivé(e)s, soyez arrivé(e)s" },
        { fr: "Soyez arrivés quand il viendra." },
        { fr: "Ayez fini cette lettre avant cinq heures." },
      ],
    },
    {
      heading: "II. 1 Pronouns in an affirmative command",
      paragraphs: [
        "In an affirmative command, every object pronoun follows the verb. The hyphen is required. The pronoun is the stressed form. Before y and en, moi and toi become m' and t'. The order of pronouns is in chapter 10, V. 2, page 81.",
        "Lavez-vous les mains. Dites-moi la vérité ; dites-la-moi. Regardez-les. Envoyez-les-moi. Vas-y. Donne-m'en.",
      ],
      examples: [
        { fr: "Lavez-vous les mains." },
        { fr: "Dites-moi la vérité ; dites-la-moi." },
        { fr: "Regardez-les." },
        { fr: "Envoyez-les-moi." },
        { fr: "Vas-y." },
        { fr: "Donne-m'en." },
      ],
    },
    {
      heading: "II. 2 Pronouns in a negative command",
      paragraphs: [
        "In a negative command, every object pronoun comes before the verb. There is no hyphen. The pronouns are the unstressed forms. The order is in chapter 10, V. 1, page 81.",
        "Ne me dites plus rien. Ne lui envoyez pas cette lettre. Ne la lui envoyez pas.",
      ],
      examples: [
        { fr: "Ne me dites plus rien." },
        { fr: "Ne lui envoyez pas cette lettre." },
        { fr: "Ne la lui envoyez pas." },
      ],
    },
    {
      heading: "III. 1 The object pronoun of a pronominal verb",
      paragraphs: [
        "At the imperative, the object pronoun of a pronominal verb is always expressed. Take s'amuser, s'habiller, and se fâcher. There is no subject, but the object pronoun is there.",
        "Affirmative: amuse-toi, amusons-nous, amusez-vous; habille-toi, habillons-nous, habillez-vous; fâche-toi, fâchons-nous, fâchez-vous.",
        "Negative: ne t'amuse pas, ne nous amusons pas, ne vous amusez pas; ne t'habille pas, ne nous habillons pas, ne vous habillez pas; ne te fâche pas, ne nous fâchons pas, ne vous fâchez pas.",
        "Compare the indicative and the imperative. Indicative: nous nous lavons, subject plus object. Imperative: lavons-nous, object only.",
      ],
      examples: [
        { fr: "amuse-toi, amusons-nous, amusez-vous" },
        { fr: "habille-toi, habillons-nous, habillez-vous" },
        { fr: "fâche-toi, fâchons-nous, fâchez-vous" },
        { fr: "ne t'amuse pas, ne nous amusons pas, ne vous amusez pas" },
        { fr: "ne t'habille pas, ne nous habillons pas, ne vous habillez pas" },
        { fr: "ne te fâche pas, ne nous fâchons pas, ne vous fâchez pas" },
        { fr: "nous nous lavons (sujet + objet)" },
        { fr: "lavons-nous (objet seulement)" },
      ],
    },
  ],
};
