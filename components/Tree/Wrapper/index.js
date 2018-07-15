import React from 'react';
import Way from '../Way';
import Task from '../Task';
import Folder from '../Folder';
import Splitter from '../Splitter';
import { T } from '../../../tree';


const Wrapper = ({ node }) => {
  switch (node.type) {
    case T.way:
      return <Way node={node} />;
    case T.task:
      return <Task node={node} />;
    case T.folder:
      return <Folder node={node} />;
    case T.splitter:
      return <Splitter node={node} />;
    default: return '';
  }
};

export default Wrapper;
