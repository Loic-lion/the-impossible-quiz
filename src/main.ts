const questions = document.querySelectorAll<HTMLElement>(".question");
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

let life: number = 5;
const lifeSection = document.querySelector<HTMLElement>("#score");

for (let i = 1; i < questions.length; i++) {
  questions[i].style.display = "none";
}

function showQuestion(index: number) {
  questions[currentQuestionIndex].style.display = "none";
  questions[index].style.display = "block";
  currentQuestionIndex = index;
}

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
      showQuestion(currentQuestionIndex + 1);
    } else {
      showResult();
    }
  } else {
    if (userAnswer === correctAnswer) {
      if (currentQuestionIndex < questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
      } else {
        showResult();
      }
    } else {
      life--;
      if (lifeSection) {
        lifeSection.textContent = life.toString();
      }

      if (life <= 0) {
        questions[currentQuestionIndex].style.display = "none";
        showResult();
      } else {
        if (currentQuestionIndex < questions.length - 1) {
          showQuestion(currentQuestionIndex + 1);
        } else {
          showResult();
        }
      }
    }
  }
}

function timeLost() {
  let time: number = 10;
  const timeSection = document.querySelector<HTMLElement>("#time");

  if (timeSection) {
    timeSection.innerText = time.toString();
  }

  const timer = setInterval(() => {
    time--;

    if (timeSection) {
      timeSection.innerText = time.toString();
    }

    if (time === 0) {
      life--;
      if (lifeSection) {
        lifeSection.textContent = life.toString();
      }

      if (life <= 0) {
        questions[currentQuestionIndex].style.display = "none";
        showResult();
      }

      clearInterval(timer);
    }
  }, 1000);
}
timeLost();

function showResult() {
  let nameUser: string = answers[0];
  let resultHTML = "<h2>Voici tes résultats " + nameUser + ":</h2>";

  for (let i = 1; i < questions.length; i++) {
    const question = questions[i];
    const answer = answers[i];

    resultHTML += `<p>Question ${i}: ${
      question.querySelector("h2")!.textContent
    }</p>`;
    resultHTML += `<p>Votre réponse : ${answer}. Solution : ${reponse[i]}</p>`;
  }

  resultatDiv.innerHTML = resultHTML;
  resultatDiv.style.display = "block";
  questions[questions.length - 1].style.display = "none";
}

showQuestion(0);

const form = document.querySelectorAll("form");
form.forEach((formElement) => {
  formElement.addEventListener("submit", nextPage);
});

const nextButtons = document.querySelectorAll("#nextButton");
nextButtons.forEach((nextButton) => {
  nextButton.addEventListener("click", nextPage);
});
