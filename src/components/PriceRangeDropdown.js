import React, {useState, useEffect, useContext} from 'react';

import {RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

import { Menu } from '@headlessui/react';

// import houseContext
import {HouseContext} from './HouseContext';

const PriceRangeDropdown = () => {
  const {price, setPrice} = useContext(HouseContext)

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '190000 - 220000'
    },
    {
      value: '160000 - 190000'
    },
    {
      value: '130000 - 160000'
    },
    {
      value: '100000 - 130000'
    },
    {
      value: '10000 - 30000'
    },
    {
      value: '30000 - 40000'
    },
  ]

  return (
  <Menu as='div'
  className='dropdown relative'>
    <Menu.Button onClick={() =>setIsOpen(!isOpen)}
    className='dropdown-btn w-full text-left'>
      <RiWallet3Line className='dropdown-icon-primary' />
      <div>  
      </div>
      <div className='text-[15px] font-medium leading-tight px-3'>{price}</div>
        <div className='text-[13px]'>Choose price range</div>
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
      {prices.map((price, index)=>{
        return (
          <Menu.Item 
          onClick={()=> setPrice(price.value)}
          className='cursor-pointer hover:text-red-700 transition
           hover:bg-gray-300 hover:rounded-md'
           as='li' key={index}>
            {price.value}
          </Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>
  );
};

export default PriceRangeDropdown;
