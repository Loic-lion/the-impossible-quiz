import { showQuestion } from "./showQuestion";
import { showResult } from "./showResult";
import { timeLost } from "./timeLost";
import { showHint } from "./showHint";

const questions = Array.from(
  document.querySelectorAll<HTMLElement>(".question")
);
const resultatDiv = document.getElementById("resultat") as HTMLDivElement;
let currentQuestionIndex: number = 0;
const answers: string[] = [];
const reponse: string[] = [
  "name",
  "Léonard de Vinci",
  "8",
  "George Orwell",
  "Groenland",
  "Le Nil",
  "Ottawa",
  "Ludwig van Beethoven",
  "1989-11-09",
  "William Shakespeare",
  "L'Everest",
];

let life: number = 3;
const lifeSection = document.querySelector<HTMLElement>("#score");

for (let i = 1; i < questions.length; i++) {
  questions[i].style.display = "none";
}

showQuestion(questions, currentQuestionIndex, 0);

function nextPage(event: Event) {
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
      currentQuestionIndex = showQuestion(
        questions,
        currentQuestionIndex,
        currentQuestionIndex + 1
      );
      showHint(currentQuestionIndex);
    } else {
      showResult(answers, questions, reponse, resultatDiv);
    }
  } else {
    if (userAnswer === correctAnswer) {
      life++;
      if (lifeSection) {
        lifeSection.textContent = life.toString();
      }
    } else {
      if (life <= 0) {
        questions[currentQuestionIndex].style.display = "none";
        showResult(answers, questions, reponse, resultatDiv);
        return;
      }

      life--;
      if (lifeSection) {
        lifeSection.textContent = life.toString();
      }
    }

    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex = showQuestion(
        questions,
        currentQuestionIndex,
        currentQuestionIndex + 1
      );
      showHint(currentQuestionIndex);
    } else {
      showResult(answers, questions, reponse, resultatDiv);
    }
  }

  if (life <= 0) {
    questions[currentQuestionIndex].style.display = "none";
    showResult(answers, questions, reponse, resultatDiv);
    return;
  }

  const timeSection = document.querySelector<HTMLElement>("#time");
  if (timeSection && parseInt(timeSection.innerText) <= 0) {
    life--;
    if (lifeSection) {
      lifeSection.textContent = life.toString();
    }
    if (life <= 0) {
      questions[currentQuestionIndex].style.display = "none";
      showResult(answers, questions, reponse, resultatDiv);
      return;
    }
  }
  console.log(currentQuestionIndex);
  timeLost(life, lifeSection, questions, currentQuestionIndex, () =>
    showResult(answers, questions, reponse, resultatDiv)
  );
}

showQuestion(questions, currentQuestionIndex, 0);

const form = document.querySelectorAll("form");
form.forEach((formElement) => {
  formElement.addEventListener("submit", nextPage);
});

const nextButtons = document.querySelectorAll("#nextButton");
nextButtons.forEach((nextButton) => {
  nextButton.addEventListener("click", nextPage);
});
