const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: './src/tab-switcher.ts',
  output: {
    filename: 'tab-switcher-umd.min.js',
    path: outputPath,
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
};
