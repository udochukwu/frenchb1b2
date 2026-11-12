import type { Lesson } from "./types";

export const lesson23: Lesson = {
  title: "The present indicative",
  intro:
    "French sorts its verbs into three groups, and the present endings follow from the group. Stem changes in -er verbs, the double i of the second group, and the irregular third group are the forms to learn. The present itself mostly matches English, with two clear exceptions: a future time clause, and an action that began in the past and is still true now.",
  sections: [
    {
      heading: "I. 1 The three groups",
      paragraphs: [
        "French verbs are traditionally sorted into three groups. The first group has an infinitive in -er. The second group has an infinitive in -ir and a nous form in -issons: finir → nous finissons. The third group is the remaining verbs in -ir, -re, and -oir: dormir → nous dormons, rendre → nous rendons, vouloir → nous voulons.",
      ],
      examples: [
        { fr: "finir → nous finissons" },
        { fr: "dormir → nous dormons" },
        { fr: "rendre → nous rendons" },
        { fr: "vouloir → nous voulons" },
      ],
    },
    {
      heading: "I. 2 How the present is formed",
      paragraphs: [
        "First-group verbs regularly make the je form by adding -e to the stem: je chante, je danse, je travaille. The exception is aller: je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont.",
        "Second- and third-group verbs make the je form with -s. A few third-group verbs use -x. Je finis, je dors, je vends, je veux.",
        "A few rare exceptions take no -s: offrir → j'offre, ouvrir → j'ouvre, couvrir → je couvre, souffrir → je souffre, cueillir → je cueille.",
        "There is never a final -t on the je form of a verb. The mnemonic is « Je n'aime pas le thé » : do not add the t. The third-person plural ending -ent is not pronounced [ɑ̃]. Ils négligent is the verb; il est négligent [ɑ̃] is the adjective.",
      ],
      examples: [
        { fr: "Je chante, je danse, je travaille." },
        { fr: "je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont" },
        { fr: "Je finis, je dors, je vends, je veux." },
        { fr: "j'offre, j'ouvre, je couvre, je souffre, je cueille" },
        { fr: "Ils négligent (verbe) ; il est négligent (adjectif)." },
      ],
    },
    {
      heading: "II. 1 The present of -er verbs",
      paragraphs: [
        "Add -e, -es, -e, -ons, -ez, -ent to the stem. Chanter: je chante, nous chantons. Travailler: je travaille, nous travaillons. Filmer: je filme, nous filmons.",
      ],
      examples: [
        { fr: "je chante, nous chantons" },
        { fr: "je travaille, nous travaillons" },
        { fr: "je filme, nous filmons" },
      ],
    },
    {
      heading: "II. 2 Changes in the stem",
      paragraphs: [
        "Verbs in -ger and -cer end in -geons and -çons at nous: nous nageons, nous commençons. Also manger → nous mangeons, ranger → nous rangeons, placer → nous plaçons, rincer → nous rinçons.",
      ],
      examples: [
        { fr: "Nous nageons trois fois par semaine." },
        { fr: "Nous commençons l'étude du présent." },
        { fr: "nous mangeons, nous rangeons, nous plaçons, nous rinçons" },
      ],
    },
    {
      heading: "II. 3 Doubling the consonant",
      paragraphs: [
        "Verbs in -eler and -eter double l or t before a mute e, that is at every person except nous and vous. Je jette ce vieux journal. Nous jetons les papiers inutiles. Elle s'appelle Charlotte. Comment vous appelez-vous ? The pronunciation changes: je jette [ɛ], nous jetons [ə]. The type is jeter: je jette, tu jettes, il/elle jette, nous jetons, vous jetez, ils/elles jettent.",
        "A few verbs take a grave accent on the stem instead of doubling l or t: geler and its compounds (je gèle, nous gelons), peler (je pèle, nous pelons), acheter (j'achète, nous achetons).",
      ],
      examples: [
        { fr: "je jette, tu jettes, il/elle jette, nous jetons, vous jetez, ils/elles jettent" },
        { fr: "je gèle, nous gelons ; je pèle, nous pelons ; j'achète, nous achetons" },
      ],
    },
    {
      heading: "II. 4 A grave accent: è",
      paragraphs: [
        "When the last syllable of the stem has e or é, that vowel becomes è before a mute ending, that is at every person except nous and vous. Lever → je lève, nous levons. Tu lèves la tête. Répéter → je répète, nous répétons. Il répète la phrase. The type is mener: je mène, tu mènes, il/elle mène, nous menons, vous menez, ils/elles mènent.",
        "The verbs of II. 3 are not covered by this rule, except the three exceptions geler, peler, and acheter.",
      ],
      examples: [
        { fr: "lever → je lève, nous levons" },
        { fr: "répéter → je répète, nous répétons" },
        { fr: "je mène, tu mènes, il/elle mène, nous menons, vous menez, ils/elles mènent" },
      ],
    },
    {
      heading: "II. 5 A stem that changes with the person",
      paragraphs: [
        "Verbs in -yer (essayer, envoyer, appuyer, and so on) have a stem in i at the three singular persons and at ils/elles, and they keep y at nous and vous. Envoyer: j'envoie, tu envoies, il/elle envoie, nous envoyons, vous envoyez, ils/elles envoient.",
        "Verbs in -ier keep the i of the stem even before a mute ending: J'étudie le français. Il mendie son pain.",
        "Do not drop the mute e of an -er ending, even when the stem ends in d or t. Je chante, il transporte, and not *il transport.",
        "Do not confuse pleurer and pleuvoir. Il pleure parce qu'il s'est fait mal. Il pleut à verse ; n'oublie pas ton parapluie.",
      ],
      examples: [
        { fr: "j'envoie, tu envoies, il/elle envoie, nous envoyons, vous envoyez, ils/elles envoient" },
        { fr: "J'étudie le français. Il mendie son pain." },
        { fr: "Je chante, il transporte." },
        { fr: "Il pleure parce qu'il s'est fait mal." },
        { fr: "Il pleut à verse ; n'oublie pas ton parapluie." },
      ],
    },
    {
      heading: "III. 1 The second group",
      paragraphs: [
        "Second-group verbs have a double i in the ending at all three plural persons. Finir: je finis, tu finis, il/elle finit, nous finissons, vous finissez, ils/elles finissent. Nous choisissons un bon exercice. Les enfants grandissent.",
        "The stem is worth learning because it returns in the present participle (finissant) and the imperfect (je finissais).",
      ],
      examples: [
        { fr: "je finis, tu finis, il/elle finit, nous finissons, vous finissez, ils/elles finissent" },
        { fr: "finissant ; je finissais" },
      ],
    },
    {
      heading: "III. 2 Telling second-group -ir verbs from third-group ones",
      paragraphs: [
        "There is no absolute rule. Verbs in -ir that mark a transformation and come from an adjective are often second-group: grand → grandir, riche → s'enrichir, blanc → blanchir, vieux → vieillir.",
      ],
      examples: [
        { fr: "grand → grandir" },
        { fr: "riche → s'enrichir" },
        { fr: "blanc → blanchir" },
        { fr: "vieux → vieillir" },
      ],
    },
    {
      heading: "IV. 1 Third-group verbs",
      paragraphs: [
        "The third group includes -ir verbs whose nous form ends in -ons (courir/courons), plus the verbs in -oir and -re.",
      ],
      examples: [{ fr: "courir/courons ; verbes en -oir ou en -re" }],
    },
    {
      heading: "IV. 2 Particularities in the present",
      paragraphs: [
        "Set aside avoir, être, and a few verbs such as ouvrir → j'ouvre, couvrir → je couvre, offrir → j'offre. At the present indicative, these verbs generally have identical je and tu forms ending in -s, or more rarely in -x: dormir → je dors/tu dors, valoir → je vaux/tu vaux, vouloir → je veux/tu veux.",
        "The il/elle form ends in -t, or more rarely in -d: peindre → il peint, plaindre → il plaint, résoudre → il résout, répondre → il répond, prendre → il prend.",
      ],
      examples: [
        { fr: "je dors/tu dors ; je vaux/tu vaux ; je veux/tu veux" },
        { fr: "il peint ; il plaint ; il résout ; il répond ; il prend" },
      ],
    },
    {
      heading: "IV. 3 Learn these by heart",
      paragraphs: [
        "Most of these verbs are irregular and change stem. Learn them, or look them up in a conjugation table.",
        "Avoir: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont. Être: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont. Prendre: je prends, tu prends, il/elle prend, nous prenons, vous prenez, ils/elles prennent. Pouvoir: je peux, tu peux, il/elle peut, nous pouvons, vous pouvez, ils/elles peuvent. Vouloir: je veux, tu veux, il/elle veut, nous voulons, vous voulez, ils/elles veulent.",
        "Savoir: je sais, nous savons, ils savent. Apercevoir: j'aperçois, nous apercevons, elles aperçoivent. Devenir: je deviens, nous devenons, ils deviennent.",
        "Dire and faire are irregular. At nous: nous disons, nous faisons [ə]. At vous: vous dites, vous faites.",
      ],
      examples: [
        { fr: "j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont" },
        { fr: "je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont" },
        { fr: "je prends, nous prenons, ils/elles prennent" },
        { fr: "je peux, nous pouvons, ils/elles peuvent" },
        { fr: "je veux, nous voulons, ils/elles veulent" },
        { fr: "je sais, nous savons, ils savent" },
        { fr: "j'aperçois, nous apercevons, elles aperçoivent" },
        { fr: "je deviens, nous devenons, ils deviennent" },
        { fr: "nous disons, nous faisons ; vous dites, vous faites" },
      ],
    },
    {
      heading: "V. 1 Two notable exceptions",
      paragraphs: [
        "French uses of the present generally match English. Two exceptions stand out.",
        "A time clause is in the future when the main verb is in the future. The manual points to chapter 28, III. 1, page 215. Je le lui donnerai quand je le verrai means I will give it to him when I see him.",
        "When an action begun in the past leads to a present fact, French uses the present. The manual points to chapter 42, IV. 1, page 314. J'attends depuis trois heures means I have been waiting for three hours.",
      ],
      examples: [
        { fr: "Je le lui donnerai quand je le verrai." },
        { fr: "J'attends depuis trois heures." },
      ],
    },
    {
      heading: "V. 2 Être en train de plus an infinitive",
      paragraphs: [
        "To insist that the present action is in progress, use être en train de plus the infinitive for English to be plus -ing. Je suis en train de travailler means I am working.",
        "In the other cases, the English progressive is a simple present. Elle dort jusqu'à sept heures, beside Elle est en train de dormir.",
      ],
      examples: [
        { fr: "Je suis en train de travailler." },
        { fr: "Elle dort ; elle est en train de dormir." },
      ],
    },
  ],
};
