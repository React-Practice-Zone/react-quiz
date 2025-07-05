import { useState, useCallback } from "react";

import QuizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../interview-questions";
import QuestionTimer from "./QuestionTimer";

const QUESTION_TIMER = 30_000;

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex >= QUESTIONS.length;

  const shuffledAnswers = !quizIsComplete
    ? (() => {
        const answers = [...QUESTIONS[activeQuestionIndex].answers];
        answers.sort(() => Math.random() - 0.5);
        return answers;
      })()
    : [];

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setAnswerState("answered");

      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

      setTimeout(() => {
        selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]
          ? setAnswerState("correct")
          : setAnswerState("wrong");

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  return quizIsComplete ? (
    <div id="summary">
      <img src={QuizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
    </div>
  ) : (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={QUESTION_TIMER}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;

            let cssStyling = "";

            if (answerState === "answered" && isSelected)
              cssStyling = "selected";

            (answerState === "correct" || answerState === "wrong") && isSelected ? cssStyling = answerState

            return (
              <li key={answer} className="answer">
                <button
                  className={"1"}
                  onClick={() => handleSelectAnswer(answer)}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
