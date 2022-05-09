import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function Quiz() {
  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        let questions = restructureData(data.results);
        setQuestions(questions);
      });
  }, []);

  // set questions in state
  const [questions, setQuestions] = React.useState([]);

  function restructureData(results) {
    // map results to new question array
    let questionsArray = results.map((result, index) => {
      return {
        question: result.question,
        questionID: index,
        answersArray: [
          {
            questionID: index,
            answerID: nanoid(),
            answer: result.correct_answer,
            isCorrect: true,
            isSelected: false,
          },
          {
            questionID: index,
            answerID: nanoid(),
            answer: result.incorrect_answers[0],
            isCorrect: false,
            isSelected: false,
          },
          {
            questionID: index,
            answerID: nanoid(),
            answer: result.incorrect_answers[1],
            isCorrect: false,
            isSelected: false,
          },
          {
            questionID: index,
            answerID: nanoid(),
            answer: result.incorrect_answers[2],
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

    return questionsArray;
  }

  // map over results array creating new questionElements
  const questionElements = questions.map((question, index) => {
    return (
      <Question
        question={question.question}
        questionID={index}
        key={index}
        answers={question.answersArray}
        handleChange={selectAnswer}
      />
    );
  });

  function selectAnswer(event) {
    const { name, value, type, checked } = event.target;
    console.log(name, value);

    // setQuestions((prevQuestions) => {
    //   return prevQuestions.map((question) => {
    //     return question.answersArray.map((answer) => {
    //       if (answer.questionID === name && answer.answerID === value) {
    //         return {
    //           ...answer,
    //           isSelected: true,
    //         };
    //       } else {
    //         return answer;
    //       }
    //     });
    //   });
    // });
  }

  return (
    <form className="quiz__container">
      {questionElements}
      <button className="btn btn__check">Check answers</button>
    </form>
  );
}
