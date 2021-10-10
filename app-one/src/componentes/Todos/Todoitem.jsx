import React from "react";
import {Link} from 'react-router-dom'

const Todoitem = ({ id, done, title , onToggleTodo, onDeleteTodo}) => {
  return (
    <div key={id} className="todo-item">
      <input id={id}
        onClick={() => {
            onToggleTodo(id);
        }}
        type="checkbox"
        checked={done}
      />
      <Link exact to={"/todo/"+id}>
      <label for={id}>{title}</label>
      </Link>
      <button onClick={() => onDeleteTodo(id)}>löschen</button>
    </div>
  );
};

export default Todoitem;
