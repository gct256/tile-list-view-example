const path = require('path');

const distPath = path.resolve(__dirname, 'dist');

const baseConfig = {
  mode: 'development', //'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

module.exports = {
  ...baseConfig,
  entry: './src/script.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js',
  },
};
