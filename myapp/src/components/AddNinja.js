import React, { Component } from 'react'

export default class AddNinja extends Component {
  // Start: State
  state = {
    name: null,
    age: null,
    belt: null
  }
  // End: State

  // Start: Methods
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted:", this.state);
  }
  // End: Methods

  // Start: Template
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />

          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={this.handleChange} />

          <label htmlFor="belt">Belt:</label>
          <input type="text" id="belt" onChange={this.handleChange} />

          <button>Submit</button>
        </form>
      </div>
    )
  }
  // End: Template
}
