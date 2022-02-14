
## of-react-app-rewired

1. 使用[Create React App](https://create-react-app.dev/)新建项目:
```shell
npx create-react-app of-react-app-rewired
cd of-react-app-rewired
yarn
```

2. 引入[react-app-rewired](https://github.com/timarney/react-app-rewired)
```shell
yarn add -D react-app-rewired
```

3. 建立配置文件`config-overrides.js`(用于覆盖CRA配置)
```json
/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return config;
}
```

4. 修改脚本
```json
/* package.json */
  "scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
    "eject": "react-scripts eject"
}
```

5. 修改配置
可以修改的配置有很多,这里只改下`webpack`配置做个简单的测试

`sourcemap`文件的配置默认为`[file].map`,修改为`sourcemaps/[file].map`
```json
/* config-overrides.js */
module.exports = {
  webpack: function(config, env) {
    // 默认
    // config.output.sourceMapFilename: "[file].map", // string

    // 修改后
    config.output.sourceMapFilename = "sourcemaps/[file].map";
    return config;
  }
}
```

`yarn build`之后,生成文件存放于`build`目录,此时所有的`sourcemap`文件都集中在`build/sourcemap`文件夹,说明配置覆盖成功了
