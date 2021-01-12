// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
const TodoList = (props) => {
  const handleClick = () => {
    props.handleItemCompleted();
  };

  return (
    <div>
      <h1 className='title'>Todo List</h1>
      <div className='task-container'>
        {props.tasks.map((item) => {
          return (
            <Todo
              handleItemToggle={props.handleItemToggle}
              key={item.id}
              item={item}
            />
          );
        })}
      </div>
      <div className='clear-btn'>
        <button onClick={handleClick}>Clear Completed Tasks</button>
      </div>
    </div>
  );
};
export default TodoList;
