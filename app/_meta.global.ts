import type { MetaRecord } from 'nextra';

const GLOBAL: MetaRecord = {
  index: '',
  go: {
    title: 'Go',
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
    },
  },
  'advanced-go': {
    title: 'Продвинутый Go',
    items: {
      concurrency: '',
      'runtime-scheduler': '',
      'garbage-collector': '',
      'concurrency-patterns': '',
    },
  },
  db: {
    title: 'Базы данных',
    items: {
      'sql-nosql': '',
      sql: '',
      subqueries: '',
      indices: '',
      transactions: '',
      replication: '',
    },
  },
  common: {
    title: 'Общее',
    items: {
      git: '',
      networks: '',
      testing: '',
      oop: '',
      architecture: '',
      'clean-architecture': '',
      resilience: '',
      docker: '',
      k8s: '',
      kafka: '',
      principles: {
        title: 'Принципы',
      },
    },
  },
  tasks: {
    title: 'Задачи',
    items: {
      slices: '',
      concurrency: '',
      channels: '',
      'concurrency-patterns': '',
      'async-cache': '',
    },
  },
};

export default GLOBAL;
