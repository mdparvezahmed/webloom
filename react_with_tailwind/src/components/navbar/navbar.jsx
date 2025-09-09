import PropTypes from "prop-types";
import React, { Component } from 'react'

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <nav className="flex justify-between z-1 bg-gray-500 h-10 items-center w-full top-0 left-0 shadow-xl fixed text-gray-200">
        <div className="ml-3">
          <a href="#"><i class="fa-solid fa-clipboard-check"></i>To-Do App</a>
        </div>
        <ul className="flex justify-between mr-3">
          <li className="mx-2"><a href="#home">Home</a></li>
          <li className="mx-2"><a href="#contact">Contact</a></li>
          <li className="mx-2"><a href="#aboutUs">About Us</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar  