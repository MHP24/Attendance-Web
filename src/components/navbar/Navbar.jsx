import React from 'react'
import './navbar.css';
export const Navbar = () => {
  return (
    <nav className="nav">
        <div className="nav__section">
          <a href="#home" className="nav__logo">DuocAttendance</a>
        </div>
        <div className="nav__section">
          <a href="#home" className="nav__link">Inicio</a>
          <a href="#about" className="nav__link">Acerca de</a>
          <a href="#download" className="nav__link nav__link--important">Descarga</a>
        </div>
    </nav>
  );
}
