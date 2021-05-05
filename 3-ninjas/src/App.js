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

  // Start: Methods
  // addNinja()
  addNinja = (ninja) => {
    ninja.id = Math.random // temporarily generate random id for the new ninja for now
    this.setState({
      ninjas: [...this.state.ninjas, ninja]
    })
  }
  // deleteNinja()
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    })
    this.setState({
      ninjas: ninjas
    })
  }
  // End: Methods

  // Start: Lifecycle Methods
  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdated(prevProps, prevState) {
    console.log("Component Updated");
    console.log(prevProps, prevState);
  }
  // End: Lifecycle Methods


  // Start: Template
  render() {
    return (
      <div className="App">
        App
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
  // End: Template

}

export default App;
