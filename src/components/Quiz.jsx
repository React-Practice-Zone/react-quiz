import { useState, useCallback, useRef } from "react";

import QuizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../interview-questions";
import Question from "./Question";

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
    <div id="summary">
      <img src={QuizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
    </div>
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
