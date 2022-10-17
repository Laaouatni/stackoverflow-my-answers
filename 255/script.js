const data = [
  {
    question: "true + false",
    options: ['"truefalse"', "1", "NaN", "SyntaxError"],
    correctAnswer: 1,
  },
  {
    question: "[,,,].length",
    options: ["0", "3", "4", "SyntaxError"],
    correctAnswer: 1,
  },
  {
    question: "[1, 2, 3] + [4, 5, 6]",
    options: ['"123456"', '"1,2,34,5,6"', '"1,2,3,4,5,6"', "NaN"],
    correctAnswer: 1,
  },
  {
    question: "0.2 + 0.1 === 0.3",
    options: ["true", "false", "NaN", "SyntaxError"],
    correctAnswer: 1,
  },
  {
    question: "10,2",
    options: ["10.2", "10", "2", "20"],
    correctAnswer: 2,
  },
  {
    question: "!!null === !!undefined",
    options: ["true", "false", "TypeError", "SyntaxError"],
    correctAnswer: 0,
  },
  {
    question: '!!""',
    options: ["true", "false", "undefined", "SyntaxError"],
    correctAnswer: 1,
  },
  {
    question: "+!![]",
    options: ["true", "false", "0", "1"],
    correctAnswer: 3,
  },
  {
    question: "!![] === !![]",
    options: ["true", "false", "undefined", "SyntaxError"],
    correctAnswer: 0,
  },
  {
    question: "!!!true",
    options: ["true", "false", "0", "SyntaxError"],
    correctAnswer: 1,
  },
  {
    question: "parseInt(0.0000005)",
    options: ["0", "1", "5", "NaN"],
    correctAnswer: 2,
  },
  {
    question: "true.true",
    options: ["true", "false", "undefined", "SyntaxError"],
    correctAnswer: 2,
  },
  {
    question: 'true == "true"',
    options: ["true", "false", "undefined", "SyntaxError"],
    correctAnswer: 1,
  },
  {
    question: "010 - 03",
    options: ["7", "5", "3", "NaN"],
    correctAnswer: 1,
  },
  {
    question: '"" - - ""',
    options: ['""', "0", "NaN", "SyntaxError"],
    correctAnswer: 1,
  },
  {
    question: "null + 0",
    options: ["0", '"null0"', "NaN", "TypeError"],
    correctAnswer: 0,
  },
  {
    question: "0/0",
    options: ["0", "Infinity", "NaN", "SyntaxError"],
    correctAnswer: 2,
  },
  {
    question: "1/0 > 10 ** 1000",
    options: ["true", "false", "NaN", "SyntaxError"],
    correctAnswer: 1,
  },
  {
    question: "true++",
    options: ["1", "2", "NaN", "SyntaxError"],
    correctAnswer: 3,
  },
  {
    question: "true.true++",
    options: ["2", "undefined", "NaN", "SyntaxError"],
    correctAnswer: 2,
  },
  {
    question: '"" - 1',
    options: ['"1"', '"-1"', "-1", "NaN"],
    correctAnswer: 2,
  },
  {
    question: '(null - 0) + "0"',
    options: ['"null0"', '"00"', "0", "NaN"],
    correctAnswer: 1,
  },
  {
    question: 'true + ("true" - 0)',
    options: ["1", "2", "NaN", "SyntaxError"],
    correctAnswer: 2,
  },
  {
    question: "!5 + !5",
    options: ["0", "10", "25", "NaN"],
    correctAnswer: 0,
  },
  {
    question: "[] + []",
    options: ["[]", "[,]", '""', "NaN"],
    correctAnswer: 2,
  },
  {
    question: "NaN === NaN",
    options: ["true", "false", "TypeError", "SyntaxError"],
    correctAnswer: 1,
  },
  {
    question: '1 + 2 + "3"',
    options: ["6", '"123"', '"33"', "NaN"],
    correctAnswer: 2,
  },
  {
    question: "{0} === {0}",
    options: ["true", "false", "TypeError", "SyntaxError"],
    correctAnswer: 3,
  },
  {
    question: "NaN++",
    options: ["NaN", "undefined", "TypeError", "SyntaxError"],
    correctAnswer: 0,
  },
  {
    question: "typeof NaN",
    options: ['"number"', '"nan"', '"undefined"', '"object"'],
    correctAnswer: 0,
  },
  {
    question: "undefined + false",
    options: ['"undefinedfalse"', "0", "NaN", "SyntaxError"],
    correctAnswer: 2,
  },
  {
    question: "+0 === -0",
    options: ["true", "false", "TypeError", "SyntaxError"],
    correctAnswer: 0,
  },
  {
    question: '"" && -0',
    options: ["true", "false", '""', "-0"],
    correctAnswer: 2,
  },
  {
    question: '+!!NaN * "" - - [,]',
    options: ["0", '"0"', "NaN", "I give up"],
    correctAnswer: 0,
  },
];

