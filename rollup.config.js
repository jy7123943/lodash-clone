import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

const extensions = ['.js', '.ts'];

export default {
  input: './src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'es',
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/],
  plugins: [
    alias({
      entries: [
        { find: 'src', replacement: './src' },
      ],
    }),
    peerDepsExternal(),
    commonjs(),
    resolve({
      preferBuiltins: false,
      extensions,
    }),
    typescript({
      typescript: require('ttypescript'),
      clean: true,
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions,
    }),
  ],
  preserveModules: true,
};
