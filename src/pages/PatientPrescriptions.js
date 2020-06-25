import fb from '../services/firebase';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import '../styles/PatientPrescriptions.css';

const PatientPrescriptions = () => {
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
      <h2>My Prescriptions</h2>
      <main id='seeprescription-main-container' className='main-container'>
        <div className='patient-prescriptions-container'>
          {prescriptions.map(p => {
            return (
              <Link to={`/patient/prescriptions/${p.id}`}>
                <div className='patient-prescription-container'>
                  <div className='prescription-status'>
                    <div className={`prescription-status-icon ${p.status}`} />
                  </div>
                  <div className='prescription-delivery-date'>
                    <p>{p.status === 'canceled' ? `Canceled on ${moment.unix(p.created_at.seconds).format('MMMM Do YYYY')}` : `Delivered on ${moment.unix(p.created_at.seconds).format('MMMM Do YYYY')}`}</p>
                  </div>
                  <div className='prescription-doctor-name'>
                    <p>Dr. {p.doctor.firstname} {p.doctor.lastname}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default PatientPrescriptions;
