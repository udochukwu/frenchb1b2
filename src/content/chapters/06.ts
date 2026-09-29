export const chapter6 = {
  number: 6,
  title: "L'ADJECTIF QUALIFICATIF",
  tabLabel: "L'ADJECTIF QUALIFICATIF",
  slug: "6",
  pages: "46–54",
  summary: "place, féminins irréguliers, pluriel, majuscule, particularités",
} as const;

export const overview = [
  {
    roman: "I.",
    title: "Place",
    examples: [
      "L'étudiante *américaine* cherche à louer une *jolie* chambre *meublée*.",
    ],
  },
  {
    roman: "II.",
    title: "Féminins irréguliers",
    examples: ["Elle adore la crème *fraîche* bien *épaisse*."],
  },
  {
    roman: "III.",
    title: "Pluriel",
    examples: [
      "Elle s'est acheté des pulls *bleu foncé*, des chaussures *orange* et des gants *marron*.",
    ],
  },
  {
    roman: "IV.",
    title: "Majuscule",
    examples: ["Les *Canadiens* aiment la cuisine *chinoise*."],
  },
  {
    roman: "V.",
    title: "Particularités",
    examples: [
      "Nous avons mangé de *gros petits pois*.",
      "L'ingénieur *chimiste* se sert de produits *chimiques*.",
    ],
  },
] as const;

export const beforeNounAdjectives = [
  ["beau", "gros", "nouveau"],
  ["bon", "jeune", "petit"],
  ["court", "joli", "vieux"],
  ["gentil", "long", ""],
  ["grand", "mauvais", ""],
] as const;

export const senseChangeAdjectives = [
  ["ancien", "cher", "différent", "propre", "simple"],
  ["brave", "curieux", "grand", "sale", "triste"],
  ["certain", "dernier", "pauvre", "seul", "vrai"],
] as const;

export const irregularFeminines = [
  ["bas", "basse", "gentil", "gentille"],
  ["beau", "belle", "gras", "grasse"],
  ["blanc", "blanche", "grec", "grecque"],
  ["bref", "brève", "gros", "grosse"],
  ["épais", "épaisse", "long", "longue"],
  ["faux", "fausse", "mou", "molle"],
  ["favori", "favorite", "nouveau", "nouvelle"],
  ["fou", "folle", "public", "publique"],
  ["frais", "fraîche", "roux", "rousse"],
  ["franc", "franche", "sec", "sèche"],
] as const;

export const exerciseA = [
  "passionnant – un film",
  "bleu – le ciel",
  "bon – une émission",
  "nouveau – le programme",
  "danois – un roman",
  "long – un – paragraphe",
  "bon, intéressant – un film",
  "long, rouge – son – nez",
  "appétissant – un menu",
  "mauvais – ses – intentions",
] as const;

export const exerciseB = [
  "a nice little house",
  "a true story",
  "my own book",
  "a well-behaved child",
  "an old uncle",
  "soft butter",
  "a new hat",
  "a great wine",
  "a new hospital",
  "my dear friend",
  "an expensive book",
  "his former house",
] as const;

export const exerciseC = [
  "Elle a les yeux (bleu).",
  "J'ai assisté aux dernières rencontres (international) des joueurs d'échecs.",
  "C'est un hôpital pour les grands malades (mental).",
  "Loïc déteste les examens (oral).",
  "Ces gants (orange) n'iront pas avec mes chaussures (vert, pâle).",
] as const;

export const exerciseD = [
  "light blue eyes",
  "international relations",
  "two navy-blue sweaters",
  "pink flowers",
  "three orange signs",
  "brown cars",
  "dark green leaves",
  "some small children",
  "special cases",
  "dirty knives",
] as const;

export const exerciseE = [
  "a young Canadian",
  "a French cheese",
  "some American dollars",
  "a handsome Englishman",
  "a good German wine",
  "an old Scotsman",
  "a beautiful French woman",
  "three Mexicans",
  "a Greek law",
  "an Algerian author",
] as const;

export const exerciseG = [
  "I prefer to have my own room.",
  "The French, like the English, no longer own a large empire.",
  "Most Turks are Moslems.",
  "His only idea was to flee.",
  "You find German tourists everywhere in Europe during the summer.",
  "She is of Swiss origin; her husband is a Swede.",
  "That afternoon he had a real surprise.",
  "A good French cognac is very expensive.",
  "The Chinese form one-quarter of the world's population.",
  "Americans buy many Japanese cars.",
] as const;

export const exerciseH = [
  { adj: "dernier", rest: "ta", after: "visite." },
  { adj: "loyal", rest: "des amis", after: "" },
  { adj: "fier", rest: "elle est", after: "" },
  { adj: "vieux", rest: "un", after: "homme." },
  { adj: "international", rest: "des journaux", after: "" },
  { adj: "sérieux", rest: "une élève", after: "" },
  { adj: "beau", rest: "un", after: "habit." },
  { adj: "cher", rest: "ma", after: "amie." },
  { adj: "bon", rest: "ses", after: "notes." },
  { adj: "frais", rest: "des nouvelles", after: "" },
] as const;
