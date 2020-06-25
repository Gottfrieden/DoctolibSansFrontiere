import React, { useState, useEffect } from 'react';
import fb from '../services/firebase';
import { Link } from 'react-router-dom';
import '../styles/SinglePrescription.css';
import PrescriptionSummary from '../components/PrescriptionSummary';
import Drugs from '../components/Drugs';

export default function SingleDoctorPrescription (props) {
  const [singleDoctorPrescription, setSingleDoctorPrescription] = useState(null);
  const params = props.match.params;

  useEffect(() => {
    fb.firestore().collection('prescriptions').doc(params.prescriptionId).get()
      .then(doc => setSingleDoctorPrescription(doc.data()))
      .catch(err => console.error(err));
  }, [params.prescriptionId]);

  if (!singleDoctorPrescription) {
    return null;
  } else {
    return (
      <div className='single-prescription-container'>
        <div className='back-to-all'>
          <p>
            <Link to='/doctor/prescriptions/'>Prescriptions history</Link>
          </p>
        </div>
        <PrescriptionSummary params={params} singlePrescription={singleDoctorPrescription} />
        <Drugs params={params} singlePrescription={singleDoctorPrescription} />
      </div>
    );
  }
}
