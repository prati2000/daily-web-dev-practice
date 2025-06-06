import Accordion from "./components/accordian";
import RandomColor from "./components/random-color";
import { useEffect, useState, useRef, Suspense, useMemo } from "react";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* <Accordion />
      <RandomColor /> */}
      <StarRating num={10} />
    </div>
  );
}

export default App;
