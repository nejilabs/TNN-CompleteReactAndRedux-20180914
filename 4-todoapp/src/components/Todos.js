import React from 'react'

const Todos = ({ todos, deleteTodo }) => {

  // Start: Components
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">No Todos Left</p>
  )
  // End: Components


  // Start: Template
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
  // End: Template

}

export default Todos