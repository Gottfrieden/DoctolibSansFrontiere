import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../styles/Header.css';

const Header = (props) => {
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
            <Link to='/connection'>Connection</Link>
          </li>
          <li>
            <Link to='/user/patient'>Register as a Patient</Link>
          </li>
          <li>
            <Link to='/user/doctor'>Register as a Doctor</Link>
          </li>
          <li>
            <Link to='/user/patient/:id/agenda'>Agenda</Link>
          </li>
          <li>
            <Link to='/user/patient/:id/prescription'>My Prescriptions</Link>
          </li>
          <li>
            <Link to='/user/patient/:id'>My account</Link>
          </li>
          <li>
            <Link to='user/doctor/:id/prescription/new'>New Prescription</Link>
          </li>
          <li>
            <Link to='/user/doctor/:id/prescription/history'>Prescriptions History</Link>
          </li>
          <li>
            <Link to='/user/doctor/:id'>My account</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
