import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../styles/Header.css';

const Header = ({ login, handleChangeLogin }) => {

  return (
    <header>
      <Link to='/'>
        <div className='logo-container'>
          <img src={Logo} alt='Ordoli' />
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link onClick={() => handleChangeLogin('')} to='/connection'>{login ? 'Sign out' : 'Sign in'}</Link>
          </li>
          <li>
            {login === 'patient' && <Link to='/patient/agenda'>Agenda</Link>}
          </li>
          <li>
            {login === 'patient' && <Link to='/patient/prescriptions'>My Prescriptions</Link>}
          </li>
          <li>
            {login === 'doctor' && <Link to='/doctor/new-prescription'>New Prescription</Link>}
          </li>
          <li>
            {login === 'doctor' && <Link to='/doctor/prescriptions'>Prescriptions History</Link>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
