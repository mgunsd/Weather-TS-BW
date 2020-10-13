import React, { FC } from 'react';
import styled from 'styled-components';

export const GridContainer:FC = styled.div`
  display: grid;
  place-items: center;
  min-height:100vh;
`;

export const GridCenter:FC = ({ children, ...props }) => {
  return (
    <GridContainer {...props}>
      {children}
    </GridContainer>
  )
}
