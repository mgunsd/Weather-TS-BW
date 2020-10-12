import styled, { css } from 'styled-components';
import { Color, Font } from 'utils';

export const Text = styled.p`
  font: ${Font('body')};
  margin: ${props => props.margin};
  `;

export const ButtonStyles = css`
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  transition: all 150ms ease-out;
  cursor: pointer;
  border-radius: 4px;
  border: solid;
  border-width: 1px;
  outline: none;
  overflow: hidden;
  text-decoration: none;
  min-width:0;
  padding: 12px 10px;
  ${Text}{
    font: normal bold 2vw / 1.5em ${Font('title')};
    color: ${Color('text')};
    margin: 0 10px;
  };
  border-color: transparent;
  background-color: transparent;
  &:focused{
    border-color: ${Color('text')};
    background-color: ${Color('text')};
  }
  &:hover{
    background-color: ${Color('gray')};
  }
  &:active{
    background-color: ${Color('turq')};
  }
  &.active{
    ${Text}{
      color: ${Color('text')};
      };
  }
  &:disabled{
    background-color: ${Color('base')};
    ${Text}{
    color: ${Color('gray')};
    }
  }

`;