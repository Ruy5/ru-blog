# 使用 lerna 进行vue组件库开发

## lerna 安装

```bash
npm install -g lerna
```

## 初始化 lerna 项目

```bash
lerna init
```

## lerna.json 文件配置

```json
{
  "$schema": "node_modules/lerna/schemas/lerna-schema.json",
  "version": "0.0.0",
  "packages": [
    "packages/*"
  ],
  "npmClient": "npm"
}
```

## 修改 package.json 中 name 的配置
例如：
```json
{
  "name": "resume-template-vue-plugin",
  "private": false,
  "type": "module",
  "scripts": {
    "dev": "npx vite .\\play",
    "build": "vite build"
  },
  "files": [
    "dist/*"
  ],
}

```

## 创建组件

```bash
lerna create button
```

设置 组件的 package name:

```bash
package name: (button): [组织]-[包名]
例如：
package name: (button) ru-button
```
# 修改项目结构

将 packages/button/lib/button.js 修改为 button.vue

文件内容如下：

```html
<template>
  <button>按钮</button>
</template>

<script setup>
defineOptions({
  name: "RuButton"
})
</script>
```

将 packages/button/package.json 中配置

```json
{
     "main": "index.js",
     "type": "module",
}
```

## 创建组件入口文件
创建 packages/button/index.js
```js
import RuButton from "./lib/button.vue";

export default  {
    install: (app) => {
        app.component(RuButton.name, RuButton);
    }
}
```
## 加入相关依赖
```bash
npm install vue vite @vitejs/plugin-vue-jsx @vitejs/plugin-vue
```

## 添加构建配置
创建 vite.config.js 文件

```js
// filename: vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [vue(), vueJsx({})],
 build: {
   rollupOptions: {
     // 请确保外部化那些你的库中不需要的依赖
     external: ['vue'],
     output: {
       // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
       globals: {
         vue: 'Vue',
       },
     },
   },
   lib: {
     entry: './packages/ru-captcha-v3/index.js',
     name: 'ru-captcha-v3',
   },
 },
})
```

## 创建测试目录

在根目录中创建 play 文件夹
创建 paly/vite.config.js文件
```js
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()]
})
```

创建 play/index.html 文件
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app"></div>
    <script type="module" src="/main.js"></script>
</body>
</html>
```
创建 play/main.js 文件
```js
import { createApp } from "vue";
import App from "./App.vue";
import RuButton from "ru-resume-test-button/index.js"

const app = createApp(App)
app.use(RuButton)
app.mount("#app")
```
创建 play/App.vue 文件
```html
<template>
    <RuButton ></RuButton>
</template>

<script setup>
</script>
```