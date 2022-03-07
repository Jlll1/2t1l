const path = require("path");

module.exports = {
  "mode": "none",
  "entry": "./src/index.ts",
  "output": {
    "path": __dirname + '/dist',
    "filename": "main.js"
  },
  "devServer": {
    "static": "./dist",
  },
  "module": {
    "rules": [
      {
        "test": /\.css$/,
        "use": [ "style-loader", "css-loader" ]
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}
