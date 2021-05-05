import React, { Component } from 'react'
import Todos from "./components/Todos"
import AddTodo from "./components/AddTodo"

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
  // addTodo()
  addTodo = (todo) => {
    todo.id = Math.random()
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  // deleteTodo()
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
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
  // End: Template

}

export default App