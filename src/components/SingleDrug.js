import React from 'react';
import '../styles/SingleDrug.css';

export default function SingleDrug () {
    return (
        <div className='single-drug-container content-container'>
            <div className='drug-name'>
                <h3>Doliprane 1000mg</h3>
            </div>
            <div className='single-drug-content-container'>
                <div className='image-content-container'>
                    <span className='time-image' />
                    <p>1 pill 3x per days</p>
                </div>
                <div className='image-content-container'>
                    <span className='calendar-image' />
                    <p>For 5 days</p>
                </div>
                <div className='image-content-container'>
                    <span className='info-image' />
                    <p>Before each meal</p>
                </div>
            </div>
        </div>
    )
}