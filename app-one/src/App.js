import React, { useState } from "react"
//import Greets from './Greets';
import Counter from './Counter';


function App() {

  const [counterList, setcounterList] = useState([
    { id: 1, name: 'Counter A', count: 1 },
    { id: 2, name: 'Counter B', count: 2 },
    { id: 3, name: 'Counter C', count: 4 },
    { id: 4, name: 'Counter D', count: 8 }
  ]);


  const handelCounterChange = (counter) => {
    setcounterList(prevCounterList => prevCounterList.map(c => {
      console.log('Counter:', counter);
      console.log('C:', c);
      if (c.id === counter.id) return counter;
      return c;
    }))
  }

  const cointerList = counterList.map(counter => (
    <Counter
      key={counter.id}
      name={counter.name}
      count={counter.count}
      id={counter.id}
      onChangeCounter={handelCounterChange}
    />
  ));

  return (
    <>
      <h1>Counter Liste</h1>
      {cointerList}
    </>
  )
}

export default App;
