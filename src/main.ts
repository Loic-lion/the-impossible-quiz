const questions = document.querySelectorAll<HTMLElement>(".question");
const resultatDiv = document.getElementById("resultat") as HTMLDivElement;
let currentQuestionIndex = 0;
const answers: string[] = [];
const reponse: any[] = [
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

  if (currentQuestionIndex < questions.length - 1) {
    showQuestion(currentQuestionIndex + 1);
  } else {
    showResult();
  }
}

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
