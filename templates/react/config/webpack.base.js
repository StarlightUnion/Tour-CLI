const path = require("path");
const merge = require("webpack-merge");

module.exports = merge({}, {
  entry: {
    main: "./src/main.jsx",
    react: ["react", "react-dom", "react-router-dom", "redux", "react-redux"],
    echarts: ["echarts"],
  },

  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all",
      // minChunks: 10,
      // minSize: 0,
      maxInitialRequests: 4,
      maxAsyncRequests: 6,
      cacheGroups: {
        react: {
          test: "react",
          name: "react_bundle",
          priority: 98,
          reuseExistingChunk: true
        },
        echarts: {
          test: "echarts",
          name: "echarts_bundle",
          priority: 80,
          reuseExistingChunk: true
        },
        vendor: {
          test: path.resolve(__dirname, "../node_modules"),
          name: "vendor",
          priority: 0,
          reuseExistingChunk: true
        }
      }
    }
  },

  resolve: {
    extensions: [".wasm", ".ts", ".js", ".tsx", ".jsx", ".json"],
    alias: {
      api: path.resolve(__dirname, "../src/api.ts"),
      common: path.resolve(__dirname, "../src/common/index.jsx")
    }
  }
});