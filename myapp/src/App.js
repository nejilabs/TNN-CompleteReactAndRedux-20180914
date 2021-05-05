import React, { Component } from 'react'
import Ninjas from "./components/Ninjas"
import AddNinja from "./components/AddNinja"

class App extends Component {
  // Start: State
  state = {
    ninjas: [
      { id: 1, name: "name1", age: 30, belt: "belt1" },
      { id: 2, name: "name2", age: 15, belt: "belt2" },
      { id: 3, name: "name3", age: 17, belt: "belt3" },
    ]
  }
  // End: State

  // Start: Render Template
  render() {
    return (
      <div className="App">
        App
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
  // End: Render Template

}

export default App;
