import Question from "./Question";

export default function Quiz() {
  return (
    <form className="quiz__container">
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <button className="btn btn__check">Check answers</button>
    </form>
  );
}
