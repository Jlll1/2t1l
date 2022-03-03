const path = require("path");

module.exports = {
  "mode": "none",
  "entry": "./src/App.js",
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
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [ "@babel/preset-env" ]
          }
        }
      }
    ]
  }
}
