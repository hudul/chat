const { override, addWebpackModuleRule, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = {
  webpack: override(
    addWebpackModuleRule({
      test: /\.(woff|svg|eot|ttf)\??.*$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.scss/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }, {
        loader: 'sass-resources-loader',
        option: {
          resources: [
            resolve('')
          ]
        }
      }]
    }),
    addWebpackAlias({
      '@': resolve('src')
    }),
    addWebpackPlugin([
      // new ExtractTextPlugin('src/style/style.css')//字体图标路径
    ])
  )
};