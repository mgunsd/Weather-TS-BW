import React from "react";
import styled from "styled-components";
import { Side } from './Side';
import { Container } from './Container';

const Base = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #55b9f3;
  height: 100vh;
  width: 100vw;
  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const Main = styled.main`
  ${Container}
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const ResponsiveMain = ({ children }) => {
  return (
    <Base>
      <Main>{children}</Main>
      <Side />
    </Base>
  );
};
