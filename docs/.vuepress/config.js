const head = require("./config/head.js");
const plugins = require("./config/plugins.js");
const themeConfig = require("./config/themeConfig.js");

module.exports = {
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    theme: "vdoing", // 使用npm包主题
    dest: "public", //build生成的文件夹
    // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

    title: "流云天霜晚",
    description: "流云天霜晚的博客",
    // base: '/', // 格式：'/<仓库名>/'， 默认'/'
    markdown: {
        lineNumbers: true, // 代码行号
    },

    head,
    plugins,
    themeConfig,
};
