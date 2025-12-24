import type { MetaRecord } from 'nextra';

const GLOBAL: MetaRecord = {
  index: '',
  separator_1: {
    type: 'separator',
    title: 'Go',
  },
  go: {
    display: 'children',
    items: {
      advantages: '',
      disadvantages: '',
      variables: '',
      'data-types': '',
      'composite-data-types': '',
      'areas-of-visibility': '',
      strings: '',
      loops: '',
      pointers: '',
      structures: '',
      methods: '',
      interfaces: '',
      context: '',
      'array-slice': '',
      maps: '',
    },
  },
  separator_2: {
    type: 'separator',
    title: 'Задачи',
  },
  tasks: {
    display: 'children',
    items: {
      slices: '',
    },
  },
};

export default GLOBAL;
