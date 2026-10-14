import type { Lesson } from "./types";

export const lesson9: Lesson = {
  title: "The adverb of manner",
  intro:
    "Manner adverbs tell how something is done. Most are built with *-ment*, but not all adjectives allow that ending — especially participles — so French often uses a locution (*d'une manière…*, *avec…*). A few manner words are simple (*bien, mal, vite, fort*) and never take *-ment*.",
  sections: [
    {
      heading: "I. 1 Forming *-ment*",
      paragraphs: [
        "When the masculine adjective ends in a consonant, add *-ment* to the *feminine*: *actif → active → activement* ; *doux → douce → doucement* ; *heureux → heureuse → heureusement* ; *long → longue → longuement* ; *léger → légère → légèrement*.",
        "Two spelling traps: *gentil → gentiment* (not *gentilement*) and *bref → brièvement*.",
        "A small group takes an *é* before *-ment*: *communément, confusément, expressément, importunément, obscurément, précisément, profondément*.",
      ],
      examples: [
        {
          fr: "*Heureusement*, je parle français *couramment*.",
        },
        { fr: "Elle m'a *gentiment* aidé." },
        { fr: "actif → active → *activement*" },
        { fr: "doux → douce → *doucement*" },
      ],
    },
    {
      heading: "I. 2 Particularités",
      paragraphs: [
        "If the masculine already ends in a vowel, add *-ment* to that masculine: *agréable → agréablement* ; *poli → poliment*. Exceptions: *gai → gaiement* ; *impuni → impunément* ; *traître → traîtreusement*.",
        "Some masculines that already end in *-e* take an acute accent on that *e*: *aveugle → aveuglément* ; *conforme → conformément* ; *commode → commodément* ; *énorme → énormément* ; *immense → immensément* ; *uniforme → uniformément*.",
        "Adjectives in *-ent* make *-emment* (*évident → évidemment* ; *négligent → négligemment* ; *violent → violemment*). Adjectives in *-ant* make *-amment* (*constant → constamment* ; *courant → couramment*). Both endings are pronounced like *-amment*.",
      ],
      examples: [
        { fr: "agréable → *agréablement*" },
        { fr: "poli → *poliment*" },
        { fr: "gai → *gaiement* ; impuni → *impunément*" },
        { fr: "aveugle → *aveuglément*" },
        { fr: "évident → *évidemment*" },
        { fr: "courant → *couramment*" },
      ],
    },
    {
      heading: "II. 1 Locutions when *-ment* will not do",
      paragraphs: [
        "Not every manner idea is a *-ment* word. You cannot always derive an adverb from an adjective — watch participles especially — so you use a locution: *d'une manière…*, *d'une façon…*, *d'un air…*.",
        "Idioms exist too (*à la légère, à son insu*). You can also put *avec* before an abstract noun: *charmingly → d'une manière charmante / avec charme* ; *indignantly → avec indignation* ; *urgently → de toute urgence / d'une façon urgente*.",
      ],
      examples: [
        { fr: "Ne parlez pas si *fort*." },
        { fr: "Elle l'a fait *avec réticence*." },
        { fr: "blessant → *d'une manière blessante*" },
        { fr: "attrayant → *d'une façon attrayante*" },
        { fr: "convaincu → *d'un air convaincu*" },
        { fr: "*à la légère*, *à son insu*" },
        {
          fr: "*de toute urgence*, *d'une façon urgente*",
          en: "urgently",
        },
      ],
    },
    {
      heading: "II. 2 Simple forms",
      paragraphs: [
        "Some manner adverbs have a short form with no *-ment*: *bien, mal, ensemble, vite*. Others look exactly like the masculine singular adjective: *chanter haut, parler fort, sentir mauvais*. They stay invariable, like every adverb.",
      ],
      examples: [
        { fr: "*bien*, *mal*, *ensemble*, *vite*" },
        { fr: "Chanter *haut*, parler *fort*, sentir *mauvais*." },
      ],
    },
    {
      heading: "II. 3 Faults to avoid",
      paragraphs: [
        "*Vite* is already an adverb — never *vitement*.",
        "French has no *possiblement* for English *possibly*. Use *probablement*, *peut-être*, or *il se peut que* + subjunctive.",
        "For *brusquement / tout à coup*, use *soudain*, not *soudainement*.",
        "Do not mix up adjective and adverb. *Vite* cannot be a subject complement of *être, devenir, paraître, sembler*: not *Je suis vite*, but *Je suis rapide* (adjective) or *Je vais vite* (adverb). Not *Cette information est assez*, but *Cette information est suffisante*. And *better* with a verb is *mieux*, not *meilleur*: *Il chante mieux que moi*.",
      ],
      examples: [
        {
          fr: "Il se peut que ce soit la vérité.",
          en: "This is possibly the truth.",
        },
        { fr: "*Soudain* un cri déchira le silence." },
        { fr: "Je suis *rapide*. / Je vais *vite*." },
        { fr: "Cette information est *suffisante*." },
        {
          fr: "Il chante *mieux* que moi.",
          en: "He sings better than I do.",
        },
      ],
    },
  ],
};
