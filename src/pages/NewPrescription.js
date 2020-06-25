import React, { useState } from 'react';
import fb from '../services/firebase'
import NewDrugs from '../components/NewDrugs';
import produce from "immer";
import '../styles/NewPrescription.css'


const NewPrescription = () => {
  const [newPresctiption, setnewPresctiption] = useState({
    drugs_number : 1,
    duration : 0,
    renewable : false,
    renewable_time : 0,
    status: 'waiting',
    patient : {
      civility: '',
      firstname: '',
      lastname: '',
      email: ''
    },
    drugs : [{
      name : '',
      quantity : 0,
      frequency : 1,
      breakfast :false,
      lunch : false,
      diner : false,
      traitment_duration : 0,
      additional_information : ''
    }],
    doctor : {
      firstname: '',
      lastname: '',
      tel: null,
      adress_number: null,
      adress_street_type: '',
      adress_street: '',
      adress_cp: null,
      adress_city: '',
      adress_country: ''
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fb.firestore().collection('prescriptions').add({
      drugs_number : newPresctiption.drugs_number,
      duration : newPresctiption.duration,
      renewable : newPresctiption.renewable,
      renewable_time : newPresctiption.renewable_time,
      patient : newPresctiption.patient,
      status : newPresctiption.status,
      drugs : newPresctiption.drugs,
      doctor : newPresctiption.doctor,
      created_at: fb.firestore.FieldValue.serverTimestamp()
    }).then(() => {
      setnewPresctiption({
        drugs_number : 1,
        duration : 0,
        renewable : false,
        renewable_time : 0,
        patient : {
          civility: '',
          firstname: '',
          lastname: '',
          email: ''
        },
        drugs : [{
          name : '',
          quantity : 0,
          frequency : 1,
          breakfast :false,
          lunch : false,
          diner : false,
          traitment_duration : 0,
          additional_information : ''
        }],
        doctor : {
          firstname: '',
          lastname: '',
          tel: null,
          adress_number: null,
          adress_street_type: '',
          adress_street: '',
          adress_cp: null,
          adress_city: '',
          adress_country: ''
        }
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
      draftNewPresctiption.drugs[index] = {...draftNewPresctiption.drugs[index], [e.target.name] : e.target.value};
    })
    setnewPresctiption(nextState)
  }

  const handleChangeCheckBox = (e, index) => {
    console.log(e.target.checked)
    const nextState = produce(newPresctiption, draftNewPresctiption => {
      draftNewPresctiption.drugs[index] = {...draftNewPresctiption.drugs[index], [e.target.name] : e.target.checked};
    })
    setnewPresctiption(nextState)
  }

  const handleNumberOfRenew = () => {
    const r = document.getElementById('renew-frequency');
    r.classList.toggle('visible');
  }

  return (
    <div>
      <div>
        <h2>New Prescription</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='NewPrescription-presciption-container'>
          <div className='global-info content-container'>
            <div className='newPrescription-ligne'>
              <label htmlFor="duration">Duration :</label>
              <input type='number' min='0' id="duration" onChange={e => setnewPresctiption({...newPresctiption, duration : e.target.value})} value={newPresctiption.duration}/>
            </div>

            <div className='newPrescription-ligne'>
              <label htmlFor="duration">Number of drugs</label>
              <input type='number' min='0' id="drugs_number" onChange={e => setnewPresctiption({...newPresctiption, drugs_number : e.target.value})} value={newPresctiption.drugs_number}/>
            </div>

            <div className='newPrescription-ligne renewable-container'>
              <div className='renewable-checkbox-container'>
                <label htmlFor="renewable">Renewable</label>
                <input type="checkbox" id="renewable" onClick={handleNumberOfRenew} onChange={e => setnewPresctiption({...newPresctiption, renewable : !newPresctiption.renewable})} value={newPresctiption.renewable}/>
              </div>
              <div id='renew-frequency'>
                <label htmlFor="renewable_time" >How many times ?</label>
                <input type='number' min='0' id="renewable_time" onChange={e => setnewPresctiption({...newPresctiption, renewable_time : e.target.value})} value={newPresctiption.renewable_time}/>
              </div>
            </div>

            <div className='title-blue-background'>
              <p>Patient</p>
            </div>

            <div className='newPrescription-ligne civility-fn-ln-container'>
              <select name="civility" onChange={e => setnewPresctiption({...newPresctiption, patient : {...newPresctiption.patient, civility : e.target.value }})} value={newPresctiption.patient.civility}>
                <option value="mr">Mr</option>
                <option value="ms">Ms</option>
                <option value="mrs">Mrs</option>
              </select>

              <div className='firstname-lastname-container'>
                <input type='text' placeholder='firstname' onChange={e => setnewPresctiption({...newPresctiption, patient : {...newPresctiption.patient, firstname : e.target.value }})} value={newPresctiption.patient.firstname}/>
                <input type='text' placeholder='lastname' onChange={e => setnewPresctiption({...newPresctiption, patient : {...newPresctiption.patient, lastname : e.target.value }})} value={newPresctiption.patient.lastname}/>
              </div>
            </div>

            <input type='email' placeholder='email' onChange={e => setnewPresctiption({...newPresctiption, patient : {...newPresctiption.patient, email : e.target.value }})} value={newPresctiption.patient.email}/>
          </div>
        </div>
        <h3>Drugs</h3>

        {newPresctiption.drugs.map((drug, index) => {
          return (
            <NewDrugs key={index} drug={drug} index={index} handleChange={handleChange} handleChangeCheckBox={handleChangeCheckBox}/>
          )
        })} 

        <input type='submit' value='valid' />
      </form>
      <button onClick={handleNewDrug}>New Drug</button>
    </div>
  )
}

export default NewPrescription;
