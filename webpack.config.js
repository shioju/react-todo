module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  externals: {
    "react": "React",
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
    ]
  }
};
