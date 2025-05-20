import Accordion from "./components/accordian";
// import RandomColor from "./components/random-color";
import { useEffect, useState, useRef, Suspense } from "react";

function App() {
  const input = useRef();

  const btnClicked = () => {
    console.log(input.current);
    input.current.focus();
  };
  return (
    <div className="App">
      {/* Accordion */}
      {/* <Accordion /> */}

      {/* Random Color Generator */}
      {/* <RandomColor /> */}
      <input type="text" ref={input} />
      <button onClick={btnClicked}>Click Me</button>
    </div>
  );
}

export default App;
