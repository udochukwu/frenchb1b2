export type LessonExample = {
  fr: string;
  en?: string;
};

export type LessonSection = {
  heading: string;
  paragraphs: string[];
  examples: LessonExample[];
};

export type Lesson = {
  title: string;
  intro: string;
  sections: LessonSection[];
};
