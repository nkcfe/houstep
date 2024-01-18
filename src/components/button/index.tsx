import React from 'react';
import { ButtonProps } from './types';
import styled, { css } from 'styled-components';

const Button = (props: ButtonProps) => {
  const { children, onClickhandler } = props;
  return (
    <Base props={props} onClick={onClickhandler}>
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
      ? css``
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
      : css``}

  transition: all 0.3s ease-in-out;
`;
