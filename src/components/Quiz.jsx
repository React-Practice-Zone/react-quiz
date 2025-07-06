import { useState, useCallback, useRef } from "react";

import QUESTIONS from "../interview-questions";
import Question from "./Question";
import Summary from "./Summary";

const QUESTION_TIMER = 30_000;

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex >= QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  return quizIsComplete ? (
    <Summary userAnswers={userAnswers} />
  ) : (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        questionTimer={QUESTION_TIMER}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
