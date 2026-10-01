import type { Lesson } from "./types";

export const lesson7: Lesson = {
  title: "Degrees of the adjective",
  intro:
    "French does not add *-er / -est* to adjectives. It uses *plus*, *moins*, and *aussi* for the comparative, and *le/la/les plus* or *le/la/les moins* for the relative superlative. A few adjectives (*bon, mauvais, petit*) have irregular forms. This chapter is about those degrees, how to finish the comparison (*que* vs *de*), and the difference between *aussi… que* and *si… que*.",
  sections: [
    {
      heading: "I. 1 Forming the comparative",
      paragraphs: [
        "To form the comparative of a qualifying adjective, put *plus* (superiority), *moins* (inferiority), or *aussi* (equality) in front of it.",
      ],
      examples: [
        {
          fr: "Cécile est *plus* sympathique mais *moins* travailleuse.",
          en: "Cécile is more pleasant (nicer) but less hard-working.",
        },
        { fr: "Il est *plus* intelligent.", en: "He is more intelligent." },
        { fr: "Il est *moins* intelligent.", en: "He is less intelligent." },
        { fr: "Il est *aussi* intelligent.", en: "He is as intelligent." },
      ],
    },
    {
      heading: "I. 2 Emploi — *que*, not *de* or *comme*",
      paragraphs: [
        "The comparative can stand alone. If you add a term of comparison, that term is preceded by *que*. Attention: do *not* use *de* or *comme* here.",
      ],
      examples: [
        {
          fr: "Ton appartement est *aussi* confortable *que* le mien.",
          en: "Your apartment is as comfortable as mine.",
        },
        { fr: "Il est *plus* grand *que* moi.", en: "He is bigger than me." },
        {
          fr: "Elle est *moins* jolie *que* sa sœur.",
          en: "She is less pretty than her sister.",
        },
        {
          fr: "Ils sont *aussi* beaux *que* tu le dis.",
          en: "They are as lovely as you say.",
        },
      ],
    },
    {
      heading: "I. 2 What can follow *que*",
      paragraphs: [
        "The term of comparison can be a noun, a tonic personal pronoun (*lui*, not *il*), an adverb, a subordinate clause, or a qualifying adjective.",
        "After an adjective, French can drop the repeated verb (*Elle est aussi aimable que belle*). English cannot: *He is as strict as he is fair*, not *He is as strict as fair*.",
      ],
      examples: [
        { fr: "Pierre est *aussi* intelligent *que* Paul." },
        { fr: "Elle est *plus* courageuse *que* lui." },
        { fr: "L'eau est *plus* chaude ici *que* là-bas." },
        { fr: "C'est *plus* cher *que* je ne le pensais." },
        { fr: "Elle est *aussi* aimable *que* belle." },
      ],
    },
    {
      heading: "I. 3 Strengthening *plus* / *moins*",
      paragraphs: [
        "To insist on the difference, add *bien* or *beaucoup* in front of *plus* and *moins*.",
      ],
      examples: [
        {
          fr: "Il est *bien plus* grand *que* nous.",
          en: "He is much bigger than us.",
        },
        {
          fr: "Nous sommes *beaucoup moins* riches.",
          en: "We are much less rich.",
        },
      ],
    },
    {
      heading: "II. 1 Forming the relative superlative",
      paragraphs: [
        "For the superlative of superiority or inferiority, put *plus* or *moins* in front of the adjective, together with the definite article or a possessive.",
      ],
      examples: [
        { fr: "Gaëlle est *la plus* sympathique.", en: "Gaëlle is the nicest." },
        {
          fr: "Gaëlle est *la plus* aimable.",
          en: "Gaëlle is the most friendly (friendliest).",
        },
        { fr: "Pierre est *le moins* riche.", en: "Pierre is the least rich." },
        {
          fr: "Ces dessins sont *les plus* amusants.",
          en: "These drawings are the funniest.",
        },
        {
          fr: "La gourmandise est *son plus* grand défaut.",
          en: "Greed is his greatest fault.",
        },
      ],
    },
    {
      heading: "II. 2 Emploi — complement with *de*",
      paragraphs: [
        "The superlative can stand alone. If there is a complement of reference (noun or pronoun), that complement is preceded by *de*.",
        "Attention: when the adjective normally follows the noun, it keeps that place at the superlative: *la plus belle femme* (adjective before) vs *la femme la plus sympathique* (adjective after). Same with possessives: *mon plus beau livre*, but *mon livre le plus rare*.",
      ],
      examples: [
        {
          fr: "Pierre est *le plus* gentil *de* tous.",
          en: "Peter is the kindest of all.",
        },
        {
          fr: "Ils ont coupé *les plus* gros arbres *de* la forêt.",
          en: "They cut down the biggest trees in the forest.",
        },
        {
          fr: "C'est *la plus* grande province *du* Canada.",
          en: "It is the largest province in Canada.",
        },
        { fr: "Gaëlle est la camarade *la plus* aimée." },
      ],
    },
    {
      heading: "II. 3 Absolute superlative",
      paragraphs: [
        "To mark a high degree without comparing to another element, put *très* (or *fort, bien, extrêmement, tout à fait*) in front of the adjective.",
      ],
      examples: [
        {
          fr: "Il est *très* beau ; elle est *fort* belle.",
          en: "He is very handsome; she is very beautiful.",
        },
        { fr: "Il est *très* pauvre." },
        { fr: "Elle est *fort* belle." },
        { fr: "Ils sont *bien* déçus." },
      ],
    },
    {
      heading: "II. 4 *Beaucoup* is not *très*",
      paragraphs: [
        "*Beaucoup* cannot be used as an equivalent of *très*. It cannot stand directly in front of a qualifying adjective.",
      ],
      examples: [],
    },
    {
      heading: "III. 1 Irregular *bon*, *mauvais*, *petit*",
      paragraphs: [
        "*Bon* always makes *meilleur* / *le meilleur* (good → better → best).",
        "*Mauvais* makes *pire* beside *plus mauvais*, and *le pire* beside *le plus mauvais* (bad → worse → worst). *Pire* and *plus mauvais* are often synonyms. *Pire* (less common) often marks a moral judgment (« plus détestable »); *plus mauvais* more often describes a material fact.",
        "*Petit* makes *moindre* beside *plus petit*, and *le moindre* beside *le plus petit*. Use *moindre* for value or importance; *plus petit* for physical size.",
      ],
      examples: [
        {
          fr: "Le *meilleur* dentiste de la ville.",
          en: "The best dentist in town.",
        },
        {
          fr: "La gourmandise n'est pas son *pire* défaut.",
          en: "Greed is not his worst fault.",
        },
        { fr: "Cette solution est *pire* que l'autre." },
        {
          fr: "Le sirop à la cerise est *plus mauvais* que le sirop au citron.",
        },
        {
          fr: "Il nous punit dès qu'on fait *la moindre* sottise.",
          en: "He punishes us for the smallest (least, slightest) mistake.",
        },
        {
          fr: "J'occupe *la plus petite* chambre.",
          en: "I have the smallest room.",
        },
      ],
    },
    {
      heading: "III. 2 No comparative or superlative",
      paragraphs: [
        "Adjectives that already express superiority, excellence, or a limit cannot take a comparative or superlative: *supérieur, parfait, excellent, unique, mineur*, etc. Sometimes the meaning itself forbids it (*égal*).",
        "NB: *supérieur* and *inférieur* take a complement with *à*.",
      ],
      examples: [
        { fr: "Ce magasin est *supérieur* aux autres." },
      ],
    },
    {
      heading: "III. 3 *Aussi… que* vs *si… que*",
      paragraphs: [
        "Do not confuse *aussi (grand) que* and *si (grand) que*. *Aussi… que* introduces a comparison; *si… que* introduces a consequence (*so… that*).",
        "Attention: in the consequence sentence, English may drop *that*; French cannot drop *que*.",
      ],
      examples: [
        {
          fr: "Il est *aussi* grand *que* son père.",
          en: "He is as tall as his father. (comparaison)",
        },
        {
          fr: "Il est *si* grand *qu'*il doit se baisser pour passer sous la porte.",
          en: "He is so tall that he must duck to pass through the doorway. (conséquence)",
        },
      ],
    },
  ],
};
