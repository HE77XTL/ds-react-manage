const {override, fixBabelImports, addLessLoader, addWebpackAlias} = require("customize-cra");
const path = require("path");

// ant 官方用的是 craco

module.exports = override(
    // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
    }),
    // 使用less-loader对源码重的less的变量进行重新制定
    // 如果报错请检查less 以及less-loader 版本； 项目使用版本为： less@4.0.0 less-load@7.2.1
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
                '@primary-color': '#3963bc',

                '@menu-dark-color': '#c4c9d2',
                '@menu-dark-selected-item-icon-color': '#3963bc',
                '@menu-dark-selected-item-text-color': '#3963bc',

                '@menu-dark-bg': '#192a5e',
                '@menu-dark-inline-submenu-bg': '#122150',
                '@menu-dark-item-active-bg': '#122150',

                '@menu-dark-highlight-color': '#3963bc',
                '@menu-dark-arrow-color': '#3963bc',

                '@menu-collapsed-width': '60px',

                //@menu-collapsed-width
            }
        },
    }),
    //增加路径别名的处理
    addWebpackAlias({
        '@': path.resolve('./src')
    })
);
