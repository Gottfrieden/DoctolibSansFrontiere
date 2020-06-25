import React from 'react'

const NewDrugs = ({drug, index, handleChange, handleChangeCheckBox}) => {
  return (
    <div className='NewPrescription-drug-container'>
        <input type='text' name='name' placeholder='name' onChange={e => handleChange(e, index)} value={drug.name}/>

        <div className='newPrescription-ligne'>
          <label htmlFor="quantity">quantity</label>
          <input type='number' name='quantity' min='0' onChange={e => handleChange(e, index)} value={drug.quantity}/>
        </div>

        <div className='newPrescription-ligne'>
          <label htmlFor="frequency">frequency</label>
          <input type='number' name='frequency' min='0' onChange={e => handleChange(e, index)} value={drug.frequency}/>
        </div>

        <div className='newPrescription-ligne'>
          <input type="checkbox" name="breakfast" onChange={e => handleChangeCheckBox(e, index)} value={drug.breakfast}/>
          <label htmlFor="breakfast">breakfast</label>

          <input type="checkbox" name="lunch" onChange={e => handleChangeCheckBox(e, index)} value={drug.lunch}/>
          <label htmlFor="lunch">lunch</label>

          <input type="checkbox" name="diner" onChange={e => handleChangeCheckBox(e, index)} value={drug.diner}/>
          <label htmlFor="diner">diner</label>
        </div>

        <input type='number' name='traitment_duration' min='0' onChange={e => handleChange(e, index)} value={drug.traitment_duration}/>

        <textarea name='additional_information' placeholder='additional information' onChange={e => handleChange(e, index)} value={drug.additional_information}/>
    </div>
  )
}

export default NewDrugs
