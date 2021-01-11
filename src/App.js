import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false,
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
  },
];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }

  handleItemToggle = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    });
  };

  handleItemAdd = (itemName) => {
    const item = {
      name: itemName,
      id: this.state.tasks.length,
      purchased: false,
    };

    const newTasks = [...this.state.tasks, item];

    this.setState({
      tasks: newTasks,
    });
  };

  handleItemCompleted = () => {
    const newTasks = this.state.tasks.filter((item) => {
      return !item.completed;
    });

    this.setState({
      tasks: newTasks,
    });
  };

  render() {
    return (
      <div>
        <TodoList
          tasks={this.state.tasks}
          handleItemToggle={this.handleItemToggle}
          handleItemCompleted={this.handleItemCompleted}
        />
        <TodoForm handleItemAdd={this.handleItemAdd} />
      </div>
    );
  }
}

export default App;
