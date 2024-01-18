import React from 'react';
import Header from '../components/header';
import styled from 'styled-components';
import Footer from '../components/footer';

const Order = () => {
  return (
    <Base>
      <Header />
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
  padding-top: 57px;
`;
