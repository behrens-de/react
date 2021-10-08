import React from "react";

const Counter = ({ counter, decremetCounter, incremetCounter,settings }) => {

return (
    <div>
      <div className="App">
        <div className="small-counter">
          <h3>Counter</h3>
          <p>{counter}</p>
          <button className={counter<=settings.min ? 'opacity30':''} onClick={decremetCounter}>-</button>
          <button className={counter>=settings.max ? 'opacity30':''}  onClick={incremetCounter}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
