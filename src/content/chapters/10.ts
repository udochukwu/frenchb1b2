export const chapter10 = {
  number: 10,
  title: "LE PRONOM PERSONNEL",
  tabLabel: "LE PRONOM PERSONNEL",
  slug: "10",
  pages: "74–84",
  summary: "formes, y et lui, en, le, place, tonique",
} as const;

export const overview = [
  {
    roman: "I.",
    title: "Formes",
    examples: ["Il *me* voit, se dirige vers *moi* et *me* dit bonjour."],
  },
  {
    roman: "II.",
    title: "Pronom complément d'un verbe construit avec « à »",
    examples: [
      "Christine obéit aux lois ; elle *y* obéit.",
      "Christine obéit à son père ; elle *lui* obéit.",
      "Christine pense à son père ; elle pense à *lui*.",
    ],
  },
  {
    roman: "III.",
    title: "Emplois du pronom « en »",
    examples: [
      "Je veux des cerises ; j'*en* veux.",
      "Je veux trois cahiers ; j'*en* veux trois.",
      "J'ai besoin de ta voiture ; j'*en* ai besoin.",
    ],
  },
  {
    roman: "IV.",
    title: "Le pronom « le »",
    examples: [
      "Elle est malade ; elle *l'*est depuis deux mois.",
      "Sais-tu ce que je t'ai acheté pour Noël ? Oui, je *le* sais.",
    ],
  },
  {
    roman: "V.",
    title: "Place du pronom",
    examples: [
      "« Tu *me les* donneras demain », *me* dit-il.",
      "Donne-*les*-*moi* maintenant.",
      "Peut-être pourras-*tu* venir ce soir ?",
    ],
  },
  {
    roman: "VI.",
    title: "La forme tonique du pronom",
    examples: ["Il vient avec *moi*.", "*Toi* *tu* as raison."],
  },
] as const;

export const pronounForms = [
  { sujet: "je", direct: "me", indirect: "me", tonique: "moi" },
  { sujet: "tu", direct: "te", indirect: "te", tonique: "toi" },
  { sujet: "il", direct: "le (l')", indirect: "lui", tonique: "lui" },
  { sujet: "elle", direct: "la", indirect: "lui", tonique: "elle" },
  { sujet: "nous", direct: "nous", indirect: "nous", tonique: "nous" },
  { sujet: "vous", direct: "vous", indirect: "vous", tonique: "vous" },
  { sujet: "ils", direct: "les", indirect: "leur", tonique: "eux" },
  { sujet: "elles", direct: "les", indirect: "leur", tonique: "elles" },
  { sujet: "", direct: "se (s')", indirect: "se (s')", tonique: "soi" },
] as const;

export const pronounOrder = [
  ["me", "le", "lui", "", ""],
  ["te", "la", "leur", "y", "en"],
  ["se", "les", "", "", ""],
  ["nous", "", "", "", ""],
  ["vous", "", "", "", ""],
] as const;

type Span = { text: string; underline?: boolean };

export const exerciseA: { spans: Span[]; cue: string; tail: string }[] = [
  {
    spans: [
      { text: "Je comprends " },
      { text: "ses raisons", underline: true },
      { text: "." },
    ],
    cue: "Je",
    tail: "comprends.",
  },
  {
    spans: [
      { text: "Hélène écrit " },
      { text: "à ses parents", underline: true },
      { text: "." },
    ],
    cue: "Hélène",
    tail: "écrit.",
  },
  {
    spans: [
      { text: "Paul téléphone " },
      { text: "à sa femme", underline: true },
      { text: "." },
    ],
    cue: "Paul",
    tail: "téléphone.",
  },
  {
    spans: [
      { text: "Annie débarrasse " },
      { text: "la table", underline: true },
      { text: "." },
    ],
    cue: "Annie",
    tail: "débarrasse.",
  },
  {
    spans: [
      { text: "Nous apprenons " },
      { text: "les règles de grammaire", underline: true },
      { text: "." },
    ],
    cue: "Nous",
    tail: "apprenons.",
  },
];

