export const lesson14 = {
  id: "lesson14",
  title: "Toys.",
  video: ["bW_tWUklXyY", "UQVuqn2IWnw"],
  prelistening: [
    {
      id: "task1",
      title: "Nouns",
      type: "Look and say",
      images: [
       
        { url: "train", label: "train" },
        { url: "rocket", label: "rocket" },
        { url: "Tbear", label: "teddy bear" },
        { url: "house", label: "house" },
        { url: "doll", label: "doll" },
        { url: "car", label: "car" },
        { url: "game", label: "game" },
      ],
    },
    {
      id: "task2",
      title: "Actions",
      type: "Look and say",
      images: [
        { url: "reindeer", label: "reindeer" },
         { url: "Chtree", label: "Christmas tree" },
        { url: "santa", label: "Santa" },
         { url: "milk", label: "milk" },
      ],
    },
    {
      id: "task3",
      title: "Others",
      type: "Look and say",
      images: [
        { url: "liftoff", label: "lift off" },
        { url: "aboard", label: "aboard" },
        { url: "arm", label: "arm" },
      ],
    },
  ],
  pages: [
    {
      id: 1,
      altText: "What do you want for Christmas?",
      text: [
        "I want a train.",
        "'Will Santa bring me a train?' I ask mother.",
        "'Are you a good boy?' she asks me.",
        "'Yes, I am' I say.",
        "'Santa brings presents for good boys and good girls.' says mother."
      ],
    },
    {
      id: 2,
      altText: "What do you want for Christmas?",
      text: [
        "'Let\'s leave milk and cookies by the Christmas tree.' says mom.",
        "'Are they for Santa?' I ask.",
        "'Yes.' she says.",
        "'Do the reindeer eat cookies?' I ask.",
        "'No, they eat carrots.' says mother.",
        "'Let\'s leave carrots, too,' I say."
      ],
    },
    {
      id: 3,
      altText: "What do you want for Christmas?",
      text: [
        "'I can\'t sleep' I say. 'I want to see Santa.",
        "'Santa comes when you sleep' my mommy says.",
        "'Ok, then I will sleep.' I say.",
      ],
    },
    {
      id: 4,
      altText: "What do you want for Christmas?",
      text: [
        'I run to the Christmas tree.',
        "There are no cookies and no carrots. I can see a big red box.",
        "'It is my present!' I say.",
        "In the box, I can see a black train and a lot of chocolates."
      ],
    },
    
  ],
  vocabulary: {
    nouns: [
      { word: "Christmas", meaning: "Різдво" },
      { word: "Christmas tree", meaning: "різдвяна ялинка" },
      { word: "Santa", meaning: "Святий Миколай" },
      { word: "arm", meaning: "рука" },
      { word: "train", meaning: "потяг" },
      { word: "rocket", meaning: "ракета" },
      { word: "bear", meaning: "ведмідь" },
      { word: "milk", meaning: "молоко" },
      { word: "present", meaning: "подарунок" },
    ],
    verbs: [
      { word: "lift off", meaning: "злітати" },
      { word: "get", meaning: "дістатись, доїхати" },
      { word: "travel", meaning: "подорожувати" },
      { word: "leave", meaning: "залишати" },
    ],
    phrases: [
      { word: "Santa is on his way...", meaning: "Святий Миколай вже в дорозі..." },
      { word: "All aboard!", meaning: "Усі на борт!" },
      {
        word: "leave them by the Christmas tree...",
        meaning: "Залишіть їх біля різдвяної ялинки..",
      },
      { word: "I bet...", meaning: "Я впевнений / впевнена..." },
      { word: "when he gets here...", meaning: "Коли він сюди дістанеться..." },
      { word: "He has traveled...", meaning: "Він проїхав..." },
      { word: "...such a long way...", meaning: "...такий довгий шлях..." },
      { word: "Before we go to bed...", meaning: "перш ніж ми підемо спати / ляжемо в ліжко" },
    ],
  },
  speaking: [
    {
      id: "task1",
      title: "What is in the present?",
      type: "Ask and look",
      dialogue: [
        { speaker: "A", line: "What is in the present?" },
        { speaker: "B", line: "It is a train." },
      ],
      table: [
        {
          column1: "What",
          column2: "is",
          column3: "in",
          column4: "the present?",
          column5: "It is",
          column6: [
            "a train",
            "a robot",
            "a rocket",
            "a bear",
            "a scarf",
            "a T-shirt",
            "a candy",
          ],
        },
      ],
      images: [
        {
          id: 1,
          url: "ptrain",
          quUrl: "present",
          label: "a train",
          question: "What is in the present?",
          answer: "It is a train.",
        },
        {
          id: 2,
          url: "procket",
          quUrl: "present",
          label: "a rocket",
          question: "What is in the present?",
          answer: "It is a rocket.",
        },
        {
          id: 3,
          url: "pbear",
          quUrl: "present",
          label: "a bear",
          question: "What is in the present?",
          answer: "It is a bear.",
        },
        {
          id: 3,
          url: "ptshirt",
          quUrl: "present",
          label: "a T-shirt",
          question: "What is in the present?",
          answer: "It is a T-shirt.",
        },
        {
          id: 4,
          url: "pscarf",
          quUrl: "present",
          label: "a scarf",
          question: "What is in the present?",
          answer: "It is a scarf.",
        },
        {
          id: 5,
          url: "pcandy",
          quUrl: "present",
          label: "a candy",
          question: "What is in the present?",
          answer: "It is a candy.",
        },
        {
          id: 6,
          url: "probot",
          quUrl: "present",
          label: "a robot",
          question: "What is in the present?",
          answer: "It is a robot.",
        },
        
      ],
    },
    {
      id: "task2",
      title: "Who has a train?",
      type: "multiQuest",
      images: {
        mainImage: {
          url: "whohaswhat",
        },
        rightIC: [
          {
            id: 1,
            url: "sheasking",
            label: "Santa asking what you want for Christmas",
            question: "Who has a train?",
            answer: "Sister has a train.",
          },
          {
            id: 2,
            url: "sheasking",
            label: "Santa asking what you want for Christmas",
            question: "Who has a robot?",
            answer: "Brother has a robot.",
          },
          {
            id: 3,
            url: "sheasking",
            label: "Santa asking what you want for Christmas",
            question: "Who has a game console?",
            answer: "Grandmother has a game console.",
          },
          {
            id: 4,
            url: "sheasking",
            label: "Santa asking what you want for Christmas",
            question: "Who has a bear?",
            answer: "Mother has a bear.",
          },
          {
            id: 5,
            url: "sheasking",
            label: "Santa asking what you want for Christmas",
            question: "Who has a doll?",
            answer: "Father has a doll.",
          },
          {
            id: 6,
            url: "sheasking",
            label: "Santa asking what you want for Christmas",
            question: "Who has a car?",
            answer: "Grandfather has a car.",
          },          
        ],
      },
    },
    {
      id: "task3",
      title: "What you want for Christmas?",
      type: "Ask and look",
      dialogue: [
        { speaker: "A", line: "What you want for Christmas?" },
        { speaker: "B", line: "I want a train" },
      ],
      table: [
        {
          column1: "What",
          column2: "do",
          column3: "you",
          column4: "want",
          column5: "for Christmas?",
          column6: "I",
          column7: "want",
          column8: ["a train", "a car", "a doll", "a house", "a rocket", "a bear"]
        },
      ],
      images: [
        {
          id: 1,
          url: "gift1",
          quUrl: "kid1",
          label: "What do you want for Christmas?",
          question: "What do you want for Christmas?",
          answer: "I want a train",
        },
        {
          id: 2,
          url: "gift2",
          quUrl: "kid2",
          label: "What do you want for Christmas?",
          question: "What do you want for Christmas?",
          answer: "I want a house",
        },
        {
          id: 3,
          url: "gift3",
          quUrl: "kid3",
          label: "What do you want for Christmas?",
          question: "What do you want for Christmas?",
          answer: "I want a bear",
        },
        {
          id: 4,
          url: "gift4",
          quUrl: "kid4",
          label: "What do you want for Christmas?",
          question: "What do you want for Christmas?",
          answer: "I want a rocket",
        },
        {
          id: 5,
          url: "gift5",
          quUrl: "kid5",
          label: "What do you want for Christmas?",
          question: "What do you want for Christmas?",
          answer: "I want a doll",
        },
        {
          id: 6,
          url: "gift6",
          quUrl: "kid6",
          label: "What do you want for Christmas?",
          question: "What do you want for Christmas?",
          answer: "I want a car",
        },
      ],
    },
  ],
  games: [
    {
      url: "https://learningapps.org/watch?v=p5p1yj9d226",
    },
    {
      url: "https://learningapps.org/watch?v=pxeq1rrej26",
    },
    {
        url: "https://learningapps.org/watch?v=pbmgty2c326"
    }
  ],
};
