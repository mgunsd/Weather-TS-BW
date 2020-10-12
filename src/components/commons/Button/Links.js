import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ButtonStyles, Text } from './ButtonStyles';

export const LinkContainer = styled(NavLink)`
  ${ButtonStyles};
`;

export const Link = ({ children, ...props }) => (
  <LinkContainer {...props}>
    {children && <Text>{children}</Text>}
  </LinkContainer>
);
