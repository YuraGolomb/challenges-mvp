import React from 'react';
import styled from 'styled-components';

import { tree } from '../tree';
import Wrapper from '../components/Tree/Wrapper';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () => (
  <div>
    <Title>Tree page</Title>
    {tree.root.map(n => <Wrapper key={n.name} node={n} />)}
  </div>
);
