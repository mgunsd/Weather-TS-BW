import styled, { css } from 'styled-components';
import { Color, Font } from 'utils';

//Master text styles
export const Typography = css`
color: ${Color('text')};
`;

//Titles
export const H1 = styled.h1`
font: normal bold 7vw / .9em ${Font('title')};
letter-spacing: -0.47px;
margin: .67em 0;
${Typography}
`;

export const H4 = styled.h4`
font: normal bold 4vw / 1.5em ${Font('title')};
text-transform: uppercase;
${Typography}
`;

//General
export const Body2 = styled.p`
font: normal normal 18px / 37px ${Font('body')};
color: ${Color('body')};
`;

export const Regular = css`
  font: normal 400 1vw / 1.5em ${Font('title')};
  //display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-decoration: none;
  ${Typography}
  @media (max-width: 991px){
    font-size: 2vw;
  };
  @media (max-width: 767px){
    font-size: 2.7vw;
    grid-column: 1/3;
  }; 
`;

export const Body = styled.p`
  ${Regular}
`;

export const A = styled.a`
  ${Regular}
`;