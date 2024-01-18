import React from 'react';
import styled from 'styled-components';

const Bedge = () => {
  return (
    <Base>
      <span>이벤트</span>
    </Base>
  );
};

export default Bedge;

const Base = styled.div`
  margin-left: 10px;
  margin-bottom: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 23px;
  border-radius: 10px;
  background: #f75a2f;
  span {
    color: #fff;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.16px;
  }
`;
