import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

const SCsplitter = styled.div``;

const Splitter = ({ node }) => (
  <SCsplitter>
    {node.ways.map(n => <Wrapper key={n.name} node={n} />)}
  </SCsplitter>
);

Splitter.propTypes = {
  node: PropTypes.object.isRequired,
};

export default Splitter;
