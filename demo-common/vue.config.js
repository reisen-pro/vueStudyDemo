module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'store': '@/store',
        'views': '@/views',
      }
    }
  },
  devServer: {
    disableHostCheck: true
  },
  publicPath: "./"
}
