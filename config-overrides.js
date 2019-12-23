/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
const {
  override,
  fixBabelImports,
  addLessLoader,
  adjustStyleLoaders,
  addWebpackAlias,
} = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const slash = require('slash');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {},
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  adjustStyleLoaders(({ use: [, css] }) => {
    css.options.modules = {
      getLocalIdent: (context, _, localName) => {
        if (
          context.resourcePath.includes('node_modules') ||
          context.resourcePath.includes('global.less')
        ) {
          return localName;
        }
        const match = context.resourcePath.match(/src(.*)/);
        if (match && match[1]) {
          const relativePath = match[1].replace('.less', '');
          const arr = slash(relativePath)
            .split('/')
            .map(a => a.replace(/([A-Z])/g, '-$1'))
            .map(a => a.toLowerCase());
          return `xkool${arr.join('-')}-${localName}`.replace(/--/g, '-');
        }
        return localName;
      },
    };
    // css-loader old syntax，unused
    delete css.options.localIdentName;
  }),
  // enable absolute import path for styles
  config => {
    config.resolve.modules = [path.resolve(__dirname, 'src'), ...config.resolve.modules];
    return config;
  },
  // enable hot reload
  config => {
    if (config.mode === 'development') {
      config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
    }
    config = rewireReactHotLoader(config, config.mode);
    return config;
  },
);
