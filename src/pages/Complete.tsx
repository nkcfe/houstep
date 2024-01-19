import React, { useEffect } from 'react';
import styled from 'styled-components';
import Check from '../components/icons/Check';
import { useNavigate } from 'react-router-dom';

const Complete = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/order');
    }, 3000);
  });
  return (
    <Base>
      <Check />
      <span>주문이 완료되었습니다.</span>
    </Base>
  );
};

export default Complete;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

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
