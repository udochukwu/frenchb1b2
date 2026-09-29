import type { Lesson } from "./types";

export const lesson1: Lesson = {
  title: "The definite article",
  intro:
    "French *le* (masculine singular), *la* (feminine singular), *l'* (before a vowel or silent *h*), and *les* (plural) correspond to English *the*. This chapter is about their forms, when French uses *the* where English often uses nothing, and when French prefers *the* to *my* / *his* with body parts.",
  sections: [
    {
      heading: "I. 1 a. Elision",
      paragraphs: [
        "*Le* and *la* become *l'* before a vowel or a silent *h* (*h muet*).",
      ],
      examples: [
        { fr: "*Les* tableaux de *l'*artiste sont exposés *au* musée." },
        { fr: "*l'*avion, *l'*herbe" },
      ],
    },
    {
      heading: "I. 1 a. Aspirated h",
      paragraphs: [
        "Keep *le* and *la* before an aspirated *h* (*h aspiré*). There is no elision.",
        "There is also no liaison between the plural article and a word that starts with an aspirated *h*: you do not link *les* to the following word.",
        "NB: a good dictionary (for example *Le Petit Robert*) marks words that begin with an aspirated *h*.",
      ],
      examples: [
        { fr: "*la* hauteur, *la* honte, *le* héros" },
        { fr: "*les*/héros, *les*/hauteurs" },
        { fr: "Ils ont atteint *les* hauteurs." },
      ],
    },
    {
      heading: "I. 1 b. Contractions",
      paragraphs: [
        "*à + le = au*. *à + les = aux*. *de + le = du*. *de + les = des*.",
        "Attention: *à + l'* and *de + l'* do *not* contract.",
      ],
      examples: [
        { fr: "Je vais *au* marché." },
        { fr: "Nous allons *aux* États-Unis." },
        { fr: "Je reviens *du* cinéma." },
        { fr: "Nous revenons *des* États-Unis." },
        { fr: "Je vais à *l'*aéroport. Je reviens de *l'*hôpital." },
      ],
    },
    {
      heading: "II. 1 a. General sense",
      paragraphs: [
        "French puts the definite article in front of a noun used in a general sense, where English often has no article.",
      ],
      examples: [
        {
          fr: "*L'*argent ne fait pas *le* bonheur.",
          en: "Money doesn't buy happiness.",
        },
        { fr: "*Le* temps, c'est de *l'*argent." },
      ],
    },
    {
      heading: "II. 1 b. Abstract nouns",
      paragraphs: [
        "Use the definite article in front of abstract nouns.",
      ],
      examples: [
        { fr: "*La* paresse est un défaut." },
        { fr: "*La* jalousie détruit *l'*amour." },
      ],
    },
    {
      heading: "II. 1 c. Verbs of liking and hating",
      paragraphs: [
        "Use the definite article in front of the object of verbs that mark love or hate: *aimer*, *préférer*, *détester*, and similar verbs.",
      ],
      examples: [
        { fr: "J'aime *le* cinéma mais je préfère *le* théâtre." },
      ],
    },
    {
      heading: "II. 1 d. Categories, languages, subjects",
      paragraphs: [
        "Use the definite article in front of nouns that name a species or category of people, and in front of names of languages and school subjects.",
      ],
      examples: [
        { fr: "*Les* Français sont gastronomes." },
        { fr: "*Le* français est une belle langue." },
        { fr: "*La* chimie est difficile." },
      ],
    },
    {
      heading: "II. 1 e. Units of measure",
      paragraphs: [
        "Use the definite article in front of a noun that indicates a unit of measure or a weight (English often uses *a* / *per*).",
      ],
      examples: [
        { fr: "*Les* fraises valent 3 euros *le* kilo." },
        { fr: "*L'*essence coûte 1,50 euro *le* litre." },
      ],
    },
    {
      heading: "II. 1 f. Days of the week (habit)",
      paragraphs: [
        "Use the definite article in front of a day of the week to express repetition or habit (*every Monday*, not one particular Monday).",
      ],
      examples: [
        {
          fr: "*Le* lundi, je vais à *la* piscine.",
          en: "every Monday",
        },
      ],
    },
    {
      heading: "III. 1 Geographic names",
      paragraphs: [
        "Use the definite article in front of names of continents, countries, provinces, rivers, and mountains.",
        "NB: a few countries take no article: *Israël*, *Oman*, and similar names.",
      ],
      examples: [
        {
          fr: "*Le* Canada est un pays bilingue.",
          en: "Canada is a bilingual country.",
        },
        { fr: "*Le* Saint-Laurent, *le* Québec, *le* mont Everest, *l'*Europe, *la* France." },
      ],
    },
    {
      heading: "III. 2 After *en*",
      paragraphs: [
        "The definite article drops after the preposition *en* before a feminine country name, or a masculine country name that starts with a vowel.",
      ],
      examples: [
        { fr: "Je vais *en* France." },
        { fr: "Je vais *en* Équateur." },
      ],
    },
    {
      heading: "III. 3 Origin with *de*",
      paragraphs: [
        "After *de* to mark origin, there is no article before a feminine country, or a masculine country that starts with a vowel: use *de* / *d'*.",
        "But a masculine country that starts with a consonant takes *du*.",
        "NB: this rule does not apply to *les États-Unis*, which always keep the plural article: *des États-Unis*.",
      ],
      examples: [
        { fr: "Je suis originaire d'Irak.", en: "masculine country starting with a vowel" },
        { fr: "Je viens d'Allemagne.", en: "feminine country" },
        { fr: "Je viens du Canada.", en: "masculine country starting with a consonant" },
        { fr: "Il vient des États-Unis." },
      ],
    },
    {
      heading: "III. 4 City names",
      paragraphs: [
        "City names generally take no definite article, unless they are accompanied by an adjective or a relative clause (*une proposition*).",
        "NB: some cities include the article in the name itself.",
      ],
      examples: [
        { fr: "Montréal a beaucoup changé depuis 1970." },
        { fr: "*Le* vieux Montréal a beaucoup de charme." },
        { fr: "Le Caire, Le Mans" },
        { fr: "La Haye, La Nouvelle-Orléans" },
        { fr: "Le Havre, La Rochelle" },
      ],
    },
    {
      heading: "IV. Titles",
      paragraphs: [
        "Use the definite article in front of a profession, function, or title, even when a proper name follows.",
        "Attention: drop the article in direct address. Keep it in polite formulas.",
      ],
      examples: [
        {
          fr: "*Le* président Kennedy a été assassiné à Dallas.",
          en: "President Kennedy was assassinated in Dallas.",
        },
        { fr: "*Le* docteur Schweitzer a vécu à Lambaréné." },
        { fr: "*Le* général de Gaulle a organisé la Résistance." },
        { fr: "J'ai parlé *au* capitaine Laporte." },
        { fr: "Bonjour, capitaine. Au revoir, docteur !" },
        { fr: "Monsieur le Ministre." },
      ],
    },
    {
      heading: "V. Body parts vs possessives",
      paragraphs: [
        "When the owner is obvious, French uses the definite article in front of body parts, not a possessive adjective. Phrases like *j'ai mal* and *il se lave* already show who the owner is.",
        "Attention: English marks the owner with a possessive and a simple verb (*He broke his leg*). French often marks the owner with a personal or reflexive pronoun plus the definite article — not *Il a cassé sa jambe*, but *Il s'est cassé la jambe*.",
      ],
      examples: [
        { fr: "J'ai mal *au* bras.", en: "My arm hurts." },
        { fr: "Je me suis cassé *le* bras.", en: "I broke my arm." },
        { fr: "Il se lave *les* mains." },
        { fr: "Il s'est cassé *la* jambe.", en: "He broke his leg. (not *sa jambe*)" },
        {
          fr: "Le coiffeur *me* coupe *les* cheveux.",
          en: "The hairdresser cuts my hair. (not *mes cheveux*)",
        },
      ],
    },
  ],
};
