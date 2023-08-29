import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      name: 'ScrollCarousel',
      format: 'umd',
      inlineDynamicImports: true,
      globals: {
        react: 'React',
      },
    },
    {
      file: pkg.module,
      name: 'ScrollCarousel',
      format: 'es',
      inlineDynamicImports: true,
    },
  ],
  context: 'this',
  plugins: [
    resolve(),
    typescript(),
    terser({ format: { comments: false }, compress: { drop_console: true } }),
    babel({
      babelHelpers: 'bundled',
      babelrc: true,
      exclude: 'node_modules/**',
    }),
    commonjs({ include: /node_modules/ }),
    postcss(),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
