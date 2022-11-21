import React from "react";
import anime from "animejs/lib/anime.es.js";
import { BudStage } from "./components/bud";

import Navbar from "./components/Navbar";
import Routes from "./Routes";

/// counter ///
let timeCounter = 2;

function App() {
  if (timeCounter > 0 && timeCounter < 1) {
    return (
      <div className="bud_bounce">
        <BudStage />
      </div>
    );
  } else if (timeCounter > 1) {
    return <div className="test">meow!!!!</div>;
  }
}

export default App;

/*
function App() {
  const animationRef = React.useRef(null);
  React.useEffect(() => {
    animationRef.current = anime({
      targets: ".bud_bounce",
      // Properties
      borderRadius: 50,
      // Property Parameters
      duration: 2000,
      // Animation Parameters
      scaleY: [
        { value: 0.9, duration: 170, delay: 170 },
        { value: 1.1, duration: 170, delay: 120 },
        { value: 1, duration: 170 },
      ],
      scaleX: [
        { value: 1.1, duration: 170, delay: 170 },
        { value: 0.9, duration: 170, delay: 120 },
        { value: 1, duration: 170 },
      ],
      translateY: [
        { value: -20, duration: 170 },
        { value: 0, duration: 170, delay: 120 },
      ],

      loop: true,
      easing: "easeInOutElastic(1, 0.2)",
      // scale: 1.01,
    });
  });
  return (
    <div className="bud_bounce">
      <img src="bud_bounce.svg" alt="bud bounce" />
    </div>
  );
}
*/
