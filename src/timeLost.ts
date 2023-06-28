export function timeLost(
    life: number,
    lifeSection: HTMLElement | null,
    questions: HTMLElement[],
    currentQuestionIndex: number,
    showResult: () => void
  ): void {
    let time = 10;
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