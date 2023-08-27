import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './lib/index.ts',
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs(),
  ],
  output: [
    { format: 'esm', file: './dist/index-esm.mjs' },
    { format: 'cjs', file: './dist/index.js' },
  ],
  external: [],
}
