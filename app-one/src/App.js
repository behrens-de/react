import React from 'react'
import './index.css';
import Greets from './componentes/Greets'
import CounterList from './componentes/Couter/CounterList'

const App = () => {
    return (
        <>
          <Greets name="Max"/>
          <CounterList/> 
        </>
    )
}
export default App