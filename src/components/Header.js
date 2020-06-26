import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../styles/Header.css';

const Header = ({ login, handleChangeLogin }) => {
  return (
    <header>
      <Link to='/' className={(login === 'doctor' || login === 'patient') && 'logo-top-header'}>
        <div className='logo-container'>
          <img src={Logo} alt='Ordoli' />
        </div>
      </Link>
      <nav className={(login === 'doctor' || login === 'patient') && 'navbar-bottom-header'}>
        <ul>
          {login === 'patient' &&
            <Link to='/patient/agenda'>
              <li>
                Agenda
              </li>
            </Link>}
          {login === 'patient' &&
            <Link to='/patient/prescriptions'>
              <li>
                My Prescriptions
              </li>
            </Link>}
          {login === 'doctor' &&
            <Link to='/doctor/prescriptions'>
              <li>
                History
              </li>
            </Link>}
          {login === 'doctor' &&
            <Link to='/doctor/new-prescription' className='new-prescription-container'>
              <li className='create-button-header'>
                <span className='header-new-prescription' /><p>Create</p>
              </li>
            </Link>}
          <li className='login-logout-nav-element'>
            <Link onClick={() => handleChangeLogin('')} to='/connection'>{login ? 'Sign out' : 'Sign in'}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
