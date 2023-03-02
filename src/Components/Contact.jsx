import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
    <header>
      <ul>
         <li> <Link to="/">Home</Link></li>
         <li> <Link to="/about">About</Link></li>
         <li> <Link to="/contact">Contact</Link></li>
      </ul>
    </header>
    <p>Contact Page</p>
    </>
  )
}
