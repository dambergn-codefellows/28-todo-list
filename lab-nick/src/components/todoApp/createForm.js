'use strict';

import React from 'react';
import uuidv4 from 'uuid/v4';

class TodoCreateForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: uuidv4(),
      title: '',
      editing: false,
      content: '',
      completed: false
  }
  this.updateTitle = this.updateTitle.bind(this);
  this.updateContent = this.updateContent.bind(this);
  this.submitItem = this.submitItem.bind(this);
}

  updateTitle(event) {
    this.setState({title: event.target.value});
  }

  updateContent(event) {
    this.setState({content: event.target.value});
  }

  submitItem(event) {
    event.preventDefault();
    let newId = uuidv4()
    this.setState({id: newId});
    this.props.newItemFunc(this.state);
  }

  render() {
    return <div>
      <h2>Add a new todo item</h2>
      <form onSubmit={this.submitItem}>
        <input onChange={this.updateTitle} type="text" placeholder="title"/>
        <textarea onChange={this.updateContent} />
        <button type="submit">Add Todo Item</button>
      </form>
    </div>
  }
}

export default TodoCreateForm;