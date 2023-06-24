import React from 'react'
import { useSelector } from 'react-redux'


const CarValue = () => {
  const totalCost = useSelector(({car:{cars, searchTerm }}) =>{
    const filteredCars = cars.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    return filteredCars.reduce((accumulator, car) => accumulator + car.cost, 0);

  })
  return (
    <div className='car-value'>
      Total cost: {totalCost}
    </div>
  )
}

export default CarValue
