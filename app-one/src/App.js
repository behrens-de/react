import React from 'react'
import './index.css';
import Greets from './componentes/Greets'
import CounterList from './componentes/Couter/CounterList'

const App = () => {
    return (
        <div>
          <Greets name="Max"/>
          <CounterList/> 
        </div>
    )
}
export default App