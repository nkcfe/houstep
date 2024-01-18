import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import getProductData from '../components/api/getProductData';
import ProductCard from '../components/card';
import { ProductProps } from '../components/card/type';

const Order = () => {
  const [productItems, setProductItems] = useState<ProductProps[] | []>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const result = await getProductData();
      setProductItems(result);
    };
    fetchProductData();
  }, []);

  return (
    <Base>
      <Header />
      <ProductList>
        {productItems.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </ProductList>
      <Footer />
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
