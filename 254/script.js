const TOTAL_QUESTIONS = 4; // just increment this number, automatically work without changing any other code!
createQuiz(TOTAL_QUESTIONS);

function createQuiz(NtotalQuestions) {
  const quizData = JSON.parse(kviz).quiz;

  for (let q = 0; q < NtotalQuestions; q++) {
    generateHeadQuestions(q);

    for (let a = 0; a < NtotalQuestions; a++) {
      generateAnswer(q, a);
    }

    function generateAnswer(questionIndex, answerIndex) {
      const el = document.getElementById(`q${questionIndex}-a${answerIndex}-label`);
      const text = quizData[`q${questionIndex}`].options[answerIndex];

      el.textContent = text;
      saveState(el); // localStorage logic
    }

    function generateHeadQuestions(questionIndex) {
      const el = document.getElementById(`q${questionIndex}-q`);
      const text = quizData[`q${questionIndex}`].question;

      el.textContent = text;
    }

    function saveState(el) {
      el.addEventListener("change", () => {
        localStorage.setItem(el, this.checked);
      });
    }
  }
}