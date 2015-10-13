import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  render() {
    const todoNodes = this.props.data.map(function(todo) {
      return (
        <TodoItem key={todo.id} todo={todo} />
      );
    });
    
    return (
      <div>
        {todoNodes}
      </div>
    );
  }
}