createQuiz(data);

function createQuiz(quizData) {
  const quizContainer = document.createElement("form");

  quizData.forEach((obj, objIndex) => {
    const label = document.createElement("label");
    generateTitle(obj.question, label);

    obj.options.forEach((answer) => {
      generateOption(answer, label);
    });

    quizContainer.appendChild(label);
    saveState(label, objIndex);
  });

  document.body.appendChild(quizContainer);
  getStateFromStorage();

  function generateTitle(question, label) {
    const h2 = document.createElement("h2");
    h2.textContent = question;
    label.appendChild(h2);
  }

  function generateOption(answer, label) {
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const wrapper = document.createElement("div");

    checkbox.type = "checkbox";
    span.textContent = answer;

    wrapper.append(...[checkbox, span]);
    label.appendChild(wrapper);
  }

  function saveState(label, index) {
    const checkboxes = label.querySelectorAll("input[type='checkbox']");
    changeState();

    function changeState() {
      checkboxes.forEach((checkbox, checkboxIndex) => {
        checkbox.addEventListener("change", (e) => {
          localStorage.setItem(index, checkboxIndex);
          changeOffOptions(checkboxes, e.target);
          validateInput(checkbox, index, checkboxIndex);
        });
      });

      function changeOffOptions(checkboxes, target) {
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
        target.checked = true;
      }
    }
  }

  function getStateFromStorage() {
    const label = quizContainer.querySelectorAll("label");

    Object.entries(localStorage).forEach(([key, value]) => {
      label[key].querySelectorAll("input[type='checkbox']")[
        value
      ].checked = true;
    });
  }

  function validateInput(target, parentIndex, checkboxIndex) {
    const label = target.closest("label");
    if (quizData[parentIndex].correctAnswer == checkboxIndex) {
      label.style.border = "5px solid " + "green";
    } else {
      label.style.border = "5px solid " + "red";
    }
  }
}

// for (let q = 0; q < NtotalQuestions; q++) {
//   generateHeadQuestions(q);

//   for (let a = 0; a < NtotalQuestions; a++) {
//     generateAnswer(q, a);
//   }

//   function generateAnswer(questionIndex, answerIndex) {
//     const el = generateLabel().label;
//     // const el = document.getElementById(`q${questionIndex}-a${answerIndex}-label`);
//     const text = quizData[`q${questionIndex}`].options[answerIndex];

//     el.textContent = text;
//     saveState(el); // localStorage logic
//   }

//   function generateLabel() {
//     const label = document.createElement("label");
//     const checkbox = document.createElement("input");
//     const span = document.createElement("span");

//     checkbox.type = "checkbox";

//     label.append(...[span, checkbox]);

//     return { label, span, checkbox };
//   }

//   function generateHeadQuestions(questionIndex) {
//     const el = document.getElementById(`q${questionIndex}-q`);
//     const text = quizData[`q${questionIndex}`].question;

//     el.textContent = text;
//   }

//   function saveState(el) {
//     el.addEventListener("change", () => {
//       localStorage.setItem(el, this.checked);
//     });
//   }
// }
