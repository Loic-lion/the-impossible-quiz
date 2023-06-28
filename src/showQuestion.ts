export function showQuestion(
    questions: HTMLElement[],
    currentQuestionIndex: number,
    index: number
  ): number {
    questions[currentQuestionIndex].style.display = "none";
    questions[index].style.display = "block";
    return index;
  }