import React from 'react'
import { costChange, nameChange } from '../store/formSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addCar } from '../store/carsSlice'

const CarForm = () => {
  const dispatch = useDispatch();
  
  const {name, cost} = useSelector((state)=>{
    return {
      name: state.form.name,
      cost : state.form.cost
    }
  })

  const handleNameChange = (e) => {
    dispatch(nameChange(e.target.value));
  };

  const handleCostChange = (e) => {
    dispatch(costChange(parseInt(e.target.value) || 0));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({
      name, cost 
    }))
    dispatch(nameChange(""))
    dispatch(costChange(0))
  };
  return (
    <div className='car-form panel'> 
    <h4 className='subtitle is-3'>Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className='field-group'>
        <div className='field'>
        <label className='label'>Name</label>
        <input value={name} className='input is-expanded' onChange={handleNameChange}/>
        </div>
        <div className='field'>
        <label className='label'>Cost</label>
        <input value={cost || ""} className='input is-expanded' onChange={handleCostChange} type='number'/>
        </div>
        </div>
        <div className='field'>
          <button className='button is-link'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CarForm
