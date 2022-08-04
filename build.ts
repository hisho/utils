const { build } = require('esbuild')
const { dependencies } = require('./package.json')

build({
  bundle: true,
  entryPoints: ['src/index.ts'],
  external: Object.keys(dependencies ?? {}),
  logLevel: 'info',
  minify: true,
  sourcemap: false,
  format: 'esm',
  outfile: './dist/index.js',
  target: ['ES6'],
})
