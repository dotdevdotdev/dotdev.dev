const webpack = require("webpack");

module.exports = {
  // ... other config options ...
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
    },
  },
  plugins: [
    // ... other plugins ...
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
