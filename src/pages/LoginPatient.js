import React from 'react';
import { Link } from 'react-router-dom';

const LoginPatient = () => {
  return (
    <main className='main-container'>
      <h2>Patient Log in</h2>
      <form className='login-form content-container'>
        <div className='login-form-field'>
          <label htmlFor='email' name='email'>
            <input type='email' name='email' />
          </label>
        </div>
        <div className='login-form-field'>
          <label htmlFor='password' name='password'>
            <input type='password' name='password' />
          </label>
        </div>
        <Link to='/user/patient/:id/prescriptions'><button>Sign In</button></Link>
      </form>
    </main>
  );
};

export default LoginPatient;
