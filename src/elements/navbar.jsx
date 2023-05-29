import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse, faBars, faMagnifyingGlass, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import Logo from "../media/logo.png"
import './navbar.css'

library.add(faHouse, faBars, faMagnifyingGlass, faUser, faUsers)


export default function NavBar() {

  function OpenMenu() {
    let navbar = document.getElementsByClassName("menu")[0];
    if (navbar.className == "menu") {
      navbar.classList.add("responsive")
    } else {
      navbar.className = "menu"
    }
  }

  function go_to_about() {
    document.getElementById('about').scrollIntoView()
  }

  function show_about() {
    let url = window.location.pathname
    if (url != "/Sr.Massas/") {
      document.getElementById("aboutBar").style.display = 'none'
    }
  }

  useEffect(() => {
    show_about()
  }, []);



  return (
    <div className="navbar">

      <div className='navbar-align'>
        <div className="brand" onClick={() => location.href = "/Sr.Massas/"}>
          <img className='brand-logo' src={Logo}></img>
          <a className="brand-name"> Sr.Massas</a>
        </div>


        <div className="menu" id="menu">
          <a className="menu-icon" onClick={OpenMenu}>
            <FontAwesomeIcon icon="fa-solid fa-bars fa-2xl" />
          </a>

          <div className="menu-item" onClick={() => location.href = "/Sr.Massas/"}>
            <a><FontAwesomeIcon icon="fa-solid fa-house icon-menu" className='icon-menu' /> Inicio </a>
          </div>

          <div className="menu-item" onClick={go_to_about} id="aboutBar">
            <a><FontAwesomeIcon icon="fa-solid fa-users icon-menu" className='icon-menu' /> Sobre </a>
          </div>

          <div className="menu-item" onClick={() => location.href = "/Sr.Massas/cardapio/"}>
            <a><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='icon-menu' /> Cardápio </a>
          </div>

        </div>
      </div>
    </div>
  )
}