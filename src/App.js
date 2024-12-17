// import "./styles.css";
// import Quiz from "./components/Quiz";
// import Home from "./components/Home";
// import Results from "./components/Results";
// import { GameStateContext } from "./components/Helper/GameStateContext";
// import { useState, useContext } from "react";
// export default function App() {
//   const [gameState, setGameState] = useState("Home");
//   const [score, setScore] = useState(0);
//   const [userName, setUserName] = useState("");
//   const [SelectedCategory, setSelectedCategory] = useState("");

//   return (
//     <div className="App">
//       <GameStateContext.Provider
//         value={{
//           gameState,
//           setGameState,
//           score,
//           setScore,
//           userName,
//           setUserName,
//           SelectedCategory,
//           setSelectedCategory,
//         }}
//       >
//         {gameState == "Home" && <Home />}
//         {gameState == "Quiz" && <Quiz />}
//         {gameState == "Results" && <Results />}
//       </GameStateContext.Provider>
//     </div>
//   );
// }

import "./styles.css";
import Quiz from "./components/Quiz";
import Home from "./components/Home";
import Results from "./components/Results";
import Category from "./components/Category";
import { GameStateContext } from "./components/Helper/GameStateContext";
import { useState } from "react";

export default function App() {
  const [gameState, setGameState] = useState("Home");
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState("");
  const [SelectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="App">
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
          userName,
          setUserName,
          SelectedCategory,
          setSelectedCategory,
        }}
      >
        {gameState === "Home" && <Home />}
        {gameState === "Category" && <Category />}
        {gameState === "Quiz" && <Quiz />}
        {gameState === "Results" && <Results />}
      </GameStateContext.Provider>
    </div>
  );
}
