// import React from "react";
// import { useState, useContext } from "react";
// import { GameStateContext } from "./Helper/GameStateContext";
// import "./components.css";

// const Home = () => {
//   const { gameState, setGameState, userName, setUserName } =
//     useContext(GameStateContext);

//   return (
//     <div className="Home">
//       <h1>Quiz App</h1>
//       <div class="form-group">
//         <span>Name</span>
//         <input
//           type="text"
//           onChange={(e) => setUserName(e.target.value)}
//           className="form-field"
//           placeholder="Enter your Name"
//         />
//       </div>
//       <button className="start-btn" onClick={() => setGameState("Quiz")}>
//         Start The Quiz
//       </button>
//     </div>
//   );
// };

// export default Home;

import React, { useContext } from "react";
import { GameStateContext } from "./Helper/GameStateContext";
import "./components.css";

const Home = () => {
  const { setGameState, userName, setUserName } = useContext(GameStateContext);

  return (
    <div className="Home">
      <h1>Quiz App</h1>
      <div className="form-group">
        <span>Name</span>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          className="form-field"
          placeholder="Enter your Name"
        />
      </div>
      <button className="start-btn" onClick={() => setGameState("Category")}>
        Select Category
      </button>
    </div>
  );
};

export default Home;
