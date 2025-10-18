import React from 'react';
import styled, { keyframes } from 'styled-components';
import Title from '../Title/Title';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * 7)); }
`;

const SliderContainer = styled.div`
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: auto;
  margin-top: 20px;
`;

const SlideTrack = styled.div`
  animation: ${scroll} 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
`;

const Slide = styled.div`
  height: 100px;
  width: 250px;
`;

const Slider = () => {
  const slides = [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png',
  ];

  // Duplicate slides for seamless looping
  const allSlides = [...slides, ...slides];

  return (<>
        <Title title="Clients" subtitle="Our Trust Worth"  description="Clixhora is trusted by over 1000+ clients across the globe.  Here are some of them." />
    <SliderContainer>
      <SlideTrack>
        {allSlides.map((src, index) => (
            <Slide key={index}>
            <img src={src} height="100" width="250" alt="" />
          </Slide>
        ))}
      </SlideTrack>
    </SliderContainer>
        </>
  );
};

export default Slider;