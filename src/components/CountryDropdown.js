import React, {useState, useEffect, useContext} from 'react';

import {RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

import { Menu } from '@headlessui/react';

// import houseContext
import {HouseContext} from './HouseContext';

const CountryDropdown = () => {
  const {country, setCountry, countries} = useContext(HouseContext)

  const [isOpen, setIsOpen] = useState(false);
  return <Menu as='div'
  className='dropdown relative'>
    <Menu.Button onClick={() =>setIsOpen(!isOpen)}
    className='dropdown-btn w-full text-left'>
      <RiMapPinLine className='dropdown-icon-primary' />
      <div>  
      </div>
      <div className='text-[15px] font-medium leading-tight px-3'>{country}</div>
        <div className='text-[13px]'>Select your place</div>
        {isOpen ?
          (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          )
        : 
          (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          )
        }
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {countries.map((country, index)=>{
        return (
          <Menu.Item 
          onClick={()=> setCountry(country)}
          className='cursor-pointer hover:text-red-700 transition
           hover:bg-gray-300 hover:rounded-md'
           as='li' key={index}>
            {country}
          </Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>;
};

export default CountryDropdown;
