import React, {iseContext, useContext} from 'react';

// import context
import { HouseContext } from './HouseContext';

// import component
import House from './House';

// import link
import { Link } from 'react-router-dom';

// import icons
import {ImSpinner2} from 'react-icons/im';

const HouseList = () => {
  const {houses, loading} = useContext(HouseContext)

  // if load is true
  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-red-700 text-4xl mt-[200px]'/>
    )
  }

  if (houses.length < 1) {
    return (
      <div className='mx-auto text-red-800 text-3xl px-10 justify-center items-center text-center'>Sorry, nothing found!</div>
    )
  }

  console.log(houses);
  return (
  <section className='mb-20'>
    <div className='container mx-auto'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
        {
          houses.map((house, index)=>{
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house = {house} />
              </Link>
            );
          })
        }
      </div>
    </div>
  </section>
  );
};

export default HouseList;
