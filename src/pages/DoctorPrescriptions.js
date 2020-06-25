import React, { useState, useEffect } from 'react';
import fb from '../services/firebase';
import moment from 'moment';
import { Link } from 'react-router-dom';
import '../styles/DoctorPrescriptions.css';

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
    <div className="prescriptions-main-container">
      
       <h2>My prescriptions</h2>
      <div className='search-prescriptions'>
          <input className='search-background' type='search' placeholder='Search' />
      </div>   
      <main id='list-all-prescriptions' className='main-container'>
            {prescriptions.map(p =>
              <Link to='/single-doctor-prescription' key={p.id}>
                <div style={{ backgroundColor: 'pink' }}>
                  <p>Delivered {moment.unix(p.created_at.seconds).format('MMMM, DD Do YYYY')} at {moment.unix(p.created_at.seconds).format('h:mm:ss a')}</p>
                  <p>{p.patient_firstname}</p>
                  <p>{p.patient_name}</p>
                </div>
              </Link>)}
        
  
      </main>
    </div>
  );
};

export default PrescriptionHistory;