import React, { Component } from 'react'
// import axios from 'axios'

import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component {
  // Start:State
  // state = {
  //   post: null
  // }
  // End:State

  // Start:Lifecycle Methods
  // componentDidMount() {
  //   let id = this.props.match.params.post_id;

  //   axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then(res => {
  //       this.setState({
  //         post: res.data
  //       })
  //     })
  // }
  // End:Lifecycle Methods

  // Start:Methods
  handleClick = (e) => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/'); //redirects user back to home page after Delete
  }
  // End:Methods

  // Start:Template
  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
        </div>
      </div>
    ) : (<div className="center">Loading post...</div>)


    return (
      <div className="container">
        {post}
      </div>
    )
  }
  // End:Template

}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  console.log(ownProps)

  let id = ownProps.match.params.post_id;
  let post = state.posts.find(post => post.id === parseInt(id));
  return {
    post: post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
