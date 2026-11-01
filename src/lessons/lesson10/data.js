export const lesson10 = {
  id: "lesson10",
  title: "Say hello to my family.",
  video: ["yDua9ms9_eg"],
  prelistening: [
    {
      id: "task1",
      title: "Activities",
      type: "Look and say",
      images: [
        { url: "read", label: "read" },
        { url: "sing", label: "sing" },
        { url: "paint", label: "paint" },
        { url: "swing", label: "swing" },
        { url: "cook", label: "cook" },
        { url: "walk", label: "walk" },
        { url: "laugh", label: "laugh" },
        { url: "talk", label: "talk" },
        { url: "play", label: "play" },
      ],
    },
    {
      id: "task2",
      title: "Nouns",
      type: "Look and say",
      images: [
      { url: "family", label: "family" },
      { url: "people", label: "people" },
      { url: "mother", label: "mother" },
      { url: "father", label: "father" },
      { url: "sister", label: "sister" },
      { url: "brother", label: "brother" },
      { url: "uncle", label: "uncle" },
      { url: "aunt", label: "aunt" },
      { url: "grandmother", label: "grandmother" },
      { url: "grandfather", label: "grandfather" },
      { url: "cousins", label: "cousins" },
    ],
    },
  ],
  pages: [
     {
    id: 1,
    altText: "Let's go for a walk.",
    text: ["I see a bird. It is singing. I want to go for a walk."],
  },
  {
    id: 2,
    altText: "Let's go for a walk.",
    text: [
      '"Mom, let\'s go for a walk," I say.',
      '"I am cooking," she says.',
    ],
  },
  {
    id: 3,
    altText: "Let's go for a walk.",
    text: [
      '"Uncle, let\'s go for a walk," I say.',
      '"I am reading," he says.',
    ],
  },
  {
    id: 4,
    altText: "Let's go for a walk.",
    text: [
      '"Aunt, let\'s go for a walk! There is a bird. It is singing," I say.',
      '"I am playing with your sister," she says.',
    ],
  },
  {
    id: 5,
    altText: "Let's go for a walk.",
    text: [
      '"Grandmother, let\'s go for a walk," I say.',
      '"Let\'s go," she says.',
    ],
  },
  {
    id: 6,
    altText: "Let's go for a walk.",
    text: ["We come to the door. I am happy, and Grandmother is happy!"],
  },
  ],
  vocabulary: {
    nouns: [
      { word: "family", meaning: "родина" },
      { word: "people", meaning: "люди" },
      { word: "mother", meaning: "мати" },
      { word: "father", meaning: "батько" },
      { word: "sister", meaning: "сестра" },
      { word: "brother", meaning: "брат" },
      { word: "uncle", meaning: "дядько" },
      { word: "aunt", meaning: "тітка" },
      { word: "grandmother", meaning: "бабуся" },
      { word: "grandfather", meaning: "дідусь" },
      { word: "cousin", meaning: "кузен - двоюрідний брат або сестра" },
    ],
    verbs: [
      { word: "read", meaning: "читата" },
      { word: "sing", meaning: "співати" },
      { word: "paint", meaning: "малювати" },
      { word: "swing", meaning: "гойдатись" },
      { word: "cook", meaning: "готувати" },
      { word: "walk", meaning: "гуляти" },
      { word: "laugh", meaning: "сміятись" },
      { word: "talk", meaning: "розмовляти" },
      { word: "play", meaning: "грати" },
    ],
    others: [
      { word: "lots", meaning: "багато (купи)" },
      { word: "not many", meaning: "не багато" },
      { word: "so many", meaning: "так багато" },
    ],
  },
  speaking: [
    {
      id: "task1",
      title: "What family is this?",
      type: "Look and say",
      dialogue: [
        { speaker: "A", line: "What family is this?" },
        { speaker: "B", line: "It is an elephant family." },
      ],
      table: [
        {column1: "It",
          column2: "is",
          column3: ["an elephant", "an otter", "a fox", "a sloth", "a rabbit"],
          column4: "family",
        },
      ],
      images: [
        {
          url: "elephantfamily",
          label: "elephants",
          question: "What family is this?",
          answer: "It is an elephant family.",
        },
        {
          url: "otterfamily",
          label: "otters",
          question: "What family is this?",
          answer: "It is an otter family.",
        },
        {
          url: "foxfamily",
          label: "foxes",
          question: "What family is this?",
          answer: "It is a fox family.",
        },
        {
          url: "slothfamily",
          label: "sloths",
          question: "What family is this?",
          answer: "It is a sloth family.",
        },
        {
          url: "rabbitfamily",
          label: "rabbits",
          question: "What family is this?",
          answer: "It is a rabbit family.",
        },
      ],
    },
    {
      id: "task2",
      title: "Who has apples?",
      type: "Look and say",
      dialogue: [
        { speaker: "A", line: "Who has apples? Your grandmother or your aunt?" },
        { speaker: "B", line: "My grandmother has apples." },
      ],
      table: [
        {column1: "My",
          column2: ["mother","father", "sister", "brother", "uncle", "aunt", "cousin", "grandmother", "grandfather"],
          column3: "has",
          column4: ["apples", "tangerines", "grapes", "watermelons", "cookies", "lemons", "lollipops", "candies", "jelly beans"],
        },
      ],
      images: [
        {
          url: "grandmotherapples",
          label: "my grandmother and my mother",
          question: "Who has apples? Your grandmother or your mother?",
          answer: "My granmother has the apples.",
        },
        {
          url: "fathercookies",
          label: "my father and my grandfather",
          question: "Who has cookies? Your grandfather or your father?",
          answer: "My granfather has the cookies.",
        },
        {
          url: "auntlollipops",
          label: "my aunt and my sister",
          question: "Who has lollipops? Your aunt or your sister?",
          answer: "My aunt has the lollipops.",
        },
        {
          url: "cousintangerines",
          label: "my uncle and my cousin",
          question: "Who has tangerines? Your uncle or your cousin?",
          answer: "My cousin has the tangerines.",
        },
        {
          url: "sistercandies",
          label: "my sister and my brother",
          question: "Who has candies? Your sister or your brother?",
          answer: "My sister has the candies.",
        },
        {
          url: "brotherwatermelons",
          label: "my sister and my brother",
          question: "Who has watermelons? Your sister or your brother?",
          answer: "My brother has the watermelons.",
        },
      ],
    },
    {
      id: "task3",
      title: "What is she doing?",
      type: "Look and say",
      dialogue: [
        { speaker: "A", line: "What is she doing?" },
        { speaker: "B", line: "She is reading." },
      ],
      table: [
        {
          column1: ["He","She"],
          column2: "is",
          column3: ["read", "sing", "paint", "swing", "cook", "laugh"],
          column4: "ing."
        },
      ],
      images: [
        {
          url: "shereading",
          label: "reading",
          question: "What is she doing?",
          answer: "She is reading",
        },
        {
          url: "heswinging",
          label: "swinging",
          question: "What is he doing?",
          answer: "He is swinging",
        },
        {
          url: "helaughing",
          label: "laughing",
          question: "What is he doing?",
          answer: "He is laughing",
        },
        {
          url: "shepainting",
          label: "painting",
          question: "What is she doing?",
          answer: "She is painting",
        },
        {
          url: "shesinging",
          label: "singing",
          question: "What is she doing?",
          answer: "She is singing",
        },
      ],
    },
    {
      id: "task4",
      title: "Who is not swinging?",
      type: "Look and say",
      dialogue: [
        { speaker: "A", line: "Who is not swinging?" },
        { speaker: "B", line: "Bird is not swinging. It is singing." },
      ],
      table: [
        {column1: "The",
          column2: ["bird","grandmother", "mother", "bee", "cat"],
          column3: "is not",
          column4: ["read", "sing", "paint", "swing", "cook", "laugh"],
          column5: "ing.",
          column6: ["It", "She"],
          column7: "is",
          column8: ["fly", "She"]
        },
      ],
      images: [
        {
          url: "beenotwalking",
          label: "a bee and three ants",
          question: "Who is not walking?",
          answer: "The bee is not walking. It is flying.",
        },
        {
          url: "grandmothernotlaughing",
          label: "a grandmother and a boy",
          question: "Who is not laughing?",
          answer: "The grandmother is not laughing. She is reading.",
        },
        {
          url: "catnotpainting",
          label: "A cat and an elephant",
          question: "Who is not painting?",
          answer: "The cat is not painting. It is sleeping.",
        },
        {
          url: "birdnotswinging",
          label: "A bird and a rabbit",
          question: "Who is not swinging?",
          answer: "The bird is not swinging. It is singing.",
        },
        {
          url: "mothernothiding",
          label: "A mother and a mouse",
          question: "Who is not hiding?",
          answer: "The mother is not hiding. She is cooking.",
        },
      ],
    },
  ],
  games: [
    {
      url: "https://learningapps.org/watch?v=p9fgmxf1k26",
    },
  ],
};
