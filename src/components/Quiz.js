import Question from "./Question";
import results from "../results";

export default function Quiz() {
  // map over results array creating new questionElements
  const questionElements = results.map((result, index) => {
    return (
      <Question
        question={result.question}
        correctAnswer={result.correct_answer}
        incorrectAnswers={result.incorrect_answers}
        key={index}
        id={index}
      />
    );
  });

  return (
    <form className="quiz__container">
      {questionElements}
      <button className="btn btn__check">Check answers</button>
    </form>
  );
}
