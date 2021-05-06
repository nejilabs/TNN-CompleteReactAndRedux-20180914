import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
class Home extends Component {
  // Start:State
  state = {
    posts: []
  }
  // End:State

  // Start:Lifecycle Methods
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data
        })
      })
  }
  // End:Lifecycle Methods

  // Start:Methods
  // End:Methods

  // Start:Template
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={`/posts/${post.id}`} className="card-title">{post.title}</Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No Posts Yet</div>
    )


    return (
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
  // End:Template

}

export default Home
