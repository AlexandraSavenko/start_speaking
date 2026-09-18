export const lesson5 = {
  id: "lesson5",
  title: "Here and there.",
  video: ["V5Bs9xydba0", "DHb4-CCif7U"],
  prelistening: [
    {
      id: "task1",
      title: "Song_Nouns",
      type: "Look and say",
      images: [
        { url: "bee", label: "a bee" },
        { url: "hive", label: "a hive" },
        { url: "day", label: "day" },
        { url: "night", label: "night" },
      ],
    },
    {
      id: "task2",
      title: "Song_Adjectives",
      type: "Look and say",
      images: [
        { url: "high", label: "high" },
        { url: "low", label: "low" },
        { url: "fast", label: "fast" },
        { url: "slow", label: "slow" },
        { url: "left", label: "left" },
        { url: "right", label: "right" },
      ],
    },
    {
      id: "task3",
      title: "Song_verbs",
      type: "Look and say",
      images: [
        { url: "sleep", label: "sleep" },
        { url: "fly", label: "fly" },
        { url: "come", label: "come" },
        { url: "hide", label: "hide" },
      ],
    },
  ],
  pages: [
    {
      id: 1,
      altText: "Animal circus",
      text: "Look at the elephant. There is a camel on it. A spider is on the camel's head. A lion is on the camel's hump. A rabbit in on the lion's nose. There are five ants on the rabbit's ears. A ladybug is flying by. A lizard is climbing up. It is high. It is on lion's leg.",
    },
    {
      id: 2,
      altText: "A fox",
      text: "Hello, I am Andie. I have a hive. I have ten bees. Five bees are in the hive. Two bees are sitting on the hive. One bee is under the hive. Two bees are flying by the hive. ",
    },
    
  ],
  vocabulary: {
    nouns: [
      { url: "bee", meaning: "бджола" },
      { url: "hive", meaning: "вулик" },
      { url: "day", meaning: "день" },
      { url: "night", meaning: "ніч" },
    ],
    verbs: [{ word: "hide", meaning: "ховатись" },
        { word: "fly", meaning: "літати" },
        { word: "come", meaning: "виходити" },
        { word: "sleep", meaning: "спати" }
    ],
    prepositions: [{ word: "on", meaning: "на" },
        { word: "in", meaning: "в" },
        { word: "under", meaning: "під" },
        { word: "by", meaning: "біля, коло" },
    ],
     adjectives: [{ word: "high", meaning: "високо" },
        { word: "low", meaning: "низько" },
        { word: "fast", meaning: "швидко" },
        { word: "slow", meaning: "повільно" },
        { word: "left", meaning: "ліво" },
        { word: "right", meaning: "право" },
    ],
    phrases: [
      { word: "There is...", meaning: "Там є ..." },
      { word: "Here is...", meaning: "Тут є ..." },
      { word: "Where is...", meaning: "Де є ...?" },
    ],
  },
  speaking: [
    {
      id: "task1",
      title: "A spider on a sloth.",
      type: "Look and say",
      dialogue: [{ speaker: "A", line: "Where is spider?" }, { speaker: "B", line: "A spider is on a sloth." }],
      table: [
        {
            column1: [
            "a sloth",
            "a spider",
            "a rabbit",
            "a ladybug",
            "camel",
            "lizard",
            "bird",
            "a fox",
            "a lion",
            "a ant",
            
          ],
          column2: "is",
          column3: ["on", "under"],
          column4: [
            "a sloth",
            "a spider",
            "a rabbit",
            "a ladybug",
            "camel",
            "lizard",
            "bird",
            "a fox",
            "a lion",
            "a ant",
            
          ], 
        },
      ],
      images: [
        { url: "slothspider", label: "a sloth and a spider", question: "Where is spider?", answer: "A spider is on a sloth.",  },
        { url: "rabbitladybug", label: "a rabbit and a ladybug", question: "Where is rabbit?", answer: "A rabbit is under a ladybug.", },
        { url: "camellizard", label: "a camel and a lizard", question: "Where is lizard?", answer: "A lizard is on a camel.", },
        { url: "birdfox", label: "a bird and a fox", question: "Where is bird?", answer: "A bird is on a fox.", },
        { url: "lionant", label: "a lion and an ant", question: "Where is lion?", answer: "A lion is under an ant.", },
      ],
    },
    {
      id: "task2",
      title: "Here or there.",
      type: "Look and say",
      dialogue: [{ speaker: "A", line: "Where is camel? Here or there?" }, { speaker: "B", line: "Camel is here." }],
      table: [
        {
            column1: [
            "a camel",
            "a fox",
            "a lion",
            "a ant",
            "a bee",
            "An iguana"
            
          ],
          column2: "is",
          column3: ["here", "there"],
        },
      ],
      images: [
        { url: "camelhere", label: "a camel", question: "Where is camel? Here or there?", answer: "A camel is here.",  },
        { url: "foxhere", label: "a fox", question: "Where is fox? Here or there?", answer: "A fox is here.", },
        { url: "lionthere", label: "a lion", question: "Where is lion? Here or there?", answer: "A lion is there.", },
        { url: "antthere", label: "an ant", question: "Where is ant? Here or there?", answer: "An ant is there.", },
        { url: "beehere", label: "a bee", question: "Where is bee? Here or there?", answer: "A bee is here.", },
        { url: "iguanathere", label: "an iguana", question: "Where is iguana? Here or there?", answer: "An iguana is there.", },
      ],
    },
    {
      id: "task3",
      title: "A fox is coming.",
      type: "Look and say",
      dialogue: [{ speaker: "A", line: "Who is coming?" }, { speaker: "B", line: "A fox is coming." }],
      table: [
        {
            column1: [
            "A camel",
            "An ant",
            "A fox",
            "A lion",
            "A sloth",
            "A rabbit",
            "An iguana"
            
          ],
          column2: "is",
          column3: ["sleeping", "hiding", "coming", "flying"],
        },
      ],
      images: [
        { url: "foxcome", label: "a fox", question: "Who is coming?", answer: "A fox is coming.", }, 
        { url: "antcome", label: "an ant", question: "Who is coming?", answer: "An ant is coming.", },
        { url: "lionsleep", label: "a lion", question: "Who is sleeping?", answer: "A lion is sleeping.", },
       { url: "slothsleep", label: "a sloth", question: "Who is sleeping?", answer: "A sloth is sleeping.", },
        { url: "rabbithide", label: "a rabbit", question: "Who is hiding?", answer: "A rabbit is hiding.", },
        { url: "iguanathere", label: "an iguana", question: "Who is hiding?", answer: "An iguana is hiding.", },
      ],
    },

  ],
  games: [
    {
      url: "https://learningapps.org/watch?v=pc17p831326",
    },
    {
      url: "https://learningapps.org/watch?v=pwso89ei326",
    },
    {
      url: "https://learningapps.org/watch?v=pte6xjpgn26",
    },
  ],
};
