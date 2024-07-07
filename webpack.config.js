const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // entry: './src/index.js',
  mode:'development',
  entry: {
    index:'./src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'아웃풋 관리'
    })
  ],
  output: {
    // filename: 'main.js',
    filename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true
  },
  // 서버 옵션을 추가합니다. static 은 번들링된 정적파일의 경로를 설정합니다.
  devServer: {
    static: './dist',
    hot: true,
  },
  // index.html 을 기준으로 여러 모듈 파일이 종속되어 있다면 추가해주어야 합니다.
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
     {
       test: /\.(csv|tsv)$/i,
       use: ['csv-loader'],
     },
     {
       test: /\.xml$/i,
       use: ['xml-loader'],
     },
    ],
  },
};