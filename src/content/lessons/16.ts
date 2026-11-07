import type { Lesson } from "./types";

export const lesson16: Lesson = {
  title: "Verbs and adjectives followed by prepositions",
  intro:
    "French and English often use different prepositions with the same verb or adjective. Learn each French construction as a unit: the preposition can differ from English, change the meaning of a verb, or disappear before a weak personal pronoun.",
  sections: [
    {
      heading: "I. Verbs and prepositions + a noun or pronoun",
      paragraphs: [
        "Some French verbs require a preposition where their English equivalents do not; in other cases, English uses a preposition that French omits. These constructions are best learned with the verb.",
      ],
      examples: [
        { fr: "J'ai téléphoné à mes parents.", en: "I phoned my parents." },
        { fr: "Je pense à mon avenir.", en: "I am thinking of my future." },
        { fr: "Il pense à lui ; il lui donne un conseil." },
      ],
    },
    {
      heading: "I. 1 Differences in construction",
      paragraphs: [
        "French verbs that take a preposition although their English equivalents are used directly include entrer dans une pièce (to enter a room), téléphoner à quelqu'un (to phone someone), se marier à quelqu'un (to marry someone), se joindre à quelqu'un (to join someone), répondre à quelqu'un or à quelque chose (to answer someone or something), obéir à quelqu'un or à quelque chose (to obey someone or something), avoir besoin de quelque chose or de quelqu'un (to need something or someone), and s'approcher de quelqu'un or de quelque chose (to approach someone or something).",
        "Conversely, English verbs may take a preposition where the French equivalent is direct: to look at something = regarder quelque chose; to ask for something = demander qqch.; to hope for something = espérer qqch.; to wait for something or someone = attendre qqch. (ou qqun).",
      ],
      examples: [
        { fr: "Il faut répondre à quelqu'un." },
        { fr: "Il faut attendre quelqu'un." },
      ],
    },
    {
      heading: "I. 2 Differences in preposition",
      paragraphs: [
        "Sometimes both languages use a preposition, but the French preposition does not match the English one. Memorize these pairs: to think of = penser à; to consist of = consister en; to fill with = remplir de; to cover with = couvrir de; to depend on = dépendre de; to borrow from = emprunter à.",
      ],
      examples: [
        { fr: "Cela dépendra de mon travail." },
        { fr: "Ils ont emprunté de l'argent à la banque." },
      ],
    },
    {
      heading: "I. 3 A verb's meaning can change",
      paragraphs: [
        "A verb can change meaning depending on whether it is followed by a preposition. Penser quelque chose de quelque chose means to think something of something, while penser à quelque chose means to think of or about something. Rêver de quelque chose or de quelqu'un means to dream of or about it; rêver à quelque chose means to muse on it.",
        "Meaning can also depend on which preposition follows. Manquer à son devoir means to fail in one's duty; manquer de quelque chose means to lack or be short of something.",
      ],
      examples: [
        { fr: "Je pense à mon camarade." },
        { fr: "Il rêve à moi." },
        { fr: "Il manque à son devoir." },
      ],
    },
    {
      heading: "I. 4 À + a personal pronoun referring to a person",
      paragraphs: [
        "Keep à before a stressed (tonic) pronoun—moi, toi, lui, elle, nous, vous, eux, or elles—with pronominal verbs such as s'intéresser à, se fier à, and se confier à, and with verbs such as penser à, rêver à, and faire attention à.",
        "In other cases, do not keep à: use the weak, unstressed pronoun me, te, lui, nous, vous, or leur. This is especially important with a verb that already has a direct object and also takes an indirect person object; the weak pronoun is required.",
      ],
      examples: [
        { fr: "Je pense à mon camarade. → Je pense à lui." },
        { fr: "Il rêve à moi." },
        { fr: "Cette affaire convient à l'acheteur. → Cette affaire lui convient." },
        { fr: "Je donne un conseil à mon frère. → Je lui donne un conseil." },
      ],
    },
    {
      heading: "I. 4 Attention: avoid a + stressed pronoun with an indirect object",
      paragraphs: [
        "With a verb + thing + à + person construction, replace the person with the weak pronoun instead of repeating à plus a stressed pronoun. For example, use Je lui donne un conseil, Je lui vends mon auto, and Elle leur propose ses services—not *Je donne un conseil à lui, *Je vends mon auto à lui, or *Elle propose ses services à elles.",
      ],
      examples: [
        { fr: "Je lui donne un conseil." },
        { fr: "Je lui vends mon auto." },
        { fr: "Elle leur propose ses services." },
      ],
    },
    {
      heading: "II. Adjectives and prepositions",
      paragraphs: [
        "Qualifying adjectives followed by a complement generally take a preposition. French and English choices often differ: responsible for = responsable de; satisfied with = satisfait de; pleased with = content de; surprised by or at = surpris par ou de; worried about = inquiet de. The form is différent de, not *différent que.",
        "The preposition after an adjective is often à or de, but other choices occur before a noun or pronoun. Use envers (or avec) after aimable, charitable, poli, and agréable: Soyez aimable envers (avec) elle.",
      ],
      examples: [
        { fr: "On est responsable de ses actes.", en: "One is responsible for one's actions." },
        { fr: "Les citoyens sont hostiles au projet.", en: "The citizens are hostile to the project." },
        { fr: "Je suis content des résultats obtenus." },
      ],
    },
    {
      heading: "II. 3 The preposition de before an adjective",
      paragraphs: [
        "When a qualifying adjective refers to an indefinite pronoun such as quelqu'un, personne, quelque chose, or rien, put de (or d' before a vowel) before the adjective. Personne and quelque chose are not feminine pronouns: the adjective remains in the masculine form, as in quelque chose de beau and personne de satisfait.",
      ],
      examples: [
        { fr: "J'ai rencontré quelqu'un d'intelligent." },
        { fr: "Rien de grave ne s'est passé." },
        { fr: "Donnez-moi quelque chose de bon." },
        { fr: "Il n'y a personne d'intéressé par cette sortie." },
        { fr: "J'ai vu quelque chose de beau." },
        { fr: "Il n'y a eu personne de satisfait." },
      ],
    },
  ],
};
