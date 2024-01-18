import React from 'react';
import styled from 'styled-components';

interface TemplatesProps {
  children: React.ReactNode;
}

const Templates: React.FC<TemplatesProps> = ({ children }) => {
  return <Base>{children}</Base>;
};

export default Templates;

const Base = styled.div`
  width: 350px;
  height: 864px;
`;
