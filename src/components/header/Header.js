import React, { useRef } from "react"
import { NavLink } from "react-router-dom"
import "./header.css"
import logo from "../../assets/shared/logo.svg"
import iconMenu from "../../assets/shared/menu.png"
import iconCloseMenu from "../../assets/shared/icon-close.svg"



export const Header = () => {

const menu = useRef(null),
  nav = useRef(null)

   const handdleMenu = () => {
    menu.current.classList.toggle("none")
    nav.current.classList.toggle("active")
   }

  return (
    <header className="header">
      <img className="header--icon" src={logo}/>
      <span className="header--decoration"></span>
     <nav className="header--nav" ref={nav}>
      <img src={iconCloseMenu} className="header-nav--close" onClick={handdleMenu}/>
        <ul>
            <li onClick={handdleMenu}><NavLink to="/">00 HOME</NavLink></li>
            <li onClick={handdleMenu}><NavLink to="/destination">01 DESTINATION</NavLink></li>
            <li onClick={handdleMenu}><NavLink to="/crew">02 CREW</NavLink></li>
            <li onClick={handdleMenu}><NavLink to="/technology">03 TECHNOLOGY</NavLink></li>
        </ul>
     </nav>
     <img className ="header--menu-responsive"src = {iconMenu} ref={menu} onClick={handdleMenu}/>
    </header>
  )
}
