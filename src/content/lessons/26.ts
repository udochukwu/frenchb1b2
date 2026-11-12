import type { Lesson } from "./types";

export const lesson26: Lesson = {
  title: "The imparfait",
  intro:
    "The imparfait is the past of an action or a state whose beginning and end stay out of focus. One stem and one set of endings serve every verb. The same tense also marks a habit, a background action, a past-perfect idea with depuis, reported speech, and an if-clause.",
  sections: [
    {
      heading: "I. 1 The endings",
      paragraphs: [
        "The imparfait endings are the same for every verb: je -ais, tu -ais, il/elle -ait, nous -ions, vous -iez, ils/elles -aient.",
      ],
      examples: [
        { fr: "je -ais, tu -ais, il/elle -ait, nous -ions, vous -iez, ils/elles -aient" },
      ],
    },
    {
      heading: "I. 2 The stem",
      paragraphs: [
        "The stem is the stem of the nous form of the present, without -ons. Nous voulons gives nous voulions. Nous allons gives nous allions. Nous voulions partir de bonne heure et nos bagages étaient prêts.",
        "Être is the important exception. Its stem is ét-: j'étais, tu étais, il/elle était, and so on.",
      ],
      examples: [
        { fr: "nous voul-ons → nous voulions" },
        { fr: "nous all-ons → nous allions" },
        { fr: "j'étais, tu étais, il/elle était" },
      ],
    },
    {
      heading: "Attention: verbs in -ier",
      paragraphs: [
        "Verbs in -ier (étudier, se réfugier, and so on) keep the i of the stem. Nous étudi-ions ; vous vous réfugi-iez.",
      ],
      examples: [{ fr: "Nous étudi-ions ; vous vous réfugi-iez." }],
    },
    {
      heading: "II. 1 What the imparfait is worth",
      paragraphs: [
        "Unlike the passé composé or the passé simple, the imparfait expresses a past action or state that is not completed, and whose length is not precise. It puts us back in the past; the beginning and/or the end of the action stay imprecise.",
        "Il faisait beau ; le soleil brillait ; elle était contente. Beside it, Je suis venu hier ; j'ai attendu longtemps is finished and dated.",
      ],
      examples: [
        { fr: "Il faisait beau ; le soleil brillait ; elle était contente." },
        { fr: "Je suis venu hier ; j'ai attendu longtemps." },
      ],
    },
    {
      heading: "II. 2 What it marks in the past",
      paragraphs: [
        "An action in progress, often the English was/were + -ing. Elle parlait: she was talking.",
        "A state of mind or a trait of character. Il était content: he was happy.",
        "A setting or a situation. La rue était fort animée. Les décorations de Noël donnaient un air de fête à toute la ville.",
        "A background action into which a new, punctual action can break. That new action is in the passé composé or the passé simple. Il traversait la rue quand, soudain, il entendit crier.",
      ],
      examples: [
        { fr: "Elle parlait.", en: "She was talking." },
        { fr: "Il était content.", en: "He was happy." },
        { fr: "Il traversait la rue quand, soudain, il entendit crier." },
      ],
    },
    {
      heading: "II. 3 When not to use the imparfait",
      paragraphs: [
        "Do not use the imparfait for an action that happened only once when the sentence also marks the limits of that action. Mark the beginning or the end, or pin the action to a date or a measured length (a day, a month, two hours). For a non-repeated action, do not use the imparfait with longtemps either. In these three cases use the passé composé or the passé simple.",
        "Je suis venu hier. J'ai travaillé pendant 20 ans dans ce bureau. À partir de ce jour-là, j'ai cessé de fumer. J'ai attendu longtemps.",
      ],
      examples: [
        { fr: "Je suis venu hier.", en: "I came yesterday." },
        { fr: "J'ai travaillé pendant 20 ans dans ce bureau." },
        { fr: "À partir de ce jour-là, j'ai cessé de fumer." },
        { fr: "J'ai attendu longtemps." },
      ],
    },
    {
      heading: "Attention: a marked beginning",
      paragraphs: [
        "Do not use the imparfait when, for an action that is not repeated, the sentence clearly marks the beginning. That happens when the sentence opens with soudain, à ce moment-là, alors, or with a time clause that clearly marks the start.",
        "Lorsqu'il est entré, tout le monde s'est levé. Alors, tout le monde s'est levé.",
      ],
      examples: [
        { fr: "Lorsqu'il est entré, tout le monde s'est levé." },
        { fr: "Alors, tout le monde s'est levé." },
      ],
    },
    {
      heading: "III. 1 The idea of repetition",
      paragraphs: [
        "The imparfait can still name the day, the hour, or the place of the action. It then marks repetition, not one dated event.",
        "Il venait le 1er janvier means he used to come every January 1. Il est venu un 1er janvier means one particular January 1. Il venait toujours le 1er janvier.",
        "The same contrast holds with longtemps. Il a dormi longtemps is one occasion. Il dormait longtemps is a habit.",
      ],
      examples: [
        { fr: "Il venait le 1er janvier.", en: "He used to come on January 1." },
        { fr: "Il est venu le 1er janvier.", en: "He came on January 1." },
        { fr: "Il a dormi longtemps.", en: "He slept for a long time." },
        { fr: "Il dormait longtemps.", en: "He used to sleep for a long time." },
      ],
    },
    {
      heading: "III. 2 Repetition inside a limited period",
      paragraphs: [
        "If a repeated fact is itself enclosed in a period of time that is limited with precision, do not use the imparfait. Use the passé composé or the passé simple.",
        "Il manquait les cours quatre fois par mois leaves the overall period open: we do not know for how many months he was absent. Il a manqué les cours quatre fois le mois dernier still says « quatre fois », but le mois dernier frames that repetition as one unique stretch.",
        "Il jouait du piano de 6 h à 8 h is the imparfait of repetition. Il a joué du piano de 6 h à 8 h pendant toute une année keeps the repetition inside one global period.",
      ],
      examples: [
        { fr: "Il manquait les cours quatre fois par mois." },
        { fr: "Il a manqué les cours quatre fois le mois dernier." },
        { fr: "Il jouait du piano de 6 h à 8 h." },
        { fr: "Il a joué du piano de 6 h à 8 h pendant toute une année." },
      ],
    },
    {
      heading: "IV. 1 Imparfait and the past perfect",
      paragraphs: [
        "When an action (A) begun in the past is not finished when another past action (B) starts, French uses the imparfait, with depuis if the length or the date matters. English uses the past perfect progressive: had been + -ing, with since or for.",
        "J'attendais depuis cinq heures quand il est arrivé: I had been waiting for five hours (since five o'clock) when he arrived.",
      ],
      examples: [
        { fr: "J'attendais depuis cinq heures quand il est arrivé." },
      ],
    },
    {
      heading: "IV. 2 Imparfait in indirect speech",
      paragraphs: [
        "The imparfait sometimes appears in indirect speech when the verb of saying is in a past tense. The manual points to chapter 36, III. 2, page 276.",
        "Il a dit : « Je suis fatigué. » becomes Il a dit qu'il était fatigué.",
      ],
      examples: [
        { fr: "Il a dit : « Je suis fatigué. »", en: "He said: \"I am tired.\"" },
        { fr: "Il a dit qu'il était fatigué.", en: "He said he was tired." },
      ],
    },
    {
      heading: "IV. 3 Imparfait and hypothesis",
      paragraphs: [
        "The imparfait sometimes appears in a hypothesis clause. The manual points to chapter 32, I. 1, page 244. Si j'étais riche, je prendrais ma retraite.",
        "It is also used after même si and comme si. The manual points to chapter 32, I. 2, page 246, and III. 2, page 247. Même si j'étais riche, je ne prendrais pas ma retraite. Elle fait comme si elle n'avait pas d'argent.",
      ],
      examples: [
        { fr: "Si j'étais riche, je prendrais ma retraite." },
        { fr: "Même si j'étais riche, je ne prendrais pas ma retraite." },
        { fr: "Elle fait comme si elle n'avait pas d'argent." },
      ],
    },
  ],
};
