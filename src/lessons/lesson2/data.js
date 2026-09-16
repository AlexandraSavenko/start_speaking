export const lesson2 = {
  id: "lesson2",
  title: "Hello, numbers",
  video: ["RuqvGiZi0qg"],
  // file: "https://drive.google.com/file/d/1CxLEtcGe_MSkLxRsEwnKfICqi-EYPPpd/view?usp=sharing",
  prelistening: [
    {
      id: "task1",
      title: "Numbers",
      type: "Look and say",
      images: [
        { url: "one", label: "one" },
        { url: "two", label: "two" },
        { url: "three", label: "three" },
        { url: "five", label: "five" },
        { url: "six", label: "six" },
        { url: "seven", label: "seven" },
        { url: "eight", label: "eight" },
        { url: "nine", label: "nine" },
      ],
    },
    {
      id: "task2",
      title: "Song",
      type: "Look and say",
      images: [
        { url: "head", label: "head" },
        { url: "shoulders", label: "shoulders" },
        { url: "knees", label: "knees" },
        { url: "toes", label: "toes" },
        { url: "eyes", label: "eyes" },
        { url: "ears", label: "ears" },
        { url: "mouth", label: "mouth" },
        { url: "nose", label: "nose" },
        
      ],
    },
  ],
  pages: [
    {
      id: 1,
      altText: "Mary",
      text: "Hello, I am Mary. I like iguanas. I have one iguana. I like mice. I have one mouse. I like fish. I have five fish.",
    },
    {
      id: 2,
      altText: "Ravi",
      text: "Hello, I am Ravi. I like elephants. I have one elephant. I like birds. I have two birds.",
    },
    
  ],
  vocabulary: {
    nouns: [
      { word: "head", meaning: "голова" },
      { word: "sholder", meaning: "плече" },
      { word: "knee", meaning: "коліно" },
      { word: "toe", meaning: "палець ноги" },
      { word: "eye", meaning: "око" },
      { word: "ear", meaning: "вухо" },
      { word: "mouth", meaning: "рот" },
      { word: "nose", meaning: "ніс" },
    ],
    phrases: [
      { word: "I see", meaning: "Я бачу" },
      { word: "What color", meaning: "Якого кольору" },
      { word: "How many", meaning: "Як багато" },
    ]
  },
  speaking: [
    {
      id: "task1",
      title: "One is yellow.",
      type: "Look and say",
      dialogue: [{ speaker: "A", line: "What color is one?" }, { speaker: "B", line: "One is yellow." }],
      table: [
        {
          column1: [
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
          ],
          column2: "is",
          column3: [
            "green",
            "yellow",
            "blue",
            "red",
            "brown",
            "black",
            "orange",
            "grey"
          ],
        },
      ],
      images: [
        { url: "one", label: "one", question: "What color is one?", answer: "One is orange"},
        { url: "two", label: "two", question: "What color is two?", answer: "Two is grey"},
        { url: "three", label: "three", question: "What color is three?", answer: "Three is orange"},
        { url: "four", label: "four", question: "What color is four?", answer: "Four is black"},
        { url: "five", label: "five", question: "What color is five?", answer: "Five is brown"},
        { url: "six", label: "six", question: "What color is six?", answer: "Six is green"},
        { url: "seven", label: "seven", question: "What color is seven?", answer: "Seven is yellow"},
        { url: "eight", label: "eight", question: "What color is eight?", answer: "Eight is red"},
        { url: "nine", label: "nine", question: "What color is nine?", answer: "Nine is blue"},
      ],
    },
    {
      id: "task2",
      title: "I see four birds.",
      type: "Look and say",
      dialogue: [{ speaker: "A", line: "How many birds?" }, { speaker: "B", line: "I see four birds." }],
      table: [
        {
          column1: "I",
          column2: "see",
          column3: [
           "one",
            "two",
            "three",
            "four",
            "five",
          ],
          column4: [
            "birds",
            "fish",
            "cats",
            "dogs",
            "otters",
            "elephants",
            "iguanas"
          ]
        },
      ],
      images: [
        { url: "twoelephants", label: "elephants", question: "How many elephants?", answer: "I see two elephants" },
        { url: "fourcats", label: "cats", question: "How many cats?", answer: "I see four cats" },
        { url: "fivefish", label: "fish", question: "How many fish?", answer: "I see five fish" },
        { url: "fourbirds", label: "birds", question: "How many birds?", answer: "I see four birds" },
        { url: "nineiguanas", label: "iguanas", question: "How many iguanas?", answer: "I see nine iguanas" },
        { url: "sevenotters", label: "otters", question: "How many otters?", answer: "I see seven otters" },
        { url: "twodogs", label: "dogs", question: "How many dogs?", answer: "I see two dogs" },
      ],
    },
  ],
  games: [
    {
      url: "https://learningapps.org/watch?v=p7ndudi2t26",
    },
  ],
};
