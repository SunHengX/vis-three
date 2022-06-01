export default {
  title: "VIS-THREE",
  description: "more convenient development for three.js",
  dest: "./dist",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "开始", link: "/start/start" },
      { text: "API", link: "/api/engine" },
      { text: "版本", link: "/version/version0-1-13" },
      {
        text: "github",
        link: "https://github.com/Shiotsukikaedesari/vis-three",
      },
    ],
    sidebar: {
      "/start/": [
        { text: "开始", link: "/start/start" },
        { text: "简介", link: "/start/intro" },
      ],
      "/api/": [
        { text: "引擎", link: "/api/engine" },
        { text: "引擎插件", link: "/api/plugins" },
        { text: "支持模块", link: "/api/support" },
        { text: "事件库", link: "/api/eventLibrary" },
        { text: "脚本动画库", link: "/api/aniScriptLibrary" },
        { text: "shader库", link: "/api/shaderLibrary" },
        { text: "便利工具", link: "/api/convenient" },
      ],
      "/version/": [
        { text: "version0.0.3", link: "/version/version0-0-3" },
        { text: "version0.0.4", link: "/version/version0-0-4" },
        { text: "version0.0.5", link: "/version/version0-0-5" },
        { text: "version0.0.6", link: "/version/version0-0-6" },
        { text: "version0.0.7", link: "/version/version0-0-7" },
        { text: "version0.0.8", link: "/version/version0-0-8" },
        { text: "version0.0.9", link: "/version/version0-0-9" },
        { text: "version0.0.10", link: "/version/version0-0-10" },
        { text: "version0.0.11", link: "/version/version0-0-11" },
        { text: "version0.0.12", link: "/version/version0-0-12" },
        { text: "version0.0.13", link: "/version/version0-0-13" },
        { text: "version0.1.0", link: "/version/version0-1-0" },
        { text: "version0.1.13", link: "/version/version0-1-13" },
      ],
    },
  },
};