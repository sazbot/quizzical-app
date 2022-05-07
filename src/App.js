import React from "react";
import Homescreen from "./components/Homescreen";
import Quiz from "./components/Quiz";

function App() {
  // create quizStarted state, default to false
  const [quizStarted, setQuizStarted] = React.useState(false);

  //pass down startQuiz function to Homescreen
  function startQuiz() {
    setQuizStarted((prev) => !prev);
  }

  return (
    <div className="page__content">
      {quizStarted ? <Quiz /> : <Homescreen startQuiz={startQuiz} />}
    </div>
  );
}

export default App;
