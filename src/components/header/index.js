import React from 'react';
import './header.scss';
import Logo from '../../assets/graphics/logo.png'

const Header=(props)=>{
    return <header>
   <div className="wrap">
       <div className="logo">
        <img src={Logo} alt="logo" />
       </div>
   </div>
    </header>
}

export default Header