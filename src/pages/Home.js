import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <main id='home-main-container' className='main-container'>
        <div className='home-left-content'>
          <h1>With Ordoli, make health your priority</h1>
          <p>Stop forgetting taking your pills and benefit digital prescription to improve your health.</p>
          <Link to='/connection'>
            <div className='home-login-button'>Get access</div>
          </Link>
        </div>
        <div className='home-right-content' />
      </main>
    </>
  );
};

export default Home;
