export const chapter13 = {
  number: 13,
  title: "LES ADJECTIFS ET LES PRONOMS POSSESSIFS",
  tabLabel: "LES ADJECTIFS ET LES PRONOMS POSSESSIFS",
  slug: "13",
  pages: "106–115",
  summary: "mon, le mien, article défini",
} as const;

export const overview = [
  {
    roman: "I.",
    title: "Formes",
    examples: [
      "On fête *son* anniversaire ; on fêtera *le mien* plus tard.",
    ],
  },
  {
    roman: "II.",
    title: "Adjectif possessif",
    examples: [
      "Merci de *ton* aimable invitation.",
      "Ils ont risqué *leur* vie.",
    ],
  },
  {
    roman: "III.",
    title: "Pronom possessif",
    examples: ["Je prendrai *mon* auto ; prenez *la vôtre*."],
  },
  {
    roman: "IV.",
    title: "Emplois",
    examples: [
      "Elle a fermé *les* yeux ; elle a fermé *ses* grands yeux noirs.",
    ],
  },
] as const;

export const adjectiveForms = [
  { person: "1re pers. sg. (je)", m: "mon", f: "ma", p: "mes" },
  { person: "2e pers. sg. (tu)", m: "ton", f: "ta", p: "tes" },
  { person: "3e pers. sg. (il, elle, on)", m: "son", f: "sa", p: "ses" },
  { person: "1re pers. pl. (nous)", m: "notre", f: "notre", p: "nos" },
  { person: "2e pers. pl. (vous)", m: "votre", f: "votre", p: "vos" },
  { person: "3e pers. pl. (ils, elles)", m: "leur", f: "leur", p: "leurs" },
] as const;

export const pronounForms = [
  {
    person: "1re pers. du sg. (je)",
    sm: "le mien",
    sf: "la mienne",
    pm: "les miens",
    pf: "les miennes",
  },
  {
    person: "2e pers. du sg. (tu)",
    sm: "le tien",
    sf: "la tienne",
    pm: "les tiens",
    pf: "les tiennes",
  },
  {
    person: "3e pers. du sg. (il, elle, on)",
    sm: "le sien",
    sf: "la sienne",
    pm: "les siens",
    pf: "les siennes",
  },
  {
    person: "1re pers. du pl. (nous)",
    sm: "le nôtre",
    sf: "la nôtre",
    pm: "les nôtres",
    pf: "les nôtres",
  },
  {
    person: "2e pers. du pl. (vous)",
    sm: "le vôtre",
    sf: "la vôtre",
    pm: "les vôtres",
    pf: "les vôtres",
  },
  {
    person: "3e pers. du pl. (ils, elles)",
    sm: "le leur",
    sf: "la leur",
    pm: "les leurs",
    pf: "les leurs",
  },
] as const;

export const exerciseB = [
  "Our cat and their dog get along very well together.",
  "His question and our answer made everyone laugh.",
  "They spent their lives working.",
  "My friends are your friends, aren't they?",
  "She lost her watch too.",
  "Is your family planning to stay in France this summer?",
  "They all left on their motorcycles.",
  "He refused my invitation.",
  "She lost her hat and her gloves.",
  "My neighbours sold their house.",
] as const;

export const exerciseG = [
  "Raise your left elbow.",
  "His grandfather has lost his memory.",
  "Is this book yours? I thought it was mine.",
  "She washed her hair.",
  "A neighbour of his has just won the lottery.",
  "His mother and aunt were both born in Austria.",
  "Give him his share.",
  "I know the way with my eyes closed.",
  "Is that your dog?",
  "No. It is his.",
] as const;
