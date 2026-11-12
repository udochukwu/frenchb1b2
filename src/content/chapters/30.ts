export const chapter30 = {
  number: 30,
  title: "LE SUBJONCTIF",
  tabLabel: "LE SUBJONCTIF",
  slug: "30",
  pages: "226–235",
  summary: "formes, subordonnées conjonctives et relatives, temps du subjonctif",
} as const;

export const overview = [
  {
    roman: "I.",
    title: "Formes",
    lines: [
      { fr: "Je souhaite que vous arriviez de bonne heure." },
      { fr: "Nous regrettons qu'il soit parti si tôt." },
    ],
  },
  {
    roman: "II.",
    title: "Emploi du subjonctif dans la subordonnée conjonctive",
    lines: [
      { fr: "J'exige qu'elle parte." },
      { fr: "Nous acceptons ce travail, bien qu'il soit difficile." },
    ],
  },
  {
    roman: "III.",
    title: "Emploi du subjonctif dans la subordonnée relative",
    lines: [
      { fr: "C'est la seule personne qui puisse nous aider." },
      { fr: "Je cherche un livre qui soit écrit en français." },
    ],
  },
  {
    roman: "IV.",
    title: "Les temps du subjonctif et leur emploi",
    lines: [
      { fr: "Il faudrait qu'il fasse beau demain." },
      { fr: "Elle était contente que son amie lui ait écrit." },
    ],
  },
] as const;

export const subjunctiveVerbs = [
  "boire → que je boive, que nous buvions",
  "devoir → que je doive, que nous devions",
  "faire → que je fasse, que nous fassions",
  "fuir → que je fuie, que nous fuyions",
  "pouvoir → que je puisse, que nous puissions",
  "prendre → que je prenne, que nous prenions",
  "savoir → que je sache, que nous sachions",
  "venir → que je vienne, que nous venions",
] as const;

export const exerciseI = [
  "Let's eat this mango before it is too ripe.",
  "We will go to the ball, so long as you teach us to dance.",
  "I'll tell you a secret, unless you know it already.",
  "You will not leave the table until you've finished your dinner.",
  "I will not leave the table until you've finished your dinner.",
] as const;

export const exerciseJ = [
  "I am anxious for her to arrive.",
  "I was sorry for him to lose his job.",
  "It would be better for us to leave.",
  "We were sad for her child to be sick.",
  "Would you like me to drive?",
] as const;

export const exerciseK = [
  "I want you to return all these books to the library.",
  "He expects us to do his work.",
  "I hope my team will win.",
  "The dog will stay by the door until his master comes home.",
  "You are the only person who can answer my question.",
] as const;
