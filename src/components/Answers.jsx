import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelectAnswer,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    const shuffled = [...answers];
    shuffled.sort(() => Math.random() - 0.5);
    shuffledAnswers.current = shuffled;
  }

  if (
    shuffledAnswers.current.length !== answers.length ||
    !shuffledAnswers.current.every((answer) => answers.includes(answer))
  ) {
    const shuffled = [...answers];
    shuffled.sort(() => Math.random() - 0.5);
    shuffledAnswers.current = shuffled;
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;

        let cssStyling = "";

        if (answerState === "answered" && isSelected) cssStyling = "selected";

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssStyling = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              className={cssStyling}
              onClick={() => onSelectAnswer(answer)}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
