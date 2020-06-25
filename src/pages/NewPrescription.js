import React  , { useEffect, useState } from 'react';
import fb from '../services/firebase'
import NewDrugs from '../components/NewDrugs';
import produce from "immer";


const NewPrescription = () => {
  const [newPresctiption, setnewPresctiption] = useState({
    drugs_number : 1,
    duration : 0,
    patient_sexe : '',
    patient_email : '',
    patient_firstname : '',
    patient_name : '',
    patient_sexe : '',
    renewable : false,
    renewable_time : 0,
    drugs : [{
      name : '',
      quantity : 0,
      frequency : 1,
      breakfast :false,
      lunch : false,
      diner : false,
      traitment_duration : 0,
      additional_information : ''
    }]
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fb.firestore().collection('prescriptions').add({
      drugs_number : newPresctiption.drugs_number,
      duration : newPresctiption.duration,
      patient_sexe : newPresctiption.patient_sexe,
      patient_email : newPresctiption.patient_email,
      patient_firstname : newPresctiption.patient_firstname,
      patient_name : newPresctiption.patient_name,
      patient_sexe : newPresctiption.patient_sexe,
      renewable : newPresctiption.renewable,
      renewable_time : newPresctiption.renewable_time,
      drugs : newPresctiption.drugs,
      created_at: fb.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      setnewPresctiption({
        drugs_number : 1,
        duration : 0,
        patient_sexe : '',
        patient_email : '',
        patient_firstname : '',
        patient_name : '',
        patient_sexe : '',
        renewable : false,
        renewable_time : 0,
        drugs : [{
          name : '',
          quantity : 0,
          frequency : 1,
          breakfast :false,
          lunch : false,
          diner : false,
          traitment_duration : 0,
        }]
      })}
    )
  }

  const handleNewDrug = () => {
    const nextState = produce(newPresctiption, draftNewPresctiption => {
      draftNewPresctiption.drugs.push({
        name : '',
        quantity : 0,
        frequency : 1,
        breakfast :false,
        lunch : false,
        diner : false,
        traitment_duration : 0,
      })
    })
    setnewPresctiption(nextState)
  }

  const handleChange = (e, index) => {
    const nextState = produce(newPresctiption, draftNewPresctiption => {
      console.log(draftNewPresctiption.drugs[index])
      draftNewPresctiption.drugs[index] = {...draftNewPresctiption.drugs[index], [e.target.name] : e.target.value};
    })
    setnewPresctiption(nextState)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="duration">duration :</label>
        <input type='number' min='0' id="duration" onChange={e => setnewPresctiption({...newPresctiption, duration : e.target.value})} value={newPresctiption.duration}/>

        <label htmlFor="duration">drugs number</label>
        <input type='number' min='0' id="drugs_number" onChange={e => setnewPresctiption({...newPresctiption, drugs_number : e.target.value})} value={newPresctiption.drugs_number}/>

        <input type="checkbox" id="renewable" onChange={e => setnewPresctiption({...newPresctiption, renewable : e.target.value})} value={newPresctiption.renewable}/>
        <label htmlFor="renewable">renewable</label>

        <label htmlFor="duration">renewable time</label>
        <input type='number' min='0' id="renewable_time" onChange={e => setnewPresctiption({...newPresctiption, renewable_time : e.target.value})} value={newPresctiption.renewable_time}/>

        <input type='text' placeholder='firstname' onChange={e => setnewPresctiption({...newPresctiption, patient_firstname : e.target.value})} value={newPresctiption.patient_firstname}/>
        <input type='text' placeholder='lastName' onChange={e => setnewPresctiption({...newPresctiption, patient_name : e.target.value})} value={newPresctiption.patient_name}/>
        <input type='email' placeholder='email' onChange={e => setnewPresctiption({...newPresctiption, patient_email : e.target.value})} value={newPresctiption.patient_email}/>

        {newPresctiption.drugs.map((drug, index) => {
          return (
            <NewDrugs drug={drug} index={index} handleChange={handleChange}/>
          )
        })} 

        <input type='submit' value='valid' />
      </form>
      <button onClick={handleNewDrug}>New Drug</button>
    </div>
  )
}

export default NewPrescription;
