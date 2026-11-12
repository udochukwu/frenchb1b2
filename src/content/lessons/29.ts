import type { Lesson } from "./types";

export const lesson29: Lesson = {
  title: "Anteriority of one past fact to another",
  intro:
    "When one past fact is further back than another, French marks that gap. The plus-que-parfait does it inside one sentence. With quand, the choice of tenses also says whether the gap is open, immediate, or repeated. A participle, a past infinitive, avant que and après que can mark the same order.",
  sections: [
    {
      heading: "I. 1 The idea of anteriority",
      paragraphs: [
        "To say that a past fact A is further away in time than another past fact B, use the plus-que-parfait in the cases below. On the line, A is action 1, B is action 2, and the right-hand end is the present.",
        "Two independent clauses set side by side. Je ne le savais pas ; on ne me l'avait pas dit. The not-knowing is B. The telling is A.",
        "A relative clause. Il m'a réclamé la vidéo qu'il m'avait prêtée. Asking is B. Lending is A.",
        "A completive clause. On ne savait pas qu'il avait menti. Not knowing is B. The lie is A. Je ne savais pas ; on ne me l'avait pas dit. On ne savait pas qu'il avait menti.",
      ],
      examples: [
        { fr: "Je ne le savais pas ; on ne me l'avait pas dit." },
        { fr: "Il m'a réclamé la vidéo qu'il m'avait prêtée." },
        { fr: "On ne savait pas qu'il avait menti." },
      ],
    },
    {
      heading: "I. 2 The subjunctive",
      paragraphs: [
        "When the verb of the subordinate clause is in the subjunctive, the rule changes. The pluperfect subjunctive is unused. French commonly uses the compound past of the subjunctive to mark anteriority A against a past fact B.",
        "J'ai regretté qu'il ne m'ait pas prévenu: I was sorry that he had not told me.",
      ],
      examples: [{ fr: "J'ai regretté qu'il ne m'ait pas prévenu." }],
    },
    {
      heading: "II. 1 Time clauses",
      paragraphs: [
        "When quand, or a substitute such as lorsque, dès que or aussitôt que, marks one past fact as earlier than another, the tense pairing is complex. In every example, action A (manger) comes before action B (arriver). Il a mangé puis je suis arrivé.",
        "The four model sentences are: Il avait mangé quand je suis arrivé. Quand il eut mangé, j'arrivai. Quand il a eu mangé, je suis arrivé. Quand il avait mangé, j'arrivais.",
      ],
      examples: [
        { fr: "Il avait mangé quand je suis arrivé." },
        { fr: "Quand il eut mangé, j'arrivai." },
        { fr: "Quand il a eu mangé, je suis arrivé." },
        { fr: "Quand il avait mangé, j'arrivais." },
      ],
    },
    {
      heading: "II. 2 Case 1",
      paragraphs: [
        "Action A, the earlier one, is in the main clause, in the plus-que-parfait. Action B, the later one, is in the clause introduced by quand or lorsque, in the passé composé or the passé simple. The manual points to chapter 25, II and III, pages 196-198.",
        "Il avait mangé quand je suis arrivé, or j'arrivai. An indeterminate length of time separates the two actions. Here quand can be replaced only by lorsque.",
      ],
      examples: [{ fr: "Il avait mangé quand je suis arrivé." }],
    },
    {
      heading: "II. 3 Case 2",
      paragraphs: [
        "Action A is in the subordinate clause, introduced by quand or a substitute. Action B is in the main clause. Two pairings are possible.",
        "The verb of A goes into the passé antérieur and the verb of B into the passé simple. Quand il eut mangé, j'arrivai.",
        "Or the verb of A goes into the passé surcomposé and the verb of B into the passé composé. Quand il a eu mangé, je suis arrivé.",
        "These pairings suggest a more or less immediate succession. Quand can then be replaced by dès que, aussitôt que and après que.",
        "The passé simple is little used in the first and second persons, so speech prefers combination II. 3 b.",
      ],
      examples: [
        { fr: "Quand il eut mangé, j'arrivai." },
        { fr: "Quand il a eu mangé, je suis arrivé." },
      ],
    },
    {
      heading: "II. 4 Case 3",
      paragraphs: [
        "Action A is in the clause introduced by quand, or a substitute, in the plus-que-parfait. The main verb, action B, goes into the imparfait. Quand il avait mangé, j'arrivais.",
        "This pairing necessarily suggests repetition. That is why quand can, in this case, be replaced by lorsque or chaque fois que. Quand il avait dîné, il sortait.",
      ],
      examples: [{ fr: "Quand il avait mangé, j'arrivais." }],
    },
    {
      heading: "II. 5 Remarks",
      paragraphs: [
        "To find your way: know which action is earlier; know whether that earlier action A is in the main clause (II. 2) or in the subordinate clause (II. 3 and II. 4); know whether quand can be replaced.",
        "Quand can always be replaced by its synonym lorsque. Lorsque cannot be replaced by dès que, après que or aussitôt que when event A is in the main clause (II. 2, case 1). Those conjunctions imply anteriority, so they cannot introduce event B, which comes after A.",
        "The passé surcomposé is rarely used with être. Avoir itself is not put in the passé surcomposé: *il a eu eu is impossible. When you cannot use the passé surcomposé in case II. 3 b, use the passé composé in the subordinate clause. To mark anteriority more clearly, replace quand with après que or dès que. Dès qu'il est arrivé, je l'ai appelé.",
        "The examples put A first and B second for clarity. The order of the clauses can be reversed without changing the meaning. Quand il avait mangé, j'arrivais, or J'arrivais quand il avait mangé.",
      ],
      examples: [
        { fr: "Dès qu'il est arrivé, je l'ai appelé." },
        { fr: "Quand il avait mangé, j'arrivais." },
        { fr: "J'arrivais quand il avait mangé." },
      ],
    },
    {
      heading: "III. 1 Participles and the infinitive",
      paragraphs: [
        "Anteriority can be marked with the present participle of avoir or être followed by the past participle, or with a past infinitive. Ayant mangé, je suis parti. Après avoir mangé, je suis parti.",
        "This works only if the subject of the participle or of the past infinitive is the same as the subject of the main clause. Ayant mangé, je suis allé au lit: I am the one who ate and who went to bed. Après avoir mangé, je suis allé au lit.",
        "When après is followed by an infinitive, that infinitive is always a past infinitive.",
        "Une fois plus a past participle marks anteriority and insists that the action is finished. Une fois sorti, j'ai poussé un « ouf » de soulagement.",
      ],
      examples: [
        { fr: "Ayant mangé, je suis parti." },
        { fr: "Après avoir mangé, je suis allé au lit." },
        { fr: "Une fois sorti, j'ai poussé un « ouf » de soulagement." },
      ],
    },
    {
      heading: "III. 2 Avant que and après que",
      paragraphs: [
        "Of two successive actions, après que introduces the earlier event A and avant que introduces the later event B. He ate first; I arrived afterwards.",
        "Je suis arrivé après qu'il a eu mangé (II. 3 b, page 221). Or Il avait mangé avant que je n'arrive. Il a mangé avant que je n'arrive. Avant que is followed by the subjunctive. Il avait mangé avant que nous n'arrivions.",
      ],
      examples: [
        { fr: "Je suis arrivé après qu'il a eu mangé." },
        { fr: "Il avait mangé avant que je n'arrive." },
        { fr: "Il a mangé avant que je n'arrive." },
      ],
    },
    {
      heading: "Recap of the pairings",
      paragraphs: [
        "1) Plus-que-parfait, then quand plus the passé simple or the passé composé. Il avait dîné quand il sortit, or il est sorti. Quand can be replaced only by lorsque.",
        "2) Quand plus the passé antérieur and the passé simple: Quand il eut dîné, il sortit. Or quand plus the passé surcomposé and the passé composé: Quand il a eu dîné, il est sorti. Quand can be replaced by dès que, aussitôt que, après que. When the passé surcomposé is impossible with être, use the passé composé and replace quand with a substitute that clearly marks anteriority. Aussitôt que nous sommes arrivés, il est sorti.",
        "3) Quand plus the plus-que-parfait and the imparfait. Quand il avait dîné, il sortait.",
        "4) Après avoir or être plus a past participle, then the passé simple, the passé composé or the imparfait. Après être montée dans sa chambre, elle s'allongea, elle s'est allongée, elle s'allongeait. The subject of both parts is the same.",
        "5) A past participle, then the passé simple, the passé composé or the imparfait. Fatigué par son voyage, il se coucha de bonne heure. Ayant reçu le message, il est parti aussitôt. Étant parti trop tôt, il ne pouvait les revoir. The subject of both parts is the same.",
        "6) The passé simple, the passé composé or the imparfait, then avant de plus an infinitive when the subject is the same, or avant que plus the subjunctive when the subjects differ. Il mangea, Il a mangé, Il mangeait avant de partir, or avant que je n'arrive.",
      ],
      examples: [
        { fr: "Il avait dîné quand il sortit." },
        { fr: "Quand il a eu dîné, il est sorti." },
        { fr: "Après être montée dans sa chambre, elle s'allongea." },
        { fr: "Il mangeait avant de partir." },
      ],
    },
  ],
};
