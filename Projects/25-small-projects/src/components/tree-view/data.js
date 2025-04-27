
export const treeData = [
  {
    label: 'Parent 1',
    to: '/parent1',
    children: [
      {
        label: 'Child 1.1',
        to: '/parent1/child1',
      },
      {
        label: 'Child 1.2',
        to: '/parent1/child2',
      }
    ]
  },
  {
    label: 'Parent 2',
    to: '/parent2',
    children: [
      {
        label: 'Child 2.1',
        to: '/parent2/child1',
      },
      {
        label: 'Child 2.2',
        to: '/parent2/child2',
        children: [
          {
            label: 'Grandchild 2.2.1',
            to: '/parent2/child2/grandchild1',
          }
        ]
      }
    ]
  },
  {
    label: 'Parent 3',
    to: '/parent3',
    children: [
      {
        label: 'Child 3.1',
        to: '/parent3/child1',
      },
      {
        label: 'Child 3.2',
        to: '/parent3/child2',
      }
    ]
  }
];
