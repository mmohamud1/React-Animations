import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../img/bg-1.jpg';

const Home = () => {
  return (
    <>
      <Header />
      <Hero image={Image} title='' />
    </>
  );
};

export default Home;
