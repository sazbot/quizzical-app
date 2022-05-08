import React from "react";
import { nanoid } from "nanoid";

export default function Question(props) {
  //   create answers array of objects {answer: text, correct: false}
  const answers = props.incorrectAnswers.map((answer) => {
    return {
      questionID: props.questionID,
      answer: answer,
      answerID: nanoid(),
      isCorrect: false,
      isSelected: false,
      answerSelected: "",
    };
  });

  //   push correct answer into answers array
  answers.push({
    questionID: props.questionID,
    answer: props.correctAnswer,
    answerID: nanoid(),
    isCorrect: true,
    isSelected: false,
    answerSelected: "",
  });

  //   randomise array
  for (let i = answers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = answers[i];
    answers[i] = answers[j];
    answers[j] = k;
  }

  // set answers array in state
  const [answersArray, setAnswersArray] = React.useState(answers);

  // //   destructure answers array
  const [answer1, answer2, answer3, answer4] = answers;

  return (
    <div className="question__container">
      <p className="question__title">{props.question}</p>
      <div className="answers__container">
        <input
          type="radio"
          id={answer1.answer}
          name={answer1.questionID}
          value={answer1.answerID}
          onChange={props.handleChange}
        />
        <label htmlFor={answer1.answer}>{answer1.answer}</label>
        <input
          type="radio"
          id={answer2.answer}
          name={answer2.questionID}
          value={answer2.answerID}
          onChange={props.handleChange}
        />
        <label htmlFor={answer2.answer}>{answer2.answer}</label>
        <input
          type="radio"
          id={answer3.answer}
          name={answer3.questionID}
          value={answer3.answerID}
          onChange={props.handleChange}
        />
        <label htmlFor={answer3.answer}>{answer3.answer}</label>
        <input
          type="radio"
          id={answer4.answer}
          name={answer4.questionID}
          value={answer4.answerID}
          onChange={props.handleChange}
        />
        <label htmlFor={answer4.answer}>{answer4.answer}</label>
      </div>
    </div>
  );
}
