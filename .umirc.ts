import { defineConfig } from "@umijs/max";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: "dext7",
  },

  routes: [
    {
      path: "/",
      redirect: "/home",
    },

    {
      name: "首页",
      path: "/home",
      component: "./Home",
    },

    {
      name: "权限演示",
      path: "/access",
      component: "./Access",
    },

    {
      name: " CRUD 示例",
      path: "/table",
      component: "./Table",
    },
  ],

  npmClient: "pnpm",
  tailwindcss: {},
  dva: {},
  proxy: {
    '/api': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    },
  },
  plugins: [
    require.resolve('@umijs/plugins/dist/unocss')
  ],
  unocss: {
    watch: ['pages/**/*.tsx'] // 添加其他包含 unocss 的 classname 的文件目录
  },
});
