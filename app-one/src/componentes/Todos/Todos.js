import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './todo-list.css';
import Todolist from './Todolist'
import { Switch, Route, Link } from 'react-router-dom' 

const Todos = () => {

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


  const [searchQuery, setSearchQuery] = useState("");

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
  // Erledgte | Nicht Erledigte Aufgabe
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
  const filteredTodos = todos.filter((todo) => (
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  ));

  return (
    <>


      <header className="todo-header">
        <Link to="/">
          <h1 className="todo-brandname">
            Todo Liste
          </h1>
        </Link>
        <form className="todo-search">
          <input onChange={e => setSearchQuery(e.target.value)} type="search" placeholder="Suche..." />
        </form>
      </header>

      <form className="add-todo">
        <input onKeyDown={handleAddTodo} type="text" name="new-todo" />
        <button>add</button>
      </form>

      <Switch>


        <Route exact path="/">
          <main className="todo-main">
            {
              searchQuery ? <Todolist
                headline="Suchergebnis:"
                list={filteredTodos}
                onToggleTodo={toogleTodo}
                onDeleteTodo={handleTodoDelete}
              /> :

                <>
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
                </>
            }
          </main>
        </Route>

        <Route exact path="/todo/:id">
          <h1>Deine Mutter hat es immer gewusst</h1>
        </Route>

        <Route path="*">
          <h1>404 - Seite nicht gefunden</h1>
        </Route>
      </Switch>

    </>
  )
}
export default Todos