import type { Lesson } from "./types";

export const lesson30: Lesson = {
  title: "The subjunctive",
  intro:
    "The subjunctive is the mood of a clause that depends on feeling, will, obligation or doubt, and of some relatives and conjunctions. Everyday French uses only two tenses of it: the present and the compound past.",
  sections: [
    {
      heading: "I. 1 The tenses",
      paragraphs: [
        "The subjunctive is used essentially in the present and in the past. The imperfect subjunctive (qu'il parlât, and so on) sounds more and more archaic.",
      ],
      examples: [{ fr: "qu'il parlât" }],
    },
    {
      heading: "I. 2 The present subjunctive",
      paragraphs: [
        "Except for a few verbs, above all aller, the present subjunctive uses the endings -e, -es, -e, -ions, -iez, -ent.",
        "First-group verbs add those endings to the stem. Terminer gives que je termine, que nous terminions.",
        "Aller changes stem in the three singular persons and in the third person plural: que j'aille, que nous allions.",
      ],
      examples: [
        { fr: "-e, -es, -e, -ions, -iez, -ent" },
        { fr: "que je termine, que nous terminions" },
        { fr: "que j'aille, que nous allions" },
      ],
    },
    {
      heading: "I. 3 Stems far from the infinitive",
      paragraphs: [
        "Être: que je sois, que tu sois, qu'il/elle soit, que nous soyons, que vous soyez, qu'ils/elles soient.",
        "Avoir: que j'aie, que tu aies, qu'il/elle ait, que nous ayons, que vous ayez, qu'ils/elles aient.",
        "Boire → que je boive, que nous buvions. Devoir → que je doive, que nous devions. Faire → que je fasse, que nous fassions. Fuir → que je fuie, que nous fuyions. Pouvoir → que je puisse, que nous puissions. Prendre → que je prenne, que nous prenions. Savoir → que je sache, que nous sachions. Venir → que je vienne, que nous venions.",
      ],
      examples: [
        { fr: "que je sois, que nous soyons, qu'ils/elles soient" },
        { fr: "que j'aie, que nous ayons, qu'ils/elles aient" },
        { fr: "que je puisse, que je sache, que je vienne" },
      ],
    },
    {
      heading: "I. 4 The past subjunctive",
      paragraphs: [
        "The past subjunctive is être or avoir in the subjunctive plus the past participle. Choose the auxiliary (chapter 25, I, pages 195-196) and apply past-participle agreement (chapter 27, pages 206-211).",
        "Il a regretté que je sois parti. Je souhaite qu'il ait eu assez d'argent. Nous regrettons qu'il soit parti si tôt.",
      ],
      examples: [
        { fr: "Il a regretté que je sois parti." },
        { fr: "Je souhaite qu'il ait eu assez d'argent." },
      ],
    },
    {
      heading: "I. 5 How the subjunctive is built",
      paragraphs: [
        "Except in a few wishes, such as « Vive la France ! » or « Sauve qui peut ! », the subjunctive is always introduced by que or by another conjunction.",
        "Qu'il vienne ! Pourvu qu'elle ait son train ! Je regrette qu'il ne soit pas là. Je souhaite que vous arriviez de bonne heure.",
      ],
      examples: [
        { fr: "Qu'il vienne !" },
        { fr: "Pourvu qu'elle ait son train !" },
        { fr: "Je regrette qu'il ne soit pas là." },
      ],
    },
    {
      heading: "II. 1 Verbs followed by the subjunctive",
      paragraphs: [
        "The subordinate takes the subjunctive when it depends on verbs with an affective value (sentiment and emotion, for example craindre), verbs of obligation (for example exiger), and verbs that call reality into question (for example douter). The conjunction is que. J'exige qu'elle parte.",
        "After verbs of fear: Nous craignons (nous avons peur) qu'il parte. Of wishing: Je souhaite qu'il pleuve. Of will and desire: Il veut (exige, demande, ordonne, désire, veut bien, tient à ce, consent à ce) que tu le raccompagnes. Of necessity: Il faut (il est nécessaire, il est indispensable) que tu sois au rendez-vous. Of doubt: Je doute qu'il vienne. Of denial and refusal: Nous nions qu'il l'ait vu. Il refuse (il s'oppose à ce) que nous allions au cinéma. Of feeling: aimer, aimer mieux, regretter, préférer, être triste, content, heureux que... Je suis heureux que vous soyez venu.",
        "The impersonal il est plus an adjective of appreciation or judgment also takes the subjunctive. Il est regrettable qu'il ait perdu son emploi. Il est rare que nous allions au cinéma en semaine. When the adjective marks certainty, use the indicative. Il est certain que nous partirons demain.",
      ],
      examples: [
        { fr: "J'exige qu'elle parte." },
        { fr: "Nous craignons qu'il parte." },
        { fr: "Il faut que tu sois au rendez-vous." },
        { fr: "Il est certain que nous partirons demain." },
      ],
    },
    {
      heading: "Attention: mieux, croire, and English infinitives",
      paragraphs: [
        "Do not say *Il est mieux que nous partions. Say Il vaut mieux (il est préférable) que nous partions.",
        "Croire, espérer and penser in the affirmative take the indicative. In the interrogative and the negative they take the subjunctive, with a shade of subjectivity or doubt. Je crois qu'il faut partir. Crois-tu qu'il faille partir ?",
        "English sometimes uses an infinitive where French must use que and the subjunctive. I want him to answer my question: Je veux qu'il réponde à ma question. We would be happy for you to join us: Nous serions heureux que tu te joignes à nous.",
      ],
      examples: [
        { fr: "Il vaut mieux que nous partions." },
        { fr: "Je crois qu'il faut partir." },
        { fr: "Crois-tu qu'il faille partir ?" },
        { fr: "Je veux qu'il réponde à ma question." },
      ],
    },
    {
      heading: "II. 2 Conjunctions",
      paragraphs: [
        "The subjunctive is required after these conjunctions.",
        "Purpose: pour que, afin que, de sorte que. Il a acheté cette tondeuse pour que tu t'en serves.",
        "Restriction: à moins que, sans que. Nous irons en pique-nique à moins qu'il ne pleuve.",
        "Condition: pourvu que, à condition que. Nous irons le voir, à condition qu'il le veuille bien. Nous acceptons ce travail, bien qu'il soit difficile is concession; the condition pair is pourvu que and à condition que.",
        "Concession: quoique, bien que. Nous sortons, bien qu'il pleuve.",
        "Time: en attendant que, jusqu'à ce que, avant que. Dites-le-lui, avant qu'il ne parte.",
        "Que in the pattern si... et que..., which presents a second hypothesis. Si je suis absent et que la porte soit fermée, sonnez chez le voisin.",
        "Avant que, à moins que, de crainte que and de peur que bring an expletive ne. It is a leftover of old French and it is not a negation. Avant qu'ils ne partent, dites-leur de bien fermer la porte à clef. Ne lui demandez rien, à moins qu'il ne vous propose de vous aider.",
      ],
      examples: [
        { fr: "Il a acheté cette tondeuse pour que tu t'en serves." },
        { fr: "Nous irons en pique-nique à moins qu'il ne pleuve." },
        { fr: "Nous sortons, bien qu'il pleuve." },
        { fr: "Si je suis absent et que la porte soit fermée, sonnez chez le voisin." },
      ],
    },
    {
      heading: "II. 3 Constructions to notice",
      paragraphs: [
        "Jusqu'à ce que takes the subjunctive. Jusqu'au moment où takes the indicative. Nous resterons avec lui jusqu'à ce qu'il parte. Nous resterons jusqu'au moment où il partira.",
        "Il semble que takes the subjunctive. Il me (te, lui, nous, vous, leur) semble que takes the indicative. Il semble que la situation soit désespérée. Il me semble que la situation est désespérée.",
        "I wish plus a conditional does not translate word for word. Wish is souhaiter plus the subjunctive, or the conditional of aimer bien or vouloir bien plus the subjunctive. I wish it would rain: Je souhaite qu'il pleuve. I wish it would be warm: J'aimerais bien qu'il fasse chaud. I wish you could do it for me: Je voudrais bien que vous le fassiez pour moi.",
      ],
      examples: [
        { fr: "Nous resterons avec lui jusqu'à ce qu'il parte." },
        { fr: "Il semble que la situation soit désespérée." },
        { fr: "Je souhaite qu'il pleuve." },
      ],
    },
    {
      heading: "Attention: the same subject",
      paragraphs: [
        "If the subject of the subordinate clause is the same as the subject of the main clause, do not use the subjunctive after the verbs of II. 1 a. Use an infinitive. Do not say *Je souhaite que je parte. Say Je souhaite partir. Do not say *Nous ne voulons pas que nous disions ce secret. Say Nous ne voulons pas dire ce secret.",
        "Some conjunctions of II. 2 must become a preposition plus an infinitive: pour que becomes pour, afin que becomes afin de, avant que becomes avant de, à moins que becomes à moins de, à condition que becomes à condition de. Do not say *Elle est venue afin qu'elle obtienne une réponse. Say Elle est venue afin d'obtenir une réponse. Do not say *Fermez la porte avant que vous (ne) partiez. Say Fermez la porte avant de partir.",
        "Quoique, bien que and jusqu'à ce que are always followed by the subjunctive, even when the subject of the subordinate verb is the same as the subject of the main clause.",
      ],
      examples: [
        { fr: "Je souhaite partir." },
        { fr: "Elle est venue afin d'obtenir une réponse." },
        { fr: "Fermez la porte avant de partir." },
      ],
    },
    {
      heading: "III. 1 Superlative or exclusivity",
      paragraphs: [
        "A relative clause takes the subjunctive when the antecedent is marked by a degree of superiority (le meilleur) or by exclusivity (le seul, la seule, and so on).",
        "C'est le meilleur exemple que j'aie trouvé. Le Président est la seule personne qui puisse vous aider. C'est la seule personne qui puisse nous aider. Je cherche un livre qui soit écrit en français.",
      ],
      examples: [
        { fr: "C'est le meilleur exemple que j'aie trouvé." },
        { fr: "Le Président est la seule personne qui puisse vous aider." },
      ],
    },
    {
      heading: "III. 2 Doubt",
      paragraphs: [
        "The subjunctive in a relative clause can say that the existence of an object is not entirely sure.",
        "J'achète une voiture qui a des sièges en cuir does not question that the car is real. Je cherche une voiture qui ait des sièges en cuir does not assure that such a car exists. It may exist, but I am not sure I will find it.",
        "The same shade separates Je voudrais un livre qui me fasse faire des progrès from Je lis un livre qui me fait faire des progrès.",
      ],
      examples: [
        { fr: "J'achète une voiture qui a des sièges en cuir." },
        { fr: "Je cherche une voiture qui ait des sièges en cuir." },
        { fr: "Je voudrais un livre qui me fasse faire des progrès." },
      ],
    },
    {
      heading: "IV. 1 Present and compound past",
      paragraphs: [
        "In current French only two subjunctive tenses are used: the present and the passé composé.",
      ],
      examples: [{ fr: "Il faudrait qu'il fasse beau demain." }],
    },
    {
      heading: "IV. 2 When the main verb is in the present",
      paragraphs: [
        "Use the present subjunctive in the subordinate clause for a present idea or a simple future. There is no future of the subjunctive. Je dis qu'il pleuvra demain is the future indicative. Je souhaite qu'il pleuve demain is the present subjunctive. But J'espère qu'il pleuvra demain, because espérer in the affirmative takes the indicative.",
        "Use the compound past of the subjunctive in the other cases, in particular for the past and for the future anterior.",
        "Compare a verb that takes the indicative with one that takes the subjunctive, both in the present. Il dit qu'il a plu, qu'il pleut, qu'il pleuvra demain, qu'il aura plu avant 5 h. Il souhaite qu'il ait plu, qu'il pleuve, qu'il pleuve demain, qu'il ait plu avant 5 h.",
      ],
      examples: [
        { fr: "Je dis qu'il pleuvra demain." },
        { fr: "Je souhaite qu'il pleuve demain." },
        { fr: "Il souhaite qu'il ait plu avant 5 h." },
      ],
    },
    {
      heading: "IV. 3 When the main verb is past or conditional",
      paragraphs: [
        "Use the present subjunctive to mark simultaneity, when the two actions happen together, or posteriority, when the subordinate action is still to come.",
        "Il voulait qu'on lui dise toute la vérité is simultaneity, so the present subjunctive. Il voulait que son amie vienne bientôt is posteriority, so the present subjunctive. Il aurait voulu que son amie soit avec lui is simultaneity, so the present subjunctive.",
        "A main clause in the past is not necessarily followed by a past subjunctive. The past subjunctive marks anteriority. Il était content que son amie lui ait écrit: the friend wrote before, so the past subjunctive. Elle était contente que son amie lui ait écrit.",
        "When the main verb is in the past or the conditional, the subordinate verb can be in the imperfect subjunctive: « Il était content que son amie lui écrivit. » « J'aurais voulu qu'elle fût présente. » That tense feels artificial.",
      ],
      examples: [
        { fr: "Il voulait qu'on lui dise toute la vérité." },
        { fr: "Il voulait que son amie vienne bientôt." },
        { fr: "Il était content que son amie lui ait écrit." },
        { fr: "J'aurais voulu qu'elle fût présente." },
      ],
    },
  ],
};
