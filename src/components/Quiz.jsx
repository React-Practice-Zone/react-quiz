import { useState, useCallback } from "react";

import QuizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../interview-questions";
import QuestionTimer from "./QuestionTimer";

const QUESTION_TIMER = 15_000;

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex >= QUESTIONS.length;

  const shuffledAnswers = !quizIsComplete
    ? (() => {
        const answers = [...QUESTIONS[activeQuestionIndex].answers];
        answers.sort(() => Math.random() - 0.5);
        return answers;
      })()
    : [];

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
      <div id="question">
        <QuestionTimer timeout={QUESTION_TIMER} onTimeout={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
