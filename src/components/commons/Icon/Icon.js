import React from 'react';
import styled from 'styled-components';

export const LogoContainer = styled.div`
  margin: '12px 24px';
`;
//https://www.weatherbit.io/static/img/icons/{icon_code}.png
export const Icon = ({ code }) => {
  return (
    <LogoContainer>
      <img alt='􀇗' src={`/src/assets/icons/${code}.png`} height={"70vw"} />
    </LogoContainer>
  )
};