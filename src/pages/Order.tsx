import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import getProductData from '../components/api/getProductData';
import ProductCard from '../components/card';
import { ProductProps } from '../components/card/type';
import ListLoader from '../components/Loader/ListLoader';
import useCartStore from '../store/cartStore';
import { useNavigate } from 'react-router-dom';
import orderCartData from '../components/api/postOrder';

const Order = () => {
  const [productItems, setProductItems] = useState<ProductProps[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { cartItems, clearCartItems } = useCartStore();

  const navigate = useNavigate();

  const totalCount = cartItems.reduce((acc, cur) => {
    return acc + cur.count;
  }, 0);

  const totalPrice = cartItems.reduce((acc, cur) => {
    return acc + cur.price * cur.count;
  }, 0);

  const orderCompleteHandler = async () => {
    const result = await orderCartData(cartItems);
    if (result) {
      clearCartItems();
      navigate('/complete');
    } else {
      navigate('/error');
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchProductData = async () => {
      const result = await getProductData();
      setProductItems(result);
      setIsLoading(false);
    };
    fetchProductData();
  }, []);

  return (
    <Base>
      <Header />
      {isLoading ? (
        <ListLoader />
      ) : (
        <ProductList>
          {productItems?.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </ProductList>
      )}

      <Footer
        isLoading={isLoading}
        totalCount={totalCount}
        totalPrice={totalPrice}
        onClickHandler={orderCompleteHandler}
      />
    </Base>
  );
};

export default Order;

const Base = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100%;
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 18px;
  overflow-y: scroll;
  width: 100%;
  padding: 18px 24px 18px 24px;

  height: calc(864px - (170px + 57px));
`;
