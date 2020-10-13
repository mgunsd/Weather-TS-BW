import React, { FC } from 'react';
import styled from 'styled-components';

export const GridContainer :FC= styled.div`
  display: grid;
`;

export const GridBase :FC= ({ children, ...props }) => {
  return (
    <GridContainer {...props}>
      {children}
    </GridContainer>
  )
}
