import React from 'react';
import logo from '../../assets/media/globo_logo.png';

import './style.css';

const Header = () => {
  return (
    <div className='header'>
      <img className='img-logo' alt='logo' src={logo} size='20' />
      <h2 className='text-logo'>INFOGames</h2>
    </div>
  );
};
export default Header;
