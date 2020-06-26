import React from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

const LoginDoctor = () => {
  return (
    <main className='main-container'>
      <form className='login-form content-container'>
        <h2 id='login-title'>Log In</h2>
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
        <Link to='/user/doctor/:id/prescription/history'><button id='signin-doctor'>Sign In</button></Link>
      </form>
    </main>
  );
};

export default LoginDoctor;
