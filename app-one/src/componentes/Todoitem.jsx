import React from "react";

const Todoitem = ({ id, done, title , onToggleTodo, onDeleteTodo}) => {
  return (
    <div key={id} className="todo-item">
      <input
        onClick={() => {
            onToggleTodo(id);
        }}
        type="checkbox"
        checked={done}
      />
      <span>{title}</span>
      <button onClick={() => onDeleteTodo(id)}>löschen</button>
    </div>
  );
};

export default Todoitem;
