import React from 'react';
import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
`;

export const GridBase = ({ children, ...props }) => {
  return (
    <GridContainer {...props}>
      {children}
    </GridContainer>
  )
}
