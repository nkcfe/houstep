import React from 'react';
import styled from 'styled-components';

const ListLoader = () => {
  return (
    <Loader>
      목록을
      <br />
      불러오고 있습니다.
    </Loader>
  );
};

export default ListLoader;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #000;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
`;
