import React, { Component } from 'react'
import Ninjas from "./components/Ninjas"
class App extends Component {
  // Start: State
  state = {
    ninjas: [
      { id: 1, name: "name1", age: 1, belt: "belt1" },
      { id: 2, name: "name2", age: 2, belt: "belt2" },
      { id: 3, name: "name3", age: 3, belt: "belt3" },
    ]
  }
  // End: State

  // Start: Render Template
  render() {
    return (
      <div className="App">
        App
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
  // End: Render Template

}

export default App;
