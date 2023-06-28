import { showQuestion } from "./showQuestion";
import { showResult } from "./showResult";

export function nextPage(
  event: Event,
  questions: HTMLElement[],
  currentQuestionIndex: number,
  answers: string[],
  reponse: string[],
  life: number,
  lifeSection: HTMLElement | null,
  resultatDiv: HTMLElement | null
): void {
  event.preventDefault();

  const button = event.target as HTMLButtonElement;
  button.disabled = true;

  const answerInput = document.getElementById(
    `answer${currentQuestionIndex + 1}`
  ) as HTMLInputElement;
  answers[currentQuestionIndex] = answerInput.value;

  const userAnswer = answerInput.value;
  const correctAnswer = reponse[currentQuestionIndex];

  if (currentQuestionIndex === 0) {
    if (currentQuestionIndex < questions.length - 1) {
      showQuestion(questions, currentQuestionIndex, currentQuestionIndex + 1);
    } else {
      showResult(answers, questions, reponse, resultatDiv);
    }
  } else {
    if (userAnswer === correctAnswer) {
      if (currentQuestionIndex < questions.length - 1) {
        life++;
        showQuestion(questions, currentQuestionIndex, currentQuestionIndex + 1);
      } else {
        showResult(answers, questions, reponse, resultatDiv);
      }
    } else {
      life--;
      if (lifeSection) {
        lifeSection.textContent = life.toString();
      }

      if (life <= 0) {
        questions[currentQuestionIndex].style.display = "none";
        showResult(answers, questions, reponse, resultatDiv);
      } else {
        if (currentQuestionIndex < questions.length - 1) {
          showQuestion(
            questions,
            currentQuestionIndex,
            currentQuestionIndex + 1
          );
        } else {
          showResult(answers, questions, reponse, resultatDiv);
        }
      }
    }
  }
}
