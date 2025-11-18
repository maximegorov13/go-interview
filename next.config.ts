import nextra from 'nextra';
import path from 'node:path';

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
});

// Export the final Next.js config with Nextra included
export default withNextra({
  // ... Add regular Next.js options here
  turbopack: {
    root: path.join(import.meta.dirname),
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.tsx',
    },
  },
  output: 'export',
  // basePath: '/go-interview',
});
