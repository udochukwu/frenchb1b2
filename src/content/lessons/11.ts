import type { Lesson } from "./types";

export const lesson11: Lesson = {
  title: "Il est or c'est",
  intro:
    "English *it is* does not map onto one French pattern. *Il/elle* picks up a noun you have already named. *Ce/cela/c'est* picks up a whole idea, or points at something. *Il est* is also the empty subject in front of *de* + infinitive and *que*, and the way you tell the time. Weather, seasons, and a noun with an article go another way.",
  sections: [
    {
      heading: "I. 1 It for a noun already named",
      paragraphs: [
        "When a pronoun takes up an object or an idea already mentioned, the subject is *il/elle* or *ce/cela*, depending on the case.",
        "If *it* is a specific object already named, translate it by *il* or *elle* according to the gender of the French noun. *Où est mon livre ?* → *Il est dans le salon*. *Où est ta serviette ?* → *Elle est dans le tiroir*.",
      ],
      examples: [
        {
          fr: "Où est mon stylo ? *Il* est sur la table.",
          en: "Where is my pen? It is on the table.",
        },
        {
          fr: "Où est ma bague ? *Elle* est sur la table.",
          en: "Where is my ring? It is on the table.",
        },
        { fr: "Où est mon livre ? → *Il* est dans le salon." },
        { fr: "Où est ta serviette ? → *Elle* est dans le tiroir." },
      ],
    },
    {
      heading: "I. 2 It for a general idea",
      paragraphs: [
        "Translate *it* by *ce* or *cela* when it generalizes, or when it takes up a whole preceding clause.",
        "Use *ce* (or *c'*) immediately in front of *être*. *Nous passerons quinze jours en Norvège ; ce sera intéressant*. *Je n'ai rien vu ; c'est dommage*. Keep *ce* when *ne* comes directly before *être*: *Nous avons attendu ; ce n'était pas agréable*. *Si on m'accuse, ce ne sera pas juste*.",
        "Use *cela* in the other cases — when the verb is not *être*, or when something stands between *ne* and *être*. *Il a répondu à côté de la question ; cela prouve qu'il n'a rien compris*. *Il ne l'a même pas remerciée de son cadeau ; cela lui a fait de la peine*. *Venir te voir dimanche prochain ? Cela ne me sera pas facile* (*me* sits between *ne* and *sera*, so this is not *ce*).",
        "*Ça* often replaces *cela* in speech. Avoid it in writing.",
      ],
      examples: [
        {
          fr: "Nous passerons quinze jours en Norvège ; *ce* sera intéressant.",
        },
        { fr: "Je n'ai rien vu ; *c'est* dommage." },
        { fr: "Nous avons attendu ; *ce* n'était pas agréable." },
        { fr: "Si on m'accuse, *ce* ne sera pas juste." },
        {
          fr: "Il a répondu à côté de la question ; *cela* prouve qu'il n'a rien compris.",
        },
        {
          fr: "Venir te voir dimanche prochain ? *Cela* ne me sera pas facile.",
        },
      ],
    },
    {
      heading: "N. B. 1 A real subject",
      paragraphs: [
        "In both I. 1 and I. 2, the subject of English *it* (*il, elle, ce, cela*) is a real subject. It stands for something already mentioned, and a noun can take its place.",
        "In I. 1, repeat the noun: *Où est mon stylo ?* → *Mon stylo (il) est sur la table*. *Où est ma bague ?* → *Ma bague (elle) est sur la table*.",
        "In I. 2, a general word can replace *cela*: cet objet, cette idée, cette action, cette attitude. *Nous avons attendu pendant cinq heures ; cela (cette attente) n'était pas agréable*.",
      ],
      examples: [
        { fr: "Mon stylo (*il*) est sur la table." },
        { fr: "Ma bague (*elle*) est sur la table." },
        {
          fr: "Nous avons attendu pendant cinq heures ; *cela* (cette attente) n'était pas agréable.",
        },
      ],
    },
    {
      heading: "N. B. 2 Person or idea",
      paragraphs: [
        "The same sentence changes meaning with the pronoun. *L'orateur parlera en public ; il sera intéressant* — *il* is the person (he will be interesting). *L'orateur parlera en public ; ce sera intéressant* — *ce* takes up the talk itself (it will be interesting).",
      ],
      examples: [
        {
          fr: "L'orateur parlera en public ; *il* sera intéressant.",
          en: "The speaker will speak in public; he will be interesting.",
        },
        {
          fr: "L'orateur parlera en public ; *ce* sera intéressant.",
          en: "The speaker will speak in public; it (that) will be interesting.",
        },
      ],
    },
    {
      heading: "N. B. 3 Pointing",
      paragraphs: [
        "When you are showing a person or a thing, you can use *c'est* + a singular noun or *ce sont* + a plural noun. Here *c'est/ce sont* can be replaced by *voici*. You are pointing, not taking up a noun already mentioned. *C'est ma règle* (It's / That's my ruler). *Ce sont mes enfants* (Those are my children).",
      ],
      examples: [
        { fr: "*C'est* ma règle.", en: "It's (That's) my ruler." },
        { fr: "*Ce sont* mes enfants.", en: "Those are my children." },
      ],
    },
    {
      heading: "II. 1 Apparent subject",
      paragraphs: [
        "Use *il est* when the adjective introduces an infinitive with *de*, or a clause with *que*. *Il est bon de partir*. *Il est préférable d'étudier avant le test*. *Il est souhaitable que vous veniez*. *Il est important que vous nous téléphoniez*.",
        "This *il* is an apparent subject. It replaces no noun. It is neuter and only announces the real subject, the infinitive or the *que* clause. You cannot replace it with *chose*. *Il est bon de partir* = *Partir est bon* (It's good to leave). *Il est souhaitable que vous veniez* = *Que vous veniez est souhaitable* (It is preferable that you should come).",
      ],
      examples: [
        { fr: "*Il* est bon *de* partir.", en: "It's good to leave." },
        { fr: "*Il* est préférable *d'*étudier avant le test." },
        {
          fr: "*Il* est souhaitable *que* vous veniez.",
          en: "It is preferable that you should come.",
        },
        { fr: "*Il* est important *que* vous nous téléphoniez." },
      ],
    },
    {
      heading: "II. 2 Real subject",
      paragraphs: [
        "The subject is real when the adjective is followed by nothing, or by an infinitive with *à*. *C'est bon* (It's/That's good). *C'est bon à manger* (It's/That's good to eat). Then apply I. 1 and I. 2.",
        "Use *il/elle est* when the subject takes up a specific noun already named. *Voici mon voisin ; il est agréable*. *Voici un fruit ; il est bon à manger maintenant*.",
        "Use *c'est* when the subject takes up, vaguely, a notion or an activity expressed by a whole sentence. *Je parle à mon voisin ; c'est agréable*. *J'apprends le français ; c'est intéressant*.",
        "In speech the split is weak, and people often say *c'est* even in the II. 1 cases.",
      ],
      examples: [
        { fr: "*C'est* bon.", en: "It's/That's good." },
        { fr: "*C'est* bon *à* manger.", en: "It's/That's good to eat." },
        {
          fr: "Voici mon voisin ; *il* est agréable.",
          en: "Here is my neighbor, he is very pleasant.",
        },
        {
          fr: "Voici un fruit ; *il* est bon à manger maintenant.",
          en: "Here is some fruit; it is good to eat now.",
        },
        { fr: "Je parle à mon voisin ; *c'est* agréable." },
        { fr: "J'apprends le français ; *c'est* intéressant." },
      ],
    },
    {
      heading: "III. 1 Profession, nationality, religion",
      paragraphs: [
        "With *il, elle, ils, elles* + *être* + a noun of profession, nationality, or religion, that noun takes no article. English does. *Il est ingénieur. Ils sont ingénieurs. Elle est protestante. Elles sont protestantes*. *Elle est architecte*.",
        "Do not translate *He is an engineer; she is a lawyer* by « Il est un ingénieur » or « elle est une avocate ».",
      ],
      examples: [
        { fr: "*Il* est ingénieur. *Ils* sont ingénieurs." },
        { fr: "*Elle* est protestante. *Elles* sont protestantes." },
        { fr: "*Elle* est architecte." },
      ],
    },
    {
      heading: "III. 2 When the noun has an article",
      paragraphs: [
        "If the attribute noun has an article — and possibly an adjective or a relative clause — you cannot use *il/elle*. Use demonstrative *ce* (*c'*) before *être*. *C'est un ingénieur hautement qualifié*. *C'est l'avocate la mieux payée du service*. *C'est une Française qui vient de Paris*. *C'est une architecte renommée*. *C'est l'architecte la plus célèbre du pays*.",
      ],
      examples: [
        { fr: "*C'est* un ingénieur hautement qualifié." },
        { fr: "*C'est* l'avocate la mieux payée du service." },
        { fr: "*C'est* une Française qui vient de Paris." },
        { fr: "*C'est* une architecte renommée." },
      ],
    },
    {
      heading: "IV. 1 Clock time",
      paragraphs: [
        "For the clock, use *il* and *être*. *Il est cinq heures*. *Il est 5 heures*. *Il était minuit quand je me suis réveillé*. *Quelle heure est-il ?*",
      ],
      examples: [
        { fr: "*Il* est cinq heures." },
        { fr: "*Il* était minuit quand je me suis réveillé." },
        { fr: "Quelle heure est-*il* ?" },
      ],
    },
    {
      heading: "IV. 2 Weather",
      paragraphs: [
        "Weather is the impersonal expression *il fait*. *Il fait froid ; il fait chaud*.",
        "Do not use *être*. *It's fine* and *it's cold* are not « Il est beau » or « Il est froid ». Say *Il fait beau ; il fait froid*.",
        "*It's light* and *it's dark* are *il fait jour* and *il fait nuit*.",
      ],
      examples: [
        { fr: "*Il* fait froid ; *il* fait chaud." },
        { fr: "*Il* fait beau ; *il* fait froid." },
        { fr: "il fait jour ; il fait nuit", en: "it's light ; it's dark" },
      ],
    },
    {
      heading: "IV. 3 Seasons, years, parts of the day",
      paragraphs: [
        "For seasons, years, parts of the day, or lengths of time, use demonstrative *ce* (*c'*) and *être*. *C'est le printemps !* *C'était en 1999*. *C'est le matin de Noël*. *C'était pendant la guerre de Sécession*.",
      ],
      examples: [
        { fr: "*C'est* le printemps !" },
        { fr: "*C'était* en 1999." },
        { fr: "*C'est* le matin de Noël." },
        { fr: "*C'était* pendant la guerre de Sécession." },
      ],
    },
    {
      heading: "V. 1 C'est… qui / c'est… que",
      paragraphs: [
        "To stress a noun, a pronoun, or a whole piece of the sentence, drop it into *c'est… qui…*, *c'est… que…*, *ce sont… qui…*, or *ce sont… que…*. *C'est lui qui me l'a dit*. *C'est à Paris que je suis né*. *C'est mon cousin qui me l'a dit* (It was my neighbour who told me). *C'est « viens ici » qu'il a dit*. *C'est ma voisine qui vous fera entrer*.",
        "The French frame stays in the present, unlike English *it was*.",
      ],
      examples: [
        { fr: "*C'est* lui qui me l'a dit." },
        { fr: "*C'est* à Paris que je suis né." },
        {
          fr: "*C'est* mon cousin qui me l'a dit.",
          en: "It was my neighbour who told me.",
        },
        {
          fr: "*C'est* « viens ici » qu'il a dit.",
          en: 'It was "come here" that he said.',
        },
        {
          fr: "*C'est* ma voisine qui vous fera entrer.",
          en: "It is my neighbour who will let you in.",
        },
      ],
    },
    {
      heading: "V. 2 C'est or ce sont, qui or que",
      paragraphs: [
        "The first half is *c'est*, except when you stress *eux/elles* or a plural noun with no preposition in front of it. Then use *ce sont*. English keeps a singular verb. *C'est aux enfants qu'il faut le dire* (*à* is a preposition, so *c'est*). *C'est nous qui en sommes responsables*. *C'est hier qu'il a parlé*. But *Ce sont leurs enfants qui ont cassé le carreau*. *Ce sont eux qui le paieront*. *Ce sont eux qui te le diront*.",
        "The second half is *qui* when the stressed element is the subject of the following verb. *C'est mon frère qui me l'a dit* (= mon frère me l'a dit). *Ce sont ses parents qui le surveillent*.",
        "Otherwise it is *que*. *C'est de mon frère que nous parlons*. *C'est mon frère que je félicite*. *C'est pour elle que je suis venu*.",
      ],
      examples: [
        { fr: "*C'est* aux enfants qu'il faut le dire." },
        { fr: "*C'est* nous qui en sommes responsables." },
        { fr: "*C'est* hier qu'il a parlé." },
        { fr: "*Ce sont* leurs enfants qui ont cassé le carreau." },
        { fr: "*Ce sont* eux qui le paieront." },
        { fr: "*C'est* mon frère *qui* me l'a dit." },
        { fr: "*C'est* de mon frère *que* nous parlons." },
        { fr: "*C'est* mon frère *que* je félicite." },
        { fr: "*C'est* pour elle *que* je suis venu." },
      ],
    },
    {
      heading: "VI. 1 The segmented sentence",
      paragraphs: [
        "In speech the sentence often comes apart. You say the important word or idea first, pause, then pick it up with a pronoun, using I. 1 and I. 2. *Ton père, il est patient ?* *Ce camion, il est difficile à conduire ?* *Les études, c'est toujours fatigant*. *Ton père, il va à la pêche ?*",
        "The same pattern works with *être* the other way around, announcing or picking up. *Cette voiture, elle est difficile à conduire ?* *Apprendre le français, c'est intéressant ?*",
        "*C'est* tends to take over when the word is a generalization (les parents, le pouvoir, l'armée) or a sport or an intellectual activity. *Le pouvoir, c'est dangereux*. *Les parents, c'est jamais content*. *Les études, c'est toujours fatigant*.",
      ],
      examples: [
        {
          fr: "Ton père, *il* est patient ?",
          en: "Your father, is he patient?",
        },
        {
          fr: "Ce camion, *il* est difficile à conduire ?",
          en: "This truck, is it difficult to drive?",
        },
        {
          fr: "Les études, *c'est* toujours fatigant.",
          en: "Studying, it's always tiring.",
        },
        { fr: "Ton père, *il* va à la pêche ?" },
        { fr: "Le pouvoir, *c'est* dangereux." },
        { fr: "Les parents, *c'est* jamais content." },
      ],
    },
    {
      heading: "VI. 2 The pronoun comes first",
      paragraphs: [
        "Sometimes the pronoun announces the element, and the noun follows. *Il va à la pêche, ton père ?*",
      ],
      examples: [{ fr: "*Il* va à la pêche, ton père ?" }],
    },
  ],
};
