/* eslint-disable */

const { merge } = require('webpack-merge');
const { baseParts } = require('@waldronmatt/webpack-config');

const commonConfig = () => {
  return merge([
    {
      entry: {
        main: './src/index.js',
      },
    },
    baseParts.loadJS(),
    baseParts.setScriptOutputPath(),
    baseParts.loadCSS(),
    baseParts.setStyleOutputPath(),
  ]);
};

module.exports = commonConfig;
