import React, { Component } from 'react'
import Todos from "./components/Todos"
class App extends Component {
  // Start: State
  state = {
    todos: [
      { id: 1, content: "content1" },
      { id: 2, content: "content2" },
    ]
  }
  // End: State

  // Start: Methods
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos: todos
    })
  }
  // End: Methods

  // Start: Template
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
  // End: Template

}

export default App