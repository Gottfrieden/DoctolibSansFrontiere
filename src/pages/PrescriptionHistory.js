import React, { useState, useEffect } from 'react';
import fb from '../services/firebase';
import moment from 'moment';

const PrescriptionHistory = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const getAllPrescriptions = fb.firestore().collection('prescriptions').onSnapshot(s => {
      setPrescriptions(s.docs.map(prescription => {
        console.log({ id: prescription.id, ...prescription.data() });
        return { id: prescription.id, ...prescription.data() };
      }));
    });

    return () => getAllPrescriptions();
  }, []);

  return (
    <>
      <h2>My prescriptions</h2>
      <main id='prescription-main-container' className='main-container'>
        <div className='search-background'>
          <input type='search' placeholder='Rechercher' />
          <div>
            {prescriptions.map(p =>
              <div key={p.id}>
                <p>Delivered {moment.unix(p.created_at.seconds).format('MMMM, DD Do YYYY')} at {moment.unix(p.created_at.seconds).format('h:mm:ss a')}</p>
                <p>{p.patient_firstname}</p>
                <p>{p.patient_name}</p>
              </div>)}
          </div>
        </div>
      </main>
    </>
  );
};

export default PrescriptionHistory;
