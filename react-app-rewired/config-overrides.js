const path = require('path');

module.exports = {
  webpack: function(config, env) {
    // 默认
    // config.output.sourceMapFilename: "[file].map", // string

    // 修改后
    config.output.sourceMapFilename = "sourcemaps/[file].map";
    return config;
  }
}
