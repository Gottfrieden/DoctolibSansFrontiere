import React from 'react';
import demat from '../images/dematconsult.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <main id='home-main-container' className='main-container'>
        <section className='home-section-background'>
          <img src={demat} alt='dematconsult' />
        </section>
      </main>
    </>
  );
};

export default Home;
