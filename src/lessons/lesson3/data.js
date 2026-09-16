export const lesson3 = {
  id: "lesson3",
  title: "Hello, how are you?",
  video: ["tVlcKp3bWH8"],
  prelistening: [
    {
      id: "task1",
      title: "How are you?",
      type: "Look and say",
      images: [
        { url: "happy", label: "happy" },
        { url: "sad", label: "sad" },
      ],
    },
    {
      id: "task2",
      title: "Song",
      type: "Look and say",
      images: [
        { url: "good", label: "good" },
        { url: "great", label: "great" },
        { url: "wonderful", label: "wonderful" },
        { url: "tired", label: "tired" },
        { url: "hungry", label: "hungry" },        
      ],
    },
  ],
  pages: [
    {
      id: 1,
      altText: "Tom",
      text: "Hello, I am Tom. I am happy. I have two birds. My blue bird is happy. It is on my head. My brown bird is hungry. It is by my toes.",
    },
    {
      id: 2,
      altText: "Happy monster",
      text: "Hello, I am Boo. I am a monster. I am happy. I am not sad. I have two blue heads. I have four black eyes. I have six green hands. I have one yellow knee. I have eight yellow toes.",
    },
    
  ],
  vocabulary: {
    others: [
{ word: "on", meaning: "на" },
{ word: "by", meaning: "біля, коло" },
{ word: "my", meaning: "мій, моя" },
    ],
    adjectives: [
        { word: "happy", meaning: "щасливий" },
        { word: "sad", meaning: "сумний" },
        { word: "good", meaning: "добре" },
        { word: "great", meaning: "чудово" },
        { word: "wonderful", meaning: "прекрасно" },
        { word: "hungry", meaning: "голодний" },
        { word: "tired", meaning: "втомлений" },
    ]
  },
  speaking: [
    {
      id: "task1",
      title: "one ... two",
      type: "Look and say",
      dialogue: [{ speaker: "A", line: "How many eyes?" }, { speaker: "B", line: "One eye." }],
      table: [
        {
          column1: [
            "one",
            "two",
          ],
          column2: [
            "eye",
            "nose",
            "ear",
            "mouse",
            "head",
            "sholder",
            "knee",
            "toe"
          ],
        },
      ],
      images: [
        { url: "eye", label: "eye", question: "How many eyes?", answer: "One eye."},
        { url: "eyes", label: "eyes", question: "How many eyes?", answer: "Two eyes."},
        { url: "nose", label: "nose", question: "How many noses?", answer: "One nose."},
        { url: "ear", label: "ear", question: "How many ears?", answer: "One ear."},
        { url: "ears", label: "ears", question: "How many ears?", answer: "Two ears."},
        { url: "mouth", label: "mouth", question: "How many mouths?", answer: "One mouth."},
        { url: "head", label: "head", question: "How many heads?", answer: "One head."},
        { url: "shoulder", label: "shoulder", question: "How many shoulders?", answer: "One shoulder."},
        { url: "knee", label: "knee", question: "How many knees?", answer: "One knee."},
        { url: "knees", label: "knees", question: "How many knees?", answer: "Two knees."},
        { url: "toe", label: "toe", question: "How many toes?", answer: "One toe."},
        { url: "toes", label: "toes", question: "How many toes?", answer: "Two toes."},
      ],
    },
    {
      id: "task2",
      title: "I have...It is...",
      type: "Look and say",
      dialogue: [{ speaker: "A", line: "Do you have a pet?" }, { speaker: "B", line: "I have a dog. It is yellow." }],
      table: [
        {
          column1: "I have",
          column2: [
            "a dog",
            "a kitten",
            "a fish",
            "a bird",
            "a mouse",
            "a robot",
          ],
          column3: "It is",
          column4: [
            "blue",
            "red",
            "yellow",
            "green",
            "purple",
            "grey",
          ],
        },
      ],
      images: [
        { url: "greendog", label: "green dog", question: "Do you have a pet?", answer: "I have a dog. It is green."},
        { url: "bluekitten", label: "blue kitten", question: "Do you have a pet?", answer: "I have a kitten. It is blue."},
        { url: "purpleelephant", label: "purple elephant", question: "Do you have a pet?", answer: "I have an elephant. It is purple."},
        { url: "redrobot", label: "red robot", question: "Do you have a pet?", answer: "I have a robot. It is red."},
        { url: "yellowmouse", label: "yellow mouse", question: "Do you have a pet?", answer: "I have a mouse. It is yellow."},
        { url: "greybird", label: "grey bird", question: "Do you have a pet?", answer: "I have a bird. It is grey."},
      ],
    },
    {
      id: "task3",
      title: "I see two sad birds.",
      type: "Look and say",
      dialogue: [{ speaker: "A", line: "I see two sad birds." }],
      table: [
        {
          column1: "I see",
          column2: "two",
          column3: [
           "happy",
            "sad",
          ],
          column4: [
            "birds",
            "kittens",
            "otters",
            "iguanas",
            "robots",
            "elephants",
          ]
        },
      ],
      images: [
        { url: "sadbirds", label: "birds", answer: "I see two sad birds" },
        { url: "happykittens", label: "kittens", answer: "I see two happy kittens" },
        { url: "happyotters", label: "otters", answer: "I see two happy otters" },
        { url: "happyiguanas", label: "iguanas", answer: "I see two happy iguanas" },
        { url: "sadrobots", label: "robots", answer: "I see two sad robors" },
        { url: "sadelephants", label: "elephants", answer: "I see two sad elephants" },
      ],
    },
  ],
  games: [
    {
      url: "https://learningapps.org/watch?v=pk0ephjb526",
    },
    {
      url: "https://learningapps.org/watch?v=pbnbtnvtt26",
    },
  ],
};
