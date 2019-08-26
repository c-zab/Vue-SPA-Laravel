const mix = require('laravel-mix')
const path = require('path')

mix.js('resources/js/app.js', 'public/dist/js')
  .sass('resources/sass/app.scss', 'public/dist/css')
  .browserSync('http://127.0.0.1:8000/') // Carlos [for development]
  .sourceMaps()

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~': path.join(__dirname, './resources/js')
    }
  },
  output: {
    chunkFilename: 'dist/js/[chunkhash].js'
  }
})
