import React, { useEffect } from 'react';
import '../styles/PrescriptionSummary.css';
import moment from 'moment';
import QRCode from "react-qr-code";

export default function PrescriptionSummary (props) {
  const p = props.singlePrescription;
  return (
    <>
      <h2>Summary</h2>
      <div className='prescription-summary-container content-container'>
        <div className='first-line'>
          <h3>Reference: <span className='light-weight-text'>{props.params.prescriptionId}</span></h3>
          <p>{p.status === 'canceled' ? `Canceled on ${moment.unix(p.created_at.seconds).format('MMMM Do YYYY')}` : `Delivered on ${moment.unix(p.created_at.seconds).format('MMMM Do YYYY')}`}</p>
        </div>
        <QRCode value={p.status} size={100}/>
        <p className='doctor-name'>Dr. {p.doctor.firstname} {p.doctor.lastname}</p>
        <div className='adress-phone-container'>
          <div className='adress-container'>
            <p>{p.doctor.adress_number} {p.doctor.adress_street_type} {p.doctor.adress_street}</p>
            <p>{p.doctor.adress_cp} {p.doctor.adress_city}</p>
          </div>
          <p>{p.doctor.tel}</p>
        </div>
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
        )
    </>
  );
}
