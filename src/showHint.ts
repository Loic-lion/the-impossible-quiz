export function showHint(currentQuestionIndex: number) {
  const Indices: string[] = [
    "",
    "On lui doit aussi l'Homme de Vitruve",
    "entre 6 et 10",
    "Sa véritable identité est Eric Arthur Blair",
    "C'est un territoire danois autonome situé entre l'Atlantique Nord et l'océan Arctique",
    "Il traverse l'Egypte",
    "Il s'y déroule chaque année le Festival canadien des tulipes",
    "Il a été frappé par la surdité à l'âge de 27 ans",
    "C'est le 9 novembre... Plus qu'à trouver l'année !",
    "Il a aussi écrit Hamlet",
    "Montagne située dans la chaîne de l'Himalaya",
  ];

  const existingHintButton = document.querySelector<HTMLElement>("#hintButton");
  const existingHintDiv = document.querySelector<HTMLElement>("#hint");

  if (existingHintButton && existingHintButton.parentNode) {
    existingHintButton.parentNode.removeChild(existingHintButton);
  }

  if (existingHintDiv && existingHintDiv.parentNode) {
    existingHintDiv.parentNode.removeChild(existingHintDiv);
  }

  if (currentQuestionIndex > 0 && currentQuestionIndex < Indices.length) {
    const hintButton = document.createElement("button");
    hintButton.id = "hintButton";
    hintButton.textContent = "Indice";
    const footer = document.querySelector<HTMLElement>("footer");

    if (footer) {
      footer.appendChild(hintButton);
    }

    hintButton.addEventListener("click", () => {
      const hintIndex = currentQuestionIndex;
      const hint = Indices[hintIndex];
      const hintDiv = document.createElement("div");
      hintDiv.id = "hint";
      hintDiv.className = "fade-in";
      const mainDiv = document.querySelector<HTMLElement>("main");
      hintDiv.textContent = hint;

      if (mainDiv) {
        mainDiv.appendChild(hintDiv);
      }

      if (hintButton.parentNode) {
        hintButton.parentNode.removeChild(hintButton);
      }
    });
  }
}
