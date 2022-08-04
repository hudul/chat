const { override, addWebpackModuleRule, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')
const extractTextPlugin = new ExtractTextPlugin('src/style/style.css')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}


module.exports = override(
  addWebpackModuleRule({
    test: /\.(woff|svg|eot|ttf)\??.*$/,
    use: [
      'file-loader'
    ]
  }, {
    test: /\.scss/,
    use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'sass-loader'
      },
      {
        loader: 'sass-resources-loader',
        option: {
          resources: [
            resolve('./assets/styles/_variables.scss', './assets/styles/_font.scss', './assets/styles/_color.scss', './assets/styles/_mixin.scss', './assets/styles/_common.scss', )
          ]
        }
      }
    ]
  }),
  addWebpackAlias({
    '@': resolve('src')
  }),

  // addWebpackPlugin({
  //   ExtractTextPlugin('src/style/style.css')
  // })
)