import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const LoginPatient = () => {
  return (
    <main className='main-container'>
      <h2 id='login-title'>Patient Log in</h2>
      <form className='login-form content-container'>
        <div className='login-form-field'>
          <label htmlFor='email' name='email'>
            Email
          </label>
          <input type='email' name='email' />
        </div>
        <div className='login-form-field'>
          <label htmlFor='password' name='password'>
            Password
          </label>
          <input type='password' name='password' />
        </div>
        <Link to='/patient/prescriptions'><button id='signin-patient'>Sign In</button></Link>
      </form>
    </main>
  );
};

export default LoginPatient;
