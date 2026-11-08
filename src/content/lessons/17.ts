import type { Lesson } from "./types";

export const lesson17: Lesson = {
  title: "Prepositions of time and place",
  intro:
    "French and English often choose different prepositions to express time, location, movement, and distance. Learn the constructions in context, especially the contrasts between *pendant*, *depuis*, *en*, and *dans*, and between *dans*, *sur*, and *à*.",
  sections: [
    {
      heading: "I. 1 Translating time *for*",
      paragraphs: [
        "For a period that has already elapsed, do not use French *pour*; use *pendant* or *durant*. English *for* can be translated by *pour* for a planned or expected period. When an action began in the past and continues in the present, English uses the present perfect with *for*, while French uses the present tense with *depuis*.",
        "In this continuing-action use, *depuis* can identify either the starting point or the length of time. Thus *J'attends depuis deux heures* can mean that the waiting began at 2 o'clock or that it has lasted for two hours.",
      ],
      examples: [
        { fr: "J'ai travaillé *pendant* trois heures." },
        { fr: "Je pars demain à Paris *pour* 15 jours." },
        { fr: "Je travaille *depuis* trois heures." },
        { fr: "J'attends *depuis* deux heures. (J'ai attendu et j'attends encore.)" },
      ],
    },
    {
      heading: "I. 2 *En* and *dans* for time",
      paragraphs: [
        "Use *en* for the amount of time needed to complete an action. Use *dans* for a future point or interval after which an action will begin. These are different meanings: *en deux heures* is the duration of the action; *dans deux heures* is when it will take place.",
      ],
      examples: [
        { fr: "Je ferai ce devoir *en* une heure." },
        { fr: "Je ferai ce devoir *dans* une heure." },
        { fr: "Je me marierai *dans* un mois." },
      ],
    },
    {
      heading: "II. 1 *Dans*, *sur*, and *en*",
      paragraphs: [
        "For a place or object, *dans* marks being inside it, whereas *sur* marks simple contact with its surface. Use *dans* for being inside a schoolyard or walking in a street, but *sur* for walking on a road. British English uses *in the street* and *in Downing Street*; American English uses *on the street* and *on Wall Street*.",
        "Translate English *on* in the vehicle and phone expressions with the French prepositions shown in the examples. Saying *sur le bus*, *sur le train*, or *sur le métro* would mean being on the vehicle's roof.",
        "*Dans* usually marks a physical, material interior, while *en* tends to indicate a psychological interiority. For means of transport, use *en* with an unspecified vehicle (en avion, en auto, en bateau, en train, etc.) and *dans* when the vehicle is specified.",
        "With cardinal points, use *à* to indicate direction, even though English has no preposition there; use *dans* for a region located within a country. Also note the set expressions *boire dans un verre*, *manger dans une assiette*, and *prendre qqch. dans sa poche*.",
      ],
      examples: [
        { fr: "Je suis *dans* mon lit." },
        { fr: "Je suis *sur* mon lit." },
        { fr: "Je suis assis *dans* un fauteuil. (Idée que l'on est entouré par les bras du fauteuil.)" },
        { fr: "Je suis assis *sur* une chaise, *sur* un banc." },
        { fr: "Je suis *dans* la cour de l'école." },
        { fr: "Je me promène *sur* la route." },
        { fr: "Je me promène *dans* la rue." },
        { fr: "Je suis *dans* le bus." },
        { fr: "Je suis *dans* le train." },
        { fr: "Je suis *dans* le métro." },
        { fr: "Je suis *au* téléphone." },
        { fr: "Voilà ce que je ressens *en* moi." },
        { fr: "Il y a quelque chose de caché *dans* mon moteur." },
        { fr: "Je suis venu *en* voiture." },
        { fr: "Je suis venu *dans* la voiture de mon frère." },
        { fr: "Montréal est situé *au* nord des États-Unis." },
        { fr: "boire *dans* un verre" },
        { fr: "manger *dans* une assiette" },
        { fr: "prendre qqch. *dans* sa poche" },
      ],
    },
    {
      heading: "II. 2 Prepositions with country names",
      paragraphs: [
        "For a place where someone is or is going, use *en* before feminine country names and singular masculine names beginning with a vowel; use *au* or *aux* before masculine country names; and use *à* before city names. For the place someone comes from, use *de* or *d'* before feminine country names, singular masculine names beginning with a vowel, and city names; use *du* or *des* before masculine country names.",
        "Island names have exceptions. Feminine island names often follow the feminine-country pattern, taking *en* or *de*. Masculine island names take *à* or *de*, like city names. Archipelagos and groups of islands take *au* or *de* combined with the definite article, yielding *aux* or *des*.",
      ],
      examples: [
        { fr: "Je vais *en* Louisiane puis *en* Ohio." },
        { fr: "Il part *au* Mexique dans un mois." },
        { fr: "Elle est allée *aux* États-Unis." },
        { fr: "Nous vivons *à* New York depuis deux ans." },
        { fr: "Ils habitaient *au* Mexique ; ils travaillent *en* Afrique." },
        { fr: "Ils vont *à* Paris." },
        { fr: "Je reviens *de* Pologne ; je reviens *d'*Irak." },
        { fr: "Je reviens *du* Brésil, *du* Japon, *des* États-Unis." },
        { fr: "Je reviens *de* Bordeaux, *de* Dakar, *d'*Ankara." },
        { fr: "Je vais *en* Crète ; je suis *en* Corse. Je reviens *de* Crète, *de* Corse." },
        { fr: "Je vais *à* Cuba, *à* Madagascar." },
        { fr: "Je reviens *de* Cuba, *de* Madagascar." },
        { fr: "Je vais *aux* Antilles. Je reviens *des* Philippines." },
      ],
    },
    {
      heading: "II. 3 Expressing distance",
      paragraphs: [
        "To express the distance from one point to another, French requires the preposition *à*.",
      ],
      examples: [
        { fr: "Montréal est *à* 500 km de Toronto." },
        { fr: "J'habite *à* deux pas d'ici." },
        { fr: "Elles habitent *à* 200 mètres d'ici." },
      ],
    },
    {
      heading: "III. 1 Translating *before* and *after*",
      paragraphs: [
        "Do not confuse *avant* (before in time) with *devant* (in front of, a place); *devant* cannot introduce a time complement. Before an infinitive, use *avant de* followed immediately by the infinitive. After an infinitive, use the past infinitive, formed here with *avoir* plus the past participle. Neither *avant* nor *après* is followed by a present participle.",
      ],
      examples: [
        { fr: "Je viendrai te voir *avant* 5 heures. (temps)" },
        { fr: "Je te rencontrerai *devant* le théâtre. (lieu)" },
        { fr: "*Avant de* quitter la salle." },
        { fr: "Après avoir appris nos leçons, ils regardaient une émission *à* la télévision." },
        { fr: "Après *avoir quitté* la pièce…" },
        { fr: "« Après quittant la salle… »" },
      ],
    },
    {
      heading: "III. 2 Prepositions in set expressions",
      paragraphs: [
        "Use *à la télévision* for watching a report or film on TV. For a rental period, use *à* l'heure, *à* la journée, *au* mois, or *à* l'année; for the rate charged, use tant de l'heure (or l'heure), par jour, par mois, or par an. French does not form a noun complement with a preposition of place: compare English *the crowd around him* with *La foule qui l'entourait*.",
      ],
      examples: [
        { fr: "On regarde un reportage, un film, etc. *à* la télévision." },
        { fr: "Nous louons notre poste de télé 8 euros *par* jour." },
        { fr: "L'agence loue des voitures *à* la journée." },
        { fr: "L'agence loue une Peugeot 30 euros *par* jour." },
        { fr: "Je loue un pédalo et je paie 5 euros l'heure (ou de l'heure)." },
        { fr: "La foule qui l'entourait criait." },
      ],
    },
    {
      heading: "III. 3 Repeating a preposition after a coordinating conjunction",
      paragraphs: [
        "In general, repeat the preposition of place after a coordinating conjunction rather than leaving it out before the second destination.",
      ],
      examples: [{ fr: "Je n'irai pas *chez* lui mais *chez* vous." }],
    },
  ],
};
