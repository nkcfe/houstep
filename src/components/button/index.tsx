import React from 'react';
import { ButtonProps } from './types';
import styled, { css } from 'styled-components';

const Button = (props: ButtonProps) => {
  const { children, onClickhandler, disabled } = props;
  return (
    <Base props={props} onClick={onClickhandler} disabled={disabled}>
      {children}
    </Base>
  );
};

export default Button;

const Base = styled.button<{ props: ButtonProps }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  cursor: pointer;
  ${({ props }) =>
    props.size === 'small'
      ? css`
          width: 100%;
          height: 47.919px;
          font-size: 18px;
          font-weight: 400;
        `
      : css`
          width: 172px;
          height: 88px;
          border-radius: 20px;
          font-size: 25px;
        `}
  ${({ props }) =>
    props.color === 'white'
      ? css`
          background: #fff;
          color: #000;
          &:hover {
            background: #bcbcbc;
          }
        `
      : css`
          background: #000;
          color: #fff;
        `}
  &:disabled {
    background: #c1c1c1;
    cursor: not-allowed;
  }
  transition: all 0.3s ease-in-out;
`;
