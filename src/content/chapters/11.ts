export const chapter11 = {
  number: 11,
  title: "L'OPPOSITION « IL EST » / « C'EST »",
  tabLabel: "L'OPPOSITION « IL EST » / « C'EST »",
  slug: "11",
  pages: "85–93",
  summary: "it is, adjectif, profession, temps, mise en relief",
} as const;

export const overview = [
  {
    roman: "I.",
    title: "Traduction de « it is »",
    examples: [
      "Où est mon stylo ? *Il* est sur la table.",
      "Où est ma bague ? *Elle* est sur la table.",
    ],
  },
  {
    roman: "II.",
    title: "« Il est » / « C'est » + adjectif",
    examples: [
      "*Il* est souhaitable que vous veniez.",
      "*Il* est bon de partir.",
      "*C'est* bon à manger.",
    ],
  },
  {
    roman: "III.",
    title:
      "Traduction de « he is » / « she is » + nom de profession et de nationalité",
    examples: [
      "*Elle* est architecte.",
      "*C'est* une architecte renommée.",
    ],
  },
  {
    roman: "IV.",
    title: "« Il est » et l'expression du temps",
    examples: ["*Il* est cinq heures."],
  },
  {
    roman: "V.",
    title: "« C'est… qui » / « C'est… que » et la mise en relief",
    examples: [
      "*C'est* lui qui me l'a dit.",
      "*C'est* à Paris que je suis né.",
    ],
  },
  {
    roman: "VI.",
    title: "« Il est » et « c'est » dans la phrase segmentée",
    examples: [
      "Ton père, *il* est patient ?",
      "Le pouvoir, *c'est* dangereux.",
    ],
  },
] as const;

type Span = { text: string; underline?: boolean };

export const exerciseB = [
  "She is an American.",
  "He was a well-known surgeon.",
  "And his brother? He was a clergyman.",
  "He is an author.",
  "I don't know if he is a good actor.",
] as const;

export const exerciseC = [
  "It's nice outside.",
  "It's spring today.",
  "It's 5 o'clock in the afternoon.",
  "It was cold yesterday.",
  "It was New Year's Eve.",
] as const;

export const exerciseD: Span[][] = [
  [
    { text: "Je voudrais " },
    { text: "votre avis", underline: true },
    { text: "." },
  ],
  [
    { text: "" },
    { text: "Elle", underline: true },
    { text: " vous le dira." },
  ],
  [
    { text: "Vous le rencontrerez " },
    { text: "à la sortie du lycée", underline: true },
    { text: "." },
  ],
  [
    { text: "Ils travaillent " },
    { text: "pour obtenir un bon salaire", underline: true },
    { text: "." },
  ],
  [
    { text: "" },
    { text: "Ses parents", underline: true },
    { text: " ont payé ses études." },
  ],
];

export const exerciseE = [
  "Les ordinateurs sont difficiles à faire fonctionner.",
  "La pêche est un sport qui demande de la patience.",
  "Enseigner aux petits enfants exige du courage.",
  "Mon ordinateur est difficile à faire fonctionner.",
  "Le thé est une boisson désaltérante.",
] as const;

export const exerciseF = [
  "I can't lift your suitcase, it's too heavy.",
  "If you leave water on the blade, it'll rust.",
  "Where is my briefcase? It is behind the door.",
  "I didn't like that new film. It was too violent.",
  "I have finished this exercise. It was easy.",
] as const;

export const exerciseG = [
  "It would be wise to leave now.",
  "It's pleasant to hear.",
  "It is tiring to work 10 hours a day.",
  "It is to be hoped that they will arrive on time.",
  "It was easy to check.",
] as const;

export const exerciseI = [
  "There is the house. It's for sale.",
  "There are the mountains. It's not far now.",
  "He is a pilot. It's an interesting job.",
  "Buy a frozen meal. It's ready to cook.",
  "It was hot and sunny yesterday.",
  "It was winter when I arrived in Australia.",
  "Is he telling the truth? It's hard to know.",
  "She's an artist.",
  "Her father was a very famous artist.",
  "It's impossible to speak French like a Frenchman.",
] as const;
