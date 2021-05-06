import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Post from './pages/Post'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts/:post_id" component={Post} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}
