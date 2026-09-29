import type { Lesson } from "./types";

export const lesson6: Lesson = {
  title: "The qualifying adjective",
  intro:
    "Unlike English, most French qualifying adjectives follow the noun. A short list of common adjectives goes before it. Placement can change meaning. This chapter also covers irregular feminines, plurals (including colours), capitals for nationality, and adjectives that only apply to people.",
  sections: [
    {
      heading: "I. 1 After the noun",
      paragraphs: [
        "Unlike English, most qualifying adjectives are placed *after the noun*. In particular, place after the noun:",
        "a. adjectives of shape and colour; b. adjectives that mark a category (geographic, religious, social, historical, etc.); c. adjectives formed from a participle (past or present); d. adjectives followed by a complement; e. polysyllabic adjectives qualifying a one-syllable noun.",
      ],
      examples: [
        {
          fr: "L'étudiante *américaine* cherche à louer une *jolie* chambre *meublée*.",
          en: "The American student is looking for a nice furnished room to rent.",
        },
        { fr: "Une pièce *rectangulaire*. Une robe *rose*." },
        { fr: "Du fromage *suisse*. Un enfant *juif*. La classe *ouvrière*. Une église *médiévale*." },
        { fr: "Un ouvrier *spécialisé*. Un travail *éreintant*." },
        { fr: "Un étudiant *fier de ses succès*." },
        { fr: "Un film *épouvantable*." },
      ],
    },
    {
      heading: "I. 2 Before the noun",
      paragraphs: [
        "A certain number of everyday adjectives — often monosyllabic — go *before the noun*: *beau, bon, court, gentil, grand, gros, jeune, joli, long, mauvais, nouveau, petit, vieux*.",
        "Attention: *beau*, *nouveau* and *vieux* change form before a masculine singular noun starting with a vowel or a silent *h*: *bel, nouvel, vieil*. The same for *mou → mol* and *fou → fol*.",
      ],
      examples: [
        { fr: "Un *bon* disque de jazz." },
        { fr: "La *petite* musique de nuit." },
        { fr: "Un *nouveau* magasin." },
        { fr: "Un *bel* arbre (de beaux arbres)." },
        { fr: "Un *nouvel* hôtel (de nouveaux hôtels)." },
        { fr: "Un *vieil* ami (de vieux amis)." },
        { fr: "Un *mol* oreiller." },
        { fr: "Un *fol* entêtement." },
      ],
    },
    {
      heading: "I. 3 Several adjectives",
      paragraphs: [
        "When there are several adjectives, each keeps the place it would occupy on its own.",
      ],
      examples: [
        { fr: "Une *belle* robe *bleue* (une belle robe ; une robe bleue)." },
        {
          fr: "Une *gentille* étudiante *allemande* (une gentille étudiante ; une étudiante allemande).",
        },
        { fr: "Un *beau petit* chien (un beau chien ; un petit chien)." },
        {
          fr: "Une église *médiévale intéressante* (une église médiévale ; une église intéressante).",
        },
      ],
    },
    {
      heading: "I. 4 Sense changes with place",
      paragraphs: [
        "Some adjectives change meaning according to whether they stand before or after the noun. Figurative sense → *before* the noun; literal sense → *after*.",
        "Among these adjectives: *ancien, cher, différent, propre, simple* ; *brave, curieux, grand, sale, triste* ; *certain, dernier, pauvre, seul, vrai*.",
      ],
      examples: [
        {
          fr: "Une femme *pauvre* : qui n'a pas d'argent (sens propre).",
        },
        {
          fr: "Une *pauvre* femme : qui inspire la pitié (sens figuré).",
        },
        { fr: "Un *ancien* hôpital :", en: "a former hospital." },
        { fr: "Un hôpital *ancien* :", en: "an ancient hospital." },
        { fr: "Un *brave* homme :", en: "a kind man." },
        { fr: "Une femme *brave* (courageuse) :", en: "a brave woman." },
        { fr: "Trois livres *différents* :", en: "three different books." },
        { fr: "*Différents* livres :", en: "various books." },
        {
          fr: "Le *dernier* mois de l'année :",
          en: "the last month of the year.",
        },
        {
          fr: "Je l'ai vue le mois *dernier* :",
          en: "I saw her last month.",
        },
      ],
    },
    {
      heading: "I. 5 Either side, same sense",
      paragraphs: [
        "Some adjectives can stand before or after the noun without changing meaning. But if the adjective is shorter than the noun, it tends to go *before*.",
      ],
      examples: [
        {
          fr: "J'ai vu une *magnifique* voiture. = J'ai vu une voiture *magnifique*.",
        },
        { fr: "Un *bref* entretien." },
      ],
    },
    {
      heading: "II. 1 Regular feminine",
      paragraphs: [
        "In general, form the feminine of adjectives by adding *-e* to the masculine.",
      ],
      examples: [
        {
          fr: "Elle adore la crème *fraîche* bien *épaisse*.",
          en: "She loves very thick fresh cream.",
        },
        { fr: "grand → grande ; joli → jolie" },
      ],
    },
    {
      heading: "II. 2 Irregular feminines",
      paragraphs: [
        "These masculines have irregular feminines (learn the pairs):",
      ],
      examples: [
        { fr: "bas → basse ; gentil → gentille" },
        { fr: "beau → belle ; gras → grasse" },
        { fr: "blanc → blanche ; grec → grecque" },
        { fr: "bref → brève ; gros → grosse" },
        { fr: "épais → épaisse ; long → longue" },
        { fr: "faux → fausse ; mou → molle" },
        { fr: "favori → favorite ; nouveau → nouvelle" },
        { fr: "fou → folle ; public → publique" },
        { fr: "frais → fraîche ; roux → rousse" },
        { fr: "franc → franche ; sec → sèche" },
      ],
    },
    {
      heading: "II. 3 Doubled consonant",
      paragraphs: [
        "Adjectives ending in *-el, -eil, -en* and *-on* double the consonant in the feminine.",
      ],
      examples: [
        { fr: "cruel → cruelle ; ancien → ancienne" },
        { fr: "pareil → pareille ; bon → bonne" },
      ],
    },
    {
      heading: "III. 1–2 Regular plural and *-al*",
      paragraphs: [
        "In general, form the plural of adjectives by adding *-s*: *grand → grands ; grande → grandes*.",
        "Adjectives in *-al* form the feminine plural in *-ales* and the masculine plural in *-aux*. Exception: *des chantiers navals*.",
      ],
      examples: [
        { fr: "Des joueurs *internationaux* se rencontrent en matchs *amicaux*." },
        { fr: "des navettes *spatiales* ; des cours *spéciaux*" },
        { fr: "des chantiers *navals*" },
      ],
    },
    {
      heading: "III. 3 Colour adjectives",
      paragraphs: [
        "The adjectives *orange* and *marron*, and compound colour adjectives, are *invariable*. Say *bleu marine*, not *bleu marin*.",
      ],
      examples: [
        {
          fr: "Elle s'est acheté des pulls *bleu foncé*, des chaussures *orange* et des gants *marron*.",
        },
        { fr: "des cravates *rose bonbon* ; des serviettes *bleu pâle*" },
        { fr: "Elle a des gants *bleu marine*." },
      ],
    },
    {
      heading: "III. 4–5 Several nouns; *des* → *de*",
      paragraphs: [
        "When a qualifying adjective refers to several nouns, if one of those nouns is masculine, agreement is masculine plural. In that kind of series, put the masculine noun last.",
        "In front of a plural qualifying adjective, *des* becomes *de*.",
      ],
      examples: [
        {
          fr: "Elle a acheté une robe, une écharpe, des chaussures et un manteau *verts*.",
        },
        {
          fr: "Une robe, une veste et des chaussures *élégantes*.",
          en: "all feminine",
        },
        {
          fr: "Une robe, une veste, des chaussures et un sac *élégants*.",
          en: "one masculine, placed last",
        },
        { fr: "*des* enfants intelligents → *de* beaux enfants." },
        { fr: "Elle a de *beaux* enfants." },
      ],
    },
    {
      heading: "IV. Capitals",
      paragraphs: [
        "Nationality *adjectives* are not capitalized; only *nouns* that represent people take a capital. Language names are not capitalized.",
      ],
      examples: [
        {
          fr: "Les *Canadiens* aiment la cuisine *chinoise*.",
          en: "Canadians love Chinese food.",
        },
        { fr: "la culture *grecque* ; les *Grecs*" },
        { fr: "J'apprends *le français*, j'étudie *l'espagnol*." },
      ],
    },
    {
      heading: "V. 1 Lexical units and relational adjectives",
      paragraphs: [
        "Some adjectives form a single lexical unit with the noun: *des petits pois ; un petit déjeuner ; un jeune homme ; une étoile filante ; un grand magasin*.",
        "Relational adjectives (*adjectifs de relation*) also form a block with the noun. Despite their form they are not qualifying adjectives: they cannot be separated from the noun by *être*, and they cannot go in the comparative or superlative. Say *une carte postale*, not *cette carte est postale* or *plus postale*.",
      ],
      examples: [
        {
          fr: "Nous avons mangé de *gros petits pois*.",
          en: "We ate large peas.",
        },
        { fr: "un journal *médical* : a medical journal" },
        { fr: "une école *primaire* : a primary school" },
        { fr: "un roman *policier* : a detective novel" },
        { fr: "un bulletin *scolaire* : a school report" },
      ],
    },
    {
      heading: "V. 2 Adjectives for people, not things",
      paragraphs: [
        "Some adjectives apply to people, not things. Do not translate *a sports car* as *une voiture sportive* (*sportif/sportive* is for a person) — say *une voiture de sport*.",
        "*Human rights* is *les droits de l'homme* or *les droits de la personne*, not *les droits humains*. A person can be *alcoolique*; a drink is *alcoolisée*. *A medical student* is *un étudiant en médecine* (not *un étudiant médical*, though *un examen médical* is fine). *A chemical engineer* is *un ingénieur en chimie* or *un ingénieur chimiste* — not *un ingénieur chimique* (which would mean he was made artificially). *Comfortable* cannot be used of a person: *Make yourself comfortable* → *Mettez-vous à l'aise.*",
      ],
      examples: [
        {
          fr: "L'ingénieur *chimiste* se sert de produits *chimiques*.",
          en: "The chemical engineer uses chemical products.",
        },
      ],
    },
  ],
};
