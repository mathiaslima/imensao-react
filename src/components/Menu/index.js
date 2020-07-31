import React from 'react';
import Logo from '../../assests/img/Logo.png';
import ButtonLink from './components/ButtonLink';
import './Menu.css'

function Menu() {
    return (
      <nav className="Menu">
        <a href="/">
            <img className="Logo" src={Logo} alt="RykoFlix logo" />    
        </a>
        
        <ButtonLink className="ButtonLink" href="/">
            Novo Vídeo
        </ButtonLink>
      </nav>
    );
}

export default Menu;