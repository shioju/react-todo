import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const text = React.findDOMNode(this.refs.text).value.trim();
    React.findDOMNode(this.refs.text).value = '';
    if (text) {
      this.props.onTodoSubmit({id: Date.now(), text: text, done: false});
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="i need to..." ref="text" />
        <input type="button" value="Commit" onClick={this.handleSubmit} />
      </div>
    );
  }
}
