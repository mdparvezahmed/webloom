import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Home extends Component {
  static propTypes = {}

  render() {
    return (
      <section className='relative bg-cover bg-center h-screen bg-gray-400 flex items-center justify-center text-center'>
        <div className='relative bg-gray-800 p-10 z-10 rounded-full text-white'>
            <h2>Add your Notes Here</h2>
            <p>All the notes are here</p>

        </div>
      </section>
    )
  }
}

export default Home 