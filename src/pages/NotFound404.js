import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Color, Font } from 'utils';
//const c = Color('text');
const c = '#807C7C';
const rotate = keyframes`

  0% {
    transform: translateY(0);
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    transform: translateY(-50px);
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 ${c}, 0 2px 0 ${c}, 0 3px 0 ${c}, 0 4px 0 ${c}, 0 5px 0 ${c}, 0 6px 0 ${c}, 0 7px 0 ${c}, 0 8px 0 ${c}, 0 9px 0 ${c}, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
`;

const Base = styled.div` 
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  min-height:100vh;
  background-color: ${Color('base')};

`;

const Fof = styled.h1` 
  font: normal bold 10vw/19vw ${Font('title')};
  letter-spacing: -0.47px;
  color: ${Color('text')};
  animation: ${rotate} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;

export const NotFound404 = () => {
  return (
    <Base>
      <Fof>
        This page is
      </Fof>
      <Fof>
        in a self isolation!
      </Fof>
    </Base>
  )
}