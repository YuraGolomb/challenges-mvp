import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SCtask = styled.div`
  padding: 5px;
  border: 1px solid green;
`;

const Task = ({ node }) => (
  <SCtask>
    {node.name}
  </SCtask>
);

Task.propTypes = {
  node: PropTypes.object.isRequired,
};

export default Task;
