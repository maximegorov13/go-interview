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
    // @ts-expect-error
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
      defer: '',
      error: '',
      concurrency: '',
      'runtime-scheduler': '',
      'garbage-collector': '',
    },
  },
  separator_2: {
    type: 'separator',
    title: 'Базы данных',
  },
  db: {
    title: 'Базы данных',
    display: 'children',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    items: {
      'sql-nosql': '',
    },
  },
  separator_3: {
    type: 'separator',
    title: 'Общее',
  },
  common: {
    title: 'Общее',
    display: 'children',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    items: {
      networks: '',
    },
  },
  separator_4: {
    type: 'separator',
    title: 'Задачи',
  },
  tasks: {
    title: 'Задачи',
    display: 'children',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    items: {
      slices: '',
    },
  },
};

export default GLOBAL;
