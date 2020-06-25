import React from 'react';
import '../styles/Connection.css';
import { Link } from 'react-router-dom';
export default function Connection () {
  return (
    <div className='connection-container'>
      <div className='user-connection-container doctor'>
        <h2>I'm a doctor</h2>
        <p>Create prescriptions and send them directly to your patients.</p>
        <Link to='/user/doctor'><button className='connection-button doctor'>Connection</button></Link>
      </div>
      <div className='user-connection-container patient'>
        <h2>I'm a patient</h2>
        <p>Find all your prescriptions in one click and get notifications for never missing taking your pills.</p>
        <Link to='/user/patient'><button className='connection-button doctor'>Connection</button></Link>
      </div>
    </div>
  );
}
