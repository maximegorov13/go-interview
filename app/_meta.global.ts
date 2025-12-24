import type { MetaRecord } from 'nextra';

const GLOBAL: MetaRecord = {
  index: '',
  separator_1: {
    type: 'separator',
    title: 'Go',
  },
  go: {
    display: 'children',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    items: {
      slices: '',
    },
  },
};

export default GLOBAL;
