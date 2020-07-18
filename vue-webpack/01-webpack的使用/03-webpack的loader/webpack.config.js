const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    // 动态获取路径 path要求绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   // css-loader只负责将css文件进行加载
      //   // style-loader负责将样式添加到dom中
      //   // 使用多个loader时，是从右向左
      //   use: ['style-loader', 'css-loader']
      // },
      // {
      //   // $以什么为结尾的
      //   test: /\.less$/,
      //   use:[{
      //     loader:'style-loader'
      //   },{
      //     loader:'css-loader'
      //   },{
      //     loader:'less-loader'
      //   }]
      // }
      //  也可以使用下面的简写方法
      {
        test: /\.(css|less)$/,
        // css-loader只负责将css文件进行加载
        // style-loader负责将样式添加到dom中
        // 使用多个loader时，是从右向左
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            // 当加载的图片小于limit时，会使用base64字符串形式
            limit: 819,
            // name原图片名 hash8 8位的hash ext文件的结尾名
            name: 'img/[name].[hash:8].[ext]'
          },
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },

}
