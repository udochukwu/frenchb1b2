export const chapter9 = {
  number: 9,
  title: "L'ADVERBE DE MANIÈRE",
  tabLabel: "L'ADVERBE DE MANIÈRE",
  slug: "9",
  pages: "68–73",
  summary: "-ment, locutions, fautes à éviter",
} as const;

export const overview = [
  {
    roman: "I.",
    title: "Adverbes en -ment",
    examples: [
      "*Heureusement*, je parle français *couramment*.",
      "Elle m'a *gentiment* aidé.",
    ],
  },
  {
    roman: "II.",
    title: "Autres adverbes de manière et locutions adverbiales",
    examples: [
      "Ne parlez pas si *fort*.",
      "Elle l'a fait *avec réticence*.",
    ],
  },
] as const;

export const formationChains = [
  "actif → active → *activement*",
  "doux → douce → *doucement*",
  "heureux → heureuse → *heureusement*",
  "long → longue → *longuement*",
  "léger → légère → *légèrement*",
] as const;

export const acuteEAdjectives =
  "commun, confus, exprès, importun, obscur, précis, profond";

export const acuteEAdverbs =
  "*communément*, *confusément*, *expressément*, *importunément*, *obscurément*, *précisément*, *profondément*";

export const vowelExceptions = [
  { adj: "gai", adv: "gaiement" },
  { adj: "impuni", adv: "impunément" },
  { adj: "traître", adv: "traîtreusement" },
] as const;

export const eMasculinePairs = [
  ["aveugle", "aveuglément"],
  ["conforme", "conformément"],
  ["commode", "commodément"],
  ["énorme", "énormément"],
  ["immense", "immensément"],
  ["uniforme", "uniformément"],
] as const;

export const entPairs = [
  ["évident", "évidemment"],
  ["négligent", "négligemment"],
  ["violent", "violemment"],
] as const;

export const antPairs = [
  ["constant", "constamment"],
  ["courant", "couramment"],
] as const;

export const exerciseA = [
  "récent",
  "courageux",
  "régulier",
  "savant",
  "prudent",
  "profond",
  "public",
  "immense",
  "poli",
  "joyeux",
] as const;

export const exerciseB = [
  "He works very quickly.",
  "This is a quick route.",
  "We'll get there quickly.",
  "Possibly he will arrive tonight.",
  "Suddenly the door opened.",
] as const;

export const exerciseC = [
  { before: "Elle travaille avec ", underline: "rapidité", after: "." },
  { before: "La vendeuse a répondu avec ", underline: "gentillesse", after: "." },
  { before: "Le chauffeur a pris son virage avec ", underline: "prudence", after: "." },
  { before: "Notre voisine nous a reçus avec ", underline: "amabilité", after: "." },
  {
    before: "Le professeur nous a expliqué ce problème avec ",
    underline: "patience",
    after: ".",
  },
  { before: "Elle danse avec ", underline: "grâce", after: "." },
  { before: "L'accusé a regardé le témoin avec ", underline: "méchanceté", after: "." },
  { before: "Ils l'ont hébergé avec ", underline: "générosité", after: "." },
  {
    before: "Les locataires sont sortis de l'immeuble ",
    underline: "avec calme",
    after: ".",
  },
  { before: "Il lui a répondu avec ", underline: "impatience", after: "." },
] as const;

export const exerciseD = [
  { before: "L'enfant joue de ", underline: "façon bruyante", after: "." },
  { before: "Mon professeur m'a parlé un ", underline: "bref moment", after: "." },
  {
    before: "Le directeur règle les problèmes d'",
    underline: "une façon systématique",
    after: ".",
  },
  { before: "Le juge l'a interrogé d'", underline: "un ton sec", after: "." },
  { before: "Il a observé son ami d'", underline: "un air triste", after: "." },
  {
    before: "Le petit garçon a répondu de ",
    underline: "façon très polie",
    after: ".",
  },
  { before: "Ils ont discuté de ", underline: "longs moments", after: "." },
  {
    before: "La journaliste a quitté la salle de ",
    underline: "façon discrète",
    after: ".",
  },
  { before: "L'employé lui a répondu sur ", underline: "un ton posé", after: "." },
  {
    before: "Il a abordé son professeur de ",
    underline: "façon abrupte",
    after: ".",
  },
] as const;

export const exerciseE = [
  { before: "Le conférencier me fatigue : il parle trop", after: "." },
  { before: "Il a encore eu un accident ; il conduit vraiment", after: "." },
  { before: "Les roses sont superbes et sentent très", after: "." },
  {
    before: "Le manteau vert et les chaussures orange ne vont pas",
    after: ".",
  },
  { before: "Chut ! Parle plus", after: "." },
  {
    before: "Cet étudiant a passé un an en France et parle maintenant français",
    after: ".",
  },
  {
    before: "Cette étudiante est très douée ; elle a été",
    after: "reçue à son examen.",
  },
  {
    before: "Cela fait plus d'un an que je ne l'ai pas rencontré ; je le vois",
    after: ".",
  },
  {
    before: "Monsieur Tartempion a annoncé",
    after: "sa candidature à la présidence.",
  },
  { before: "Ce fromage sentait trop", after: "Je l'ai jeté." },
] as const;

export const exerciseF = [
  "Their home is nicely decorated.",
  "Speak to him very frankly.",
  "That couple is truly happy.",
  "The child sings prettily.",
  "The train will certainly be leaving on time.",
] as const;

export const exerciseG = [
  "The candidate urgently requested our participation.",
  "The film follows the book closely.",
  "The pianist played movingly.",
  "We would like to sit by the window preferably.",
  "He asks for a favour convincingly.",
] as const;

export const exerciseH = [
  "ultimately",
  "truly",
  "frankly",
  "legibly",
  "nicely",
  "slowly",
  "quickly",
  "madly",
  "passively",
  "negligently",
] as const;

export const exerciseI = [
  "ultimately",
  "urgently",
  "fortunately",
  "carefully",
  "willingly",
  "grudgingly",
  "gruffly",
  "(walk) aimlessly",
  "tolerantly",
  "inadvertently",
  "effortlessly",
  "concisely",
] as const;

export const exerciseJ = [
  "He asked for me urgently.",
  "Desperately, he asked for mercy.",
  "He protested aloud.",
  "He shamelessly cheated on the exam.",
  "She chose her words carefully.",
] as const;
