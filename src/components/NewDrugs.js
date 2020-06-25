import React from 'react'

const NewDrugs = ({drug, index, handleChange}) => {
  return (
    <>
        <input type='text' name='name' placeholder='name' onChange={e => handleChange(e, index)} value={drug.name}/>

        <label htmlFor="quantity">quantity</label>
        <input type='number' name='quantity' min='0' onChange={e => handleChange(e, index)} value={drug.quantity}/>

        <label htmlFor="frequency">frequency</label>
        <input type='number' name='frequency' min='0' onChange={e => handleChange(e, index)} value={drug.frequency}/>

        <input type="checkbox" id="breakfast" onChange={e => handleChange(e, index)} value={drug.breakfast}/>
        <label htmlFor="breakfast">breakfast</label>

        <input type="checkbox" id="lunch" onChange={e => handleChange(e, index)} value={drug.lunch}/>
        <label htmlFor="lunch">lunch</label>

        <input type="checkbox" id="diner" onChange={e => handleChange(e, index)} value={drug.diner}/>
        <label htmlFor="diner">diner</label>

        <input type='number' name='traitment_duration' min='0' onChange={e => handleChange(e, index)} value={drug.traitment_duration}/>

        <textarea name='additional_information' placeholder='additional information' onChange={e => handleChange(e, index)} value={drug.additional_information}/>
    </>
  )
}

export default NewDrugs

/* quantity : 0,
frequency : 1,
breakfast :false,
lunch : false,
diner : false,
traitment_duration : 0, */