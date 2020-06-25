import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SinglePrescription.css';
import PrescriptionSummary from '../components/PrescriptionSummary';
import Drugs from '../components/Drugs';

export default function SingleDoctorPrescription () {
  return (
    <div className='single-prescription-container'>
      <div className='back-to-all'>
        <p>
          <Link to='/user/doctor/:id/prescription/history'>My Prescriptions</Link>
        </p>
      </div>
      <PrescriptionSummary />
      <Drugs />
    </div>
  );
}
