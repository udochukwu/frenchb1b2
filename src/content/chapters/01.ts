export const chapter1 = {
  number: 1,
  title: "L'ARTICLE DÉFINI",
  tabLabel: "L'ARTICLE DÉFINI",
  slug: "1",
  pages: "15–21",
  summary: "formes, emplois, noms géographiques, titres, possessif",
} as const;

export const overview = [
  {
    roman: "I.",
    title: "Formes",
    examples: [
      "*Les* tableaux de *l'*artiste.",
      "Ils ont atteint *les* hauteurs.",
      "Je vais *au* cinéma.",
    ],
  },
  {
    roman: "II.",
    title: "Emplois",
    examples: [
      "*L'*argent ne fait pas *le* bonheur.",
      "J'aime *le* cinéma.",
      "*Les* Français sont gastronomes.",
      "*Les* fraises valent 3 euros *le* kilo.",
    ],
  },
  {
    roman: "III.",
    title: "Devant les noms géographiques",
    examples: ["*Le* Canada est un pays bilingue."],
  },
  {
    roman: "IV.",
    title: "Devant les titres",
    examples: ["*Le* président Kennedy a été assassiné à Dallas."],
  },
  {
    roman: "V.",
    title: "Article défini et adjectif possessif",
    examples: ["J'ai mal *au* bras.", "Je me suis cassé *le* bras."],
  },
] as const;

export const contractions = [
  { formula: "à + le = au", example: "Je vais *au* marché." },
  { formula: "à + les = aux", example: "Nous allons *aux* États-Unis." },
  { formula: "de + le = du", example: "Je reviens *du* cinéma." },
  { formula: "de + les = des", example: "Nous revenons *des* États-Unis." },
] as const;

export const exerciseA = [
  {
    before: "Dès",
    parts: ["lever", "jour,", "vacanciers partent pour", "plage."],
  },
  {
    before: "",
    parts: ["avions atterrissent à", "aéroport."],
  },
  {
    before: "Nous allons",
    parts: ["cinéma après", "dîner."],
  },
  {
    before: "Ils reviennent",
    parts: ["États-Unis."],
  },
  {
    before: "",
    parts: ["herbe est verte, mais", "héros est fatigué."],
  },
] as const;

export const exerciseB = [
  "Gas is expensive these days.",
  "I like cinema but I prefer theatre.",
  "The French are gourmets.",
  "Strawberries cost 3 euros a kilo.",
  "On Mondays I go to the pool.",
] as const;

export const citiesWithArticle = [
  ["Le Caire", "Le Mans"],
  ["La Haye", "La Nouvelle-Orléans"],
  ["Le Havre", "La Rochelle"],
] as const;

export const exerciseC = [
  { prefix: "", mid: "Ottawa est la capitale", suffix: "Canada." },
  { prefix: "", mid: "Écosse est célèbre pour son whisky.", suffix: null },
  { prefix: "J'aime beaucoup", mid: "Paris du XIXe siècle.", suffix: null },
  { prefix: "Elles ont passé un mois", mid: "Angleterre.", suffix: null },
  { prefix: "Je reviens", mid: "Floride.", suffix: null },
] as const;

export const exerciseD = [
  "Queen Elizabeth went to Spain.",
  "Princess Diana was speaking to Prime Minister Tony Blair.",
  "Pope John Paul II arrives in Canada today.",
  "Captain Cook was a famous navigator.",
  "President Chirac collects Inuit sculpture.",
] as const;

export const exerciseE = [
  "She broke her right arm.",
  "Barbara washed her hair this morning.",
  "Marc sprained his ankle.",
  "I took his hand.",
  "His mother cut his nails.",
] as const;

export const exerciseF = [
  "habit",
  "haricot",
  "héros",
  "héroïne",
  "hôpital",
  "hélicoptère",
  "huile",
  "hache",
  "herbe",
  "habitude",
  "hâte",
  "hanche",
  "halte",
  "handicap",
  "heure",
  "hausse",
  "histoire",
  "hiérarchie",
  "hasard",
  "hésitation",
  "honte",
  "harmonie",
  "hantise",
  "hutte",
  "hypothèse",
] as const;

export const exerciseG = [
  "I like cinema and classical music.",
  "Spain is south of France.",
  "One must cross Manitoba, Saskatchewan and Alberta to reach British Columbia.",
  "I studied German but still cannot speak it.",
  "Queen Rania of Jordan takes care of her own children.",
  "Is it true that wisdom only comes with age?",
  "I hate grammar.",
  "Is Belgium located north east or north west of France?",
  "The hero lived in New Orleans.",
  "Children love fairy tales.",
] as const;

export const exerciseH = {
  prompt:
    "H. À l'aide des mots donnés, faites une phrase dans laquelle vous utiliserez l'article défini contracté.",
  model: {
    cue: "s'abonner/journal local",
    sentence: "Je m'abonne *au* journal local.",
  },
  items: [
    { cue: "revenir/camp de voile/hier", start: "Ils" },
    { cue: "aller/États-Unis/le mois prochain", start: "Nous" },
    { cue: "échouer/le dernier test", start: "Cet étudiant" },
    { cue: "s'occuper/dîner", start: "Jacques" },
    { cue: "enseigner/étudiants de première année", start: "Ce professeur" },
    { cue: "participer/élections", start: "Pierre" },
    { cue: "avoir peur/araignées", start: "L'enfant" },
    { cue: "jouer/piano/depuis deux ans", start: "Martine" },
    { cue: "aller/Mexique/le mois prochain", start: "Marc" },
    { cue: "s'intéresser/résultats des élections", start: "Le candidat" },
  ],
} as const;
