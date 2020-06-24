import React  , { useEffect, useState } from 'react';
import fb from '../firebase'

const NewPrescription = () => {

  const [drug, setDrug] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    fb.firestore().collection('drug').add({
      name: newTaskName,
      createdAt: fb.firestore.FieldValue.serverTimestamp()
    })
  }

  return (
    <div>
      <form>
        <input type='text' />
      </form>
      
    </div>
  )
}

export default NewPrescription;
