import React , {useState}from 'react'
import './hader.css'
import {AiOutlineCloseCircle} from "react-icons/ai"
import {RiMenu3Fill} from "react-icons/ri"



export default function Hader() {

    const [active , setactive] = useState(false)
  return (
    <header className={active ? 'active header ' : 'header'} >
    <div className="container">

      <a href="#" className="logo">
      hh
      </a>

      <button className="menu-toggle-btn"  onClick={ ()=>  setactive(!active)}>
       {active ? <AiOutlineCloseCircle/>  : <RiMenu3Fill/>}
      </button>

      <nav className="navbar">
        <ul className="navbar-list">

          <li onClick={ () => setactive(false)}>
            <a href="#hero" className="">Home</a>
          </li>

          <li onClick={ () => setactive(false)}>
            <a href="#features" className="navbar-link">Features</a>
          </li>

          <li onClick={ () => setactive(false)}>
            <a href="#" className="navbar-link">Pricing</a>
          </li>

          <li onClick={ () => setactive(false)}>
            <a href="#blog" className="navbar-link">Blog</a>
          </li>

          <li onClick={ () => setactive(false)}>
            <a href="#contact" className="navbar-link">Contact Us</a>
          </li>

        </ul>

        <div className="header-actions">
          <a href="#" className="header-action-link" onClick={ () => setactive(false)}>Log in</a>

          <a href="#" className="header-action-link" onClick={ () => setactive(false)}>Register</a>
        </div>
      </nav>

    </div>
  </header>
  )
}