export const exerciseB: Span[][] = [
  [
    { text: "J'habite " },
    { text: "au Canada", underline: true },
    { text: "." },
  ],
  [
    { text: "Je me suis abonné " },
    { text: "à un quotidien", underline: true },
    { text: "." },
  ],
  [
    { text: "Je pense " },
    { text: "à mes amies", underline: true },
    { text: "." },
  ],
  [
    { text: "Julien prête " },
    { text: "un livre", underline: true },
    { text: " " },
    { text: "à Benjamin", underline: true },
    { text: "." },
  ],
  [
    { text: "Je pense " },
    { text: "à mes vacances", underline: true },
    { text: "." },
  ],
  [
    { text: "Je joue " },
    { text: "aux échecs", underline: true },
    { text: "." },
  ],
  [
    { text: "Je me suis adressé " },
    { text: "à la directrice", underline: true },
    { text: "." },
  ],
  [
    { text: "Ce livre est " },
    { text: "à mon frère", underline: true },
    { text: "." },
  ],
  [
    { text: "J'écris " },
    { text: "à mes amis", underline: true },
    { text: "." },
  ],
  [
    { text: "Il fait attention " },
    { text: "à sa petite sœur", underline: true },
    { text: "." },
  ],
];

export const exerciseC = [
  "I advise her to leave.",
  "They phoned him at 2.00 am.",
  "Her children disobey her.",
  "We were thinking of you.",
  "They joined us for lunch.",
] as const;

export const exerciseD: Span[][] = [
  [
    { text: "Je m'ennuie " },
    { text: "de mes parents", underline: true },
    { text: "." },
  ],
  [
    { text: "J'ai essayé " },
    { text: "deux robes", underline: true },
    { text: "." },
  ],
  [
    { text: "J'ai envie " },
    { text: "de chocolat", underline: true },
    { text: "." },
  ],
  [
    { text: "Je me souviens " },
    { text: "de tes cousines", underline: true },
    { text: "." },
  ],
  [
    { text: "J'ai peur " },
    { text: "de l'orage", underline: true },
    { text: "." },
  ],
];

export const exerciseE = [
  "What do you think of him?",
  "Do you remember the chapter on the pronouns? No, I don't remember it at all.",
  "He won one of the races. She won two.",
  "Her film was a great hit. What did you think of it?",
  "Do you want stamps? Here is one.",
] as const;

export const exerciseF: Span[][] = [
  [
    { text: "Hélène est-elle " },
    { text: "américaine", underline: true },
    { text: " ? → Oui, " },
  ],
  [
    { text: "Penses-tu " },
    { text: "qu'il fera beau demain", underline: true },
    { text: " ? → Oui, " },
  ],
  [
    { text: "Dois-tu " },
    { text: "apprendre cette leçon par cœur", underline: true },
    { text: " ? → Oui, " },
  ],
  [
    { text: "A-t-il demandé à Nicolas " },
    { text: "de venir demain", underline: true },
    { text: " ? → Oui, " },
  ],
  [
    { text: "A-t-elle envie " },
    { text: "d'aller au cinéma ce soir", underline: true },
    { text: " ? → Oui, " },
  ],
];

export const exerciseG = [
  "Do you think they are ready? Yes, they are.",
  "Is your car disabled? Yes, it is.",
  "Do you know if she bought any bread? No, I don't know.",
  "Have you been to Paris? Yes, I just came from there.",
  "Are you satisfied? Yes, I am.",
] as const;

export const exerciseH: Span[][] = [
  [
    { text: "Envoie " },
    { text: "cette lettre", underline: true },
    { text: " " },
    { text: "à ton cousin", underline: true },
    { text: "." },
  ],
  [
    { text: "Nous avons appris " },
    { text: "la nouvelle leçon de grammaire", underline: true },
    { text: "." },
  ],
  [
    { text: "Jacques a offert " },
    { text: "des disques", underline: true },
    { text: " " },
    { text: "à ma sœur", underline: true },
    { text: "." },
  ],
  [
    { text: "Ne demande pas " },
    { text: "leur avis", underline: true },
    { text: " " },
    { text: "à tes copains", underline: true },
    { text: " !" },
  ],
  [
    { text: "Charlotte conduit " },
    { text: "sa cousine", underline: true },
    { text: " " },
    { text: "à Paris", underline: true },
    { text: "." },
  ],
];

