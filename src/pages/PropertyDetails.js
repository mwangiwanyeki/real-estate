import React from 'react';

// import data
import {housesData} from '../data';

// import use params
import { useParams } from 'react-router-dom';

// import icons
import {BiBed, BiBath, BiArea} from 'react-icons/bi';

// import link
import {Link} from 'react-router-dom';

const PropertyDetails = () => {
  // get the house id
  const {id} = useParams()

  // get the house based on the id
  const house = housesData.find(house => {
    return house.id === parseInt(id)
  });

  return <section>
    <div className='container mx-auto min-h-[800px mb-14'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{house.name}</h2>
          <h3 className='text-lg mb-4'>{house.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'> 
          <div className='bg-orange-500 text-white px-3 rounded-full'>{house.type}</div>
          <div className='bg-red-500 text-white px-3 rounded-full'>{house.country}</div>
        </div>
        <div className='text-3xl font-semibold text-red-600'>${house.price}</div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={house.imageLg} alt='house' />
          </div>
          <div className='flex gap-x-6 mb-4'>
            <div className='flex gap-x-3 items-center'>
              <BiBed className='text-2xl text-orange-500'/>
              <div className='text-purple-500'>{house.bedrooms}</div>
            </div>
            <div className='flex gap-x-3 items-center'>
              <BiBath className='text-2xl text-orange-500'/>
              <div className='text-yellow-500'>{house.bathrooms}</div>
            </div>
            <div className='flex gap-x-3 items-center'>
              <BiArea className='text-2xl text-orange-500'/>
              <div className='text-green-500'>{house.surface}</div>
            </div>
          </div>
          <div>{house.description}</div>
        </div>
        <div className='flex-1 bg-white w-full mb-8 border border-gray-300 
        rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
              <img src={house.agent.image} alt='' />
            </div>
            <div>
              <div className='font-bold text-lg'>{house.agent.name}</div>
              <Link to='' className='text-red-700'>View Listing</Link>
            </div>
          </div>
          {/* form */}
          <form className='flex flex-col gap-y-3'>
            <input className='border border-gray-300 focus:border-red-700 outline-none
            rounded w-full px-4 h-12 text-sm' type='text' placeholder='Name*' />
            <input className='border border-gray-300 focus:border-red-700 outline-none
            rounded w-full px-4 h-12 text-sm' type='text' placeholder='Email*' />
            <input className='border border-gray-300 focus:border-red-700 outline-none
            rounded w-full px-4 h-12 text-sm' type='text' placeholder='Phone' />
            <textarea className='border border-gray-300 focus:border-red-700 outline-none
            resize-none rounded w-full p-4 h-36 text-sm text-gray-500' placeholder='Message'></textarea>
            <div className='flex gap-x-2'>
              <button className='bg-red-700 hover:bg-red-800 text-white
              rounded p-3 text-sm w-full transition'>Send Message</button>
              <button className='border border-red-700 text-red-700
              hover:text-red-500 hover:border-red-500 transition rounded p-3
              text-sm w-full'>Call</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>;
};

export default PropertyDetails;
