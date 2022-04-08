const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const parts = isProduction => {
  const miniCssExtract = path => {
    // where the compiled styles is saved to
    return new MiniCssExtractPlugin({
      filename: `${path}[name].[contenthash:8].css`,
    });
  };

  const styleLoaders = () => [
    {
      loader: isProduction
        ? // extracts the compiled css from js (overrides default behavior)
          MiniCssExtractPlugin.loader
        : // inject CSS into the DOM
          'style-loader',
    },
    // interprets import and url like import/require and will resolve them
    {
      loader: 'css-loader',
    },
    // enables autoprefixer and next-gen CSS polyfill features
    {
      loader: 'postcss-loader',
    },
  ];

  /**
   * Loads CSS files.
   *
   * `MiniCssExtractPlugin.loader` for `prod` builds
   *
   * `style-loader` for `dev` builds
   *
   * `css-loader`
   *
   * `postcss-loader`
   *
   * @param {array} include
   * @param {array} exclude
   */
  module.exports.loadCSS = ({ include, exclude } = {}) => ({
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: styleLoaders(),
        },
      ],
    },
  });

  /**
   * Loads Sass files.
   *
   * `MiniCssExtractPlugin.loader` for `prod` builds
   *
   * `style-loader` for `dev` builds
   *
   * `css-loader`
   *
   * `postcss-loader`
   *
   * `sass-loader`
   *
   * @param {array} include
   * @param {array} exclude
   */
  module.exports.loadSCSS = ({ include, exclude } = {}) => ({
    module: {
      rules: [
        {
          test: /\.scss$/,
          include,
          exclude,
          use: styleLoaders().concat([
            // loads a sass/scss file and compiles it to css
            {
              loader: 'sass-loader',
            },
          ]),
        },
      ],
    },
  });

  /**
   * Customize the output path for styles for `prod` builds.
   *
   * @param {string} path
   */
  module.exports.setStyleOutputPath = ({ path } = { path: '' }) => ({
    plugins: [isProduction ? miniCssExtract(path) : false].filter(Boolean),
  });

  /**
   * Load source maps. Useful for 3rd-party libraries.
   */
  module.exports.loadSourceMaps = () => ({
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: [
            {
              loader: 'source-map-loader',
            },
          ],
        },
      ],
    },
  });

  /**
   * Load `.js` files.
   *
   * @param {string} target
   *
   * set to `es2015` by default
   *
   * @param {array} include
   * @param {array} exclude
   */
  module.exports.loadJS = (
    { target, include, exclude } = { target: 'es2015' }
  ) => ({
    module: {
      rules: [
        {
          test: /\.js$/,
          include,
          exclude,
          loader: 'esbuild-loader',
          options: {
            // eslint-disable-next-line object-shorthand
            target: target,
          },
        },
      ],
    },
  });

  /**
   * Load `.jsx` files.
   *
   * @param {string} target
   *
   * set to `es2015` by default
   *
   * @param {array} include
   * @param {array} exclude
   */
  module.exports.loadJSX = (
    { target, include, exclude } = { target: 'es2015' }
  ) => ({
    module: {
      rules: [
        {
          test: /\.jsx$/,
          include,
          exclude,
          loader: 'esbuild-loader',
          options: {
            loader: 'jsx',
            // eslint-disable-next-line object-shorthand
            target: target,
          },
        },
      ],
    },
  });

  /**
   * Load `.ts` files with type checking on `dev` builds.
   *
   * @param {string} target
   *
   * set to `es2015` by default
   *
   * @param {array} include
   * @param {array} exclude
   */
  module.exports.loadTS = (
    { target, include, exclude } = { target: 'es2015' }
  ) => ({
    module: {
      rules: [
        {
          test: /\.ts$/,
          include,
          exclude,
          loader: 'esbuild-loader',
          options: {
            loader: 'ts',
            // eslint-disable-next-line object-shorthand
            target: target,
          },
        },
      ],
    },
  });

  /**
   * Load `.tsx` files with type checking on `dev` builds.
   *
   * @param {string} target
   *
   * set to `es2015` by default
   *
   * @param {array} include
   * @param {array} exclude
   */
  module.exports.loadTSX = (
    { target, include, exclude } = { target: 'es2015' }
  ) => ({
    module: {
      rules: [
        {
          test: /\.tsx$/,
          include,
          exclude,
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            // eslint-disable-next-line object-shorthand
            target: target,
          },
        },
      ],
    },
  });

  /**
   * Enable TypeScript checking for development builds.
   */
  module.exports.enableTypeChecking = () => ({
    plugins: [!isProduction ? new ForkTsCheckerWebpackPlugin() : false].filter(
      Boolean
    ),
  });

  /**
   * Customize the output path for scripts.
   *
   * @param {string} path
   */
  module.exports.setScriptOutputPath = ({ path } = { path: '' }) => ({
    output: {
      filename: isProduction
        ? `${path}[name].[contenthash:8].js`
        : `${path}[name].js`,
    },
  });

  /**
   * Load and customize the output path for images as individual files.
   *
   * `apng`
   * `avif`
   * `gif`
   * `jpg`
   * `jpeg`
   * `png`
   * `svg`
   * `webp`
   *
   * @param {string} path
   */
  module.exports.loadImagesAsFiles = ({ path } = { path: '' }) => ({
    module: {
      rules: [
        {
          test: /\.(apng|avif|gif|jpe?g|png|svg|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: isProduction
              ? `${path}[name].[contenthash:8][ext]`
              : `${path}[name][ext]`,
          },
        },
      ],
    },
  });

  /**
   * Load and customize the output path for images as individual files
   * or have inlined depending on the file size.
   *
   * `apng`
   * `avif`
   * `gif`
   * `jpg`
   * `jpeg`
   * `png`
   * `svg`
   * `webp`
   *
   * @param {string} path
   * @param {number} maxSize - 1024 * 8 (8kb)
   */
  module.exports.loadImagesAsFilesOrInline = (
    { path, maxSize } = { path: '', maxSize: 1024 * 8 }
  ) => ({
    module: {
      rules: [
        {
          test: /\.(apng|avif|gif|jpe?g|png|svg|webp)$/i,
          type: 'asset',
          generator: {
            filename: isProduction
              ? `${path}[name].[contenthash:8][ext]`
              : `${path}[name][ext]`,
          },
          parser: {
            dataUrlCondition: {
              // eslint-disable-next-line object-shorthand
              maxSize: maxSize,
            },
          },
        },
      ],
    },
  });

  /**
   * Load and customize the output path for fonts as
   * individual files. Does **not** cache bust files.
   *
   * `woff`
   * `woff2`
   *
   * @param {string} path
   */
  module.exports.loadFonts = ({ path } = { path: '' }) => ({
    module: {
      rules: [
        {
          test: /\.(woff2?)$/,
          type: 'asset/resource',
          generator: {
            filename: `${path}[name][ext]`,
          },
        },
      ],
    },
  });
};

module.exports = parts;
