import React from 'react';
import '../styles/SingleDrug.css';

export default function SingleDrug (props) {
  console.log(props.singlePrescription);

  return (
    <>
    {props.singlePrescription !== undefined && props.singlePrescription.drugs.map(d => {
          return (
            <div className='single-drug-container content-container'>
          <div className='drug-name'>
            <h3>{d.name}</h3>
          </div>
          <div className='single-drug-content-container'>
            <div className='image-content-container'>
              <span className='time-image' />
              <p>{d.quantity} {d.quantity > 1 ? 'pills' : 'pill'} {d.frequency}x per days</p>
            </div>
            <div className='image-content-container'>
              <span className='calendar-image' />
              <p>For {d.traitment_duration} days</p>
            </div>
            <div className='image-content-container'>
              <span className='info-image' />
              <p>{d.additional_information}</p>
            </div>
          </div>
        </div>
      )
    })}

    </>
  );
}
