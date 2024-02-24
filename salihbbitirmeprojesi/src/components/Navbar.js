import React from 'react'
import Logo from "../assets/burfaş logo.png";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} />
        </div>
        <div className='rightSide'>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/menu">Menü</Link>
          <Link to="/about">Geri Bildirim</Link>
          <Link to="/contact">Üye Ol</Link>
          <Link to="/contact">Tesislerimiz</Link>
        </div>
    </div>
  )
}

export default Navbar