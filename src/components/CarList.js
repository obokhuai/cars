import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../store/carsSlice';




const CarList = () => {
  const dispatch = useDispatch();

  const cars = useSelector(({car: {cars,searchTerm}}) =>{
    return  cars.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase())) 


  })

  const handleDelete = (id) =>{
    dispatch(removeCar(id));
  }
  
  const renderedCar = cars.map(car =>{
  return (
    <div key={car.id} className='panel'>
      <p>{car.name} - ${car.cost}</p>
      <button className='button is-danger' onClick={()=>handleDelete(car.id)}>Delete</button>
    </div>
  )
  })

  return (
    <div className='car-list'>
      {renderedCar}
      <hr/>
    </div>
  )
}

export default CarList
