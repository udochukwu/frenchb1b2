import type { Lesson } from "./types";

export const lesson12: Lesson = {
  title: "The relative pronoun",
  intro:
    "A relative pronoun ties a clause to a noun or pronoun already named, the antecedent. French does not drop it the way English drops *that*. The form depends on the job in the clause: subject *qui*, direct object *que*, *de* *dont*, place or time *où*, and *lequel* or *quoi* after another preposition.",
  sections: [
    {
      heading: "I. 1 Two series",
      paragraphs: [
        "Series a is invariable: *qui, que, quoi, dont, où*.",
        "Series b changes for gender and number: *lequel, laquelle, lesquels, lesquelles*. You normally use it after a preposition. With *à* and *de* the forms contract: *auquel, auxquels, auxquelles, duquel, de laquelle, desquels, desquelles*. *Le livre dans lequel j'ai trouvé cet exercice. La question à laquelle il a répondu.*",
        "Series b is rarely used with no preposition (VI. 2, p. 101). Not « Mon frère, lequel s'est acheté un nouvel équipement », but *Mon frère qui s'est acheté un nouvel équipement*.",
      ],
      examples: [
        { fr: "La femme *qui* m'a parlé s'appelle Brigitte Dubois." },
        { fr: "La femme *à laquelle* j'ai parlé est une voisine." },
        { fr: "Le livre *dans lequel* j'ai trouvé cet exercice." },
        { fr: "*qui, que, quoi, dont, où*" },
        { fr: "*lequel, laquelle, lesquels, lesquelles*" },
        {
          fr: "*auquel, auxquels, auxquelles, duquel, de laquelle, desquels, desquelles*",
        },
      ],
    },
    {
      heading: "I. 2 Do not omit the object pronoun",
      paragraphs: [
        "Unlike English, the object relative cannot be dropped. *L'homme que je connais* (The man (that) I know). *La question à laquelle j'ai répondu* (The question (that) I answered). *Le livre dont j'ai besoin* (The book (that) I need).",
      ],
      examples: [
        { fr: "L'homme *que* je connais.", en: "The man (that) I know." },
        {
          fr: "La question *à laquelle* j'ai répondu.",
          en: "The question (that) I answered.",
        },
        { fr: "Le livre *dont* j'ai besoin.", en: "The book (that) I need." },
      ],
    },
    {
      heading: "II. 1 The antecedent",
      paragraphs: [
        "A French relative always has an antecedent, the noun or pronoun it stands for. Set phrases such as « Qui vivra verra » are frozen and live in proverbs.",
        "The antecedent can be a noun, a demonstrative, or a personal pronoun. *L'inspecteur qui a surveillé les travaux a envoyé un rapport. Celui qui a surveillé les travaux a envoyé un rapport. Lui, qui était si pressé, retarde maintenant les travaux.*",
        "When the antecedent is indefinite *tout*, prop it up with demonstrative *ce*. *C'est tout ce que je peux vous dire* (It is all I can tell you). *C'est tout ce qui lui plaît* (That's all he likes).",
      ],
      examples: [
        { fr: "L'élève *qui* a compris." },
        { fr: "Celui *qui* a compris." },
        { fr: "Voilà *ce que* j'ai compris." },
        {
          fr: "C'est *tout ce que* je peux vous dire.",
          en: "It is all I can tell you.",
        },
        { fr: "C'est *tout ce qui* lui plaît.", en: "That's all he likes." },
      ],
    },
    {
      heading: "II. 2 Translating what",
      paragraphs: [
        "Because the relative needs an antecedent, English relative *what* is two French words: demonstrative *ce* plus the relative. *Je vois ce que vous voulez dire* (I see what you mean). *Je comprends ce qui vous ennuie* (I understand what bothers you).",
        "Do not mix this up with exclamative *what* (*What a good teacher!* = *Quel bon professeur !*) or with interrogative *what* in an indirect question, which has no *ce*. *Elle demande à quoi tu fais allusion* (She asks what you are referring to). The relative is *Elle voit ce à quoi tu fais allusion* (She can see what you are referring to). See chapter V, p. 262.",
      ],
      examples: [
        { fr: "Je vois *ce que* vous voulez dire.", en: "I see what you mean." },
        {
          fr: "Je comprends *ce qui* vous ennuie.",
          en: "I understand what bothers you.",
        },
        { fr: "Elle voit *ce à quoi* tu fais allusion." },
      ],
    },
    {
      heading: "II. 3 Agreement",
      paragraphs: [
        "The relative has the gender, number, and person of its antecedent.",
        "If the antecedent is 2nd person plural, the subject relative is 2nd person plural and the verb agrees with it. *C'est vous qui êtes récompensés. C'est moi qui suis arrivé le premier.*",
        "Watch a verb with several personal pronouns as antecedents. *Vous et moi, qui avons le même âge, nous aimons les mêmes chansons.*",
        "A masculine antecedent makes a masculine relative; a feminine plural antecedent makes a feminine plural relative.",
        "When the relative is a direct object, the past participle with *avoir* agrees inside the relative clause. *Il m'a rendu les cinq dollars que je lui avais prêtés* — *que* is the direct object of *prêter*, and it is masculine plural because of *dollars*.",
      ],
      examples: [
        { fr: "C'est *vous qui êtes* récompensés." },
        { fr: "C'est *moi qui suis* arrivé le premier." },
        {
          fr: "*Vous et moi, qui avons* le même âge, nous aimons les mêmes chansons.",
        },
        { fr: "Il m'a rendu les cinq dollars *que* je lui avais prêtés." },
        { fr: "Les enfants *qu'*il a vus." },
      ],
    },
    {
      heading: "III. 1 Qui",
      paragraphs: [
        "*Qui* as subject of the verb can have a person or a thing as antecedent. *Les hommes qui l'aiment.*",
        "After a preposition, *qui* is an indirect object and can only stand for a person.",
        "*Qui* is never elided.",
      ],
      examples: [
        { fr: "Les hommes *qui* l'aiment." },
        { fr: "La femme *qui* m'a parlé s'appelle Brigitte Dubois." },
      ],
    },
    {
      heading: "III. 2 Que",
      paragraphs: [
        "*Que* is always the direct object. The antecedent may be a person or a thing. *Les hommes que nous aimons.*",
        "*Que* is never directly preceded by a preposition.",
        "Before a vowel or a mute *h*, *que* becomes *qu'*. *L'enfant qu'il a vu.*",
        "As a direct object, *que* makes the past participle with *avoir* agree. *Les enfants qu'il a vus.*",
      ],
      examples: [
        { fr: "Les hommes *que* nous aimons." },
        { fr: "L'enfant *qu'*il a vu." },
        { fr: "Les enfants *qu'*il a vus." },
      ],
    },
    {
      heading: "III. 3 Qui l' or qu'il",
      paragraphs: [
        "Do not mix up *qui l'* (subject relative + object pronoun) and *qu'il* (object relative + subject pronoun). *Les hommes qui l'aiment* means the men love him or her. *Les hommes qu'il aime* means he loves the men.",
      ],
      examples: [
        { fr: "Les hommes *qui l'*aiment.", en: "les hommes l'aiment" },
        { fr: "Les hommes *qu'il* aime.", en: "il aime les hommes" },
      ],
    },
    {
      heading: "IV. 1 Dont, duquel, de qui, de quoi",
      paragraphs: [
        "When the relative stands for a noun after *de*, you theoretically have a choice: *de* + *lequel* gives *duquel, de laquelle, desquels, desquelles*; *de* + *qui* when the antecedent is a person; *de* + *quoi* when it is an indefinite pronoun; or *dont*.",
        "In modern French you almost always use *dont*. *Le livre dont je vous parle* (parler d'un livre). *La personne dont vous m'avez présenté les parents* (présenter les parents de la personne). *Le goudron dont la route est recouverte* (la route est recouverte de goudron). *Ce dont vous me parlez* (vous me parlez de cela).",
        "*Dont* is impossible when the relative completes a noun that itself follows a preposition. Use *duquel, de laquelle*, and the rest. *Le livre à la page duquel je me réfère* — *duquel* stands for *livre*, but it completes *page*, and *page* is after a preposition: je me réfère à la page du livre.",
        "Word order is not the English order. The pattern is antecedent + preposition + noun + *duquel* (*de laquelle*). For a person you may also use *de qui*. *Le spécialiste sur les conseils duquel (de qui) vous avez acheté cet ordinateur* (You bought this computer on the specialist's advice). Plural: *Les spécialistes sur les conseils desquels (de qui) vous avez acheté cet ordinateur*. Contrast *Le spécialiste dont vous avez écouté les conseils* (You listened to the specialist's advice).",
      ],
      examples: [
        { fr: "Le livre *dont* je vous parle." },
        { fr: "Le livre à la page *duquel* je me réfère." },
        { fr: "*Ce dont* vous me parlez." },
        {
          fr: "Le spécialiste *sur les conseils duquel (de qui)* vous avez acheté cet ordinateur.",
          en: "The specialist on whose advice you bought this computer.",
        },
        {
          fr: "Le spécialiste *dont* vous avez écouté les conseils.",
          en: "The specialist whose advice you listened to.",
        },
      ],
    },
    {
      heading: "IV. 2 Whose",
      paragraphs: [
        "After *dont*, French word order stays *sujet*, *verbe*, *c. o. d.* *Voici l'étudiante dont je vous ai transmis le c.v.* (Here is the student whose c.v. I sent you).",
        "*Dont* already marks possession, so a possessive adjective is redundant. Not « Ce sont des étudiants dont leurs études ont été financées par l'État ». Say *Ce sont des étudiants dont les études ont été financées par l'État*.",
      ],
      examples: [
        {
          fr: "Voici l'étudiante *dont* je vous ai transmis le c.v.",
          en: "Here is the student whose c.v. I sent you.",
        },
        {
          fr: "Ce sont des étudiants *dont les* études ont été financées par l'État.",
        },
      ],
    },
    {
      heading: "V. 1 Où for place and time",
      paragraphs: [
        "When the antecedent is a place, *où* often replaces series b after a preposition of place. *Le tiroir dans lequel j'ai mis mon argent* → *Le tiroir où j'ai mis mon argent*. *L'appartement où il vit est agréable.*",
        "Do not mix up *où* and *ou* (the coordinating conjunction). *La salle de classe où il travaille* (*où* = dans laquelle) is not *Il travaille dans la salle de classe ou dans son bureau* (*ou* = ou bien). See IV, p. 337.",
        "When the antecedent is a time, use *où*. Never the adverb *quand*. *Le jour où je l'ai rencontré* (The day when I met him). *Au moment où nous nous sommes levés* (At the moment when we stood up). English can drop *when* (*The day I met him*). French cannot drop *où*. *Le jour où je suis partie, il pleuvait à verse.*",
      ],
      examples: [
        {
          fr: "Le tiroir *dans lequel* j'ai mis mon argent. → Le tiroir *où* j'ai mis mon argent.",
        },
        { fr: "L'appartement *où* il vit est agréable." },
        { fr: "La salle de classe *où* il travaille.", en: "où = dans laquelle" },
        {
          fr: "Le jour *où* je l'ai rencontré.",
          en: "The day when I met him.",
        },
        {
          fr: "Au moment *où* nous nous sommes levés.",
          en: "At the moment when we stood up.",
        },
      ],
    },
    {
      heading: "V. 2 D'où, dont, par où",
      paragraphs: [
        "For origin, use *d'où* when the antecedent is a thing and *dont* when it is people. *Le pays d'où je viens. La famille dont il descend.*",
        "For passing through a place, use *par où*. *Les villes par où nous sommes passés.*",
      ],
      examples: [
        { fr: "Le pays *d'où* je viens." },
        { fr: "La famille *dont* il descend." },
        { fr: "Les villes *par où* nous sommes passés." },
      ],
    },
    {
      heading: "VI. 1 Where the preposition sits",
      paragraphs: [
        "The preposition that belongs to the relative cannot be stranded at the end of the clause, as in English. It sits immediately in front of the relative, and the relative is never omitted. *L'homme pour lequel je travaille est très exigeant* (The man (that) I work for is very demanding). *La chaise sur laquelle je m'assieds est très confortable* (The chair (that) I sit on is very comfortable).",
      ],
      examples: [
        {
          fr: "L'homme *pour lequel* je travaille est très exigeant.",
          en: "The man (that) I work for is very demanding.",
        },
        {
          fr: "La chaise *sur laquelle* je m'assieds est très confortable.",
          en: "The chair (that) I sit on is very comfortable.",
        },
      ],
    },
    {
      heading: "VI. 2 One French structure",
      paragraphs: [
        "English has two shapes for a relative with a preposition. Keep the preposition and use *which* for a thing (*The raquet with which I used to play was very heavy*) or *whom* for a person (*The person for whom I voted was elected*). Or drop the pronoun and strand the preposition (*The raquet I used to play with was very heavy. The person I voted for was elected*).",
        "French has only preposition + relative. *La raquette avec laquelle je jouais était très lourde. La personne pour laquelle / pour qui j'ai voté a été élue.*",
        "Series b (*lequel, laquelle, lesquels, lesquelles*) is not used without a preposition, except in a few cases that avoid ambiguity. *Je suis venu avec ma nièce et ma cousine, laquelle était malade.*",
        "After a preposition, *qui* is also possible when the antecedent is a person. *Le patron pour qui / pour lequel je travaille.*",
      ],
      examples: [
        { fr: "La raquette *avec laquelle* je jouais était très lourde." },
        { fr: "La personne *pour laquelle/pour qui* j'ai voté a été élue." },
        {
          fr: "Je suis venu avec ma nièce et ma cousine, *laquelle* était malade.",
        },
        { fr: "Le patron *pour qui/pour lequel* je travaille." },
      ],
    },
    {
      heading: "VI. 3 Quoi",
      paragraphs: [
        "If the antecedent is an indefinite pronoun (*rien, quelque chose, tout*) or demonstrative *ce*, use *quoi* after the preposition. *Il n'y a rien sur quoi s'asseoir. Il n'a rien à quoi s'accrocher* (He has nothing to hang on to). *Je voudrais quelque chose sur quoi écrire* (I would like something to write on). *Voici ce à quoi je m'attends* (This is what I expect).",
      ],
      examples: [
        { fr: "Il n'y a rien *sur quoi* s'asseoir." },
        {
          fr: "Il n'a rien *à quoi* s'accrocher.",
          en: "He has nothing to hang on to.",
        },
        {
          fr: "Je voudrais quelque chose *sur quoi* écrire.",
          en: "I would like something to write on.",
        },
        { fr: "Voici *ce à quoi* je m'attends.", en: "This is what I expect." },
      ],
    },
  ],
};
