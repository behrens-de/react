import React, { useState } from "react"
import Counter from './Counter';


function CounterList() {

  const [counterList, setcounterList] = useState([
    { id: 1, name: 'Counter A', count: 1 },
    { id: 2, name: 'Counter B', count: 2 },
    { id: 3, name: 'Counter C', count: 3 },
    { id: 4, name: 'Counter D', count: 4 },
    { id: 5, name: 'Counter E', count: 2 }
  ]);


  const handelCounterChange = (counter) => {
    setcounterList(prevCounterList => prevCounterList.map(c => {
      if (c.id === counter.id) return counter;
      return c;
    }))
  }

  const counterListMap = counterList.map(counter => (
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
      {counterListMap}
    </>
  )
}

export default CounterList;
