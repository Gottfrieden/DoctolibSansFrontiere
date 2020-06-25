import React from 'react';
import '../styles/PrescriptionSummary.css';

export default function PrescriptionSummary () {
  return (
    <>
      <h2>Summary</h2>
      <div className='prescription-summary-container content-container'>
        <div className='first-line'>
          <h3>Ordonnance n°5211</h3>
          <p>Delivered on 12 december 2012</p>
        </div>
        <p className='doctor-name'>Dr. Baptiste Courgibet</p>
        <div className='adress-phone-container'>
          <div className='adress-container'>
            <p>11 rue du truc</p>
            <p>69002 Lyon</p>
          </div>
          <p>04.78.12.12.12</p>
        </div>
        <div className='medication-info-container'>
          <div className='image-content-container'>
            <span className='pill-image' />
            <p>3 médicaments</p>
          </div>
          <div className='image-content-container'>
            <span className='calendar-image' />
            <p>2 semaines</p>
          </div>
        </div>
        <div className='renew-container-bottom'>
          <p>Renouvelable 1 fois</p>
        </div>
      </div>
    </>
  );
}
