const { override, fixBabelImports, addLessLoader } = require("customize-cra");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {}
  }),
  config => {
    if (config.mode === "development") {
      config.resolve.alias["react-dom"] = "@hot-loader/react-dom";
    }
    config = rewireReactHotLoader(config, config.mode);
    return config;
  }
);
