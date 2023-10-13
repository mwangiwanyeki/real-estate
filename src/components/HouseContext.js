import React, {useState, useEffect, createContext} from 'react';

import {housesData} from '../data';

export const HouseContext = createContext();


const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  // return all coutries
  useEffect(() => {
    const allCountries = houses.map(house => {
      return house.country
    })
    //  remove duplicates
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries)
  }, [])

  useEffect(() => {
    const allProperties = houses.map(house => {
      return house.type
    })
    //  remove duplicates
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];

    // set properties state
    setProperties(uniqueProperties)
  }, [])

  const handleClick = ()=>{
  setLoading(true);
    const isDefault = (str) =>{
      return str.split(' ').includes('(any)')
    }

    // get first price value
    const minPrice = parseInt(price.split(' ')[0])

    // get second price value
    const maxPrice = parseInt(price.split(' ')[2])


    const newHouses = housesData.filter((house) =>{
      const housePrice = parseInt(house.price)

      if(house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice){
        return house;
      }

      // if country is  specified
      if(!isDefault(country) && isDefault(property) && isDefault(price)){
        return house.country === country;
      }

      // if property is  specified
      if(!isDefault(property) && isDefault(country) && isDefault(price)){
        return house.type = property;
      }

      // if price is  specified
      if(!isDefault(price) && isDefault(country) && isDefault(property)){
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house
        }
      }

      // if country and propert is specified 
      if (!isDefault(country) && !isDefault(property) && isDefault(price)){
        return house.country === country && house.type === property;
      }

      // if country and price is specified
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      // if property and price is not specified
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property
        }
      }
    })

    setTimeout(()=>{
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses), setLoading(false)
    }, 1000)
  }


  return <HouseContext.Provider value={{
    country,
    setCountry,
    countries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    loading,
    handleClick
  }}>
    {children}
  </HouseContext.Provider>;
};

export default HouseContextProvider;
