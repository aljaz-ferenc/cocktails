import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <NavLink exact to='/'>ABOUT US</NavLink>
        <NavLink to='/cocktails'>COCKTAILS</NavLink>
    </div>
  )
}
