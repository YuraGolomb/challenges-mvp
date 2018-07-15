import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SCfolder = styled.div`
  padding: 10px;
  border: 1px solid blue;
`;

const Folder = ({ node }) => (
  <SCfolder>
    {node.name}
  </SCfolder>
);

Folder.propTypes = {
  node: PropTypes.object.isRequired,
};

export default Folder;
