export const T = {
  way: 'way',
  task: 'task',
  subway: 'subway',
  folder: 'folder',
  splitter: 'splitter',
};

const reactWay = [
  {
    type: T.subway,
    name: 'Basic',
    children: [
      {
        type: T.task,
        name: 'Basic Components',
      },
      {
        type: T.splitter,
        nodes: [
          [{
            type: T.task,
            name: 'Stateless',
          }],
          [{
            type: T.task,
            name: 'Class Components',
          }],
        ],
      },
      {
        type: T.task,
        name: 'Advanced Components',
      },
    ],
  },
  {
    type: T.task,
    name: 'Medium',
    children: [],
  },
  {
    type: T.task,
    name: 'Advanced',
    children: [],
  },
];

const frontEndFolder = [
  {
    type: T.way,
    name: 'React',
    children: reactWay,
  },
  {
    type: T.way,
    name: 'Angular',
    children: [],
  },
  {
    type: T.way,
    name: 'Vue',
    children: [],
  },
];

export const tree = {
  root: [
    {
      name: 'Front end',
      type: T.folder,
      children: frontEndFolder,
    },
    {
      name: 'Back end',
      type: T.folder,
    },
    {
      name: 'Q&A',
      type: T.folder,
    },
  ],
};
