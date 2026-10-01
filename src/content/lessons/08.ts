import type { Lesson } from "./types";

export const lesson8: Lesson = {
  title: "The adverb",
  intro:
    "An adverb is an invariable word that modifies a verb, an adjective, or another adverb. This chapter is about what adverbs do, the special adverb *tout*, where they sit in the sentence (simple vs compound tenses), and how they form comparatives — including *plus il… plus il…* and *de plus en plus*.",
  sections: [
    {
      heading: "I. 1 An invariable word",
      paragraphs: [
        "An adverb does not change for gender or number. It can modify a verb (*Je travaille bien*), an adjective (*Elle est assez jolie*), or another adverb (*Je vais très bien*).",
      ],
      examples: [
        { fr: "Je vais *très* bien.", en: "I am very well." },
        {
          fr: "Je pose mon livre sur la table ; je pose mon livre *dessus*.",
          en: "I place (put) my book on the table; I place (put) my book on it.",
        },
      ],
    },
    {
      heading: "I. 2 Semantic classes",
      paragraphs: [
        "By meaning, adverbs fall into: place (*ici, là, ailleurs, loin*); time (*alors, aujourd'hui, demain, ensuite, enfin, quelquefois*); quantity (*plus, beaucoup, moins*); intensity (*si, bien*); affirmation, negation or doubt (*oui, non, peut-être, si, ne… pas*); manner (*vite, ensemble, bien, mal*) and *-ment* forms (*tranquillement, joyeusement*).",
      ],
      examples: [],
    },
    {
      heading: "I. 3 Preposition vs adverb of place",
      paragraphs: [
        "A preposition of place introduces a noun or pronoun (*Je pose mon livre sur la table*). An adverb of place never does (*Je pose mon livre dessus*).",
        "Attention: do not use an adverb where a preposition is required — not *Je suis dehors la maison*, but *Je suis hors de la maison*. A place adverb cannot modify a noun (see chapter 5). Exception: *bien* can modify a noun or pronoun (*C'est une femme bien*) and can be a complement of *être* (*Je suis bien* = at ease).",
      ],
      examples: [
        { fr: "Je pose mon livre *sur* la table." },
        { fr: "Je pose mon livre *dessus*." },
        { fr: "Je suis *hors de* la maison." },
        { fr: "C'est une femme *bien*.", en: "C'est une femme admirable." },
        { fr: "Je suis *bien*.", en: "à l'aise ; je me sens à l'aise" },
      ],
    },
    {
      heading: "II. The adverb *tout*",
      paragraphs: [
        "When *tout* marks intensity it means *entièrement* / *tout à fait*, and it is an adverb: *Nous sommes tout perdus*.",
        "The adverb *tout* is invariable, except before a feminine word that starts with a vowel or an aspirated *h*: then it agrees (*Elles sont toutes honteuses* ; *La terre était toute recouverte de neige*). Before a vowel it stays *tout*: *Elles sont tout étonnées*.",
        "Rappel: *tout* can also be an adjective, a noun, or a pronoun.",
      ],
      examples: [
        { fr: "Nous sommes *tout* perdus." },
        { fr: "Ils sont *tout* étonnés. Elles sont *tout* étonnées." },
        {
          fr: "Elles sont *toutes* honteuses.",
          en: "tout à fait honteuses",
        },
        { fr: "La terre était *toute* recouverte de neige." },
      ],
    },
    {
      heading: "III. 1 Place with a simple tense",
      paragraphs: [
        "The adverb generally follows the verb it modifies. Unlike English, it never splits the subject from its verb (*Elle sait toujours tout*, not *Elle toujours sait*).",
        "Exceptions: *aussi* can sit between subject and verb (*Cet homme aussi a raison*), and so can the negative particle *ne*.",
      ],
      examples: [
        {
          fr: "Elle sait *toujours* tout.",
          en: "She always knows everything.",
        },
        { fr: "Cet homme *aussi* a raison." },
      ],
    },
    {
      heading: "III. 2 Compound tenses",
      paragraphs: [
        "With a compound tense the adverb generally goes after the auxiliary, between auxiliary and past participle — especially quantity adverbs, which English often puts at the end: *Ils ont beaucoup aimé le spectacle*.",
        "Time adverbs (*aujourd'hui, demain, tôt, tard, tout de suite*) and place adverbs (*ici, là, dehors*) generally follow the past participle: *Nous l'avons rencontré hier*.",
        "NB 1: a time adverb can open the sentence for emphasis (*Hier nous sommes allés à la mer*). NB 2: a short past participle plus a long *-ment* adverb often puts the adverb after the participle (*Il est parti rapidement*), but *Il est vite parti*.",
      ],
      examples: [
        {
          fr: "Ils ont *beaucoup* aimé le spectacle.",
          en: "They enjoyed the show very much.",
        },
        { fr: "Nous l'avons rencontré *hier*." },
        { fr: "Vous avez dansé *dehors*." },
        { fr: "Il est parti *rapidement*." },
        { fr: "Il est *vite* parti." },
      ],
    },
    {
      heading: "III. 3–4 Before an adjective; locutions",
      paragraphs: [
        "An adverb generally *precedes* the adjective or adverb it modifies: *très drôle*, *admirablement bien joué*.",
        "An adverbial locution (a group of words that equals an adverb) follows the past participle: *Il est parti à notre insu* ; *Anita a fumé en cachette*.",
      ],
      examples: [
        { fr: "Cette pièce est *très* drôle." },
        { fr: "Ce film est *admirablement bien* joué." },
        { fr: "Il est parti *à notre insu*." },
        { fr: "Anita a fumé *en cachette*." },
      ],
    },
    {
      heading: "IV. 1 Regular degrees",
      paragraphs: [
        "Some time adverbs (*souvent, longtemps*) and all manner adverbs except *ensemble* form degrees like adjectives: *aussi / moins / plus longtemps* ; *le plus / le moins / très longtemps*.",
      ],
      examples: [
        {
          fr: "C'est elle qui travaille *le mieux*.",
          en: "She is the one who works the best.",
        },
      ],
    },
    {
      heading: "IV. 2 Irregular degrees",
      paragraphs: [
        "Four adverbs are irregular: *bien → mieux / le mieux* ; *mal → pire / le pire* ; *peu → moins / le moins* ; *beaucoup → plus (ou davantage) / le plus*.",
      ],
      examples: [
        {
          fr: "Je l'aime *beaucoup*. Tu l'aimes *plus*. C'est lui qui l'aime *le plus*.",
        },
        {
          fr: "Il travaille *bien*. Tu travailles *mieux*. C'est elle qui travaille *le mieux*.",
        },
      ],
    },
    {
      heading: "IV. 3 *Plus… plus…* / *moins… moins…*",
      paragraphs: [
        "English marks a linked increase or decrease with *the more… the more…* (and *the less…*). French uses no article: *plus… plus…*, *moins… moins…*, *plus… moins…*, *moins… plus…*.",
        "Attention: the subject comes immediately after *plus* or *moins* — not *Plus fatigué il est*, but *Plus il est fatigué*.",
      ],
      examples: [
        {
          fr: "*Plus* il est fatigué, *plus* il fait d'erreurs.",
          en: "The more tired he is, the more mistakes he makes.",
        },
        {
          fr: "*Plus* il parle, *plus* il nous persuade.",
          en: "The more he says, the more he convinces us.",
        },
        {
          fr: "*Plus* il boit de café, *moins* il dort.",
          en: "The more coffee he drinks, the less he sleeps.",
        },
        {
          fr: "*Plus* il est satisfait, *plus* je suis heureux.",
          en: "The more satisfied he is, the happier I am.",
        },
      ],
    },
    {
      heading: "IV. 4 *De plus en plus*",
      paragraphs: [
        "English *more and more*, *less and less*, or *richer and richer* is French *de plus en plus* / *de moins en moins*. The phrase can introduce an adjective or an adverb.",
        "Use it only with regular comparatives. For *bon*, use *s'améliorer* ; for *mauvais*, *empirer* ; for *bien*, *de mieux en mieux* ; for *mal*, prefer *de plus en plus mal* (rarely *de pire en pire*).",
      ],
      examples: [
        {
          fr: "Nous devons travailler *de plus en plus*.",
          en: "We must work more and more.",
        },
        {
          fr: "Elle est *de plus en plus* riche.",
          en: "She gets richer and richer.",
        },
        { fr: "Ses notes *s'améliorent*.", en: "His grades are getting better." },
        {
          fr: "Il travaille *de mieux en mieux*.",
          en: "He is working better and better.",
        },
        {
          fr: "Il travaille *de plus en plus mal*.",
          en: "He is working more and more badly.",
        },
      ],
    },
  ],
};
