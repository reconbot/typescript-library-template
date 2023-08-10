import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './lib/index.ts',
  plugins: [
    typescript(),
    resolve({}),
  ],
  output: [
    { format: 'esm', file: './dist/index-esm.mjs' },
    { format: 'cjs', file: './dist/index.js' },
  ],
  external: [],
}
