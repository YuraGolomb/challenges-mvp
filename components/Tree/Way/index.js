import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

const SCway = styled.div`
  padding: 5px;
  border: 1px solid green;
`;

const Way = ({ node }) => (
  <SCway>
    {node.name}
    {node.children.map(n => <Wrapper key={n.name} node={n} />)}
  </SCway>
);

Way.propTypes = {
  node: PropTypes.object.isRequired,
};

export default Way;
