import React, { useState, useEffect, useContext } from "react";
import { ProgrammingQuestions } from "./Helper/Questions/ProgrammingQuestions";
import { MathQuestions } from "./Helper/Questions/MathQuestions";
import { ScienceQuestions } from "./Helper/Questions/ScienceQuestions";
import { GameStateContext } from "./Helper/GameStateContext";

const Quiz = () => {
  const { setGameState, score, setScore, SelectedCategory } =
    useContext(GameStateContext);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, SetcurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [timer, setTimer] = useState(15); // Timer for each question

  const [questionStatus, setQuestionStatus] = useState([]);

  useEffect(() => {
    let categoryQuestions;
    switch (SelectedCategory) {
      case "Programming":
        categoryQuestions = ProgrammingQuestions;
        break;
      case "Math":
        categoryQuestions = MathQuestions;
        break;
      case "Science":
        categoryQuestions = ScienceQuestions;
        break;
      default:
        categoryQuestions = [];
    }
    setQuestions(categoryQuestions);
    setQuestionStatus(Array(categoryQuestions.length).fill("unAnswered"));
  }, [SelectedCategory]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      nextQuestion();
    }
  }, [timer]);

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      SetcurrentQuestion(currentQuestion - 1);
      setTimer(15);
    } else {
      ("");
    }
  };
  const nextQuestion = () => {
    const updatedStatus = [...questionStatus];
    if (optionChosen == "") {
      updatedStatus[currentQuestion] = "unAnswered";
    } else if (questions[currentQuestion].answer === optionChosen) {
      updatedStatus[currentQuestion] = "Answered";
      setScore(score + 1);
    } else {
      updatedStatus[currentQuestion] = "Answered";
    }
    setQuestionStatus(updatedStatus);
    setOptionChosen("");
    if (currentQuestion < questions.length - 1) {
      SetcurrentQuestion(currentQuestion + 1);
      setTimer(15); // Reset timer
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    if (questions[currentQuestion]?.answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("Results");
  };

  const HandleJumpIndex = (index) => {
    const updatedStatus = [...questionStatus];
    if (optionChosen == "") {
      updatedStatus[currentQuestion] = "unAnswered";
    } else {
      updatedStatus[currentQuestion] = "Answered";
    }
    setQuestionStatus(updatedStatus);
    SetcurrentQuestion(index);
    setTimer(15);
  };
  const progress = (currentQuestion / questions.length) * 100;

  // === Prevent Copying (a) and Keyboard Shortcuts (b) ===
  useEffect(() => {
    const handleKeydown = (e) => {
      // Disable Ctrl+C, Ctrl+V, Ctrl+S, F12, etc.
      if (
        e.ctrlKey &&
        ["c", "v", "s", "u"].includes(e.key.toLowerCase()) // Ctrl+U (view source)
      ) {
        e.preventDefault();
      }
      if (e.key === "F12") {
        e.preventDefault();
      }
    };

    const handleContextMenu = (e) => e.preventDefault(); // Disable right-click

    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  // // === Full-Screen Mode (d) ===
  // useEffect(() => {
  //   const enableFullScreen = () => {
  //     if (document.documentElement.requestFullscreen) {
  //       document.documentElement.requestFullscreen();
  //     }
  //   };
  //   enableFullScreen();
  // }, []);

  // === Monitor Focus (e) ===
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        alert("You left the quiz! Your activity has been recorded.");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="Quiz">
      <div className="question-navigator">
        {questions.map((status, index) => (
          <div
            key={index}
            className={`question-box ${
              index === currentQuestion ? "current" : questionStatus[index]
            }`}
            onClick={() => HandleJumpIndex(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="question-container">
        <h1>
          {currentQuestion + 1}. {questions[currentQuestion]?.prompt}
        </h1>
        <h3 className={timer <= 10 ? "timer-red" : ""}>Timer: {timer}s</h3>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="questions">
          <button
            className={optionChosen === "optionA" ? "selected" : ""}
            onClick={() => setOptionChosen("optionA")}
          >
            {questions[currentQuestion]?.optionA}
          </button>
          <button
            className={optionChosen === "optionB" ? "selected" : ""}
            onClick={() => setOptionChosen("optionB")}
          >
            {questions[currentQuestion]?.optionB}
          </button>
          <button
            className={optionChosen === "optionC" ? "selected" : ""}
            onClick={() => setOptionChosen("optionC")}
          >
            {questions[currentQuestion]?.optionC}
          </button>
          <button
            className={optionChosen === "optionD" ? "selected" : ""}
            onClick={() => setOptionChosen("optionD")}
          >
            {questions[currentQuestion]?.optionD}
          </button>
        </div>
        <div className="Move-btns">
          {currentQuestion === 0 ? (
            ""
          ) : (
            <button onClick={prevQuestion} id="nextQuestion">
              Prev
            </button>
          )}
          {currentQuestion === questions.length - 1 ? (
            <button onClick={finishQuiz} id="nextQuestion">
              Finish
            </button>
          ) : (
            <button onClick={nextQuestion} id="nextQuestion">
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
