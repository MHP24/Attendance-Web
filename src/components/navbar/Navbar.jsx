import React from 'react'
import { ButtonLink } from '../buttonLink/ButtonLink';
import './navbar.css';
export const Navbar = () => {
  return (
    <nav className="nav">
        <div className="nav__section">
          <a href="#home" className="nav__logo">Duoc<span className="nav__logo--extra">Attendance</span></a>
          
        </div>
        <div className="nav__section">
          <a href="#home" className="nav__link">Inicio</a>
          <a href="#about" className="nav__link">Acerca de</a>
          <a href="#downloads" className="nav__link nav__link--important">Descarga</a>
          {/* <ButtonLink className='nav__link nav__link--important' refLink={'#downloads'} content={'Descarga'}/> */}
        </div>
    </nav>
  );
}
