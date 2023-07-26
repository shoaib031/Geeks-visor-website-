import React from 'react'
import logo from "../assets/logo.png"

const NavigationSection = () => {
  return (
    <div class="navbarparent">
      <div class="navbar">
        <div class="logo">
          <img src={logo} alt="" />
        </div>
        <div class="link">
          <a href="#" class="linked">Home</a>
          <a href="#" class="linkeded">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default NavigationSection