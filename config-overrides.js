const {override, fixBabelImports, addLessLoader, addWebpackAlias} = require("customize-cra");
const path = require("path");

module.exports = override(
    // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: 'css', //自动打包相关的样式 默认为 style:'css'
    }),
    // 使用less-loader对源码重的less的变量进行重新制定
    // 如果报错请检查less 以及less-loader 版本； 项目使用版本为： less@4.0.0 less-load@7.2.1
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                '@primary-color': '#ffaa22',
                '@link-color': '#ffaa22'
            }
        },
    }),
    //增加路径别名的处理
    addWebpackAlias({
        '@': path.resolve('./src')
    })
);
