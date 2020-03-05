// configure webpack
const path = require("path");

// export the config
module.exports = {
  mode: "production",
  entry: "./src/stackoverflow/index.js",

  output: {
    path: path.resolve(__dirname, "lib/js"),
    filename: "bundle.js"
  }
};
