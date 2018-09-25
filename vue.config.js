const apiMocker = require('webpack-api-mocker')
const path = require('path')

module.exports = {
  devServer: {
    before (app) {
      apiMocker(app, path.resolve('./api/mock.js'))
    }
  }
}
