import React, { useContext } from "react";
import { GameStateContext } from "./Helper/GameStateContext";
import { ProgrammingQuestions } from "./Helper/Questions/ProgrammingQuestions";
import { MathQuestions } from "./Helper/Questions/MathQuestions";
import { ScienceQuestions } from "./Helper/Questions/ScienceQuestions";

const Results = () => {
  const { setGameState, score, setScore, userName, SelectedCategory } =
    useContext(GameStateContext);

  // Determine the total number of questions based on the selected category
  let totalQuestions = 0;
  switch (SelectedCategory) {
    case "Programming":
      totalQuestions = ProgrammingQuestions.length;
      break;
    case "Math":
      totalQuestions = MathQuestions.length;
      break;
    case "Science":
      totalQuestions = ScienceQuestions.length;
      break;
    default:
      totalQuestions = 0;
  }

  const handleRestart = () => {
    setScore(0); // Reset the score
    setGameState("Home"); // Return to the home screen
  };

  return (
    <div className="Results">
      <h1>{SelectedCategory} Quiz Finished</h1>
      <h3>{userName ? `Great job, ${userName}!` : "Great job!"}</h3>
      <h1>
        {score} / {totalQuestions}
      </h1>
      <button className="Result-btn" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default Results;
