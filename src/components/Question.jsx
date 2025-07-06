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

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer timeout={questionTimer} onTimeout={onSkipAnswer} />
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
