// import React, { useContext } from "react";
// import { GameStateContext } from "./Helper/GameStateContext";

// const Category = () => {
//   const { setGameState, setSelectedCategory } = useContext(GameStateContext);
//   const categories = ["Programming", "Math", "Science"];

//   return (
//     <div className="Category">
//       <h1 className="Category-heading">Select one Category</h1>
//       <div className="Category-options">
//         {categories.map((category) => {
//           return (
//             <button
//               key={category}
//               onClick={() => {
//                 setSelectedCategory(category);
//                 setGameState("Quiz");
//               }}
//             >
//               {category}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Category;

import React, { useContext } from "react";
import { GameStateContext } from "./Helper/GameStateContext";

const Category = () => {
  const { setGameState, setSelectedCategory } = useContext(GameStateContext);
  const categories = ["Programming", "Math", "Science"];

  return (
    <div className="Category">
      <h1 className="Category-heading">Select a Category</h1>
      <div className="Category-options">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setGameState("Quiz");
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
