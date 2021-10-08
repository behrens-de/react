import React from "react";

const Counter = ({ count, id, name, onChangeCounter }) => {
  // Settings des Counters
  const counterSettings = {
    steps: 1,
    min: 0,
    max: 5,
  };
  // Funktion zum hoch zählen
  const incremetCounter = () => {
    count < counterSettings.max &&
      onChangeCounter({ count: (count += counterSettings.steps), id, name });
  };

  // Funktion zum runter zählen
  const decremetCounter = () => {
    count > counterSettings.min &&
      onChangeCounter({ count: (count -= counterSettings.steps), id, name });
  };

  return (
    <div>
      <div className="App">
        <div className="small-counter">
          <h3>{name}</h3>
          <p>{count}</p>
          <button
            className={count <= counterSettings.min && "opacity30"}
            onClick={decremetCounter}
          >
            -
          </button>
          <button
            className={count >= counterSettings.max && "opacity30"}
            onClick={incremetCounter}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
