import React from 'react';
import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  place-items: center;
  min-height:100vh;
`;

export const GridCenter = ({ children, ...props }) => {
  return (
    <GridContainer {...props}>
      {children}
    </GridContainer>
  )
}
