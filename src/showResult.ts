export function showResult(
    answers: string[],
    questions: HTMLElement[],
    reponse: string[],
    resultatDiv: HTMLElement | null
  ): void {
    let nameUser = answers[0];
    let resultHTML = `<h2>Voici tes résultats ${nameUser} :</h2>`;
  
    for (let i = 1; i < questions.length; i++) {
      const question = questions[i];
      const answer = answers[i];
  
      resultHTML += `<p>Question ${i}: ${
        question.querySelector("h2")!.textContent
      }</p>`;
      resultHTML += `<p>Votre réponse : ${answer}. Solution : ${reponse[i]}</p>`;
    }
  
    if (resultatDiv) {
      resultatDiv.innerHTML = resultHTML;
      resultatDiv.style.display = "block";
      questions[questions.length - 1].style.display = "none";
    }
  }