import React from "react";
import Question from "./Question";
import results from "../results";

export default function Quiz() {
  // map results to new question array
  let questionArray = results.map((result, index) => {
    return {
      question: result.question,
      questionID: index,
      questionCorrect: false,
    };
  });

  // set questions in state
  const [questions, setQuestions] = React.useState(questionArray);

  // map over results array creating new questionElements
  const questionElements = results.map((result, index) => {
    return (
      <Question
        question={result.question}
        correctAnswer={result.correct_answer}
        incorrectAnswers={result.incorrect_answers}
        key={index}
        questionID={index}
        handleChange={selectAnswer}
      />
    );
  });

  // create handleChange function to update isSelected value set in state
  function selectAnswer(event) {
    const { name, value, type, checked } = event.target;
    console.log(name, value, type, checked);
    // setAnswersArray(prevAnswers => {
    // if ()
    //     return {
    //         ...prevAnswers,
    //         [name]: type === "checkbox" ? checked : value
    //     }
    // })
  }

  // create checkAnswer function to update questionCorrect value set in state

  return (
    <form className="quiz__container">
      {questionElements}
      <button className="btn btn__check">Check answers</button>
    </form>
  );
}
