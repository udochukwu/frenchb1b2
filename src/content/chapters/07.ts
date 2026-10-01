export const chapter7 = {
  number: 7,
  title: "LES DEGRÉS DE L'ADJECTIF",
  tabLabel: "LES DEGRÉS DE L'ADJECTIF",
  slug: "7",
  pages: "55–60",
  summary: "comparatif, superlatif, irréguliers",
} as const;

export const overview = [
  {
    roman: "I.",
    title: "Comparatif",
    examples: [
      "Cécile est *plus* sympathique mais *moins* travailleuse.",
      "Ton appartement est *aussi* confortable *que* le mien.",
    ],
  },
  {
    roman: "II.",
    title: "Superlatif",
    examples: [
      "Gaëlle est l'étudiante *la plus* dynamique du groupe mais *la moins* studieuse.",
      "Gaëlle est *très* dynamique.",
    ],
  },
  {
    roman: "III.",
    title: "Comparatifs et superlatifs irréguliers",
    examples: [
      "Le *meilleur* dentiste de la ville.",
      "La gourmandise n'est pas son *pire* défaut.",
    ],
  },
] as const;

export const exerciseA = [
  "vinaigre – acide – vin",
  "agneau – féroce – tigre",
  "Californie – peuplée – Alaska",
  "acier – résistant – plomb",
  "tortue – rapide – lièvre",
  "camion – rapide – Ferrari",
  "homme – intelligent – femme",
  "Guadeloupe – grande – Australie",
  "truffe – rare – radis",
  "montagne – haute – colline",
] as const;

export const exerciseB = [
  "Cette femme est heureuse.",
  "Ce journal est intéressant.",
  "Ces exercices sont difficiles.",
  "Cette actrice est célèbre.",
  "Cette région est touristique.",
] as const;

export const exerciseC = [
  "They are less rich than their cousins.",
  "Which one of the books is more interesting?",
  "The nicest tree in the forest.",
  "The traffic is worse this summer.",
  "The most intelligent student.",
  "His house is the largest in the street.",
  "The coffee was so hot I couldn't drink it.",
  "She isn't as pretty as her mother.",
  "She is the best in the class.",
  "The film is better than the book.",
] as const;

export const exerciseD = [
  "un camion / une auto",
  "un roman policier / une thèse d'université",
  "un steak-frites / un sandwich au jambon",
  "un enfant / un adulte",
  "une 2 CV Citroën / une Rolls-Royce",
  "un manteau / un imperméable",
] as const;

export const exerciseE = [
  "Néron était l'empereur le plus méconnu.",
  "Palissy était l'inventeur le plus connu.",
  "Nicolas est l'élève le plus turbulent.",
  "Le mont Blanc est le sommet le plus élevé d'Europe.",
  "L'hiver est la saison la plus froide.",
] as const;

export const exerciseF = [
  "timbre / rare / collection",
  "moyen de transport / rapide / Paris",
  "monument / célèbre / capitale",
  "avion / moderne / compagnie",
  "nouvelle / surprenante / journal télévisé",
] as const;

export const exerciseG = [
  { before: "J'ai été aussi inquiet", after: "toi." },
  { before: "L'hiver n'est pas plus rigoureux", after: "celui de l'année dernière." },
  { before: "C'est la blague la plus drôle", after: "toutes." },
  { before: "C'est le plus grand artiste", after: "sa génération." },
  { before: "Elle est moins jolie", after: "sa sœur." },
  { before: "Le billet est plus cher", after: "je ne le pensais." },
  { before: "C'est le coureur le plus rapide", after: "l'équipe." },
  { before: "Ce roman est moins intéressant", after: "le précédent." },
  { before: "C'est la personne la moins intéressée", after: "groupe." },
  { before: "Cet enfant est aussi intelligent", after: "sa sœur." },
] as const;
