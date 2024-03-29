import React from 'react';
import styled from 'styled-components';
import Button from '../button';
import { FooterProps } from './type';

const Footer = (props: FooterProps) => {
  const { isLoading, totalCount, totalPrice, onClickHandler } = props;

  return (
    <Base>
      <TotalWrapper>
        <TotalItem>총 수량 : {totalCount.toLocaleString()}개</TotalItem>
        <TotalItem>총 가격 : {totalPrice.toLocaleString()}원</TotalItem>
      </TotalWrapper>
      <Button
        size="small"
        color="black"
        onClickhandler={onClickHandler}
        disabled={isLoading || totalCount === 0}
      >
        {isLoading ? '로딩중...' : '주문하기'}
      </Button>
    </Base>
  );
};

export default Footer;

const Base = styled.div`
  position: absolute;
  bottom: 0;

  width: 350px;
  height: 170px;

  border-radius: 20px 20px 0px 0px;
  background: #fff;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 27px;
`;

const TotalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  gap: 0.76px;
`;

const TotalItem = styled.div`
  width: 100%;
  height: 26.242px;
  color: #000;
  font-size: 18px;
  font-style: normal;
  text-align: end;
  font-weight: 400;
  line-height: normal;
`;
