import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import replace from '@rollup/plugin-replace';
import livereload from 'rollup-plugin-livereload';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'example/index.tsx',
  output: {
    file: 'example-server/bundle.js',
    format: 'iife',
    sourcemap: true,
    inlineDynamicImports: true,
  },
  plugins: [
    resolve(),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      babelrc: true,
      exclude: 'node_modules/**',
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    commonjs(),
    postcss(),
    serve({
      open: false,
      verbose: true,
      contentBase: ['', 'example'],
      host: 'localhost',
      port: 8100,
    }),
    livereload({ watch: ['src', 'example'], port: 8100, verbose: true }),
  ],
};
