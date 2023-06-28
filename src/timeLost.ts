export function timeLost(
  life: number,
  lifeSection: HTMLElement | null,
  questions: HTMLElement[],
  currentQuestionIndex: number,
  showResult: () => void
): void {
  let time = 10;
  let timer: number | undefined;
  const timeSection = document.querySelector<HTMLElement>("#time");

  const startTimer = () => {
    time = 10;
    if (timeSection) {
      timeSection.innerText = time.toString();
    }
    timer = setInterval(() => {
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
  };

  const resetTimer = () => {
    clearInterval(timer);
    startTimer();
  };

  startTimer();

  const form = document.querySelectorAll("form");
  form.forEach((formElement) => {
    formElement.addEventListener("submit", resetTimer);
  });

  const nextButtons = document.querySelectorAll("#nextButton");
  nextButtons.forEach((nextButton) => {
    nextButton.addEventListener("click", resetTimer);
  });
}
