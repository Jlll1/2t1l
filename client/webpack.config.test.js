const path = require("path");

module.exports = {
  "mode": "none",
  "entry": "./test/TestRunner.ts",
  "output": {
    "path": __dirname + '/dist_test',
    "filename": "main.js"
  },
  "devServer": {
    "static": "./dist_test",
  },
  "module": {
    "rules": [
      {
        "test": /\.ts?$/,
        "use": 'ts-loader',
        "exclude": /node_modules/,
      }
    ]
  },
  "resolve": {
    "extensions": ['.ts', '.js']
  }
}
