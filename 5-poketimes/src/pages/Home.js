import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import ReactLogo from '../assets/Sample.png'
class Home extends Component {
  // Start:Template
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <img src={ReactLogo} alt={post.title}></img>
              <Link to={`/posts/${post.id}`} className="card-title red-text">{post.title}</Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No Posts Yet</div>
    )


    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
  // End:Template

}

// Start: Methods
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
// End: Methods


export default connect(mapStateToProps)(Home)
