import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/order');
    }, 3000);
  });
  return (
    <Base>
      <span>
        주문에 실패하였습니다.
        <br />
        다시 시도해주세요.
      </span>
    </Base>
  );
};

export default Error;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background: #fff;

  span {
    color: #000;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
  }
`;
