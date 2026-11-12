export const chapter27 = {
  number: 27,
  title: "L'ACCORD DU PARTICIPE PASSÉ",
  tabLabel: "L'ACCORD DU PARTICIPE PASSÉ",
  slug: "27",
  pages: "206–212",
  summary: "accord avec être, avec avoir, cas particuliers et verbes pronominaux",
} as const;

export const overview = [
  {
    roman: "I.",
    title: "Accord du participe passé avec « être »",
    lines: [{ fr: "Marie est sortie." }, { fr: "Nos équipes ont été battues." }],
  },
  {
    roman: "II.",
    title: "Accord du participe passé avec « avoir »",
    lines: [
      { fr: "Marie a écrit une lettre." },
      { fr: "La lettre que Paul a écrite vient d'arriver." },
    ],
  },
  {
    roman: "III.",
    title: "Cas particuliers",
    lines: [
      { fr: "Quelle belle journée il a fait !" },
      { fr: "Les livres qu'il a fait venir." },
    ],
  },
  {
    roman: "IV.",
    title: "Accord du participe passé des verbes pronominaux",
    lines: [
      { fr: "Annie s'est blessée." },
      { fr: "Paul et Marie se sont écrit." },
      { fr: "Les lettres qu'ils se sont écrites sont touchantes." },
      { fr: "Annie s'est évanouie." },
    ],
  },
] as const;

export const irregularParticiples = [
  ["devoir → dû (due)", "mourir → mort"],
  ["écrire → écrit", "plaire → plu"],
  ["émouvoir → ému", "pleuvoir → plu"],
  ["fuir → fui", "savoir → su"],
] as const;

export const exerciseH = [
  "I wrote the letter yesterday and posted it this morning.",
  "How did she know that?",
  "At what time did we arrive? Did she call us beforehand?",
  "She was born during the war.",
  "Where are your textbooks? I have lost them.",
  "How many cassettes did we buy?",
  "The five weeks I spent in France were wonderful!",
  "I was so thirsty that I drank three glasses of water.",
  "They wept when they heard the news.",
  "Why didn't he recognize them?",
] as const;

export const exerciseI =
  "Ces enfants s'intéressent à la science. Ils construisent des maquettes qu'ils s'échangent. Ils se dépêchent de finir leur exposé. Ils se demandent s'ils doivent le présenter en classe et ils s'informent auprès de leur professeur.";

export const exerciseJ = [
  "When did they get married?",
  "What make of video-recorder did he buy for himself?",
  "She went to bed early and got up at 6:00 in the morning.",
  "She bought herself a new car.",
  "Did Mary get used to studying so hard?",
  "She wondered whether I remembered the answer.",
  "We complained about the excessive price.",
  "Has she apologized for having done that?",
] as const;
