export const chapter3 = {
  number: 3,
  title: "L'ARTICLE PARTITIF",
  tabLabel: "L'ARTICLE PARTITIF",
  slug: "3",
  pages: "27–30",
  summary: "formes, préposition de, négation, adverbes de quantité",
} as const;

export const overview = [
  {
    roman: "I.",
    title: "Formes et fonctions",
    examples: ["Nous mangeons *du* gâteau ou *de la* tarte."],
  },
  {
    roman: "II.",
    title: "Article partitif et préposition « de »",
    examples: [
      "Il me faut *de la* farine.",
      "J'ai besoin *de* farine.",
      "J'ai *du* vin ; je n'ai *pas de* vin.",
    ],
  },
  {
    roman: "III.",
    title: "Article partitif et adverbes de quantité",
    examples: [
      "Nous avons *beaucoup de* problèmes.",
      "Nous avons *bien des* problèmes.",
    ],
  },
] as const;

export const exerciseB = [
  "How do you take your coffee? - Lots of hot milk, very little sugar, please.",
  "I had a little soup at noon. It contained lots of cream.",
  "There was so much work to do!",
  "Most of the shells we find are broken.",
  "You will need a lot of courage.",
] as const;

export const exerciseD = [
  "I need some flour to make this cake.",
  "He lacks patience.",
  "You drink too much coffee.",
  "Most people drink wine.",
  "We always took too much luggage.",
  "This is not whisky, it's tea.",
  "His letter was full of mistakes.",
  "Do you have enough room?",
  "She doesn't have any imagination.",
  "I need the books I lent you.",
] as const;
