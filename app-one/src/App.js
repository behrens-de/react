import React, { useState } from 'react'
import './todo-list.css';

const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Testaufgabe',
      done: false
    },
    {
      id: 2,
      title: 'Testaufgabe 2',
      done: false
    }

  ]);

  // Funtion um ToDo hinzu zu fügen
  const handleAddTodo = (event) => {

    if (event.key === "Enter") {
      // Ursprungs Event entfernen
      event.preventDefault();
      // Neue ToDo erstellen
      let newTodo = {
        id: (todos.length + 1), 
        title: event.target.value, 
        done: false
      }
      // Setzen der ToDos
      setTodos([...todos, newTodo]);
      // Input wieder leeren
      event.target.value = '';
    }
  }


  return (
    <>
      <header className="todo-header">
        <h1 className="todo-brandname">
          Todo Liste
        </h1>
        <form className="todo-search">
          <input type="search" placeholder="Suche..." />
        </form>
      </header>

      <form className="add-todo">
        <input onKeyDown={handleAddTodo} type="text" name="new-todo" />
        <button>add</button>
      </form>

      <main className="todo-main">

        <h2>Offene Aufgaben</h2>

        {todos.map(todo => (
          <div className="todo-item">
            <input type="checkbox" name="" />
            <span>{todo.title}</span>
            <button>löschen</button>
          </div>

        ))}




        <h2>Erledigte Aufgaben</h2>

      </main>
    </>
  )
}
export default App