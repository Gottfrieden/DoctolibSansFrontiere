import React, { useState, useEffect } from 'react';
import fb from '../services/firebase';
import moment from 'moment';
import { Link } from 'react-router-dom';

const SeePrescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  // todo connect patient prescriptions
  useEffect(() => {
    const getAllPatientPrescriptions = fb.firestore().collection('prescriptions').onSnapshot(s => {
      setPrescriptions(s.docs.map(prescription => {
        console.log({ id: prescription.id, ...prescription.data() });
        return { id: prescription.id, ...prescription.data() };
      }));
    });

    return () => getAllPatientPrescriptions();
  }, []);
  return (
    <>
      <h2>My Prescriptions</h2>
      <main id='seeprescription-main-container' className='main-container' />
      <div className='search-background'>
        <input type='search' placeholder='Rechercher' />
        <div>
          {prescriptions.map(p =>
            <Link to='/single-prescription' key={p.id}>
              <div style={{ backgroundColor: 'pink' }}>
                <p>Delivered {moment.unix(p.created_at.seconds).format('MMMM, DD Do YYYY')} at {moment.unix(p.created_at.seconds).format('h:mm:ss a')}</p>
                <p>{p.patient_firstname}</p>
                <p>{p.patient_name}</p>
              </div>
            </Link>)}
        </div>
      </div>
    </>
  );
};

export default SeePrescription;
