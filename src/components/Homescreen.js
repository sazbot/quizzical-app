export default function Homescreen(props) {
  return (
    <header className="title__container">
      <h1 className="title">Quizzical</h1>
      <h2 className="subtitle">The quiz for people who don't do quizzes</h2>
      <button className="btn btn__start" onClick={props.startQuiz}>
        Start Quiz
      </button>
    </header>
  );
}
