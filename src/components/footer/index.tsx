import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <Base></Base>;
};

export default Footer;

const Base = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 170px;

  border-radius: 20px 20px 0px 0px;
  background: #fff;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
`;
