import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SinglePrescription.css';
import PrescriptionSummary from '../components/PrescriptionSummary';
import Drugs from '../components/Drugs';


export default function SinglePrescription () {
  return (
    <div className='single-prescription-container'>
      <div className='back-to-all'>
        <p>  
          <Link to='/user/patient/:id/prescriptions'>My Prescriptions</Link>
        </p>
      </div>
      <PrescriptionSummary />
      <Drugs />
    </div>
  )
}