import type { Lesson } from "./types";

export const lesson5: Lesson = {
  title: "Complements of the noun",
  intro:
    "A French noun can be completed by an adjective, a relative clause, another noun (usually with *de*), or *à* / *en*. English *the animals in the zoo* and *the woman with the red dress* do *not* copy word-for-word into French.",
  sections: [
    {
      heading: "I. Four ways to complete a noun",
      paragraphs: [
        "A noun can be made more precise — completed — in four ways.",
        "a. An adjective. b. A relative clause. c. Another noun. d. A group headed by *à* or *en*.",
      ],
      examples: [
        { fr: "Un livre *relié* ; le ciel *bleu* ; une journée *ensoleillée*…" },
        {
          fr: "Le plat *qui a été préparé* ; la fête *que l'on célèbre tous les ans*…",
        },
        { fr: "Le cahier *de l'élève* ; une photo *de famille*…" },
        { fr: "Une machine *à coudre* ; une veste *en cuir* ; un homme *en short*." },
      ],
    },
    {
      heading: "II. 1 Place prepositions",
      paragraphs: [
        "Unlike English, a French noun is generally *not* completed by another noun plus a place preposition. Do not say *Les animaux dans le zoo sont malades* or *La pièce au deuxième étage est vide*.",
        "To avoid the English construction, use: (a) a relative clause; (b) a past participle used as an adjective; (c) a noun preceded by *de*.",
      ],
      examples: [
        { fr: "Les animaux *du zoo*." },
        {
          fr: "Les animaux qui vivent dans le zoo sont malades. La pièce qui se trouve au deuxième étage est vide.",
          en: "relative",
        },
        {
          fr: "Les animaux enfermés dans le zoo sont malades. La pièce située au deuxième étage est vide.",
          en: "past participle as adjective",
        },
        {
          fr: "Les animaux du zoo sont malades. La pièce du deuxième étage est vide.",
          en: "de",
        },
      ],
    },
    {
      heading: "II. 2 Place adverbs",
      paragraphs: [
        "A French noun cannot be completed directly by a place adverb. Do not say *Les gens en haut sont mes amis* for *The people upstairs are my friends*.",
      ],
      examples: [
        { fr: "Les gens *d'en haut*." },
        { fr: "Les gens qui sont en haut…" },
        { fr: "Les gens installés en haut…" },
        { fr: "Les gens du haut… / les gens d'en haut…" },
      ],
    },
    {
      heading: "II. 3 Demonstrative pronouns",
      paragraphs: [
        "The same rules (II. 1 and II. 2) apply to demonstrative pronouns (*celui, celle, ceux, celles*).",
        "Attention: a demonstrative pronoun cannot be completed by an adjective. You also cannot use a past participle as an adjective here. Not *Ceux blessés dans l'accident…* — use a relative.",
      ],
      examples: [
        {
          fr: "*Ceux* qui sont à l'intérieur.",
          en: "Those inside are safe → Ceux (celles) qui sont à l'intérieur / Ceux (celles) de l'intérieur",
        },
        {
          fr: "Ceux qui ont été blessés dans l'accident sont encore à l'hôpital.",
          en: "Those hurt in the accident are still in hospital. (not *Ceux blessés…*)",
        },
      ],
    },
    {
      heading: "III. 1 *à* for a characteristic",
      paragraphs: [
        "Use *à* (plus the definite article: *au, à la, aux*) to mark a physical or clothing feature, or to highlight a descriptive detail. Pattern: noun + (*à* + noun).",
        "Attention: the complement group (*à* + noun) cannot be separated from the noun it modifies; it follows immediately.",
      ],
      examples: [
        { fr: "L'homme à l'imperméable gris." },
        { fr: "Ces dames au chapeau vert.", en: "The ladies with green hats." },
        { fr: "La maison aux tuiles rouges." },
        { fr: "L'homme au masque de fer." },
        { fr: "La femme aux gants noirs." },
      ],
    },
    {
      heading: "III. 2 Not English *with*",
      paragraphs: [
        "English often uses *with*. In this context French *avec* is wrong. Use a relative, or *à* + definite article.",
      ],
      examples: [
        {
          fr: "La femme qui portait une robe rouge venait d'un pays étranger.",
          en: "The woman with the red dress came from a foreign country. (not *La femme avec une robe rouge…*)",
        },
        { fr: "La femme à la robe rouge venait d'un pays étranger." },
      ],
    },
    {
      heading: "IV. Infinitive after a noun",
      paragraphs: [
        "A noun can be followed by *à* + infinitive when that construction equals a relative clause: *une chambre à louer* (a room that one can / wants to rent).",
        "This is generally possible only if the infinitive is a *direct transitive* verb. With an indirect transitive verb, use a relative — not *un journal à s'abonner* or *une question à répondre*.",
      ],
      examples: [
        { fr: "Il y a des chambres à louer." },
        { fr: "Voici un film à voir." },
        { fr: "Une chambre à louer (chambre que l'on peut / veut louer)" },
        { fr: "Un devoir à faire (devoir que l'on doit faire)" },
        { fr: "Une machine à laver (machine qui lave)" },
        {
          fr: "Un journal auquel on doit s'abonner.",
          en: "not *un journal à s'abonner",
        },
        {
          fr: "Une question à laquelle il faut répondre.",
          en: "not *une question à répondre",
        },
      ],
    },
  ],
};
