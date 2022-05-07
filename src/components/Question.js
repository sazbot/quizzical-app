export default function Question(props) {
  //   create answers array of objects {answer: text, correct: false}
  const answers = props.incorrectAnswers.map((answer) => {
    return { answer: answer, correct: false };
  });

  //   push correct answer into answers array
  answers.push({ answer: props.correctAnswer, correct: true });

  //   randomise array
  for (let i = answers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = answers[i];
    answers[i] = answers[j];
    answers[j] = k;
  }

  //   destructure answers array
  const [answer1, answer2, answer3, answer4] = answers;

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
