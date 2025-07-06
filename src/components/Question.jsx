import { useState } from "react";

import QUESTIONS from "../interview-questions";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Question({
  index,
  questionTimer,
  onSelectAnswer,
  onSkipAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let answerState = "";
  let timer = 30_000;

  function handleSelectAnswer(selectedAnswer) {
    setAnswer({
      selectedAnswer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer((prev) => ({
        ...prev,
        isCorrect: QUESTIONS[index].answers[0] === selectedAnswer,
      }));

      setTimeout(() => {
        onSelectAnswer(selectedAnswer);
      }, 2000);
    }, 500);
  }

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  answer.selectedAnswer ? (timer = 1000) : (timer = 2000);

  return (
    <div id="question">
      <QuestionTimer
        // key={timer}
        timeout={questionTimer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
