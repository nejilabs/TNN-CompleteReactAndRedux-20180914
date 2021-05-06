import React from 'react'

const Home = (props) => {
  setTimeout(() => {
    props.history.push('/about')
  }, 2000)
  return (
    <div className="container">
      <h4 className="center">Home</h4>
      <p>Home</p>
    </div>
  )
}

export default Home