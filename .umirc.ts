import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: { type: 'none' }, // 设置 node_modules 目录下依赖文件的编译方式。
  dynamicImport: { loading: '@/loading' }, // 按需加载
  fastRefresh: {}, // 快速刷新
  antd: { mobile: false }, // 避免 antd-mobile v5 编译报错
});
