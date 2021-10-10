import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'


import './todo-list.css';
import Todolist from './componentes/Todolist'


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
        id: uuid(),
        title: event.target.value,
        done: false
      }
      // Setzen der ToDos
      setTodos([...todos, newTodo]);
      // Input wieder leeren
      event.target.value = '';
    }
  }

  // Todos Entfernen 
  const handleTodoDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  const toogleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done }
      }
      return todo;
    }))
  }


  const activTodos = todos.filter(({ done }) => !done);
  const inactivTodos = todos.filter(({ done }) => done);

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




        <Todolist
          headline="Offene Aufgaben"
          list={activTodos}
          onToggleTodo={toogleTodo}
          onDeleteTodo={handleTodoDelete}
        />

        <Todolist
          headline="Erledigte Aufgaben"
          list={inactivTodos}
          onToggleTodo={toogleTodo}
          onDeleteTodo={handleTodoDelete}
        />
      </main>
    </>
  )
}
export default App