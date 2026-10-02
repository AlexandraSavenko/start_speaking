export const lesson7 = {
  id: "lesson7",
  title: "In my classroom.",
  video: ["0DqkEfKXT5Y", "xIfPQJidQHY"],
  prelistening: [
    {
      id: "task1",
      title: "Classroom",
      type: "Look and say",
      images: [
        { url: "desk", label: "a desk" },
        { url: "chair", label: "a chair" },
        { url: "blackboard", label: "a blackboard" },
        { url: "classroom", label: "a classroom" },
        { url: "book", label: "a book" },
        { url: "erraser", label: "an erraser" },
      ],
    },
    {
      id: "task2",
      title: "Song 2",
      type: "Look and say",
      images: [
        { url: "banana", label: "a banana" },
        { url: "apple", label: "an apple" },
        { url: "grape", label: "a grape" },
        { url: "grapes", label: "grapes" },
        { url: "watermelon", label: "a watermelon" },
      ],
    },
    {
      id: "task3",
      title: "Adjectives",
      type: "Look and say",
      images: [
        { url: "big", label: "big" },
        { url: "small", label: "small" },
      ],
    },
  ],
  pages: [
    {
      id: 1,
      altText: "In my lunchbox.",
      text: ["- Do you have an apple?", "- Yes, I do. It is in my lunchbox. Do you have a lunchbox?", "- Yes, I do. I have a watermalon in my lunchbox.", "- A watermelon?"],
    },
    {
      id: 2,
      altText: "Ellie is hungry.",
      text: ["Hi, I'm Ellie, the elephant. I am hungry. I like bananas.", "I see two bananas. A green banana is low. A yellow banana is high.", "I like yellow banana. I am happy to have elephant nose."],
    },
  ],
  vocabulary: {
    nouns: [
      { word: "desk", meaning: "парта" },
      { word: "chair", meaning: "стілец" },
      { word: "blackboard", meaning: "дошка" },
      { word: "classroom", meaning: "клас" },
      { word: "book", meaning: "книга" },
      { word: "erraser", meaning: "гумка" },
      { word: "banana", meaning: "банан" },
      { word: "apple", meaning: "яблуко" },
      { word: "grape", meaning: "виноградина" },
      { word: "grapes", meaning: "виноград" },
      { word: "watermelon", meaning: "арбуз" },
    ],
    verbs: [
      { word: "may", meaning: "можна" },
      { word: "borrow", meaning: "позичити" },
    ],
    prepositions: [
      { word: "at", meaning: "за" },
    ],
    adjectives: [
      { word: "hungry", meaning: "голодний (lesson 3)" },
      { word: "purple", meaning: "фіолетовий (lesson 1)" },
    ],
    phrases: [
      { word: "Are you hungry...", meaning: "ти голодний(на) ..." },
      { word: "May I borrow...", meaning: "Можна я позичу ..." },
    ],
  },
  speaking: [
    {
      id: "task1",
      title: "Bananas are yellow.",
      type: "Look and say",
      dialogue: [
        { speaker: "A", line: "What color are bananas?" },
        { speaker: "B", line: "Bananas are yellow." },
      ],
      table: [
        {
          column1: [
            "Banana",
            "Apple",
            "Grape",
            "Watermelon",
            "Book",
          ],
          column2: "s",
          column3: "are",
          column4: [
            "yellow",
            "red",
            "purple",
            "green",
            "brown"
          ],
        },
      ],
      images: [
        {
          url: "bananasyellow",
          label: "bananas",
          question: "What color are bananas?",
          answer: "Bananas are yellow.",
        },
        {
          url: "applesred",
          label: "apples",
          question: "What color are apples?",
          answer: "Apples are red.",
        },
        {
          url: "grapespurple",
          label: "grapes",
          question: "What color are grapes?",
          answer: "Grapes are purple.",
        },
        {
          url: "watermelonsgreen",
          label: "watermelons",
          question: "What color are watermelons?",
          answer: "Watermelons are green",
        },
        {
          url: "booksbrown",
          label: "books",
          question: "What color are books?",
          answer: "Books are brown.",
        },
      ],
    },
    {
      id: "task2",
      title: "Books are in the desk.",
      type: "Look and say",
      dialogue: [
        { speaker: "A", line: "Where are books?" },
        { speaker: "B", line: "Books are in desk." },
      ],
      table: [
        {
          column1: [
            "Book",
            "Pencil",
            "Banana",
          ],
          column2: "s",
          column3: "are",
          column4: [
            "in",
            "on",
            "under",
            "by",
          ],
          column5: ["desk", "chair"]
        },
      ],
      images: [
        {
          url: "booksindesk",
          label: "in desk",
          question: "Where are books?",
          answer: "Books are in desk.",
        },
        {
          url: "booksondesk",
          label: "on desk",
          question: "Where are books?",
          answer: "Books are on desk.",
        },
        {
          url: "booksunderdesk",
          label: "under desk",
          question: "Where are books?",
          answer: "Books are under desk.",
        },
        {
          url: "pencilsunderdesk",
          label: "under desk",
          question: "Where are pencils?",
          answer: "Pencils are under desk",
        },
        {
          url: "pencilsonchair",
          label: "on chair",
          question: "Where are pencils?",
          answer: "Pencils are on chair.",
        },
         {
          url: "pencilsunderchair",
          label: "under chair",
          question: "Where are pencils?",
          answer: "Pencils are under chair.",
        },
         {
          url: "bananasonchair",
          label: "on chair",
          question: "Where are bananas?",
          answer: "Bananas are on chair.",
        },
      ],
    },
    {
      id: "task3",
      title: "Elephant is big.",
      type: "Look and say",
      dialogue: [
        { speaker: "A", line: "Who is big?" },
        { speaker: "B", line: "Elephant is big." },
      ],
      table: [
        {
          column1: [
            "Sloth",
            "Elephant",
            "Fish",
            "Mouse",
            "Fox",
            "Bird",
            "Otter",
            "Dog",
            "Kitten",
            "Robot",
            "Iguana",
            "Bee"
          ],
          column2: "is",
          column3: [
            "big",
            "small",
          ],
        },
      ],
      images: [
        {
          url: "elephantsloth",
          label: "a sloth and an elephant",
          question: "Who is big? Who is small?",
          answer: "Elephant is big. Sloth is small",
        },
        {
          url: "fishmouse",
          label: "a fish and a mouse",
          question: "Who is big? Who is small?",
          answer: "Fish is big. Mouse is small.",
        },
        {
          url: "foxbird",
          label: "a fox and a bird",
          question: "Who is big? Who is small?",
          answer: "Fox is big. Bird is small.",
        },
        {
          url: "otterdog",
          label: "an otter and a dog",
          question: "Who is big? Who is small?",
          answer: "Dog is big. Otter is small.",
        },
        {
          url: "kittenrobot",
          label: "a kitten and a robot",
          question: "Who is big? Who is small?",
          answer: "Kitten is big. Robot is small.",
        },
         {
          url: "iguanabee",
          label: "a bee and an iguana",
          question: "Who is big? Who is small?",
          answer: "Iguana is big. Bee is small.",
        },
      ],
    },
    {
      id: "task4",
      title: "Erraser is by a pencil.",
      type: "Look and say",
      dialogue: [
        { speaker: "A", line: "Where is erraser?" },
        { speaker: "B", line: "Erraser is by a pencil." },
      ],
      table: [
        {
          column1: "Erraser",
          column2: "is",
          column3: [
            "on",
            "in",
            "under",
            "by",
          ],
          column4: "a",
          column4: [
            "pencil",
            "book",
            "lunchbox",
            "backpack",
            "desk",
            "ruler"
          ],
        },
      ],
      images: [
        {
          url: "erraserpencil",
          label: "by a pencil",
          question: "Where is erraser?",
          answer: "Erraser is by a pencil.",
        },
        {
          url: "erraserbook",
          label: "on a book",
          question: "Where is erraser?",
          answer: "Erraser is on a book.",
        },
        {
          url: "erraserlunchbox",
          label: "in a lunchbox",
          question: "Where is erraser?",
          answer: "Erraser is in a lunchbox.",
        },
        {
          url: "erraserbackpack",
          label: "by a backpack",
          question: "Where is erraser?",
          answer: "Erraser is by a backpack.",
        },
        {
          url: "erraserdesk",
          label: "in a desk",
          question: "Where is erraser?",
          answer: "Erraser is in a desk.",
        },
         {
          url: "erraserruler",
          label: "by a ruler",
          question: "Where is erraser?",
          answer: "erraser is by a ruler.",
        },
      ],
    },
  ],
  games: [
    {
      url: "https://learningapps.org/watch?v=pria2hirc26",
    },
    {
      url: "https://learningapps.org/watch?v=p3xh7a27c26",
    },
  ],
};
