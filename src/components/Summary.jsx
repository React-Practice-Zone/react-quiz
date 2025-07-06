import QuizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../interview-questions";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => QUESTIONS[index].answers[0] === answer
  );
  const incorrectAnswers = userAnswers.filter(
    (answer, index) => QUESTIONS[index].answers[0] !== answer
  );

  const skippedAnswersShare = (
    (skippedAnswers.length / userAnswers.length) *
    100
  ).toFixed(2);

  const correctAnswersShare = (
    (correctAnswers.length / userAnswers.length) *
    100
  ).toFixed(2);

  const incorrectAnswersShare = (
    (incorrectAnswers.length / userAnswers.length) *
    100
  ).toFixed(2);

  return (
    <div id="summary">
      <img src={QuizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}</span>
          <span className="text">Correctly answered</span>
        </p>
        <p>
          <span className="number">{incorrectAnswersShare}</span>
          <span className="text">Incorrectly answered</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let userCssStyling = "user-answer";

          answer === null
            ? (userCssStyling += " skipped")
            : answer === QUESTIONS[index].answers[0]
            ? (userCssStyling += " correct")
            : (userCssStyling += " wrong");

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={userCssStyling}>{answer ?? ""}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
