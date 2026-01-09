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
      'concurrency-patterns': {
        title: 'Паттерны конкурентности',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        items: {
          'future-promise': '',
          generator: '',
          pipeline: '',
          'fan-in-fan-out': '',
          semaphore: '',
          'worker-pool': '',
          'goroutine-error-handling': '',
          'producer-consumer': '',
          errgroup: '',
          'rate-limiting': '',
        },
      },
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
      networks: '',
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
