import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from './shared/Routers';
import Templates from './components/Layout';
import styled from 'styled-components';

const App = () => {
  return (
    <BrowserRouter>
      <StyledApp>
        <Templates>
          <Routers />
        </Templates>
      </StyledApp>
    </BrowserRouter>
  );
};

export default App;

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background: rgba(181, 181, 181, 0.4);
`;
