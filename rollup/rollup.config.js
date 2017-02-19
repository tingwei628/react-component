import serve from 'rollup-plugin-serve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';
import path from 'path';
export default {
  entry: path.resolve(
    __dirname,
    '../examples/HOC/hoc1.js'
  ),
  dest: path.resolve(
    __dirname,
    '../examples/HOC/build/hoc1.min.js'
  ),
  format: 'iife',
  plugins: [
    serve({
      contentBase: path.resolve(__dirname, '../examples/HOC'),
      port: 3001
    }),
    babel({
      presets: [
        'react',
        ['es2015',{'modules': false}],
	'stage-0'
      ],
      exclude: path.resolve(__dirname, '../node_modules/**'),
      babelrc: false,
      plugins: ['external-helpers'],
      externalHelpers: true
    }),
    nodeResolve({
      module: true,
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: path.resolve(__dirname, '../node_modules/**'),
      nameExports: {
        [path.resolve(__dirname, '../node_modules/react/react.js')]: [
	  'PropTypes',
	  'Component'
	]
      }
    }),
    replace({
      // this is development enviroment
      // if you delploy on production, just change 'development' to 'production'
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    (process.env.NODE_ENV === 'production' && uglify({
      compress: {
        screw_ie8: true,
        warning: 'false'
      },
      output: {
        comments: false
      },
      sourceMap: false
    }))
  ]
}
