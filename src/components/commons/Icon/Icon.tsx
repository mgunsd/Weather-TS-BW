import React, { FC } from 'react';
import styled from 'styled-components';

export const LogoContainer:FC = styled.div`
  margin: '12px 24px';
`;

interface IconProps{
  code:string
}; 

//https://www.weatherbit.io/static/img/icons/{icon_code}.png
export const Icon: FC<IconProps> = ({ code }) => {
  return (
    <LogoContainer>
      <img alt='􀇗' src={`/src/assets/icons/${code}.png`} height={"70vw"} />
    </LogoContainer>
  )
};