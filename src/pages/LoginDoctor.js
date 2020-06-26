import React from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

const LoginDoctor = () => {
  return (
    <main className='main-container'>
      <form className='login-form content-container'>
        <h2 id='login-title'>Log In</h2>
        <div className='login-form-field'>
          <input type='email' name='email' placeholder='Your email address'/>
        </div>
        <div className='login-form-field'>
          <input type='password' name='password' placeholder='Your paswword'/>
        </div>
        <Link to='/doctor/prescriptions'><button id='signin-doctor'>Sign In</button></Link>
      </form>
    </main>
  );
};

export default LoginDoctor;
