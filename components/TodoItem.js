import React from 'react';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.todo.done,
      text: props.todo.text
    };
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone() {
    this.setState({checked: !this.state.checked});
  }

  render() {
    const style = this.state.checked? {'text-decoration': 'line-through'} : {};

    return (
      <div>
        <label>
          <input type="checkbox" checked={this.state.checked} onClick={this.toggleDone} />
          <span style={style}>{this.state.text}</span>
        </label>
      </div>
    );
  }
}
