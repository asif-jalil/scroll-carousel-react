import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';

import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      name: 'ScrollCarousel',
      format: 'umd',
      globals: {
        react: 'React',
      },
    },
    {
      file: pkg.module,
      name: 'ScrollCarousel',
      format: 'es',
    },
  ],
  plugins: [
    resolve(),
    typescript(),
    terser({ format: { comments: false }, compress: { drop_console: true } }),
    babel({ babelHelpers: 'bundled' }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
