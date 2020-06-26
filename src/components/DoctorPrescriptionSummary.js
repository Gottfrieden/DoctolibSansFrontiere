import React, { useEffect } from 'react';
import '../styles/PrescriptionSummary.css';
import '../styles/DoctorPrescriptionSummary.css';
import moment from 'moment';
import QRCode from "react-qr-code";

export default function PrescriptionSummary (props) {
  const p = props.singlePrescription;
  useEffect(() => {
    console.log(p.status)
  }, [])
  return (
    <>
      <div className='prescription-summary-container content-container'>
        <div className='first-line'>
          <h3>Reference: <span className='light-weight-text'>{props.params.prescriptionId}</span></h3>
          <p>{p.status === 'canceled' ? `Canceled on ${moment.unix(p.created_at.seconds).format('MMMM Do YYYY')}` : `Delivered on ${moment.unix(p.created_at.seconds).format('MMMM Do YYYY')}`}</p>
        </div>
        <div className='summary-status-container'>
          <div className={`prescription-status-container ${p.status}`}/>
          <span className={`status-info ${p.status}`}>{p.status === "waiting" ? `${p.status} for scan` : p.status}</span>
        </div>
        <p className='doctor-name'>{p.patient.firstname} {p.patient.lastname}</p>
        <div className='medication-info-container'>
          <div className='image-content-container'>
            <span className='pill-image' />
            <p>{p.drugs_number} pills</p>
          </div>
          <div className='image-content-container'>
            <span className='calendar-image' />
            <p>{p.drugs.duration} {p.drugs.duration === 1 ? 'jour' : 'jours'}</p>
          </div>
        </div>
        <div className='renew-container-bottom'>
          <p>{p.renewable && p.renewable_time >= 1 ? p.renewable_time === 1 ? `Renewable ${p.renewable_time} time` : `Renewable ${p.renewable_time} times` : 'Non Renewable'}</p>
        </div>
      </div>
    </>
  );
}
