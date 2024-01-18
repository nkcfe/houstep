import React from 'react';
import styled from 'styled-components';
import LogoSmall from '../icons/LogoSmall';

const Header = () => {
  return (
    <Base>
      <LogoSmall />
    </Base>
  );
};

export default Header;

const Base = styled.div`
  position: absolute;
  top: 0;

  width: 350px;
  height: 57px;
  background-color: #000;

  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 12px;
`;
