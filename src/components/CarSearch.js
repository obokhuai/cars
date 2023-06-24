import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchChange } from '../store/carsSlice';




const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state)=>{
    return state.car.searchTerm; 
  })

  const handleChange = (e)=>{
    dispatch(searchChange(e.target.value))
  }


  return (  
    <div className='list-header'>
      <h4 className='title is-3'>My Cars</h4>
      <div className='search field is-horizontal'>
        <label className='label'>search</label>
        <input className='input' value={searchTerm} onChange={handleChange}/>
        
      </div>
    </div>
  )
}

export default CarSearch
