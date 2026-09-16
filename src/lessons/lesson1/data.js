export const lesson1 = {
  id: "lesson1",
  title: "Hello, I'm ...",
  video: ["pD_MZSudFdI"],
  prelistening: [
    {
      id: "task1",
      title: "Animals",
      type: "Look and say",
      images: [
        { url: "cat", label: "a cat" },
        { url: "robot", label: "a robot" },
        { url: "dog", label: "a dog" },
        { url: "bird", label: "a bird" },
        { url: "mouse", label: "a mouse" },
        { url: "fish", label: "a fish" },
        { url: "kitten", label: "a kitten" },
        { url: "elephant", label: "an elephant" },
        { url: "otter", label: "an otter" },
        { url: "iguana", label: "an iguana" },
      ],
    },
    {
      id: "task2",
      title: "Colors",
      type: "Look and say",
      images: [
        { url: "black", label: "black" },
        { url: "grey", label: "grey" },
        { url: "red", label: "red" },
        { url: "blue", label: "blue" },
        { url: "yellow", label: "yellow" },
        { url: "green", label: "green" },
        { url: "brown", label: "brown" },
        { url: "white", label: "white" },
      ],
    },
    {
      id: "task3",
      title: "Song",
      type: "Look and say",
      images: [
        { url: "up", label: "up" },
        { url: "down", label: "down" },
        { url: "round", label: "round" },
      ],
    },
  ],
  pages: [
    {
      id: 1,
      altText: "A cat",
      text: "Hello, I am a cat. I'm black. I like fish.",
    },
    {
      id: 2,
      altText: "An elephant",
      text: "Hello, I am an elephant. I'm grey. I like cats.",
    },
    {
      id: 3,
      altText: "An iguana",
      text: "Hello, I am an iguana. I'm green. I like to play basketball.",
    },
  ],
  vocabulary: {
    nouns: [
      { word: "cat", meaning: "кіт" },
      { word: "dog", meaning: "собака" },
      { word: "robot", meaning: "робот" },
      { word: "fish", meaning: "риба" },
      { word: "bird", meaning: "пташка" },
      { word: "mouse", meaning: "миша" },
      { word: "kitten", meaning: "кошеня" },
      { word: "otter", meaning: "видра" },
      { word: "iguana", meaning: "ігуана" },
      { word: "elephant", meaning: "слон" },
    ],
    phrases: [
      { word: "I like ...", meaning: "Я люблю ..." }
    ],
    other: [
      { word: "up", meaning: "вгору" },
      { word: "down", meaning: "вниз" },
      { word: "round", meaning: "довкола" },
    ],
  },
  tasks: {
    task1: {
      name: "Say who:",
      list: [
        "Who is strong?",
        "Who is fast?",
        "Who is old?",
        "Who is careful?",
      ],
    },
  },
  speaking: [
    {
      id: "task1",
      title: "I'm a cat.",
      type: "Look and say",
      dialogue: [{ speaker: "A", line: "Who are you?" }, { speaker: "B", line: "I am a cat." }],
      table: [
        {
          column1: "I",
          column2: "am",
          column3: [
            "a cat",
            "a kitten",
            "a dog",
            "a robot",
            "a fish",
            "a bird",
            "a mouse",
          ],
        },
      ],
      images: [
        { url: "cat", label: "a cat", question: "Who are you?", answer: "I'm a cat"},
        { url: "robot", label: "a robot", question: "Who are you?", answer: "I'm a robot"},
        { url: "dog", label: "a dog", question: "Who are you?", answer: "I'm a dog"},
        { url: "bird", label: "a bird", question: "Who are you?", answer: "I'm a bird"},
        { url: "mouse", label: "a mouse", question: "Who are you?", answer: "I'm a mouse"},
        { url: "fish", label: "a fish", question: "Who are you?", answer: "I'm a fish"},
        { url: "kitten", label: "a kitten", question: "Who are you?", answer: "I'm a kitten"},
        { url: "otter", label: "an otter", question: "Who are you?", answer: "I'm an otter"},
        { url: "elephant", label: "an elephant", question: "Who are you?", answer: "I'm an elephant"},
        { url: "iguana", label: "an iguana", question: "Who are you?", answer: "I'm an iguana" },
      ],
    },
    {
      id: "task2",
      title: "A cat is black.",
      type: "Look and say",
      dialogue: [{ speaker: "A", line: "What color is cat?" }, { speaker: "B", line: "A cat is black." }],
      table: [
        {
          column1: [
            "A cat",
            "A kitten",
            "A dog",
            "A robot",
            "A fish",
            "A bird",
            "A mouse",
            "An elephant",
            "An iguana",
            "An otter"
          ],
          column2: "is",
          column3: [
            "black",
            "white",
            "grey",
            "blue",
            "red",
            "yellow",
            "brown",
          ],
        },
      ],
      images: [
        { url: "cat", label: "a cat", question: "What color is cat?", answer: "A cat is black" },
        { url: "robot", label: "a robot", question: "What color is robot?", answer: "A robot is blue" },
        { url: "dog", label: "a dog", question: "What color is dog?", answer: "A dog is black and yellow" },
        { url: "bird", label: "a bird", question: "What color is bird?", answer: "A bird is yellow" },
        { url: "mouse", label: "a mouse", question: "What color is mouse?", answer: "A mouse is grey" },
        { url: "fish", label: "a fish", question: "What color is fish?", answer: "A fish is green" },
        { url: "kitten", label: "a kitten", question: "What color is kitten?", answer: "A kitten is white" },
        { url: "otter", label: "an otter", question: "What color is otter?", answer: "An otter is brown" },
        { url: "elephant", label: "an elephant", question: "What color is elephant?", answer: "An elephant is grey" },
        { url: "iguana", label: "an iguana", question: "What color is iguana?", answer: "An iguana is green" },
      ],
    },
  ],
  games: [
    {
      url: "https://learningapps.org/watch?v=pxm1y553c26",
    },
  ],
};
