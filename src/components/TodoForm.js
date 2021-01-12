import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }

  handleChanges = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  // class property to submit form
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleItemAdd(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  };

  render() {
    return (
      <form className='add-task' onSubmit={this.handleSubmit}>
        <input
          value={this.state.inputValue}
          onChange={this.handleChanges}
          type='text'
          name='task'
          className='task-input'
        />
        <button className='add-btn'>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
