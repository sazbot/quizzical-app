import React from "react";

export default function Question(props) {
  //   destructure answers array
  const [answer1, answer2, answer3, answer4] = props.answers;

  return (
    <div className="question__container">
      <p className="question__title">{props.question}</p>
      <div className="answers__container">
        <input
          type="radio"
          id={answer1.answer}
          name={answer1.questionID}
          value="0"
          onChange={props.handleChange}
        />
        <label htmlFor={answer1.answer}>{answer1.answer}</label>
        <input
          type="radio"
          id={answer2.answer}
          name={answer2.questionID}
          value="1"
          onChange={props.handleChange}
        />
        <label htmlFor={answer2.answer}>{answer2.answer}</label>
        <input
          type="radio"
          id={answer3.answer}
          name={answer3.questionID}
          value="2"
          onChange={props.handleChange}
        />
        <label htmlFor={answer3.answer}>{answer3.answer}</label>
        <input
          type="radio"
          id={answer4.answer}
          name={answer4.questionID}
          value="3"
          onChange={props.handleChange}
        />
        <label htmlFor={answer4.answer}>{answer4.answer}</label>
      </div>
    </div>
  );
}
