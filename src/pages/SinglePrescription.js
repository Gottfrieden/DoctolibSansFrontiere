import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SinglePrescription.css';
import PrescriptionSummary from '../components/PrescriptionSummary';
import Drugs from '../components/Drugs';

export default function SinglePrescription () {
  const params = props.match.params;
  const [prescription, setPrescription] = useState([]);

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