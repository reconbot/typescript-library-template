import { createBundle } from 'dts-buddy'

await createBundle({
  project: 'tsconfig.json',
  output: 'dist/index.d.ts',
  modules: {
    '@reconbot/typescript-library-template': './lib/index.ts',
  },
})
