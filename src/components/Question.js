export default function Question(props) {
  //   destructure answers array
  const [answer1, answer2, answer3, answer4] = props.answers;
  console.log(answer1);

  return (
    <div className="question__container">
      <p className="question__title">{props.question}</p>
      <div className="answers__container">
        <input type="radio" id={answer1.answer} name={props.id} />
        <label htmlFor={answer1.answer}>{answer1.answer}</label>
        <input type="radio" id={answer2.answer} name={props.id} />
        <label htmlFor={answer2.answer}>{answer2.answer}</label>
        <input type="radio" id={answer3.answer} name={props.id} />
        <label htmlFor={answer3.answer}>{answer3.answer}</label>
        <input type="radio" id={answer4.answer} name={props.id} />
        <label htmlFor={answer4.answer}>{answer4.answer}</label>
      </div>
    </div>
  );
}
