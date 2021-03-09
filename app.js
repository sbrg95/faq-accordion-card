const question_items = document.querySelectorAll('.faq_question');
const flyingCube = document.querySelector('.flying-cube');

question_items.forEach((question) => {
  question.addEventListener('click', (e) => {
    if (e.target === question) {
      const answer = question.nextElementSibling;
      const lastAnswer = document.querySelector('.faq_answer.show_answer');
      if (lastAnswer && lastAnswer !== answer) {
        lastAnswer.classList.remove('show_answer');
        lastAnswer.previousElementSibling.classList.remove('active-question');
        setTimeout(() => {
          toggleAnswer(answer);
        }, 500);
      } else {
        toggleAnswer(answer);
      }
      question.classList.toggle('active-question');
    }
  });

  question.addEventListener('mouseenter', (e) => {
    flyingCube.classList.add('move_cube');
  });

  question.addEventListener('mouseleave', (e) => {
    flyingCube.classList.remove('move_cube');
  });
});

function toggleAnswer(answer) {
  answer.classList.toggle('show_answer');
}
