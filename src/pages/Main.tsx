import React from 'react';
import styled from 'styled-components';
import LogoLarge from '../components/icons/LogoLarge';
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const moveToOrder = () => {
    navigate('/order');
  };

  return (
    <Base>
      <LogoLarge />
      <Button size="large" color="white" onClickhandler={moveToOrder}>
        주문하러 가기
      </Button>
    </Base>
  );
};

export default Main;

const Base = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 41px;
`;
