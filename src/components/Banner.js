import React from 'react';

import Image from '../assets/img/house-banner.png';

import Search from '../components/Search';

const Banner = () => {
  return (
  <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[350px] flex flex-col items-center
      lg:items-start text-center lg:text-left justify-center flex-1 px-4'>
        <h1 className='text-4xl lg:text-[58px] font-semibold leading-none'>
          <span className='text-red-700'>Rent </span>Your Dream House with Us</h1>
        <p className='max-w-[480px] mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
          </p>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={Image} alt='banner' />
      </div>
    </div>
    <Search />
  </section>
  );
};

export default Banner;
