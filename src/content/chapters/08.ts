export const chapter8 = {
  number: 8,
  title: "L'ADVERBE",
  tabLabel: "L'ADVERBE",
  slug: "8",
  pages: "61–67",
  summary: "nature, tout, place, degrés",
} as const;

export const overview = [
  {
    roman: "I.",
    title: "Nature et fonction",
    examples: [
      "Je vais *très* bien.",
      "Je pose mon livre sur la table ; je pose mon livre *dessus*.",
    ],
  },
  {
    roman: "II.",
    title: "L'adverbe « tout »",
    examples: [
      "Nous sommes *tout* perdus.",
      "La terre était *toute* recouverte de neige.",
    ],
  },
  {
    roman: "III.",
    title: "Place des adverbes",
    examples: [
      "Elle sait *toujours* tout.",
      "Ils ont *beaucoup* aimé le spectacle.",
    ],
  },
  {
    roman: "IV.",
    title: "Les degrés de l'adverbe",
    examples: [
      "C'est elle qui travaille *le mieux*.",
      "*Plus* il est fatigué, *plus* il fait d'erreurs.",
    ],
  },
] as const;

export const prepositions = [
  "hors de, en dehors de",
  "sur",
  "en haut de, en bas de",
  "sous, en dessous de",
] as const;

export const adverbsOfPlace = [
  "dehors",
  "dessus",
  "là-haut, en haut, en bas",
  "dessous",
] as const;

export const irregularAdverbs = [
  { base: "bien", comparative: "mieux", superlative: "le mieux" },
  { base: "mal", comparative: "pire", superlative: "le pire" },
  { base: "peu", comparative: "moins", superlative: "le moins" },
  { base: "beaucoup", comparative: "plus (ou davantage)", superlative: "le plus" },
] as const;

export const exerciseA = [
  "The suitcase is under the table. Put it on top!",
  "He is waiting for us outside.",
  "Is my package on the floor? No, it's up there.",
  "He has rented the apartment above mine.",
  "They are my next door neighbours.",
] as const;

export const exerciseB = [
  { adv: "hier", sentence: "Je l'ai rencontré." },
  { adv: "beaucoup", sentence: "Il a travaillé pour son examen." },
  { adv: "souvent", sentence: "Ils vont au cinéma." },
  { adv: "dehors", sentence: "Il fait très froid." },
  { adv: "intelligemment, très", sentence: "Il a répondu." },
] as const;

export const exerciseC = [
  "I like my work more and more.",
  "The pig is getting fatter and fatter.",
  "Our team is playing better and better.",
  "The more she spends, the happier she is.",
  "I like this book less and less.",
] as const;

export const exerciseD = [
  { adv: "silencieusement", sentence: "Le voleur est entré dans la maison." },
  { adv: "après-demain", sentence: "Nous irons au théâtre." },
  { adv: "trop", sentence: "Nous avons mangé." },
  { adv: "bien", sentence: "Elle a dormi la nuit dernière." },
  { adv: "ici", sentence: "Je laisserai mon parapluie." },
] as const;

export const exerciseE = [
  "I did it yesterday.",
  "She did it right away.",
  "Will you have finished the book tomorrow?",
  "We have travelled nearly everywhere.",
  "He left the packages outside.",
  "Did he come here?",
  "I ran to the store quickly.",
  "The sun was sinking very slowly into the sea.",
  "After many revisions the book was finally published.",
  "I think she will soon be a mother.",
] as const;

export const exerciseF = [
  "The situation is becoming less and less advantageous.",
  "Our winters seem to be getting less and less rigorous.",
  "The more I worry, the less I sleep.",
  "The more she studies, the more she finds French interesting.",
  "Athletes today have to train more and more intensely.",
] as const;

export const exerciseG = [
  "Everyone treated me very kindly.",
  "This milk smells bad.",
  "Please speak more loudly.",
  "He was profoundly disappointed.",
  "Wait for me outside.",
] as const;

export const exerciseH = [
  "They were quite drenched.",
  "The sky is completely blue.",
  "The pie was completely burned.",
  "Our hotel is quite close.",
  "The room was totally flooded with sunlight.",
] as const;
