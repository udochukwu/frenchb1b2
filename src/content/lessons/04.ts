import type { Lesson } from "./types";

export const lesson4: Lesson = {
  title: "The noun",
  intro:
    "This chapter is about how French nouns form the plural, how English and French disagree on singular vs plural, how gender works (including words whose meaning changes with gender), and common *faux amis*.",
  sections: [
    {
      heading: "I. a Default plural *-s*",
      paragraphs: [
        "In general, form the plural by adding *-s*.",
      ],
      examples: [
        { fr: "Mettez des *pneus neufs* à votre voiture." },
        { fr: "un livre → des livres ; la maison → les maisons" },
      ],
    },
    {
      heading: "I. b Nouns in *-eu* and *-au*",
      paragraphs: [
        "Nouns in *-eu* and *-au* take *-eux* and *-aux*, except *pneu* (*des pneus*) and *bleu* (*des bleus*).",
      ],
      examples: [
        { fr: "J'ai reçu la lettre de mes neveux." },
        { fr: "J'ai mis des pneus neufs à ma voiture." },
        { fr: "Je me suis fait des bleus au bras." },
      ],
    },
    {
      heading: "I. c Nouns in *-al*",
      paragraphs: [
        "Nouns in *-al* form their plural in *-aux*, except *bal, carnaval, festival, récital* and *régal*. *Idéal* can make *idéals* or *idéaux*.",
      ],
      examples: [
        { fr: "Nous avons assisté aux derniers *récitals* de cet artiste." },
        {
          fr: "un éditorial → des éditoriaux ; un cheval → des chevaux ; un bal → des bals ; un récital → des récitals",
        },
      ],
    },
    {
      heading: "I. d Nouns in *-ail*",
      paragraphs: [
        "Nouns in *-ail* generally form their plural in *-ails*. A few words such as *travail* and *vitrail* form their plural in *-aux*.",
      ],
      examples: [
        { fr: "Attention ! *Travaux* !" },
        {
          fr: "un chandail → des chandails ; un détail → des détails ; un travail → des travaux ; un vitrail → des vitraux",
        },
      ],
    },
    {
      heading: "I. e Nouns in *-ou*",
      paragraphs: [
        "Nouns in *-ou* add *-ous*, except *bijou, caillou, chou, genou, hibou, joujou, pou*, which take *-x*.",
      ],
      examples: [{ fr: "Elle aime porter ses bijoux." }],
    },
    {
      heading: "I. f Person names",
      paragraphs: [
        "Unlike English, proper names of people take no plural mark.",
      ],
      examples: [
        {
          fr: "The Smiths visited the Watsons. → Les Dupont ont rendu visite aux Durand.",
        },
      ],
    },
    {
      heading: "I. g–i Compound nouns and *monsieur*",
      paragraphs: [
        "In compounds, the following stay invariable: verbs, adverbs, prepositions and pronouns; and nouns that complete the first noun (*des timbres-poste* ; *des chefs-d'œuvre*).",
        "In a compound made of a verb + object noun, that noun is singular or plural according to the meaning (*des gratte-ciel* ; *des casse-noisettes*).",
        "*Monsieur, madame, mademoiselle* become *messieurs, mesdames, mesdemoiselles*.",
      ],
      examples: [
        { fr: "des timbres-poste ; des chefs-d'œuvre" },
        { fr: "des gratte-ciel ; des casse-noisettes." },
      ],
    },
    {
      heading: "I. 2 a English singular → French plural",
      paragraphs: [
        "Some English singulars correspond to French plurals: *furniture → les meubles* ; *hair → les cheveux* ; *applause → les applaudissements* ; *fruit → les fruits* ; *progress → les progrès* ; *information → les renseignements*.",
        "Also: *to have homework = avoir des devoirs* ; *to take action = prendre des mesures* ; *every Sunday / every Monday = tous les dimanches, tous les lundis*.",
      ],
      examples: [
        { fr: "You are making progress. → Vous faites des progrès." },
      ],
    },
    {
      heading: "I. 2 b English plural → French singular",
      paragraphs: [
        "Conversely, some English plurals correspond to French singulars.",
      ],
      examples: [
        { fr: "trousers = un pantalon (mais aussi des pantalons)" },
        { fr: "to eat grapes = manger du raisin" },
        {
          fr: "on Saturdays = le samedi",
          en: "idea of repetition; see chapter 1, II. 1 f",
        },
      ],
    },
    {
      heading: "I. 2 c One each → singular",
      paragraphs: [
        "Unlike English, when several people each have one of something, French treats it individually and leaves it in the singular.",
      ],
      examples: [
        {
          fr: "The men were smoking their pipes. → Les hommes fumaient leur pipe.",
        },
        {
          fr: "They worked very hard during their lives. → Ils ont travaillé très dur pendant leur vie.",
        },
      ],
    },
    {
      heading: "I. 2 d Collective nouns",
      paragraphs: [
        "Collective nouns are singular but stand for several people or things: *la foule ; le gouvernement ; le bétail…*",
        "Attention: if a collective noun is the subject, the verb agrees in the singular. Pronouns and adjectives are also singular.",
      ],
      examples: [
        {
          fr: "Le gouvernement a décidé de maintenir sa position ; il refuse d'abroger la loi.",
          en: "The government decided to uphold its position; they refuse to repeal the law.",
        },
        {
          fr: "La foule avançait dans la rue ; elle hurlait sa colère.",
          en: "The crowd moved down the street; they were shouting their anger.",
        },
      ],
    },
    {
      heading: "I. 2 e Always plural",
      paragraphs: [
        "Some French nouns are always plural: *les mathématiques, les ténèbres, les fiançailles, les funérailles, les environs, les vacances, les vivres*, and *dépens* (in *à mes dépens / à vos dépens*).",
        "*Vacances* (holidays) is always plural. *La police* names the institution.",
      ],
      examples: [],
    },
    {
      heading: "I. 3 Pitfalls: *gens* and *argent*",
      paragraphs: [
        "*Gens* cannot be preceded by a number or by *quelques*. Replace *gens* (always plural) with *personnes*.",
        "*Argent*, meaning money, is always singular.",
      ],
      examples: [
        {
          fr: "There were some people outside the door. → Il y avait des gens devant la porte.",
        },
        {
          fr: "There were ten people outside the door. → Il y avait dix personnes devant la porte.",
        },
        {
          fr: "She gave me some money. → Elle m'a donné de l'argent.",
        },
        {
          fr: "Money cannot buy happiness. → L'argent ne fait pas le bonheur.",
        },
      ],
    },
    {
      heading: "II. 1 Gender and sex",
      paragraphs: [
        "a. Some nouns are always masculine, even when they refer to a woman: *un bébé ; l'assassin* ; also *un adversaire, un agent, un ange, un tyran, un guide, un modèle, un témoin, un vainqueur*.",
        "b. Some nouns are always feminine, even when they refer to a man: *une personne, une star, une victime, une sentinelle, une vedette*.",
        "c. Some nouns have the same form but two genders, to show whether you are talking about a woman or a man: *un/une automobiliste* ; *un/une collègue*.",
      ],
      examples: [
        { fr: "Brigitte était un bébé turbulent." },
        { fr: "un automobiliste / une automobiliste ; un collègue / une collègue" },
      ],
    },
    {
      heading: "II. 2 Gender changes the meaning",
      paragraphs: [
        "Some nouns change meaning according to gender. *Le poste* (the job/position) is not *la poste* (the post office).",
      ],
      examples: [
        { fr: "un aide (an assistant) ≠ une aide (assistance)" },
        { fr: "un critique (a critic) ≠ une critique (a criticism/review)" },
        { fr: "un livre (a book) ≠ une livre (a pound)" },
        { fr: "un manche (a handle) ≠ une manche (a sleeve)" },
        { fr: "un mode (a mode) ≠ une mode (a fashion)" },
        { fr: "un somme (a nap) ≠ une somme (an amount/total)" },
        { fr: "un tour (a tour/walk) ≠ une tour (a tower)" },
        { fr: "un voile (a veil) ≠ une voile (a sail)" },
      ],
    },
    {
      heading: "II. 3 Countries and cities",
      paragraphs: [
        "Country names ending in *-e* are feminine (*la France*). Exceptions: *le Canada, le Québec, le Venezuela*. Other masculines in *-e*: *le Mexique, le Zaïre, le Maine, le Mozambique*. *Israël* and *Oman* take no article.",
        "City names ending in a silent *-e* tend to be feminine (*La Rome*); the others are masculine (*Le Berlin*).",
      ],
      examples: [],
    },
    {
      heading: "II. 4 Islands, *chose/personne*, *gens*",
      paragraphs: [
        "Island names: masculine ones generally take no article (*Madagascar, Sumatra, Bornéo…*). Feminine ones often end in *-e* and take the article (*La Corse, la Sicile, la Nouvelle-Zélande, l'Irlande, la Grande-Bretagne*).",
        "*Chose* and *personne* as nouns are feminine (*une belle chose ; une personne intéressante*). As indefinite pronouns (*quelque chose*, *personne*) they are masculine.",
        "*Gens* in modern French is generally masculine plural. Exception: immediately preceded by a qualifying adjective, it becomes feminine.",
      ],
      examples: [
        { fr: "J'ai vu quelque chose de beau. Personne n'est blessé." },
        { fr: "Tous les gens sont rassemblés. J'ai rencontré des gens intéressants." },
        { fr: "Je respecte toutes ces bonnes gens." },
      ],
    },
    {
      heading: "III. 1 Spelling faux amis",
      paragraphs: [
        "Some French nouns look like English words but are spelled differently.",
      ],
      examples: [
        { fr: "Le comité de littérature se réunira dans une autre salle." },
        { fr: "une adresse (address) ; un exemple (example)" },
        { fr: "un appartement (apartment) ; le gouvernement (government)" },
        { fr: "un comité (committee) ; un héros (hero)" },
        { fr: "le confort (comfort) ; le langage (language)" },
        { fr: "un correspondant (correspondent) ; la littérature (literature)" },
        { fr: "un ennemi (enemy) ; des progrès (progress)" },
      ],
    },
    {
      heading: "III. 2 a–d Meaning confusions",
      paragraphs: [
        "a. *Nuit* vs *soirée*: *J'ai passé la soirée avec lui* is not *J'ai passé la nuit avec lui*. *La nuit* is about 23:00 until sunrise; *la soirée* is about 19:00 to 23:00 / midnight.",
        "b. *Une chambre* is a bedroom; *une pièce* is a room in general.",
        "c. *Une librairie* is a bookstore; *une bibliothèque* is a library.",
        "d. *Une injure* is an insulting word; *une blessure* is a physical wound or injury.",
      ],
      examples: [],
    },
    {
      heading: "III. 2 e–i Jobs, character, money",
      paragraphs: [
        "e. *Position* is an opinion or a physical location (*position du bateau*), never a job (*poste* or *emploi*).",
        "f. *Place* can mean a job, a public square, or a designated spot.",
        "g. *Le caractère* is temperament; *un personnage* is a character in a book or play.",
        "h. *Humeur* is mood; *humour* is a sense of humor.",
        "i. *L'argent* is money in general; *la monnaie* is change / coins.",
      ],
      examples: [
        { fr: "Avez-vous de l'argent ? Avez-vous de la monnaie ?" },
      ],
    },
  ],
};
