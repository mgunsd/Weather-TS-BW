import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonStyles, Text } from './ButtonStyles';

export const ButtonContainer: FC = styled.button`
  ${ButtonStyles};
`;

export const Button:FC = ({ children, ...props }) => {
  return (
    <ButtonContainer {...props}>
      {children && <Text>{children}</Text>}
    </ButtonContainer>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};