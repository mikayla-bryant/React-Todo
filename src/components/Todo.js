import React from 'react';
import './Todo.css';
const Todo = (props) => {
  const handleClick = () => {
    props.handleItemToggle(props.item.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`task${props.item.completed ? ' completed' : ''}`}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
