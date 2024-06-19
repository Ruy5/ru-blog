# vite 组件局部导出

## 编写组件的 install 文件

```js
// index.js 文件
import ResumeTemplateA from "./lib/ResumeTemplateA.vue";

export default  {
    install: (app) => {
        app.component(ResumeTemplateA.name, ResumeTemplateA);
    }
}
```

## 编写打包脚本

```js
// build.js 文件
import { build } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const components = ["", "A", "B"];

const librarys = components.map((name) => {
  return {
    entry: `./packages/resume-template/index${name}.js`,
    name: `ru-resume-template${name}`,
    fileName: (format) => {
        return `ru-resume-template${name}.${format}.js`
    } 
  };
});

librarys.forEach(async lib => {
    await build({
        plugins: [vue(), vueJsx({})],
        configFile: false,
        sourcemap: true,
        build: {
          lib,
          assetsDir: "",
          emptyOutDir: false,
          rollupOptions: {},
        },
    });
})

```

## package.json中添加scripts

```json
{
  "scripts": {
    "build:slice": "node ./build.js"
  }
}

```

## 执行打包
```
npm run build:slice
或 直接
node ./build.js
```