import React from "react";
import Todoitem from "./Todoitem";

const Todolist = ({ list, headline, onToggleTodo, onDeleteTodo }) => {

    const entrys = list.length;

  return (
    <>
      <h2>{entrys < 1 ? 'keine' : entrys} - {headline} </h2>
      {list.map((todo) => (
        <Todoitem
          key={todo.id}
          id={todo.id}
          done={todo.done}
          title={todo.title}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </>
  );
};

export default Todolist;
