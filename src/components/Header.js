import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../styles/Header.css';

const Header = (props) => {
  console.log(window.location.href)
  const [url, setUrl] = useState(window.location.href);

  useEffect(() => {
    setUrl(window.location.href)
  }, [url])

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
            {url.includes('connection') && <Link to='/connection'>Sign in</Link>}
          </li>
          <li>
            {url.includes('patient') && <Link to='/patient/agenda'>Agenda</Link>}
          </li>
          <li>
            {url.includes('patient') && <Link to='/patient/prescriptions'>My Prescriptions</Link>}
          </li>
          <li>
            {url.includes('doctor') && <Link to='/doctor/new-prescription'>New Prescription</Link>}
          </li>
          <li>
          {url.includes('doctor') && <Link to='/doctor/prescriptions'>Prescriptions History</Link>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
