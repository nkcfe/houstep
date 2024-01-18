import React from 'react';
import styled from 'styled-components';
import { ProductProps } from './type';
import Bedge from '../bedge';
import useCartStore from '../../store/cartStore';

const ProductCard: React.FC<{ item: ProductProps }> = ({ item }) => {
  const { event, name, price } = item;
  const { cartItems, increaseCartItem, decreaseCartItem } = useCartStore();

  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

  return (
    <Base isInCart={cartItem !== undefined}>
      <ProductImage />
      <Wrapper>
        <ProductWrapper>
          <ProductName>{name}</ProductName>
          {event && <Bedge />}
        </ProductWrapper>
        <ProductWrapper>
          <ButtonWrapper>
            <CountButton onClick={() => decreaseCartItem(item)}>-</CountButton>
            <ProductCount>{cartItem ? cartItem.count : 0}</ProductCount>
            <CountButton onClick={() => increaseCartItem(item)}>+</CountButton>
          </ButtonWrapper>
          <ProductPrice>{price.toLocaleString() + '원'}</ProductPrice>
        </ProductWrapper>
      </Wrapper>
    </Base>
  );
};

export default ProductCard;

const Base = styled.div<{ isInCart: boolean }>`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;

  width: 301px;
  height: 80px;
  padding: 9px 8px 9px 12px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);

  background: ${({ isInCart }) =>
    isInCart ? 'rgba(247, 90, 47, 0.10)' : '#fff'};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

const ProductWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const ProductImage = styled.img`
  min-width: 62px;
  min-height: 62px;
  background: #d9d9d9;
`;

const ProductName = styled.div`
  color: #000;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountButton = styled.div`
  width: 18px;
  height: 18px;

  color: #000;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;

  border-radius: 100%;
  cursor: pointer;
  &:hover {
    background: #c4c4c4;
    color: #fff;
  }
  transition: all 0.1s ease-in-out;
`;

const ProductCount = styled.div`
  color: #000;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  height: 18px;
  min-width: 18px;
`;

const ProductPrice = styled.div`
  margin-left: auto;
  color: #000;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;
