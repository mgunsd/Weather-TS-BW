import React, { FC } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ButtonStyles, Text } from './ButtonStyles';

export const LinkContainer:FC = styled(NavLink)`
  ${ButtonStyles};
`;

export const Link :FC = ({ children, ...props }) => (
  <LinkContainer {...props}>
    {children && <Text>{children}</Text>}
  </LinkContainer>
);
