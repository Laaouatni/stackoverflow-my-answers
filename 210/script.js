const questions = document.querySelectorAll(".btn2");
const answers = document.querySelectorAll(".answer");
const schools = document.querySelectorAll(".btn3");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const et = e.target;
    const activeBtn = document.querySelector(".active");
    if (activeBtn) {
      activeBtn.classList.remove("active");
    }
    et.classList.add("active");

    answers.forEach((answer) => {
      if (
        answer.getAttribute("data-number") ===
        question.getAttribute("data-number")
      ) {
        answer.style.display = "block";
      } else {
        answer.style.display = "none";
      }
    })
  });
});

/*************************Browse Courses**********************/

schools.forEach((school) => {
  // not data-id
  let test = school.getAttribute("data-number");
  console.log(test);
})
