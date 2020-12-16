import React from 'react';
import styled from 'styled-components';
import Image from '../img/bg-1.jpg';

const Section = styled.section`
  background: url(${Image}) center;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: -60px;
`;

const Container = styled.div`
  color: #fff;
  padding: 2rem;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  margin: 2rem;
  border-radius: 10px;

  h1 {
    font-size: clamp(2rem, 8vw, 5rem);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: clamp(1rem, 6vw, 2.5rem);
    margin-bottom: 1rem;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <h1>title</h1>
        <p>description</p>
        <button>Learn more</button>
      </Container>
    </Section>
  );
};

export default Hero;
