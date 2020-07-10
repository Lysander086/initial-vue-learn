module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/good-analysis-total-components'))
      .set('_c', resolve('src/components'))
  },
  devServer: {
    port: 3000,
  },
  configureWebpack: {
    entry: {
      app: './src/main.js',
      style: [
      ]
    }
  }
}
