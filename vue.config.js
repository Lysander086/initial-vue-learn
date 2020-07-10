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
        'bootstrap/dist/css/bootstrap.min.css',
        'blueimp-file-upload/css/jquery.fileupload.css',
        'noty/lib/noty.css',
        'noty/lib/themes/relax.css'
      ]
    }
  }
}
