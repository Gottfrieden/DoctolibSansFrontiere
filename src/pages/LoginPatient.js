import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const LoginPatient = ({ handleChangeLogin }) => {
  return (
    <main className='main-container'>
      <div className='back-to-login'>
        <p>
          <Link to='/connection'>Go back</Link>
        </p>
      </div>
      <form className='login-form content-container login-patient-container'>
      <h2 id='login-title'>Patient Log in</h2>
        <div className='login-form-field'>
          <input type='email' name='email' placeholder='Your email'/>
        </div>
        <div className='login-form-field'>
          <input type='password' name='password' placeholder='Your password' />
        </div>
        <Link to='/patient/prescriptions'><button onClick={() => handleChangeLogin('patient')} id='signin-patient'>Sign In</button></Link>
      </form>
    </main>
  );
};

export default LoginPatient;
