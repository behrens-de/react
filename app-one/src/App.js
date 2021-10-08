import './App.css';
import React, { useState, useEffect } from "react"
//import Greets from './Greets';
import Counter from './Counter';


function App() {
  // USE STAE - React Hook
  // [state, setState] = useState(initialState)
  const [counter, setCounter] = useState(8);

  // Settings des Counters
  const counterSettings = {
    steps: 2,
    min: 2,
    max: 2
  }

  // Funtion um den Couter hoch zu zählen 
  const incremetCounter = () => {
    setCounter(prevCounter =>
      prevCounter < counterSettings.max ?
        prevCounter += counterSettings.steps : prevCounter
    )
  };
  // Funtion um den Couter runter zu zählen 
  const decremetCounter = () => {
    setCounter(prevCounter =>
      prevCounter > counterSettings.min ?
        prevCounter -= counterSettings.steps : prevCounter
    )
  };

  // USE Effect - React Hook
  useEffect(() => {
    //effect
    const interval = setInterval(() => {
      incremetCounter();
    }, 23500)
    return () => {
      //cleanup wenn man die die funtion nicht mehr nutzt kommt der Cleanup der dann den effevct unmounted
      clearInterval(interval)
    }
  }, []);

  return (
    <>
      <Counter
        counter={counter}
        incremetCounter={incremetCounter}
        decremetCounter={decremetCounter}
        settings={counterSettings}
      />
      <Counter
        counter={counter}
        incremetCounter={incremetCounter}
        decremetCounter={decremetCounter}
        settings={counterSettings}
      />
    </>
  );
}

export default App;
