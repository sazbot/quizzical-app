import React from "react";
import Question from "./Question";
import results from "../results";
import { nanoid } from "nanoid";

export default function Quiz() {
  // map results to new question array
  let questionsArray = results.map((result, index) => {
    return {
      question: result.question,
      questionID: index,
      answersArray: [
        {
          answer: result.correct_answer,
          answerID: nanoid(),
          isCorrect: true,
          isSelected: false,
        },
        {
          answer: result.incorrect_answers[0],
          answerID: nanoid(),
          isCorrect: false,
          isSelected: false,
        },
        {
          answer: result.incorrect_answers[1],
          answerID: nanoid(),
          isCorrect: false,
          isSelected: false,
        },
        {
          answer: result.incorrect_answers[2],
          answerID: nanoid(),
          isCorrect: false,
          isSelected: false,
        },
      ],
    };
  });

  // for each question, shuffle answersArray
  questionsArray = questionsArray.map((question) => {
    let shuffledArray = question.answersArray;

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let k = shuffledArray[i];
      shuffledArray[i] = shuffledArray[j];
      shuffledArray[j] = k;
    }

    return {
      ...question,
      answersArray: shuffledArray,
    };
  });

  // set questionsArray in state
  const [questions, setQuestions] = React.useState(questionsArray);

  // map over questions creating question elements
  const questionElements = questions.map((question) => {
    return (
      <Question
        question={question.question}
        key={question.questionID}
        id={question.questionID}
        answers={question.answersArray}
      />
    );
  });

  // create 'selectAnswer' function to send to each question (with answer id as parameter). Function should update array of questions objects held in state (update 'isSelected' property to true)

  return (
    <form className="quiz__container">
      {questionElements}
      <button className="btn btn__check">Check answers</button>
    </form>
  );
}
