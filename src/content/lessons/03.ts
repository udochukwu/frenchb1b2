import type { Lesson } from "./types";

export const lesson3: Lesson = {
  title: "The partitive article",
  intro:
    "The partitive (*du*, *de la*, *de l'*, *des*) marks an unspecified amount of something you cannot easily count — English *some* / *any*, or no word at all (*I eat cake*). This chapter is about when to use it, and when plain *de* replaces it.",
  sections: [
    {
      heading: "I. 1 Forms",
      paragraphs: [
        "The partitive forms are *du* (masculine), *de la* (feminine), and *des* (plural). *Du* and *de la* become *de l'* before a vowel or a silent *h*.",
      ],
      examples: [
        { fr: "Au dessert, nous mangeons *du* gâteau ou *de la* tarte." },
        {
          fr: "Pour faire mon gâteau je prends *du* beurre, *de la* farine et *de l'*huile.",
        },
      ],
    },
    {
      heading: "I. 2 Use",
      paragraphs: [
        "The partitive marks an undetermined part of a whole: a quantity you cannot specify with a unit of measure (contrast chapter 1, *le kilo* / *le litre*).",
      ],
      examples: [
        { fr: "Je mange *de la* tarte." },
        { fr: "Prenez *du* café !" },
      ],
    },
    {
      heading: "II. 1 a. Verbs that already take *de*",
      paragraphs: [
        "When the noun is the complement of a verb or adjective that already requires the preposition *de* (*avoir besoin de*, *manquer de*, *être privé de*, *remplir de*…), do *not* add a partitive — use only *de*. Those expressions already include *de*.",
        "Compare *il faut de la farine* (partitive: *falloir* does not contain *de*) with *avoir besoin de farine* (*besoin de* already has *de*).",
      ],
      examples: [
        { fr: "Il me faut *de la* farine." },
        { fr: "J'ai besoin *de* farine." },
      ],
    },
    {
      heading: "II. 1 b. Determined noun",
      paragraphs: [
        "If the noun is determined (for example by a relative clause), use *de* + the definite article, not the partitive.",
      ],
      examples: [
        { fr: "J'ai besoin *de* farine.", en: "undetermined" },
        {
          fr: "J'ai besoin de *la* farine que tu as achetée.",
          en: "determined",
        },
      ],
    },
    {
      heading: "II. 2 Negation",
      paragraphs: [
        "After negation, the partitive changes to *de*.",
        "Exception: with *être* in the negative, keep the partitive.",
      ],
      examples: [
        { fr: "J'ai *du* vin ; je n'ai pas *de* vin." },
        { fr: "Ce n'est pas *du* vin." },
      ],
    },
    {
      heading: "II. 3 After *sans*",
      paragraphs: [
        "The partitive is almost never used after *sans*.",
      ],
      examples: [{ fr: "Je bois mon thé sans sucre." }],
    },
    {
      heading: "III. 1 Quantity adverbs",
      paragraphs: [
        "Adverbs of quantity (*beaucoup, trop, assez, peu, un peu, un tas…*) are followed by *de* with no article.",
      ],
      examples: [
        { fr: "Tu m'as fait beaucoup de peine." },
        { fr: "beaucoup de peine, trop de café, assez d'argent." },
        { fr: "Nous avons *beaucoup de* problèmes." },
      ],
    },
    {
      heading: "III. NB *bien* and *la plupart*",
      paragraphs: [
        "a. After the adverb *bien*, use the partitive: *bien de la chance*. With a plural noun the overview also uses *bien des* (not bare *de*): *bien des problèmes*.",
        "b. After *la plupart*, use the contracted plural article *des*.",
      ],
      examples: [
        { fr: "Tu as bien *de la* chance." },
        { fr: "Nous avons *bien des* problèmes." },
        { fr: "La plupart *des* élèves..." },
      ],
    },
  ],
};
