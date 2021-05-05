import React, { Component } from 'react'

class AddTodo extends Component {
  // Start: State
  state = {
    content: ""
  }
  // End: State

  // Start: Methods
  // handleChange()
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  // handleSubmit()
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    })
  }
  // End: Methods

  // Start: Template
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Todo:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
  }
  // End: Template

}

export default AddTodo
