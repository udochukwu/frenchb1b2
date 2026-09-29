import type { Lesson } from "./types";

export const lesson2: Lesson = {
  title: "The indefinite article",
  intro:
    "French *un*, *une*, and *des* correspond to English *a/an* and *some*. This chapter covers their forms, when they disappear after *être* (jobs, nationality), how to translate English *as a*, abstract nouns after *avec* / *sans*, and nouns in apposition.",
  sections: [
    {
      heading: "I. 1 Plural *des*",
      paragraphs: [
        "*Un* and *une* become *des* in the plural.",
      ],
      examples: [
        { fr: "J'ai *un* cahier, *de* bonnes idées mais pas *de* stylo." },
        { fr: "J'ai *un* livre ; j'ai *des* livres." },
      ],
    },
    {
      heading: "I. 2 *Des* → *de* before an adjective",
      paragraphs: [
        "*Des* changes to *de* in front of a noun that already has an adjective. It becomes *d'* if that adjective starts with a vowel or a silent *h*.",
      ],
      examples: [
        { fr: "Il y avait *de* jolies fleurs chez le fleuriste." },
        { fr: "Nous voulons *d'*autres exercices." },
      ],
    },
    {
      heading: "I. 3 a. Negation",
      paragraphs: [
        "*Un*, *une*, and *des* are generally replaced by *de* (or *d'*) after negation (*ne… pas*, *ne… plus*, and similar).",
      ],
      examples: [
        { fr: "J'ai *un* livre ; je n'ai pas *de* livre." },
        { fr: "J'ai *des* livres ; je n'ai plus *de* livres." },
        { fr: "Vous avez mangé *des* épinards, vous n'avez pas mangé *d'*épinards." },
      ],
    },
    {
      heading: "I. 3 b. Negative *être*",
      paragraphs: [
        "With the verb *être* in the negative, keep the indefinite article *un*, *une*, *des*.",
        "NB: rule I. 2 still applies with negative *être*: if an adjective precedes the noun, *des* still becomes *de*.",
      ],
      examples: [
        { fr: "Nous sommes *des* étudiants de première année." },
        { fr: "Nous ne sommes pas *des* étudiants de première année." },
        { fr: "Ce ne sont pas *de* bons étudiants." },
      ],
    },
    {
      heading: "II. 1 No article as attribut",
      paragraphs: [
        "The indefinite article drops in front of a noun of profession, nationality, or religion when that noun is an *attribut* — used with *être*, *sembler*, *devenir*, and similar verbs.",
        "NB: in that case a nationality adjective is not capitalized.",
      ],
      examples: [
        { fr: "Elle *est étudiante*." },
        { fr: "M. Dupont est professeur.", en: "Mr Dupont is a professor." },
        {
          fr: "Charlotte et Sylvie sont françaises.",
          en: "Charlotte and Sylvie are French.",
        },
      ],
    },
    {
      heading: "II. 2 a. When the noun is qualified",
      paragraphs: [
        "If the attribut noun is qualified by an adjective, or completed by a relative clause, the article comes back.",
      ],
      examples: [
        { fr: "C'est *une étudiante* consciencieuse." },
        {
          fr: "M. Dupont est *un* bon professeur.",
          en: "Mr Dupont is a good professor.",
        },
        {
          fr: "Charlotte et Sylvie sont *des Françaises* qui font un stage.",
          en: "Charlotte and Sylvie are French women who are doing a training programme.",
        },
      ],
    },
    {
      heading: "II. 2 b. *Il/elle* vs *ce/c'*",
      paragraphs: [
        "When the article appears (because the noun is qualified), or when the noun is not qualified but you still want the article, you must replace the third-person subject pronoun (*il, elle, ils, elles*) with the demonstrative *ce* or *c'*.",
        "Say *Elle est américaine* (unqualified nationality attribut). Do *not* say *Elle est une Américaine.* Use *C'est une Américaine* instead.",
      ],
      examples: [
        { fr: "C'est *une étudiante*." },
        { fr: "C'est *une* Américaine.", en: "She is an American." },
        { fr: "C'est *une jeune* Américaine.", en: "She is a young American." },
        {
          fr: "Ce sont *des* américains qui viennent de Californie.",
          en: "They are Americans from California.",
        },
      ],
    },
    {
      heading: "III. Translating English *as a*",
      paragraphs: [
        "After *comme* or *en tant que* introducing a title, a reference, or a quality, French generally uses no article.",
      ],
      examples: [
        { fr: "En tant que spécialiste...", en: "As a specialist..." },
        {
          fr: "En tant que citoyen, j'ai le droit de voter.",
          en: "As a citizen, I have the right to vote.",
        },
        {
          fr: "Que veux-tu comme dessert ?",
          en: "What would you like as dessert?",
        },
        {
          fr: "En tant que médecin je vous conseille de ne plus fumer.",
          en: "As a doctor I advise you to give up smoking.",
        },
      ],
    },
    {
      heading: "IV. Abstract nouns after *avec* / *sans*",
      paragraphs: [
        "Abstract nouns after *avec* or *sans* take no indefinite article if the noun is not qualified.",
        "But unlike English, if the abstract noun *is* qualified, French uses the indefinite article.",
      ],
      examples: [
        { fr: "Il a lutté avec courage, avec *un* courage admirable." },
        { fr: "Ils avançaient avec prudence.", en: "They proceeded with caution." },
        { fr: "Ils ont joué avec enthousiasme.", en: "They played with enthusiasm." },
        { fr: "Ils écoutaient avec attention.", en: "They listened with care." },
        {
          fr: "Ils avançaient avec *une* prudence remarquable.",
          en: "They proceeded with great caution.",
        },
        {
          fr: "Elles écoutaient avec *une* attention soutenue.",
          en: "They listened with intense care.",
        },
      ],
    },
    {
      heading: "V. Apposition",
      paragraphs: [
        "In front of a noun in apposition (extra information next to another noun), French generally puts no indefinite article — unlike English *a professor of chemistry…*. The apposition can sit after the name or at the start of the sentence.",
      ],
      examples: [
        {
          fr: "Spécialiste de renommée mondiale, *M. Massicote* a été reçu à l'académie.",
        },
        { fr: "Louis XIV, *roi de France*, est mort en 1715." },
        {
          fr: "M. Dampierre, *directeur* de la compagnie depuis dix ans, a pris sa retraite.",
        },
        {
          fr: "*Directeur* de la compagnie depuis dix ans, M. Dampierre a pris sa retraite.",
        },
        {
          fr: "Professeur de chimie à l'université Yale, M. Harris est le premier à recevoir le prix Nobel à l'âge de 29 ans.",
          en: "A professor of chemistry at Yale University, Mr. Harris is the first to receive the Nobel Prize at twenty-nine.",
        },
      ],
    },
  ],
};
