import React, { useState, useEffect } from 'react';
import fb from '../services/firebase';
import { Link } from 'react-router-dom';
import '../styles/SinglePrescription.css';
import PrescriptionSummary from '../components/PrescriptionSummary';
import Drugs from '../components/Drugs';

export default function SinglePrescripion (props) {
  const [singlePrescription, setSinglePrescription] = useState(null);
  const params = props.match.params;

  useEffect(() => {
    fb.firestore().collection('prescriptions').doc(params.prescriptionId).get()
      .then(doc => setSinglePrescription(doc.data()))
      .catch(err => console.error(err));
  }, [params.prescriptionId]);

  if (!singlePrescription) {
    return null;
  } else {
    return (
      <div className='single-prescription-container'>
        <div className='back-to-all'>
          <p>
            <Link to='/user/patient/:id/prescriptions'>My Prescriptions</Link>
          </p>
        </div>
        <PrescriptionSummary params={params} singlePrescription={singlePrescription} />
        <Drugs params={params} singlePrescription={singlePrescription} />
      </div>
    );
  }
}
