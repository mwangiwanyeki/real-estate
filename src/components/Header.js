import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';

const Header = () => {
  return (
  <header className='py-6 mb-12 border-b'>
    <div className='container mx-auto flex justify-between items-center'>
      <Link to='/'>
        <img src={Logo} alt='logo' className='w-[150px] lg:w-[250px] h-[30px]' />
      </Link>
      <div className='flex items-center gap-6'>
        <Link to='#' className='hover:text-violet-900 transition'>Log in</Link>
        <Link to='#' className='bg-red-700 hover:bg-red-800 text-white px-4 py-3
        rounded-lg transition'>Sign Up</Link>
      </div>
    </div>
  </header>
  );
};

export default Header;