export const exerciseI: Span[][] = [
  [
    { text: "J'ai voyagé " },
    { text: "avec mes parents", underline: true },
    { text: "." },
  ],
  [
    { text: "Je suis allé " },
    { text: "chez Hélène", underline: true },
    { text: "." },
  ],
  [
    { text: "J'ai vu ce spectacle " },
    { text: "sans mes frères", underline: true },
    { text: "." },
  ],
  [
    { text: "J'ai écrit ce livre " },
    { text: "pour mes anciennes élèves", underline: true },
    { text: "." },
  ],
  [
    { text: "Les députés ont voté une loi " },
    { text: "contre les pollueurs", underline: true },
    { text: "." },
  ],
];

export const exerciseJ: Span[][] = [
  [
    { text: "Hélène " },
    { text: "en", underline: true },
    { text: " a reçu dix." },
  ],
  [
    { text: "Michel " },
    { text: "les", underline: true },
    { text: " a données à son ami." },
  ],
  [
    { text: "Es-tu souvent allé chez " },
    { text: "eux", underline: true },
    { text: " ?" },
  ],
  [
    { text: "J'" },
    { text: "y", underline: true },
    { text: " suis allé deux fois." },
  ],
  [
    { text: "Je " },
    { text: "lui", underline: true },
    { text: " donne des leçons de français." },
  ],
  [
    { text: "Marie " },
    { text: "leur", underline: true },
    { text: " " },
    { text: "en", underline: true },
    { text: " a envoyé." },
  ],
  [
    { text: "Je " },
    { text: "le", underline: true },
    { text: " " },
    { text: "leur", underline: true },
    { text: " ai souvent répété." },
  ],
  [
    { text: "J'" },
    { text: "y", underline: true },
    { text: " pense souvent." },
  ],
  [
    { text: "Je m'" },
    { text: "en", underline: true },
    { text: " souviens." },
  ],
  [
    { text: "Ils " },
    { text: "le", underline: true },
    { text: " sont." },
  ],
];

export const exerciseK: Span[] = [
  { text: "« J'ai pressenti " },
  { text: "la peur", underline: true },
  { text: " en Afrique. Et pourtant " },
  { text: "la peur", underline: true },
  { text: " est fille du Nord ; le soleil dissipe " },
  { text: "la peur", underline: true },
  { text: " comme un brouillard. »" },
];

export const exerciseL: Span[][] = [
  [
    { text: "J'ai acheté " },
    { text: "deux tricots", underline: true },
    { text: " " },
    { text: "à ma fille", underline: true },
    { text: "." },
  ],
  [
    { text: "Visitons " },
    { text: "l'exposition", underline: true },
    { text: " " },
    { text: "avec ce guide", underline: true },
    { text: " !" },
  ],
  [
    { text: "Le professeur a rendu " },
    { text: "leur composition", underline: true },
    { text: " " },
    { text: "aux étudiants", underline: true },
    { text: "." },
  ],
  [
    { text: "N'écoute pas " },
    { text: "ces disques", underline: true },
    { text: " tout de suite !" },
  ],
  [
    { text: "J'ai ouvert " },
    { text: "ta lettre", underline: true },
    { text: " par erreur." },
  ],
  [
    { text: "Pensez " },
    { text: "à vos enfants", underline: true },
    { text: " !" },
  ],
  [
    { text: "Geneviève est allée " },
    { text: "au concert", underline: true },
    { text: " " },
    { text: "avec son amie Nicole", underline: true },
    { text: "." },
  ],
  [
    { text: "Je n'ai pas encore lu " },
    { text: "cette nouvelle de Maupassant", underline: true },
    { text: "." },
  ],
  [
    { text: "Il a toujours été jaloux " },
    { text: "de son frère", underline: true },
    { text: "." },
  ],
  [
    { text: "Je ne pense jamais " },
    { text: "à mon anniversaire", underline: true },
    { text: "." },
  ],
];

export const exerciseM = [
  "Do you understand this question? I don't.",
  "She loves that bracelet and I'm the one who gave it to her.",
  "Eggs? I have lots. I'll give you a dozen.",
  "The keys? We gave them back to you.",
  "Did you go there with them?",
  "Pass me the sugar please and give him some too.",
  "Ottawa? We came back from there last night.",
  "No doubt you're the one who invited her.",
  "Show me those sandals. Have you tried them on?",
  "Ask him to explain it to you.",
] as const;
