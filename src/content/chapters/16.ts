export const chapter16 = {
  number: 16,
  title: "LES VERBES ET LES ADJECTIFS SUIVIS DE PRÉPOSITIONS",
  tabLabel: "LES VERBES ET LES ADJECTIFS SUIVIS DE PRÉPOSITIONS",
  slug: "16",
  pages: "132–137",
  summary: "verbes, adjectifs et choix des prépositions",
} as const;

export const overview = [
  {
    roman: "I.",
    title: "Verbes et prépositions + nom ou pronom",
    examples: [
      "J'ai téléphoné à ses parents.",
      "Il pense à lui ; il lui donne un conseil.",
    ],
  },
  {
    roman: "II.",
    title: "Adjectifs et prépositions",
    examples: [
      "On est responsable de ses actes.",
      "Les citoyens sont hostiles au projet.",
    ],
  },
] as const;

export const verbsWithFrenchPreposition = [
  ["entrer dans une pièce", "to enter a room"],
  ["téléphoner à quelqu'un", "to phone someone"],
  ["se marier à quelqu'un", "to marry someone"],
  ["se joindre à quelqu'un", "to join someone"],
  ["répondre à quelqu'un (ou à qqch.)", "to answer someone (or something)"],
  ["obéir à quelqu'un (ou à qqch.)", "to obey someone (or something)"],
  ["avoir besoin de quelque chose (ou de quelqu'un)", "to need something (or someone)"],
  ["s'approcher de quelqu'un (ou de qqch.)", "to approach someone (or something)"],
] as const;

export const verbsWithEnglishPreposition = [
  ["to look at something", "regarder quelque chose"],
  ["to ask for something", "demander qqch."],
  ["to hope for something", "espérer qqch."],
  ["to wait for something (or someone)", "attendre qqch. (ou qqun)."],
] as const;

export const prepositionPairs = [
  ["to think of", "penser à"],
  ["to consist of", "consister en"],
  ["to fill with", "remplir de"],
  ["to cover with", "couvrir de"],
  ["to depend on", "dépendre de"],
  ["to borrow from", "emprunter à"],
] as const;

export const meaningPairs = [
  ["penser qqch. de qqch.", "to think something of something"],
  ["penser à qqch.", "to think of, about something"],
  ["rêver de qqch., de qqun", "to dream of, about something"],
  ["rêver à qqch.", "to muse on (ponder over) something"],
  ["manquer à son devoir", "to fail in one's duty"],
  ["manquer de qqch.", "to lack, to be short of something"],
] as const;

export const adjectivePrepositionPairs = [
  ["responsible for", "responsable de"],
  ["satisfied with", "satisfait de"],
  ["pleased with", "content de"],
  ["surprised by or at", "surpris par ou de"],
  ["worried about", "inquiet de"],
] as const;

export const exerciseA = [
  ["J'ai besoin", "repos."],
  ["Jean n'a pas pu entrer", "la salle de cinéma."],
  ["Cela dépendra", "mon travail."],
  ["Élisabeth pense encore", "ses vacances."],
  ["Ses parents ont téléphoné", "directeur."],
] as const;

export const exerciseB = [
  ["Le garçon a apporté un jus de pommes", "à la cliente."],
  ["Ce savant s'intéresse", "aux enfants surdoués."],
  ["Gérard n'obéit pas", "à ses parents."],
  ["Nicole fait très attention", "à son petit frère."],
  ["Chloé a fait un baiser", "à son papa."],
] as const;

export const exerciseC = [
  ["L'automobiliste n'était pas responsable", "l'accident."],
  ["Elle est restée insensible", "ses reproches."],
  ["Je suis content", "résultats obtenus."],
  ["Nous sommes fiers", "vous."],
  ["Soyez poli", "vos supérieurs."],
] as const;

export const exerciseD = [
  "Alain – son amie – des fleurs – pour son anniversaire – envoyer",
  "hier – donner – le prof – une leçon supplémentaire – Jacques",
  "je – ma correspondante – une longue lettre – écrire – ce matin",
  "ma mère – vendre – des fruits trop mûrs – le marchand",
  "il – emprunter – son copain – des disques des Beatles",
  "acheter – demain – sa tante – un cadeau – Michel",
  "la voiture – mon père – ma sœur – prêter – samedi dernier",
  "son appui – le syndicat – les ouvriers – promettre",
  "son admirateur – son livre – dédicacer – l'écrivain",
  "son patron – un congé de maladie – l'ouvrier – demander",
] as const;

export const exerciseE = [
  ["Benjamin téléphone souvent", "à ses copains."],
  ["Les ouvriers se sont plaints", "à leur patron."],
  ["J'ai pardonné son retard", "à mon ami."],
  ["Monique pense souvent", "à ses enfants."],
  ["Elle a envoyé sa démission", "au chef de service."],
] as const;

export const exerciseF = [
  ["J'ai promis", "mon frère de jouer au tennis avec lui."],
  ["Le voleur a pénétré", "la maison par l'arrière."],
  ["Cet article est rempli", "erreurs."],
  ["Il n'a jamais pardonné", "son concurrent."],
  ["La route est couverte", "verglas."],
  ["Il a téléphoné", "service de renseignements."],
  ["Il s'est contenté", "une vague réponse."],
  ["Nous nous excusons", "notre retard."],
  ["L'enfant est privé", "dessert."],
  ["Nous assisterons", "la répétition générale."],
] as const;

export const exerciseG = [
  "À quoi pensez-vous ?",
  "À quoi s'intéressent les jeunes d'aujourd'hui ?",
  "À qui téléphonez-vous le plus souvent ?",
  "De quoi a-t-on besoin pour écrire ?",
  "De quoi dépend le succès aux examens ?",
] as const;

export const exerciseH = [
  "We are powerless to stop it.",
  "They have always been generous to me.",
  "He addressed himself to the strikers.",
  "What did you think of the new movie?",
  "I bought this car from my brother-in-law.",
] as const;

export const exerciseI = [
  "I am worried about his health.",
  "The child said something funny.",
  "The trainer entered the lion's cage.",
  "The lion obeyed the trainer.",
  "The trees were covered with ice.",
  "They borrowed money from the bank.",
  "I don't like to depend on others.",
  "The priest forgave the thief.",
  "Waiting for Godot.",
  "They are hoping for a miracle.",
] as const;
