import React from 'react';
import SingleDrug from './SingleDrug';

export default function Drugs (props) {
  return (
    <div className='all-drugs-container'>
      <h2 className='title-with-line'>Medication</h2>
      <SingleDrug params={props.params} singlePrescription={props.singlePrescription} />
    </div>
  );
}
