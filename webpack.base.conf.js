var path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {

  output: {
    path: './dist',
    filename: '[name].js',

  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
          include:[
              path.resolve(__dirname, 'src'),
              path.resolve(__dirname, 'test')
          ],
          exclude: [
              path.resolve(__dirname, 'dist'),
              path.resolve(__dirname, 'node_modules')
          ],
          loader: 'babel-loader',
          options: {
              presets:['es2015'],
              plugins: [
                /*动态加载你需要ES6腻子文件*/
                  ["transform-runtime", {
                      "helpers": false, // defaults to true
                      "polyfill": false, // defaults to true
                      "regenerator": true, // defaults to true
                      "moduleName": "babel-runtime" // defaults to "babel-runtime"
                  }
                  ]
              ]
          }
      }
    ]
  }
}
