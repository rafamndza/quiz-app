const quizzData = [
  {
    question: "What does JavaScript stand for?",
    options: [["JavaScript"], ["JavaScrip"], ["JavaScripting"]],
    answer: "JavaScript",
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: [["var"], ["int"], ["float"]],
    answer: "var",
  },
  {
    question: "What is the result of '5' + 3 in JavaScript?",
    options: [["53"], ["8"], ["Error"]],
    answer: "53",
  },
  {
    question:
      "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    options: [["push()"], ["concat()"], ["append()"]],
    answer: "push()",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'script.js'?",
    options: [
      ["<script src='script.js'></script>"],
      ["<script name='script.js'></script>"],
      ["<script href='script.js'></script>"],
    ],
    answer: "<script src='script.js'></script>",
  },
  {
    question:
      "Which operator is used to assign a value to a variable in JavaScript?",
    options: [["="], [":"], ["=="]],
    answer: "=",
  },
  {
    question: "What is the purpose of 'typeof' operator in JavaScript?",
    options: [
      ["To check the data type of a variable"],
      ["To create a new variable"],
      ["To perform arithmetic operations"],
    ],
    answer: "To check the data type of a variable",
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [["Current object"], ["Global object"], ["Next object"]],
    answer: "Current object",
  },
  {
    question: "Which function is used to parse a JSON string in JavaScript?",
    options: [["JSON.parse()"], ["parseJSON()"], ["stringify()"]],
    answer: "JSON.parse()",
  },
  {
    question: "What is the result of '10' == 10 in JavaScript?",
    options: [["true"], ["false"], ["undefined"]],
    answer: "true",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: [["click"], ["change"], ["mouseclick"]],
    answer: "click",
  },
  {
    question:
      "What is the output of the following code: console.log(2 + '2' - 1);",
    options: [["21"], ["23"], ["NaN"]],
    answer: "21",
  },
  {
    question: "What is the purpose of JavaScript's 'addEventListener' method?",
    options: [
      ["To handle events like clicks and keypresses"],
      ["To create variables"],
      ["To define HTML structure"],
    ],
    answer: "To handle events like clicks and keypresses",
  },
  {
    question:
      "Which operator is used for strict equality testing in JavaScript?",
    options: [["==="], ["=="], [">="]],
    answer: "===",
  },
  {
    question: "What is the role of the 'this' keyword in JavaScript?",
    options: [
      ["Refers to the current object"],
      ["Indicates a specific data type"],
      ["Defines a function"],
    ],
    answer: "Refers to the current object",
  },
  {
    question:
      "Which loop is used for iterating over the properties of an object?",
    options: [["for...in loop"], ["while loop"], ["do...while loop"]],
    answer: "for...in loop",
  },
  {
    question: "What is the purpose of the 'JSON.parse()' method in JavaScript?",
    options: [
      ["To parse JSON strings and convert them to objects"],
      ["To create new JSON strings"],
      ["To format JSON data for display"],
    ],
    answer: "To parse JSON strings and convert them to objects",
  },
  {
    question: "What does 'NaN' stand for in JavaScript?",
    options: [["Not-a-Number"], ["Null-and-None"], ["Number-and-Null"]],
    answer: "Not-a-Number",
  },
];

console.log(quizzData.length);
