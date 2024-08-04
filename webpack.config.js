const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.ts', // 入口文件
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
    clean: true, // 在每次构建时清理输出目录
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'], // 解析这些扩展名的文件
    alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader', // 处理 .vue 文件
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader', // 处理 TypeScript 文件
        options: {
          appendTsSuffixTo: [/\.vue$/], // 处理 .vue 文件中的 TypeScript
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // 处理 CSS 文件
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'], // 处理 SCSS 文件
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/, // 处理图片文件
        loader: 'file-loader', // 使用 file-loader
        options: {
          esModule: false,
          name: '[path][name].[ext]', // 保持原有路径和名称
          outputPath: 'images/', // 输出到 dist/images 目录
        },
      },
      // 其他加载器...
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: 'dist' }
      ],
    }),
    // 其他插件...
  ],
  devtool: 'source-map', // 开发模式下的源映射
  devServer: {
    historyApiFallback: true, // 这行代码确保在刷新页面时路由正确
    static: {
      directory: path.join(__dirname, 'dist'), // 修改为 static 属性
    },
    compress: true, // 启用 gzip 压缩
    port: 8087, // 端口号
  },
};
