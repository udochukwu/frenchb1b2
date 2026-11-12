import type { Lesson } from "./types";

export const lesson22: Lesson = {
  title: "Forms in -ant",
  intro:
    "French builds three different words on the same -ant shape: the present participle, the verbal adjective, and the gerund (the participle preceded by en). English -ing does not map onto any one of them. Match the French form to the job it does: an action, a quality, or a circumstance of the main verb.",
  sections: [
    {
      heading: "I. 1 Regular and irregular formation",
      paragraphs: [
        "The present participle is formed by adding -ant to the stem of the verb conjugated at the nous form of the present indicative. Nous buvons gives buvant, nous faisons gives faisant, nous rougissons gives rougissant.",
        "Three irregular verbs keep a special form: être → étant, avoir → ayant, savoir → sachant.",
      ],
      examples: [
        { fr: "nous buvons → buvant" },
        { fr: "nous faisons → faisant" },
        { fr: "nous rougissons → rougissant" },
        { fr: "être → étant ; avoir → ayant ; savoir → sachant" },
        { fr: "Ne faisant pas attention, il s'est blessé." },
      ],
    },
    {
      heading: "II. 1 The verbal adjective",
      paragraphs: [
        "From the present participle, the language has formed verbal adjectives that agree in gender and number with the noun they modify. Des jeux amusants. Des histoires passionnantes.",
        "These adjectives mark a quality or a state. They cannot take a direct object. One cannot write « des jeux amusants les enfants ».",
      ],
      examples: [
        { fr: "Des jeux amusants." },
        { fr: "Des histoires passionnantes." },
        { fr: "Ce sont des parents négligents." },
      ],
    },
    {
      heading: "II. 2 The present participle",
      paragraphs: [
        "The present participle marks an action. It is invariable and it can take a direct object. Les clowns, amusant les enfants, faisaient des acrobaties.",
      ],
      examples: [
        { fr: "Négligeant nos conseils, ils rencontrent des difficultés." },
        { fr: "Les clowns, amusant les enfants, faisaient des acrobaties." },
      ],
    },
    {
      heading: "II. 3 Spelling differences",
      paragraphs: [
        "The present participle and the masculine singular verbal adjective often share a spelling, but sometimes they differ. Learn the pairs: communiquant / communicant, convainquant / convaincant, fatiguant / fatigant, intriguant / intrigant, provoquant / provocant, suffoquant / suffocant, vaguant / vacant.",
        "Elle a donné des preuves, convainquant tout l'auditoire uses the participle, because it marks the action of convincing. Elle a donné des preuves convaincantes uses the adjective, and it agrees.",
        "A second set differs in the ending: différant / différent, équivalant / équivalent, négligeant / négligent, résidant / résident. Différant trop dans leur point de vue, les négociateurs ne sont pas arrivés à un accord. Les points de vue étaient trop différents pour que les négociateurs arrivent à un accord.",
      ],
      examples: [
        { fr: "communiquant / communicant ; convainquant / convaincant ; fatiguant / fatigant" },
        { fr: "intriguant / intrigant ; provoquant / provocant ; suffoquant / suffocant ; vaguant / vacant" },
        { fr: "Elle a donné des preuves, convainquant tout l'auditoire." },
        { fr: "Elle a donné des preuves convaincantes." },
        { fr: "différant / différent ; équivalant / équivalent ; négligeant / négligent ; résidant / résident" },
        { fr: "Différant trop dans leur point de vue, les négociateurs ne sont pas arrivés à un accord." },
        { fr: "Les points de vue étaient trop différents pour que les négociateurs arrivent à un accord." },
      ],
    },
    {
      heading: "II. 4 Present participle or a relative clause",
      paragraphs: [
        "A present participle followed by a complement is often replaced by a relative clause. Il a observé le soleil se couchant à l'horizon can be Il a observé le soleil qui se couchait à l'horizon.",
      ],
      examples: [
        { fr: "Il a observé le soleil se couchant à l'horizon." },
        { fr: "Il a observé le soleil qui se couchait à l'horizon." },
      ],
    },
    {
      heading: "II. 5 A translation problem",
      paragraphs: [
        "An English verbal adjective does not always have a French verbal adjective to match it. Check the dictionary. If the French adjective does not exist, translate the English form with a relative clause: a shouting man is un homme qui crie; a waiting limousine is une limousine qui attend; a barking dog is un chien qui aboie; a crying baby is un bébé qui pleure.",
      ],
      examples: [
        { fr: "un homme qui crie" },
        { fr: "une limousine qui attend" },
        { fr: "un chien qui aboie" },
        { fr: "un bébé qui pleure" },
      ],
    },
    {
      heading: "III. 1 What a gerund is",
      paragraphs: [
        "The gerund is the present participle preceded by the preposition en: en chantant, en marchant.",
      ],
      examples: [{ fr: "en chantant, en marchant" }],
    },
    {
      heading: "III. 2 Uses of the gerund",
      paragraphs: [
        "The gerund is invariable. It often marks time and, more specifically, simultaneity with the action of the main clause. Je l'ai rencontré en allant à l'université means Je l'ai rencontré alors que j'allais à l'université.",
        "To insist on that simultaneity, tout can precede the gerund: Il parlait tout en se préparant.",
        "The gerund can also mark manner (comment ?), cause (pourquoi ?), and hypothesis. Elle a répondu en souriant is manner: she answered with a smile. En lui rappelant son passé, vous l'avez mis dans l'embarras is cause. En n'écoutant pas, vous ne comprendrez pas is hypothesis: if you do not listen, you will not understand.",
      ],
      examples: [
        { fr: "Il est tombé en descendant les escaliers." },
        { fr: "En étudiant régulièrement, vous ferez des progrès." },
        { fr: "Je l'ai rencontré en allant à l'université." },
        { fr: "Il parlait tout en se préparant." },
        { fr: "Elle a répondu en souriant." },
        { fr: "En lui rappelant son passé, vous l'avez mis dans l'embarras." },
        { fr: "En n'écoutant pas, vous ne comprendrez pas." },
      ],
    },
    {
      heading: "IV. 1 After a verb of perception",
      paragraphs: [
        "After verbs such as voir, regarder, sentir, and so on, English -ing is translated by an infinitive. I see him working is Je le vois travailler. The manual points to chapter 18, II. 2, page 146.",
        "With verbs that mean to spend time, use the infinitive preceded by à. J'ai passé mon temps à réfléchir. Il a passé la journée à chercher un emploi. Elle a passé la soirée à lire le journal.",
      ],
      examples: [
        { fr: "Je le vois travailler." },
        { fr: "J'ai passé mon temps à réfléchir." },
        { fr: "Il a passé la journée à chercher un emploi." },
        { fr: "Elle a passé la soirée à lire le journal." },
      ],
    },
    {
      heading: "IV. 2 Choosing the preposition",
      paragraphs: [
        "In French, the only preposition that can precede the -ant form is en. In English, -ing can follow by, without, in, and other prepositions, and it is then translated by an infinitive: for living is pour vivre; without paying is sans payer.",
        "These verbs are not followed in French by an -ant form, but by an infinitive: to stop (smoking, and so on) = s'arrêter de (fumer, and so on); to consist in = consister à; to succeed in = réussir à, parvenir à; to apologize for = s'excuser de; to thank a person for = remercier quelqu'un de; to give up = renoncer à; to begin by = commencer par; to end by = finir par.",
        "I feel like drinking is J'ai envie de boire. They prevented me from falling is Ils m'ont empêché de tomber. He began by thanking his parents is Il a commencé par remercier ses parents. She had to give up dancing is Elle a dû renoncer à danser.",
      ],
      examples: [
        { fr: "pour vivre ; sans payer" },
        { fr: "s'arrêter de fumer ; consister à ; réussir à, parvenir à ; s'excuser de" },
        { fr: "remercier quelqu'un de ; renoncer à ; commencer par ; finir par" },
        { fr: "J'ai envie de boire." },
        { fr: "Ils m'ont empêché de tomber." },
        { fr: "Il a commencé par remercier ses parents." },
        { fr: "Elle a dû renoncer à danser." },
      ],
    },
    {
      heading: "IV. 3 A translation problem",
      paragraphs: [
        "Some English present participles correspond to French past participles, when the verb marks a physical posture: clinging = cramponné; crouching = tapi; fainting = évanoui; hanging = pendu, accroché, suspendu; kneeling = agenouillé; leaning = penché, incliné; lying = couché, étendu; sitting = assis; squatting = accroupi.",
        "She was sitting on the floor is Elle était assise sur le plancher.",
      ],
      examples: [
        { fr: "cramponné, tapi, évanoui, pendu, accroché, suspendu" },
        { fr: "agenouillé, penché, incliné, couché, étendu, assis, accroupi" },
        { fr: "Elle était assise sur le plancher." },
      ],
    },
    {
      heading: "IV. 4 The idea of duration",
      paragraphs: [
        "The English periphrasis to be plus -ing, which marks duration, can be translated by être en train de. In French this periphrasis insists on the duration more than the English form does. J'étais en train de travailler (je travaillais) lorsqu'il arriva. Elle est en train de faire la cuisine (elle cuisine).",
      ],
      examples: [
        { fr: "J'étais en train de travailler (je travaillais) lorsqu'il arriva." },
        { fr: "Elle est en train de faire la cuisine (elle cuisine)." },
      ],
    },
    {
      heading: "V. 1 Reminder",
      paragraphs: [
        "A gerund or a present participle, followed by its complements, can form a subordinate clause. Depending on the context, it equals a circumstantial clause of time, cause, or hypothesis (page 175, III. 2). En étudiant ce document, vous découvrirez qu'il s'agit d'une fraude means lorsque vous étudierez ce document. En lui rappelant son passé, vous l'avez mis dans l'embarras means parce que vous lui avez rappelé son passé.",
        "The present participle most often marks cause. Étant enrhumé, il préfère ne pas sortir.",
      ],
      examples: [
        { fr: "En étudiant ce document, vous découvrirez qu'il s'agit d'une fraude." },
        { fr: "En lui rappelant son passé, vous l'avez mis dans l'embarras." },
        { fr: "Étant enrhumé, il préfère ne pas sortir." },
      ],
    },
    {
      heading: "V. 2 Construction with the present participle",
      paragraphs: [
        "The present participle can have a subject other than the subject of the main verb. L'orateur levant son verre, les assistants applaudirent.",
        "One cannot say « Levant son verre, les assistants applaudirent », because levant cannot refer to assistants: the owner of the glass is singular (son verre).",
        "If the present participle has no expressed subject, it must refer to the subject of the main verb. Levant son verre, l'orateur proposa un toast.",
      ],
      examples: [
        { fr: "L'orateur levant son verre, les assistants applaudirent." },
        { fr: "Levant son verre, l'orateur proposa un toast." },
      ],
    },
    {
      heading: "V. 3 Construction with the gerund",
      paragraphs: [
        "The subject of the gerund is always the same as the subject of the main clause. Il encouragea l'élève en souriant: the same person encourages and smiles.",
        "For that reason, I met him going to the university is Je l'ai rencontré en allant à l'université, and it means that going to the university and meeting are done by the same person. If the English sentence means that two different people do the two actions, both subjects have to be expressed: Je l'ai rencontré alors qu'il allait à l'université.",
      ],
      examples: [
        { fr: "Il encouragea l'élève en souriant." },
        { fr: "Je l'ai rencontré en allant à l'université." },
        { fr: "Je l'ai rencontré alors qu'il allait à l'université." },
      ],
    },
    {
      heading: "V. 4 Present participle of the auxiliary plus past participle",
      paragraphs: [
        "There is a compound participle made of the present participle of the auxiliary avoir or être plus the past participle of the verb: ayant mangé, étant tombé.",
        "This compound participle marks anteriority to the action of the main verb. Les enfants ayant mangé, elle desservit la table. Les enfants étant endormis, elle peut enfin lire le journal.",
        "If this participle has no expressed subject, it must refer to the subject of the main clause. Ayant mangé, elle partit rencontrer son amie.",
      ],
      examples: [
        { fr: "Ayant mangé, étant tombé" },
        { fr: "Les enfants ayant mangé, elle desservit la table." },
        { fr: "Les enfants étant endormis, elle peut enfin lire le journal." },
        { fr: "Ayant mangé, elle partit rencontrer son amie." },
      ],
    },
  ],
};
