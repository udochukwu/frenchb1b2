import type { Lesson } from "./types";

export const lesson18: Lesson = {
  title: "The infinitive as a direct complement",
  intro:
    "Many French verbs take a following infinitive directly, without a preposition. The choice between an infinitive, a second finite clause, and a relative clause depends on the verbs involved and whether the two actions have the same subject.",
  sections: [
    {
      heading: "I. 1 Verbs followed directly by an infinitive",
      paragraphs: [
        "The chapter lists modal auxiliaries *vouloir*, *savoir*, *pouvoir*, and *devoir*; *faillir*; verbs of feeling such as *espérer*, *préférer*, *désirer*, *oser*, and *daigner*; and movement verbs that express a goal, such as *aller*, *partir*, *venir*, *descendre*, and *rentrer*. These verbs are followed directly by an infinitive, without an intervening preposition. The manual points to its appendix, page 341, for a list of the principal verbs used this way.",
        "When *espérer* or *sembler* is followed by an infinitive, it also takes no *de*. The expression *avoir beau* is followed by an infinitive as well. English often links two verbs of the same form or tense with *and* to express a goal; French instead uses *aller* or *venir* followed by an infinitive.",
        "Do not confuse *venir de* plus an infinitive, which marks the recent past, with *venir* followed directly by an infinitive, which expresses coming to do something.",
      ],
      examples: [
        { fr: "Ils espèrent venir bientôt." },
        { fr: "Je vais travailler." },
        { fr: "Viens voir ce qui se passe." },
        { fr: "Je veux aller au cinéma." },
        { fr: "Je dois faire mes devoirs." },
        { fr: "La voiture a failli écraser le piéton." },
        { fr: "Elle désire faire l'ascension du mont Blanc." },
        { fr: "J'ai osé tenir tête à mon patron." },
        { fr: "Il espère venir bientôt." },
        { fr: "Elle semble reprendre des forces." },
        { fr: "Il a beau travailler fort, il ne réussit pas." },
        { fr: "Elle vient me voir. Je cours te rejoindre. Je monte me coucher." },
        { fr: "Viens voir." },
        { fr: "Va chercher la voiture." },
        { fr: "Es-tu venu me demander quelque chose ?" },
        { fr: "Elle vient de me voir." },
        { fr: "Elle vient me voir." },
      ],
    },
    {
      heading: "I. 2 The subject of the conjugated verb and the infinitive",
      paragraphs: [
        "Using a direct infinitive after the verbs in this section means that the conjugated verb and the infinitive have the same subject. If the two subjects are different, use a subordinate clause introduced by *que* instead.",
      ],
      examples: [
        { fr: "Je veux partir." },
        { fr: "Il veut me demander de l'argent." },
        { fr: "Je veux que tu partes." },
        { fr: "Il veut que je lui donne de l'argent." },
      ],
    },
    {
      heading: "II. 1 Verbs with double constructions",
      paragraphs: [
        "Verbs of statement and opinion—including *dire*, *croire*, and *penser*—can have two constructions when the subject remains the same: the verb may be followed by an infinitive or by a subordinate clause introduced by *que*. The infinitive construction is possible only when the subject of the introducing verb and the subject of the following verb are the same person. If they are different, the infinitive construction is not possible and the *que* clause is used.",
      ],
      examples: [
        { fr: "Elle dit l'avoir reconnu." },
        { fr: "Elle dit qu'elle l'a reconnu." },
        { fr: "Il avoue avoir tort. → Il avoue qu'il a tort." },
        { fr: "Je pense avoir tout dit. → Je pense que j'ai tout dit." },
        { fr: "Tu crois le savoir par cœur. → Tu crois que tu le sais par cœur." },
        { fr: "Il dit que nous avons tort." },
        { fr: "Je pense qu'il a tout dit." },
        { fr: "Tu crois qu'il le sait par cœur." },
      ],
    },
    {
      heading: "II. 2 Verbs of perception",
      paragraphs: [
        "The perception verbs *voir*, *entendre*, *écouter*, and *sentir* can be followed directly by an infinitive. When the subject of the second verb is expressed, the infinitive construction can be replaced by a relative clause. *Apercevoir* is an exception: it cannot be constructed with an infinitive, so use a relative clause.",
      ],
      examples: [
        { fr: "J'entends chanter." },
        { fr: "J'entends les enfants chanter. (enfants = sujet de chanter.)" },
        { fr: "J'entends les enfants qui chantent." },
        { fr: "Je vois l'acteur pleurer." },
        { fr: "Je vois l'acteur qui pleure." },
        { fr: "J'aperçois les enfants qui arrivent." },
      ],
    },
    {
      heading: "II. 3 The verb *falloir*",
      paragraphs: [
        "*Falloir* is impersonal. The actual subject of its infinitive is not expressed, so context determines who must act. For example, *Il faut partir* may mean that I must leave, you must leave, or another person must leave. To avoid ambiguity, either add an indirect personal pronoun to *il faut* and keep the infinitive, or use a subordinate clause introduced by *que* with the subjunctive.",
      ],
      examples: [
        { fr: "Il lui faut travailler. (Il doit travailler.)" },
        { fr: "Il faut qu'il travaille." },
        { fr: "Il me faut partir." },
        { fr: "Il leur faut partir." },
        { fr: "Il faut que je parte." },
        { fr: "Il faut que vous partiez." },
      ],
    },
  ],
};
