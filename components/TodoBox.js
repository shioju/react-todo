import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
  }

  handleTodoSubmit(todo) {
    this.setState({data: [todo].concat(this.state.data)});
  }

  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <TodoForm onTodoSubmit={this.handleTodoSubmit} />
        <TodoList data={this.state.data} />
      </div>
    );
  }
}
